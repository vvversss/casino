export function getRequiredEnv(name: string): string {
  const value = Deno.env.get(name);
  if (!value) throw new Error(`Missing required environment variable: ${name}`);
  return value;
}

export function getPublishableKey(): string {
  const legacyAnonKey = Deno.env.get("SUPABASE_ANON_KEY");
  if (legacyAnonKey) return legacyAnonKey;

  const keysJson = Deno.env.get("SUPABASE_PUBLISHABLE_KEYS");
  if (keysJson) {
    const keys = JSON.parse(keysJson);
    if (keys.default) return keys.default;
  }

  throw new Error("Missing SUPABASE_ANON_KEY or SUPABASE_PUBLISHABLE_KEYS.default");
}

export function getServiceRoleKey(): string {
  const legacyServiceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
  if (legacyServiceRoleKey) return legacyServiceRoleKey;

  const keysJson = Deno.env.get("SUPABASE_SECRET_KEYS");
  if (keysJson) {
    const keys = JSON.parse(keysJson);
    if (keys.default) return keys.default;
  }

  throw new Error("Missing SUPABASE_SERVICE_ROLE_KEY or SUPABASE_SECRET_KEYS.default");
}
