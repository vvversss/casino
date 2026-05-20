create schema if not exists private;

create table if not exists public.casino_profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text,
  display_name text not null default 'Player',
  avatar_url text not null default 'avatar-neon',
  is_admin boolean not null default false,
  balance numeric(14, 2) not null default 100000.00 check (balance >= 0),
  games_played integer not null default 0 check (games_played >= 0),
  total_won numeric(14, 2) not null default 0 check (total_won >= 0),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.casino_profiles
  add column if not exists avatar_url text not null default 'avatar-neon',
  add column if not exists is_admin boolean not null default false;

alter table public.casino_profiles enable row level security;

create or replace function private.set_updated_at()
returns trigger
language plpgsql
set search_path = ''
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists casino_profiles_set_updated_at on public.casino_profiles;
create trigger casino_profiles_set_updated_at
before update on public.casino_profiles
for each row execute function private.set_updated_at();

create or replace function private.handle_new_casino_user()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
  insert into public.casino_profiles (id, email, display_name)
  values (
    new.id,
    new.email,
    coalesce(nullif(new.raw_user_meta_data ->> 'display_name', ''), split_part(new.email, '@', 1), 'Player')
  )
  on conflict (id) do nothing;

  return new;
end;
$$;

drop trigger if exists on_auth_user_created_casino_profile on auth.users;
create trigger on_auth_user_created_casino_profile
after insert on auth.users
for each row execute function private.handle_new_casino_user();

drop policy if exists "Users can read own casino profile" on public.casino_profiles;
create policy "Users can read own casino profile"
on public.casino_profiles
for select
to authenticated
using ((select auth.uid()) is not null and (select auth.uid()) = id);

drop policy if exists "Users can insert own casino profile" on public.casino_profiles;
create policy "Users can insert own casino profile"
on public.casino_profiles
for insert
to authenticated
with check ((select auth.uid()) is not null and (select auth.uid()) = id);

drop policy if exists "Users can update own casino profile" on public.casino_profiles;
create policy "Users can update own casino profile"
on public.casino_profiles
for update
to authenticated
using ((select auth.uid()) is not null and (select auth.uid()) = id)
with check ((select auth.uid()) is not null and (select auth.uid()) = id);

grant usage on schema public to anon, authenticated;
revoke update on public.casino_profiles from authenticated;
grant select, insert on public.casino_profiles to authenticated;
grant update (display_name, avatar_url, balance, games_played, total_won, updated_at)
on public.casino_profiles to authenticated;

create table if not exists public.slot_engine_settings (
  id text primary key default 'global',
  target_rtp numeric(5, 2) not null default 94.00 check (target_rtp between 86 and 98),
  volatility text not null default 'medium' check (volatility in ('low', 'medium', 'high')),
  max_bet numeric(20, 2) not null default 1000000000 check (max_bet >= 1),
  max_win numeric(20, 2) not null default 5000000 check (max_win >= 1),
  bonus_frequency integer not null default 5 check (bonus_frequency between 1 and 25),
  free_spins_max_win numeric(20, 2) not null default 25000000 check (free_spins_max_win >= 1),
  updated_by uuid references auth.users(id),
  updated_at timestamptz not null default now()
);

alter table public.slot_engine_settings
  add column if not exists max_bet numeric(20, 2) not null default 1000000000 check (max_bet >= 1),
  add column if not exists max_win numeric(20, 2) not null default 5000000 check (max_win >= 1),
  add column if not exists bonus_frequency integer not null default 5 check (bonus_frequency between 1 and 25),
  add column if not exists free_spins_max_win numeric(20, 2) not null default 25000000 check (free_spins_max_win >= 1);

alter table public.slot_engine_settings enable row level security;

drop trigger if exists slot_engine_settings_set_updated_at on public.slot_engine_settings;
create trigger slot_engine_settings_set_updated_at
before update on public.slot_engine_settings
for each row execute function private.set_updated_at();

drop policy if exists "Users can read slot settings" on public.slot_engine_settings;
create policy "Users can read slot settings"
on public.slot_engine_settings
for select
to authenticated
using (true);

drop policy if exists "Admins can manage slot settings" on public.slot_engine_settings;
create policy "Admins can manage slot settings"
on public.slot_engine_settings
for all
to authenticated
using (
  exists (
    select 1 from public.casino_profiles p
    where p.id = (select auth.uid()) and p.is_admin = true
  )
)
with check (
  exists (
    select 1 from public.casino_profiles p
    where p.id = (select auth.uid()) and p.is_admin = true
  )
);

insert into public.slot_engine_settings (id)
values ('global')
on conflict (id) do nothing;

grant select on public.slot_engine_settings to authenticated;
grant insert, update, delete on public.slot_engine_settings to authenticated;

create table if not exists public.coin_purchases (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  provider text not null check (provider in ('stripe', 'crypto', 'manual')),
  package_id text not null,
  coins numeric(20, 2) not null check (coins > 0),
  amount_usd numeric(12, 2) not null check (amount_usd >= 0),
  status text not null default 'pending' check (status in ('pending', 'paid', 'failed', 'refunded')),
  provider_payment_id text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.coin_purchases enable row level security;

drop trigger if exists coin_purchases_set_updated_at on public.coin_purchases;
create trigger coin_purchases_set_updated_at
before update on public.coin_purchases
for each row execute function private.set_updated_at();

drop policy if exists "Users can read own coin purchases" on public.coin_purchases;
create policy "Users can read own coin purchases"
on public.coin_purchases
for select
to authenticated
using ((select auth.uid()) = user_id);

drop policy if exists "Users can create pending coin purchases" on public.coin_purchases;
create policy "Users can create pending coin purchases"
on public.coin_purchases
for insert
to authenticated
with check ((select auth.uid()) = user_id and status = 'pending');

drop policy if exists "Admins can manage all coin purchases" on public.coin_purchases;
create policy "Admins can manage all coin purchases"
on public.coin_purchases
for all
to authenticated
using (
  exists (
    select 1 from public.casino_profiles p
    where p.id = (select auth.uid()) and p.is_admin = true
  )
)
with check (
  exists (
    select 1 from public.casino_profiles p
    where p.id = (select auth.uid()) and p.is_admin = true
  )
);

grant select, insert on public.coin_purchases to authenticated;
grant update (status, provider_payment_id, updated_at) on public.coin_purchases to authenticated;

-- Coin Balance should be credited only by trusted backend/admin logic after
-- verifying payment provider webhooks, for example in a Supabase Edge Function.

create table if not exists public.stripe_coin_purchases (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  package_id text not null,
  coins numeric(20, 2) not null check (coins > 0),
  amount_usd numeric(12, 2) not null check (amount_usd >= 0),
  status text not null default 'pending' check (status in ('pending', 'paid', 'failed', 'refunded')),
  stripe_session_id text unique,
  stripe_payment_intent text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.stripe_coin_purchases enable row level security;

drop trigger if exists stripe_coin_purchases_set_updated_at on public.stripe_coin_purchases;
create trigger stripe_coin_purchases_set_updated_at
before update on public.stripe_coin_purchases
for each row execute function private.set_updated_at();

drop policy if exists "Users can read own stripe coin purchases" on public.stripe_coin_purchases;
create policy "Users can read own stripe coin purchases"
on public.stripe_coin_purchases
for select
to authenticated
using ((select auth.uid()) = user_id);

grant select on public.stripe_coin_purchases to authenticated;

-- Service-role-only RPC used by the Stripe webhook. It is intentionally not
-- executable by anon/authenticated clients, and it credits each purchase once.
create or replace function public.credit_stripe_coin_purchase(
  p_purchase_id uuid,
  p_stripe_session_id text,
  p_stripe_payment_intent text
)
returns table (
  purchase_id uuid,
  credited_user_id uuid,
  credited_coins numeric
)
language plpgsql
set search_path = ''
as $$
declare
  v_purchase public.stripe_coin_purchases%rowtype;
begin
  update public.stripe_coin_purchases
  set
    status = 'paid',
    stripe_session_id = coalesce(stripe_session_id, p_stripe_session_id),
    stripe_payment_intent = coalesce(stripe_payment_intent, p_stripe_payment_intent),
    updated_at = now()
  where id = p_purchase_id
    and status = 'pending'
  returning * into v_purchase;

  if not found then
    return;
  end if;

  update public.casino_profiles
  set
    balance = balance + v_purchase.coins,
    updated_at = now()
  where id = v_purchase.user_id;

  purchase_id := v_purchase.id;
  credited_user_id := v_purchase.user_id;
  credited_coins := v_purchase.coins;
  return next;
end;
$$;

revoke all on function public.credit_stripe_coin_purchase(uuid, text, text) from public;
revoke all on function public.credit_stripe_coin_purchase(uuid, text, text) from anon;
revoke all on function public.credit_stripe_coin_purchase(uuid, text, text) from authenticated;
grant execute on function public.credit_stripe_coin_purchase(uuid, text, text) to service_role;
