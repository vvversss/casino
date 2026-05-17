const games = [
  {
    id: "slots",
    title: "Slots",
    description: "Три барабана, быстрые множители и редкий x50 за три семерки.",
    provider: "velora",
    online: 2568,
    symbol: "7",
    color: "#f7c94b",
    border: "#d89517",
    action: "Крутить",
  },
  {
    id: "roulette",
    title: "Roulette",
    description: "Выбери цвет, запусти колесо и проверь, куда лег шар.",
    provider: "arc",
    online: 1253,
    symbol: "◎",
    color: "#ff3f4d",
    border: "#d53735",
    action: "Крутить",
  },
  {
    id: "dice",
    title: "Dice",
    description: "Угадай выше или ниже цели. Чистая математика и быстрый результат.",
    provider: "velora",
    online: 1847,
    symbol: "◆",
    color: "#18a8ff",
    border: "#2476c9",
    action: "Бросить",
  },
  {
    id: "crash",
    title: "Crash",
    description: "Множитель растет, но успей забрать до краша.",
    provider: "neon",
    online: 2312,
    symbol: "↗",
    color: "#ff7047",
    border: "#d45b22",
    action: "Запустить",
  },
  {
    id: "blackjack",
    title: "Blackjack",
    description: "Одна быстрая раздача против дилера. 21 забирает банк.",
    provider: "arc",
    online: 1105,
    symbol: "A",
    color: "#46ff81",
    border: "#159344",
    action: "Раздать",
  },
  {
    id: "plinko",
    title: "Plinko",
    description: "Брось шар, поймай множитель и забери выигрыш.",
    provider: "velora",
    online: 1026,
    symbol: "●",
    color: "#18f5e7",
    border: "#5d36d7",
    action: "Бросить шар",
  },
  {
    id: "mines",
    title: "Mines",
    description: "Открывай клетки без мин. Чем дольше играешь, тем выше коэффициент.",
    provider: "neon",
    online: 1532,
    symbol: "✦",
    color: "#1aa2d6",
    border: "#1989a6",
    action: "Начать",
  },
  {
    id: "wheel",
    title: "Wheel",
    description: "Колесо удачи с сегментами от x0.2 до x10.",
    provider: "arc",
    online: 1209,
    symbol: "◌",
    color: "#ffb92e",
    border: "#c88812",
    action: "Крутить",
  },
];

const recentSeed = [
  ["LuckyAce", "Roulette", 6000, "◎"],
  ["BetMaster", "Crash", 3200, "↗"],
  ["HighRoller", "Blackjack", 2500, "A"],
  ["CoinFlip", "Dice", 1920, "◆"],
  ["PlinkoKing", "Plinko", 4800, "●"],
  ["MineHunter", "Mines", 7250, "✦"],
  ["WheelFan", "Wheel", 5100, "◌"],
];

const providerSlots = [
  {
    title: "Sweet Bonanza 2500",
    studio: "Pragmatic Play",
    theme: "Candy volatility",
    symbol: "2500x",
    accent: "#ff5aa7",
    glow: "#ffcc3f",
    url: "https://www.pragmaticplay.com/en/games/sweet-bonanza-2500/?gamelang=ru&cur=ALL",
  },
  {
    title: "Big Bass Trophy Catch",
    studio: "Pragmatic Play",
    theme: "Fishing bonus hunt",
    symbol: "BASS",
    accent: "#18a8ff",
    glow: "#83ff62",
    url: "https://www.pragmaticplay.com/en/games/big-bass-trophy-catch/?gamelang=en&cur=ALL",
  },
  {
    title: "Zeus vs Hades",
    studio: "Pragmatic Play",
    theme: "Gods of War",
    symbol: "Z/H",
    accent: "#a977ff",
    glow: "#ff7047",
    url: "https://www.pragmaticplay.com/en/games/zeus-vs-hades-gods-of-war/?gamelang=en&cur=ALL",
  },
  {
    title: "Gates of Olympus Super Scatter",
    studio: "Pragmatic Play",
    theme: "Super Scatter feature",
    symbol: "SC",
    accent: "#f7c94b",
    glow: "#18f5e7",
    url: "https://www.pragmaticplay.com/en/games/gates-of-olympus-super-scatter/?gamelang=en&cur=ALL",
  },
  {
    title: "Gates of Olympus 1000",
    studio: "Pragmatic Play",
    theme: "Olympus multiplier",
    symbol: "1000x",
    accent: "#72f060",
    glow: "#f7c94b",
    url: "https://www.pragmaticplay.com/en/games/gates-of-olympus-1000/?gamelang=en&cur=ALL",
  },
];

const state = {
  balance: Number(localStorage.getItem("velora-balance")) || 100000,
  bet: Number(localStorage.getItem("velora-bet")) || 1000,
  user: null,
  profile: null,
  authMode: "signin",
  authReady: false,
  walletMode: localStorage.getItem("velora-wallet-mode") || "demo",
  settings: JSON.parse(localStorage.getItem("velora-settings") || "{}"),
  activeGame: "plinko",
  filter: "all",
  provider: "all",
  sort: "popular",
  query: "",
  lastMultiplier: 0,
  rouletteChoice: "red",
  diceMode: "over",
  diceTarget: 50,
  risk: "medium",
  rows: 16,
  crash: {
    running: false,
    cashed: false,
    multiplier: 1,
    bustAt: 0,
    stake: 0,
    timer: null,
  },
  mines: {
    active: false,
    stake: 0,
    mineIndexes: [],
    opened: [],
    locked: false,
  },
  recentWins: recentSeed,
};

const els = {
  balance: document.querySelector("#balance"),
  betInput: document.querySelector("#betInput"),
  decreaseBet: document.querySelector("#decreaseBet"),
  increaseBet: document.querySelector("#increaseBet"),
  quickBets: document.querySelectorAll(".quick-bets button"),
  topUpBtn: document.querySelector("#topUpBtn"),
  searchInput: document.querySelector("#searchInput"),
  providerSelect: document.querySelector("#providerSelect"),
  sortSelect: document.querySelector("#sortSelect"),
  gamesGrid: document.querySelector("#gamesGrid"),
  providerSlotsGrid: document.querySelector("#providerSlotsGrid"),
  recentWins: document.querySelector("#recentWins"),
  activeGameTitle: document.querySelector("#activeGameTitle"),
  activeGameDescription: document.querySelector("#activeGameDescription"),
  gameBoard: document.querySelector("#gameBoard"),
  dynamicControls: document.querySelector("#dynamicControls"),
  playBtn: document.querySelector("#playBtn"),
  cashoutBtn: document.querySelector("#cashoutBtn"),
  roundMessage: document.querySelector("#roundMessage"),
  toast: document.querySelector("#toast"),
  autoPlay: document.querySelector("#autoPlay"),
  autoRounds: document.querySelector("#autoRounds"),
  autoStop: document.querySelector("#autoStop"),
  navFilters: document.querySelectorAll("[data-filter]"),
  accountChip: document.querySelector("#accountChip"),
  accountName: document.querySelector("#accountName"),
  accountStatus: document.querySelector("#accountStatus"),
  authOpenBtn: document.querySelector("#authOpenBtn"),
  signOutBtn: document.querySelector("#signOutBtn"),
  authDialog: document.querySelector("#authDialog"),
  authForm: document.querySelector("#authForm"),
  authEmail: document.querySelector("#authEmail"),
  authPassword: document.querySelector("#authPassword"),
  displayNameRow: document.querySelector("#displayNameRow"),
  displayName: document.querySelector("#displayName"),
  authTitle: document.querySelector("#authTitle"),
  authCopy: document.querySelector("#authCopy"),
  authSubmit: document.querySelector("#authSubmit"),
  authToggle: document.querySelector("#authToggle"),
  modalClose: document.querySelector(".modal-close"),
  walletModeLabel: document.querySelector("#walletModeLabel"),
  modeText: document.querySelector("#modeText"),
  demoModeBtn: document.querySelector("#demoModeBtn"),
  promoBtn: document.querySelector("#promoBtn"),
  vipBtn: document.querySelector("#vipBtn"),
  settingsBtn: document.querySelector("#settingsBtn"),
  utilityDialog: document.querySelector("#utilityDialog"),
  utilityTitle: document.querySelector("#utilityTitle"),
  utilityContent: document.querySelector("#utilityContent"),
  utilityClose: document.querySelector("#utilityClose"),
};

const supabaseSettings = window.VELORA_SUPABASE || {};
const hasSupabaseConfig =
  Boolean(supabaseSettings.url) &&
  Boolean(supabaseSettings.publishableKey) &&
  !supabaseSettings.publishableKey.includes("PASTE");
const supabaseClient =
  hasSupabaseConfig && window.supabase
    ? window.supabase.createClient(supabaseSettings.url, supabaseSettings.publishableKey)
    : null;

const format = (value) =>
  new Intl.NumberFormat("ru-RU", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);

const random = (min, max) => Math.random() * (max - min) + min;
const randomInt = (min, max) => Math.floor(random(min, max + 1));
const clamp = (value, min, max) => Math.max(min, Math.min(max, value));

function saveState() {
  if (!state.user) {
    localStorage.setItem("velora-balance", String(state.balance));
  }
  localStorage.setItem("velora-bet", String(state.bet));
}

function saveSettings() {
  localStorage.setItem("velora-settings", JSON.stringify(state.settings));
}

function getPromoStorageKey() {
  return `velora-promos-${state.user?.id || "guest"}`;
}

function getRedeemedPromos() {
  return JSON.parse(localStorage.getItem(getPromoStorageKey()) || "[]");
}

function setRedeemedPromos(codes) {
  localStorage.setItem(getPromoStorageKey(), JSON.stringify(codes));
}

function setBalance(value) {
  state.balance = Math.max(0, Number(value.toFixed(2)));
  els.balance.value = format(state.balance);
  saveState();
  queueProfileSave();
}

function setBet(value) {
  const clean = clamp(Math.round(Number(value) / 100) * 100 || 100, 100, 50000);
  state.bet = clean;
  els.betInput.value = clean;
  els.quickBets.forEach((btn) => {
    btn.classList.toggle("is-selected", Number(btn.dataset.bet) === clean);
  });
  saveState();
}

function toast(message) {
  els.toast.textContent = message;
  els.toast.classList.add("is-visible");
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => els.toast.classList.remove("is-visible"), 2400);
}

function queueProfileSave() {
  if (!supabaseClient || !state.user || !state.authReady) return;
  clearTimeout(queueProfileSave.timer);
  queueProfileSave.timer = setTimeout(() => {
    saveProfile().catch(() => toast("Profile sync failed"));
  }, 550);
}

async function saveProfile() {
  if (!supabaseClient || !state.user) return;
  const { error } = await supabaseClient
    .from("casino_profiles")
    .update({
      balance: state.balance,
      games_played: state.profile?.games_played || 0,
      total_won: state.profile?.total_won || 0,
    })
    .eq("id", state.user.id);
  if (error) throw error;
}

function updateAccountUi() {
  const configured = Boolean(supabaseClient);
  els.accountChip.classList.toggle("is-online", Boolean(state.user));
  els.authOpenBtn.classList.toggle("is-hidden", Boolean(state.user));
  els.signOutBtn.classList.toggle("is-hidden", !state.user);

  if (!configured) {
    els.accountName.textContent = "Гость";
    els.accountStatus.textContent = "Supabase key not set";
    return;
  }

  if (!state.user) {
    els.accountName.textContent = "Гость";
    els.accountStatus.textContent = "Войдите для синхронизации";
    return;
  }

  const name = state.profile?.display_name || state.user.email?.split("@")[0] || "Player";
  els.accountName.textContent = name;
  els.accountStatus.textContent = state.user.email || "Аккаунт активен";
}

function updateModeUi() {
  const demo = state.walletMode === "demo";
  els.walletModeLabel.textContent = demo ? "Демо-баланс · виртуальные кредиты" : "Real mode unavailable";
  els.modeText.textContent = demo
    ? "Все игры используют только виртуальные кредиты."
    : "Реальный счет заблокирован до лицензии и KYC.";
  els.demoModeBtn.classList.toggle("is-off", !demo);
  document.body.classList.toggle("reduced-motion", Boolean(state.settings.reducedMotion));
  document.body.classList.toggle("compact-ui", Boolean(state.settings.compactUi));
}

function openUtility(title, html) {
  els.utilityTitle.textContent = title;
  els.utilityContent.innerHTML = html;
  els.utilityDialog.showModal();
}

function getVipInfo() {
  const gamesPlayed = Number(state.profile?.games_played || localStorage.getItem("velora-games-played") || 0);
  const totalWon = Number(state.profile?.total_won || localStorage.getItem("velora-total-won") || 0);
  const points = Math.floor(gamesPlayed * 120 + totalWon / 20);
  const levels = [
    { name: "Bronze", min: 0, perks: "Базовые промо и ежедневный демо-бонус" },
    { name: "Silver", min: 2500, perks: "+5% к промо-бонусам и быстрые турниры" },
    { name: "Gold", min: 9000, perks: "+10% к промо-бонусам и VIP миссии" },
    { name: "Platinum", min: 22000, perks: "+15% к промо-бонусам и персональные акции" },
  ];
  const current = [...levels].reverse().find((level) => points >= level.min) || levels[0];
  const next = levels.find((level) => level.min > points);
  return { gamesPlayed, totalWon, points, current, next };
}

function showVipClub() {
  const vip = getVipInfo();
  const progress = vip.next ? Math.min(100, Math.round(((vip.points - vip.current.min) / (vip.next.min - vip.current.min)) * 100)) : 100;
  openUtility(
    "VIP клуб",
    `
      <div class="vip-hero">
        <span class="vip-crown">♛</span>
        <div>
          <strong>${vip.current.name}</strong>
          <small>${vip.current.perks}</small>
        </div>
      </div>
      <div class="vip-progress">
        <span>${vip.points.toLocaleString("ru-RU")} VIP points</span>
        <span>${vip.next ? `До ${vip.next.name}: ${(vip.next.min - vip.points).toLocaleString("ru-RU")}` : "Максимальный уровень"}</span>
        <div><i style="width:${progress}%"></i></div>
      </div>
      <div class="utility-grid">
        <article><strong>${vip.gamesPlayed}</strong><span>Игр сыграно</span></article>
        <article><strong>VC ${format(vip.totalWon)}</strong><span>Всего выиграно</span></article>
        <article><strong>Daily</strong><span>Бонусы только виртуальные</span></article>
      </div>
      <p class="utility-note">VIP клуб не связан с реальными деньгами. Уровни дают только демо-бонусы и визуальные преимущества.</p>
    `,
  );
}

function showPromos() {
  const redeemed = getRedeemedPromos();
  openUtility(
    "Промо",
    `
      <form id="promoForm" class="promo-form">
        <label>Промокод
          <input id="promoCode" type="text" placeholder="WELCOME" autocomplete="off" />
        </label>
        <button type="submit">Активировать</button>
      </form>
      <div class="promo-list">
        ${[
          ["WELCOME", "10 000 VC", "Стартовый бонус"],
          ["VIP5000", "5 000 VC", "VIP демо-бонус"],
          ["LUCKY", "3 000 VC", "Быстрый бонус"],
        ]
          .map(
            ([code, amount, label]) => `
              <article class="${redeemed.includes(code) ? "is-used" : ""}">
                <strong>${code}</strong>
                <span>${label}</span>
                <small>${redeemed.includes(code) ? "Уже активирован" : amount}</small>
              </article>
            `,
          )
          .join("")}
      </div>
      <p class="utility-note">Промо начисляют только виртуальные кредиты. Реальные депозиты и выводы не подключены.</p>
    `,
  );
  document.querySelector("#promoForm").addEventListener("submit", redeemPromo);
}

function redeemPromo(event) {
  event.preventDefault();
  const input = document.querySelector("#promoCode");
  const code = input.value.trim().toUpperCase();
  const promos = { WELCOME: 10000, VIP5000: 5000, LUCKY: 3000 };
  if (!promos[code]) {
    toast("Промокод не найден");
    return;
  }
  const redeemed = getRedeemedPromos();
  if (redeemed.includes(code)) {
    toast("Промокод уже активирован");
    return;
  }
  setRedeemedPromos([...redeemed, code]);
  setBalance(state.balance + promos[code]);
  toast(`Промо ${code}: +${format(promos[code])} VC`);
  showPromos();
}

function showSettings() {
  openUtility(
    "Настройки",
    `
      <div class="settings-list">
        <label>
          <span><strong>Звук интерфейса</strong><small>Подготовлено для будущих эффектов</small></span>
          <input type="checkbox" data-setting="sound" ${state.settings.sound ? "checked" : ""} />
        </label>
        <label>
          <span><strong>Меньше анимаций</strong><small>Упрощает движение интерфейса</small></span>
          <input type="checkbox" data-setting="reducedMotion" ${state.settings.reducedMotion ? "checked" : ""} />
        </label>
        <label>
          <span><strong>Компактный режим</strong><small>Более плотные карточки игр</small></span>
          <input type="checkbox" data-setting="compactUi" ${state.settings.compactUi ? "checked" : ""} />
        </label>
      </div>
      <div class="real-mode-card">
        <strong>Реальный счет</strong>
        <p>Реальные ставки, депозиты и выводы отключены. Для такого режима нужны лицензия, KYC/AML, платежный провайдер и юридическая проверка.</p>
        <button id="realModeBtn" type="button">Запросить подключение</button>
      </div>
    `,
  );
  document.querySelectorAll("[data-setting]").forEach((input) => {
    input.addEventListener("change", () => {
      state.settings[input.dataset.setting] = input.checked;
      saveSettings();
      updateModeUi();
    });
  });
  document.querySelector("#realModeBtn").addEventListener("click", attemptRealMode);
}

function attemptRealMode() {
  state.walletMode = "demo";
  localStorage.setItem("velora-wallet-mode", "demo");
  updateModeUi();
  openUtility(
    "Реальный счет недоступен",
    `
      <div class="real-mode-card">
        <strong>Режим реальных денег заблокирован</strong>
        <p>Я могу оставить интерфейс и подготовить легальный checklist интеграции, но не буду подключать реальные ставки или платежи без лицензирования, KYC/AML и регулируемого платежного провайдера.</p>
      </div>
    `,
  );
}

function setAuthMode(mode) {
  state.authMode = mode;
  const signup = mode === "signup";
  els.authTitle.textContent = signup ? "Создать аккаунт" : "Вход в Velora Play";
  els.authCopy.textContent = signup
    ? "Создайте аккаунт, чтобы баланс сохранялся между устройствами."
    : "Войдите, чтобы баланс и профиль сохранялись между устройствами.";
  els.authSubmit.textContent = signup ? "Создать аккаунт" : "Войти";
  els.authToggle.textContent = signup ? "У меня уже есть аккаунт" : "Создать аккаунт";
  els.displayNameRow.classList.toggle("is-hidden", !signup);
  els.authPassword.autocomplete = signup ? "new-password" : "current-password";
}

async function ensureProfile(user) {
  const fallbackName = user.user_metadata?.display_name || user.email?.split("@")[0] || "Player";
  const { data, error } = await supabaseClient
    .from("casino_profiles")
    .select("id,email,display_name,balance,games_played,total_won")
    .eq("id", user.id)
    .maybeSingle();

  if (error) throw error;
  if (data) return data;

  const { data: created, error: insertError } = await supabaseClient
    .from("casino_profiles")
    .insert({
      id: user.id,
      email: user.email,
      display_name: fallbackName,
      balance: state.balance,
    })
    .select("id,email,display_name,balance,games_played,total_won")
    .single();
  if (insertError) throw insertError;
  return created;
}

async function loadSession() {
  if (!supabaseClient) {
    updateAccountUi();
    return;
  }

  const { data, error } = await supabaseClient.auth.getSession();
  if (error) {
    toast(error.message);
    updateAccountUi();
    return;
  }

  await applySession(data.session);
  supabaseClient.auth.onAuthStateChange((_event, session) => {
    applySession(session).catch(() => toast("Could not load account"));
  });
}

async function applySession(session) {
  state.user = session?.user || null;
  state.profile = null;
  state.authReady = false;

  if (state.user) {
    state.profile = await ensureProfile(state.user);
    state.balance = Number(state.profile.balance);
    els.balance.value = format(state.balance);
    localStorage.removeItem("velora-balance");
    state.authReady = true;
  }

  updateAccountUi();
}

async function handleAuthSubmit(event) {
  event.preventDefault();
  if (!supabaseClient) {
    toast("Add Supabase publishable key first");
    return;
  }

  const email = els.authEmail.value.trim();
  const password = els.authPassword.value;
  const displayName = els.displayName.value.trim() || email.split("@")[0] || "Player";
  els.authSubmit.disabled = true;

  try {
    if (state.authMode === "signup") {
      const { data, error } = await supabaseClient.auth.signUp({
        email,
        password,
        options: {
          data: { display_name: displayName },
          emailRedirectTo: window.location.href,
        },
      });
      if (error) throw error;
      if (data.session) {
        await applySession(data.session);
        els.authDialog.close();
        toast("Account created");
      } else {
        toast("Check email to confirm account");
      }
    } else {
      const { data, error } = await supabaseClient.auth.signInWithPassword({ email, password });
      if (error) throw error;
      await applySession(data.session);
      els.authDialog.close();
      toast("Signed in");
    }
  } catch (error) {
    toast(error.message || "Auth error");
  } finally {
    els.authSubmit.disabled = false;
  }
}

async function signOut() {
  if (!supabaseClient) return;
  const { error } = await supabaseClient.auth.signOut();
  if (error) {
    toast(error.message);
    return;
  }
  state.user = null;
  state.profile = null;
  state.authReady = false;
  state.balance = Number(localStorage.getItem("velora-balance")) || 100000;
  els.balance.value = format(state.balance);
  updateAccountUi();
  toast("Signed out");
}

function getActiveGame() {
  return games.find((game) => game.id === state.activeGame) || games[0];
}

function addWin(gameTitle, amount, icon = "VC") {
  if (amount <= 0) return;
  const names = ["Nova", "Zero7", "Pulse", "Vlad", "Jet", "Runa", "Ace", "Spark"];
  state.recentWins.unshift([
    names[randomInt(0, names.length - 1)] + "_" + randomInt(10, 99),
    gameTitle,
    amount,
    icon,
  ]);
  state.recentWins = state.recentWins.slice(0, 10);
  renderRecentWins();
}

function settleRound({ won, multiplier, message, game }) {
  state.lastMultiplier = multiplier;
  const payout = won ? state.bet * multiplier : 0;
  recordProfileRound(payout);
  if (won) {
    setBalance(state.balance + payout);
    addWin(game.title, payout, game.symbol);
  }
  els.roundMessage.textContent = message;
  toast(won ? `Выигрыш ${format(payout)} VC` : "Раунд завершен без выигрыша");
}

function recordProfileRound(payout = 0) {
  if (state.profile) {
    state.profile.games_played = Number(state.profile.games_played || 0) + 1;
    state.profile.total_won = Number(state.profile.total_won || 0) + Number(payout || 0);
    return;
  }
  const gamesPlayed = Number(localStorage.getItem("velora-games-played") || 0) + 1;
  const totalWon = Number(localStorage.getItem("velora-total-won") || 0) + Number(payout || 0);
  localStorage.setItem("velora-games-played", String(gamesPlayed));
  localStorage.setItem("velora-total-won", String(totalWon));
}

function chargeBet(customBet = state.bet) {
  if (state.balance < customBet) {
    toast("Недостаточно виртуальных кредитов. Пополните демо-баланс.");
    return false;
  }
  setBalance(state.balance - customBet);
  return true;
}

function renderRecentWins() {
  els.recentWins.innerHTML = state.recentWins
    .map(
      ([player, game, amount, icon]) => `
        <div class="win-item">
          <span class="win-avatar">${icon}</span>
          <span>
            <strong>${player} · ${game}</strong>
            <small>VC ${format(amount)}</small>
          </span>
        </div>
      `,
    )
    .join("");
}

function renderProviderSlots() {
  els.providerSlotsGrid.innerHTML = providerSlots
    .map(
      (slot) => `
        <article class="provider-slot" style="--slot-accent:${slot.accent}; --slot-glow:${slot.glow}">
          <div class="provider-slot-art">
            <span>${slot.symbol}</span>
          </div>
          <div class="provider-slot-info">
            <small>${slot.studio}</small>
            <strong>${slot.title}</strong>
            <p>${slot.theme}</p>
            <a href="${slot.url}" target="_blank" rel="noopener noreferrer">Открыть слот</a>
          </div>
        </article>
      `,
    )
    .join("");
}

function renderGames() {
  let list = [...games];
  if (state.filter !== "all") list = list.filter((game) => game.id === state.filter);
  if (state.provider !== "all") list = list.filter((game) => game.provider === state.provider);
  if (state.query) {
    const query = state.query.toLowerCase();
    list = list.filter((game) => game.title.toLowerCase().includes(query));
  }
  if (state.sort === "online") list.sort((a, b) => b.online - a.online);
  if (state.sort === "name") list.sort((a, b) => a.title.localeCompare(b.title));

  els.gamesGrid.innerHTML = list
    .map(
      (game) => `
        <article class="game-card ${game.id === state.activeGame ? "is-active" : ""}" style="--card-glow:${game.color}55; --card-border:${game.border}">
          <button type="button" data-game="${game.id}" aria-label="Выбрать игру ${game.title}">
            <div class="game-visual">
              <span class="game-symbol">${game.symbol}</span>
            </div>
            <div class="game-info">
              <strong>${game.title}</strong>
              <span><i class="online-dot"></i>${game.online.toLocaleString("ru-RU")} играет</span>
            </div>
          </button>
        </article>
      `,
    )
    .join("");

  els.gamesGrid.querySelectorAll("[data-game]").forEach((btn) => {
    btn.addEventListener("click", () => selectGame(btn.dataset.game));
  });
}

function syncFilterButtons() {
  document.querySelectorAll(".tab, .nav-item[data-filter]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.filter === state.filter);
  });
}

function selectFilter(filter) {
  state.filter = filter;
  syncFilterButtons();
  renderGames();
}

function selectGame(gameId) {
  if (state.crash.running) return toast("Сначала завершите Crash-раунд.");
  state.activeGame = gameId;
  state.mines.active = false;
  state.mines.locked = false;
  renderActiveGame();
  renderGames();
}

function renderActiveGame() {
  const game = getActiveGame();
  els.activeGameTitle.textContent = game.title;
  els.activeGameDescription.textContent = game.description;
  els.playBtn.textContent = game.action;
  els.playBtn.disabled = false;
  els.cashoutBtn.classList.add("is-hidden");
  els.roundMessage.textContent = "Готово к ставке.";
  els.gameBoard.className = "game-board";

  const renderers = {
    slots: renderSlots,
    roulette: renderRoulette,
    dice: renderDice,
    crash: renderCrash,
    blackjack: renderBlackjack,
    plinko: renderPlinko,
    mines: renderMines,
    wheel: renderWheel,
  };
  renderers[game.id]();
  renderControls(game.id);
}

function renderControls(gameId) {
  const controls = {
    plinko: `
      <h3 class="dynamic-title">Риск</h3>
      <div class="control-grid">
        ${["low", "medium", "high"].map((risk) => `<button class="control-pill ${state.risk === risk ? "is-selected" : ""}" type="button" data-risk="${risk}">${risk === "low" ? "Низкий" : risk === "medium" ? "Средний" : "Высокий"}</button>`).join("")}
      </div>
      <div class="range-row">
        <label>Рядов <strong>${state.rows}</strong></label>
        <input id="rowsRange" type="range" min="8" max="24" step="2" value="${state.rows}" />
      </div>
    `,
    roulette: `
      <h3 class="dynamic-title">Цвет</h3>
      <div class="control-grid">
        <button class="control-pill ${state.rouletteChoice === "red" ? "is-selected" : ""}" type="button" data-roulette="red">Красный x2</button>
        <button class="control-pill ${state.rouletteChoice === "black" ? "is-selected" : ""}" type="button" data-roulette="black">Черный x2</button>
        <button class="control-pill ${state.rouletteChoice === "green" ? "is-selected" : ""}" type="button" data-roulette="green">Зеро x14</button>
      </div>
    `,
    dice: `
      <h3 class="dynamic-title">Условие</h3>
      <div class="control-grid">
        <button class="control-pill ${state.diceMode === "over" ? "is-selected" : ""}" type="button" data-dice-mode="over">Выше</button>
        <button class="control-pill ${state.diceMode === "under" ? "is-selected" : ""}" type="button" data-dice-mode="under">Ниже</button>
        <button class="control-pill" type="button" data-dice-mode="fair">50/50</button>
      </div>
      <div class="range-row">
        <label>Цель <strong>${state.diceTarget}</strong></label>
        <input id="diceTarget" type="range" min="20" max="80" step="1" value="${state.diceTarget}" />
      </div>
    `,
    crash: `
      <h3 class="dynamic-title">Crash</h3>
      <p class="control-note">После старта кнопка «Забрать» фиксирует текущий множитель. Если график упадет раньше, ставка сгорает.</p>
    `,
    mines: `
      <h3 class="dynamic-title">Mines</h3>
      <p class="control-note">Открой безопасные клетки, затем забери банк. Две клетки скрывают мину.</p>
    `,
    blackjack: `
      <h3 class="dynamic-title">Blackjack</h3>
      <p class="control-note">Быстрая демо-раздача: игрок против дилера, банк выплачивается при лучшей руке до 21.</p>
    `,
    slots: `
      <h3 class="dynamic-title">Слоты</h3>
      <p class="control-note">Две одинаковые иконки дают x1.8, три одинаковые x10, три семерки x50.</p>
    `,
    wheel: `
      <h3 class="dynamic-title">Колесо</h3>
      <p class="control-note">Сегменты выплачивают разные множители. Чем выше сектор, тем реже он выпадает.</p>
    `,
  };

  els.dynamicControls.innerHTML = controls[gameId] || "";
  els.dynamicControls.querySelectorAll("[data-risk]").forEach((btn) =>
    btn.addEventListener("click", () => {
      state.risk = btn.dataset.risk;
      renderControls("plinko");
    }),
  );
  els.dynamicControls.querySelector("#rowsRange")?.addEventListener("input", (event) => {
    state.rows = Number(event.target.value);
    renderControls("plinko");
  });
  els.dynamicControls.querySelectorAll("[data-roulette]").forEach((btn) =>
    btn.addEventListener("click", () => {
      state.rouletteChoice = btn.dataset.roulette;
      renderControls("roulette");
    }),
  );
  els.dynamicControls.querySelectorAll("[data-dice-mode]").forEach((btn) =>
    btn.addEventListener("click", () => {
      state.diceMode = btn.dataset.diceMode === "fair" ? (Math.random() > 0.5 ? "over" : "under") : btn.dataset.diceMode;
      renderControls("dice");
    }),
  );
  els.dynamicControls.querySelector("#diceTarget")?.addEventListener("input", (event) => {
    state.diceTarget = Number(event.target.value);
    renderControls("dice");
  });
}

function renderPlinko(resultIndex = null, multiplier = null) {
  els.gameBoard.className = "game-board plinko-board";
  const bins = getPlinkoMultipliers();
  const ballStyle = resultIndex === null ? "" : `style="transform: translate(${(resultIndex - 3) * 52 - 9}px, 92px)"`;
  els.gameBoard.innerHTML = `
    <span class="plinko-ball" ${ballStyle}></span>
    <div class="plinko-slots">
      ${bins.map((value, index) => `<span class="slot-bin ${index === resultIndex ? "is-hit" : ""}">${value}x</span>`).join("")}
    </div>
  `;
  if (multiplier) {
    els.roundMessage.textContent = `Шар попал в сектор x${multiplier}.`;
  }
}

function getPlinkoMultipliers() {
  if (state.risk === "low") return [0.6, 0.8, 1.1, 1.4, 1.1, 0.8, 0.6];
  if (state.risk === "high") return [0.2, 0.4, 1.2, 8, 1.2, 0.4, 0.2];
  return [0.3, 0.7, 1.4, 3, 1.4, 0.7, 0.3];
}

function playPlinko() {
  const game = getActiveGame();
  if (!chargeBet()) return;
  const bins = getPlinkoMultipliers();
  const weights = state.risk === "high" ? [8, 14, 18, 4, 18, 14, 8] : [9, 13, 17, 14, 17, 13, 9];
  const index = weightedIndex(weights);
  const multiplier = bins[index];
  renderPlinko(index, multiplier);
  setTimeout(() => {
    settleRound({
      won: multiplier >= 1,
      multiplier,
      message: multiplier >= 1 ? `Попадание x${multiplier}. Выплата начислена.` : `Попадание x${multiplier}. В этот раз без прибыли.`,
      game,
    });
    maybeAutoPlay();
  }, 950);
}

function weightedIndex(weights) {
  const total = weights.reduce((sum, weight) => sum + weight, 0);
  let cursor = Math.random() * total;
  return weights.findIndex((weight) => {
    cursor -= weight;
    return cursor <= 0;
  });
}

function renderSlots(symbols = ["?", "?", "?"]) {
  els.gameBoard.className = "game-board slots-board";
  els.gameBoard.innerHTML = symbols.map((symbol) => `<span class="reel">${symbol}</span>`).join("");
}

function playSlots() {
  const game = getActiveGame();
  if (!chargeBet()) return;
  const symbols = ["7", "◆", "★", "●", "♠", "✦"];
  const roll = Array.from({ length: 3 }, () => symbols[randomInt(0, symbols.length - 1)]);
  renderSlots(roll);
  const counts = roll.reduce((acc, symbol) => {
    acc[symbol] = (acc[symbol] || 0) + 1;
    return acc;
  }, {});
  const max = Math.max(...Object.values(counts));
  const multiplier = roll.every((symbol) => symbol === "7") ? 50 : max === 3 ? 10 : max === 2 ? 1.8 : 0;
  settleRound({
    won: multiplier > 0,
    multiplier,
    message: multiplier > 0 ? `Комбинация ${roll.join(" ")} дала x${multiplier}.` : `Комбинация ${roll.join(" ")} не сыграла.`,
    game,
  });
  maybeAutoPlay();
}

function renderRoulette(result = "—") {
  els.gameBoard.className = "game-board roulette-board";
  els.gameBoard.innerHTML = `
    <div class="roulette-wheel" style="transform: rotate(${randomInt(0, 360)}deg)"><span>${result}</span></div>
    <div>
      <strong>${state.rouletteChoice === "red" ? "Красный" : state.rouletteChoice === "black" ? "Черный" : "Зеро"}</strong>
      <p>Текущая ставка на цвет</p>
    </div>
  `;
}

function playRoulette() {
  const game = getActiveGame();
  if (!chargeBet()) return;
  const pockets = ["red", "black", "red", "black", "red", "black", "green", "red", "black", "red", "black", "red", "black", "green"];
  const result = pockets[randomInt(0, pockets.length - 1)];
  const labels = { red: "R", black: "B", green: "0" };
  renderRoulette(labels[result]);
  const multiplier = result === "green" ? 14 : 2;
  settleRound({
    won: result === state.rouletteChoice,
    multiplier,
    message: result === state.rouletteChoice ? `Выпал ${labelColor(result)}. Ставка сыграла.` : `Выпал ${labelColor(result)}. Цвет не совпал.`,
    game,
  });
  maybeAutoPlay();
}

function labelColor(color) {
  return color === "red" ? "красный" : color === "black" ? "черный" : "зеро";
}

function renderDice(roll = "—") {
  els.gameBoard.className = "game-board dice-board";
  els.gameBoard.innerHTML = `
    <span class="die-face">${roll}</span>
    <div class="meter">
      <div class="meter-track"></div>
      <div class="meter-value">${state.diceMode === "over" ? ">" : "<"} ${state.diceTarget}</div>
    </div>
  `;
}

function playDice() {
  const game = getActiveGame();
  if (!chargeBet()) return;
  const roll = randomInt(1, 100);
  renderDice(roll);
  const won = state.diceMode === "over" ? roll > state.diceTarget : roll < state.diceTarget;
  const chance = state.diceMode === "over" ? 100 - state.diceTarget : state.diceTarget;
  const multiplier = Math.max(1.1, Number((95 / chance).toFixed(2)));
  settleRound({
    won,
    multiplier,
    message: won ? `Выпало ${roll}. Коэффициент x${multiplier}.` : `Выпало ${roll}. Условие не выполнено.`,
    game,
  });
  maybeAutoPlay();
}

function renderCrash(multiplier = 1) {
  els.gameBoard.className = "game-board crash-board";
  els.gameBoard.innerHTML = `
    <span class="crash-multiplier">${multiplier.toFixed(2)}x</span>
    <span class="crash-line"></span>
    <span class="rocket" aria-hidden="true">▲</span>
  `;
}

function playCrash() {
  const game = getActiveGame();
  if (state.crash.running) return;
  if (!chargeBet()) return;
  state.crash = {
    running: true,
    cashed: false,
    multiplier: 1,
    bustAt: Number(random(1.18, 8.8).toFixed(2)),
    stake: state.bet,
    timer: null,
  };
  els.playBtn.disabled = true;
  els.cashoutBtn.classList.remove("is-hidden");
  els.roundMessage.textContent = "Множитель растет. Забирай вовремя.";
  state.crash.timer = setInterval(() => {
    state.crash.multiplier = Number((state.crash.multiplier + random(0.06, 0.17)).toFixed(2));
    renderCrash(state.crash.multiplier);
    if (state.crash.multiplier >= state.crash.bustAt) {
      clearInterval(state.crash.timer);
      state.crash.running = false;
      recordProfileRound(0);
      els.playBtn.disabled = false;
      els.cashoutBtn.classList.add("is-hidden");
      els.roundMessage.textContent = `Краш на x${state.crash.bustAt}. Ставка сгорела.`;
      toast("Crash: не успели забрать");
      maybeAutoPlay();
    }
  }, 190);
}

function cashoutCrash() {
  if (!state.crash.running || state.crash.cashed) return;
  const game = getActiveGame();
  clearInterval(state.crash.timer);
  state.crash.running = false;
  state.crash.cashed = true;
  const payout = state.crash.stake * state.crash.multiplier;
  recordProfileRound(payout);
  setBalance(state.balance + payout);
  addWin(game.title, payout, game.symbol);
  els.roundMessage.textContent = `Вы забрали x${state.crash.multiplier.toFixed(2)}.`;
  els.playBtn.disabled = false;
  els.cashoutBtn.classList.add("is-hidden");
  toast(`Crash выплата ${format(payout)} VC`);
}

function renderBlackjack(player = [10, 7], dealer = [9, 0]) {
  els.gameBoard.className = "game-board blackjack-board";
  els.gameBoard.innerHTML = `
    <div>
      <strong>Игрок</strong>
      <div class="card-hand">${player.map((card) => `<span class="play-card">${card || "?"}</span>`).join("")}</div>
    </div>
    <div>
      <strong>Дилер</strong>
      <div class="card-hand">${dealer.map((card) => `<span class="play-card">${card || "?"}</span>`).join("")}</div>
    </div>
  `;
}

function handValue(cards) {
  return cards.reduce((sum, card) => sum + card, 0);
}

function dealHand() {
  const cards = [randomInt(2, 11), randomInt(2, 11)];
  while (handValue(cards) < 16 && Math.random() > 0.35) cards.push(randomInt(2, 10));
  return cards;
}

function playBlackjack() {
  const game = getActiveGame();
  if (!chargeBet()) return;
  const player = dealHand();
  const dealer = dealHand();
  renderBlackjack(player, dealer);
  const pv = handValue(player);
  const dv = handValue(dealer);
  const playerBlackjack = player.length === 2 && pv === 21;
  const won = pv <= 21 && (dv > 21 || pv > dv);
  const push = pv <= 21 && pv === dv;
  if (push) {
    recordProfileRound(0);
    setBalance(state.balance + state.bet);
    els.roundMessage.textContent = `Пуш: ${pv} против ${dv}. Ставка возвращена.`;
    toast("Blackjack: возврат ставки");
    maybeAutoPlay();
    return;
  }
  settleRound({
    won,
    multiplier: playerBlackjack ? 2.5 : 2,
    message: won ? `Игрок ${pv}, дилер ${dv}. Победа.` : `Игрок ${pv}, дилер ${dv}. Раунд дилера.`,
    game,
  });
  maybeAutoPlay();
}

function renderMines() {
  els.gameBoard.className = "game-board mines-board";
  els.gameBoard.innerHTML = Array.from({ length: 9 }, (_, index) => {
    const isOpened = state.mines.opened.includes(index);
    const isMine = state.mines.mineIndexes.includes(index);
    const visibleClass = isOpened ? (isMine ? "is-mine" : "is-safe") : "";
    const label = isOpened ? (isMine ? "×" : "✓") : "";
    return `<button class="mine-tile ${visibleClass}" type="button" data-tile="${index}" ${state.mines.active && !state.mines.locked ? "" : "disabled"}>${label}</button>`;
  }).join("");

  els.gameBoard.querySelectorAll("[data-tile]").forEach((tile) => {
    tile.addEventListener("click", () => openMineTile(Number(tile.dataset.tile)));
  });
}

function playMines() {
  if (!state.mines.active) {
    if (!chargeBet()) return;
    const indexes = new Set();
    while (indexes.size < 2) indexes.add(randomInt(0, 8));
    state.mines = {
      active: true,
      stake: state.bet,
      mineIndexes: [...indexes],
      opened: [],
      locked: false,
    };
    els.playBtn.textContent = "Забрать";
    els.roundMessage.textContent = "Открывайте клетки или забирайте текущий банк.";
    renderMines();
    return;
  }
  collectMines();
}

function openMineTile(index) {
  if (!state.mines.active || state.mines.opened.includes(index)) return;
  state.mines.opened.push(index);
  if (state.mines.mineIndexes.includes(index)) {
    state.mines.locked = true;
    state.mines.active = false;
    state.mines.opened = [...new Set([...state.mines.opened, ...state.mines.mineIndexes])];
    recordProfileRound(0);
    els.playBtn.textContent = "Начать";
    els.roundMessage.textContent = "Мина открыта. Раунд завершен.";
    toast("Mines: ставка сгорела");
    renderMines();
    maybeAutoPlay();
    return;
  }
  const multiplier = getMinesMultiplier();
  els.roundMessage.textContent = `Безопасно. Текущий коэффициент x${multiplier.toFixed(2)}.`;
  renderMines();
  if (state.mines.opened.length === 7) collectMines();
}

function getMinesMultiplier() {
  return Number((1 + state.mines.opened.length * 0.42).toFixed(2));
}

function collectMines() {
  if (!state.mines.active || state.mines.opened.length === 0) {
    toast("Сначала откройте хотя бы одну безопасную клетку.");
    return;
  }
  const game = getActiveGame();
  const multiplier = getMinesMultiplier();
  const payout = state.mines.stake * multiplier;
  recordProfileRound(payout);
  setBalance(state.balance + payout);
  addWin(game.title, payout, game.symbol);
  state.mines.active = false;
  state.mines.locked = true;
  els.playBtn.textContent = "Начать";
  els.roundMessage.textContent = `Вы забрали x${multiplier.toFixed(2)}.`;
  toast(`Mines выплата ${format(payout)} VC`);
  renderMines();
  maybeAutoPlay();
}

function renderWheel(result = null) {
  els.gameBoard.className = "game-board wheel-board";
  const rotate = result ? result.rotation : 0;
  els.gameBoard.innerHTML = `
    <div class="wheel-disc" style="transform: rotate(${rotate}deg)"><span class="wheel-pointer"></span></div>
    <div class="wheel-values">
      ${[0.2, 0.5, 1, 1.5, 2, 3, 5, 10].map((value) => `<span>x${value}</span>`).join("")}
    </div>
  `;
}

function playWheel() {
  const game = getActiveGame();
  if (!chargeBet()) return;
  const values = [0.2, 0.5, 1, 1.5, 2, 3, 5, 10];
  const weights = [14, 15, 24, 18, 12, 8, 5, 2];
  const index = weightedIndex(weights);
  const multiplier = values[index];
  renderWheel({ rotation: 720 + index * 45 + randomInt(0, 22) });
  setTimeout(() => {
    settleRound({
      won: multiplier >= 1,
      multiplier,
      message: multiplier >= 1 ? `Колесо остановилось на x${multiplier}.` : `Колесо остановилось на x${multiplier}.`,
      game,
    });
    maybeAutoPlay();
  }, 960);
}

function playActiveGame() {
  const actions = {
    slots: playSlots,
    roulette: playRoulette,
    dice: playDice,
    crash: playCrash,
    blackjack: playBlackjack,
    plinko: playPlinko,
    mines: playMines,
    wheel: playWheel,
  };
  actions[state.activeGame]?.();
}

function maybeAutoPlay() {
  if (!els.autoPlay.checked || state.activeGame === "crash" || state.activeGame === "mines") return;
  if (state.lastMultiplier >= Number(els.autoStop.value || 0)) {
    els.autoPlay.checked = false;
    toast(`Авто-игра остановлена на x${state.lastMultiplier}`);
    return;
  }
  const rounds = Number(els.autoRounds.value);
  if (!rounds || rounds <= 1) {
    els.autoPlay.checked = false;
    return;
  }
  els.autoRounds.value = rounds - 1;
  setTimeout(() => {
    if (els.autoPlay.checked) playActiveGame();
  }, 700);
}

function bindEvents() {
  els.decreaseBet.addEventListener("click", () => setBet(state.bet - 100));
  els.increaseBet.addEventListener("click", () => setBet(state.bet + 100));
  els.betInput.addEventListener("change", (event) => setBet(event.target.value));
  els.quickBets.forEach((btn) => btn.addEventListener("click", () => setBet(Number(btn.dataset.bet))));
  els.topUpBtn.addEventListener("click", () => {
    setBalance(state.balance + 10000);
    toast("Демо-баланс пополнен на 10 000 VC");
  });
  els.searchInput.addEventListener("input", (event) => {
    state.query = event.target.value.trim();
    renderGames();
  });
  els.providerSelect.addEventListener("change", (event) => {
    state.provider = event.target.value;
    renderGames();
  });
  els.sortSelect.addEventListener("change", (event) => {
    state.sort = event.target.value;
    renderGames();
  });
  els.navFilters.forEach((btn) => btn.addEventListener("click", () => selectFilter(btn.dataset.filter)));
  els.playBtn.addEventListener("click", playActiveGame);
  els.cashoutBtn.addEventListener("click", cashoutCrash);
  els.promoBtn.addEventListener("click", showPromos);
  els.vipBtn.addEventListener("click", showVipClub);
  els.settingsBtn.addEventListener("click", showSettings);
  els.demoModeBtn.addEventListener("click", attemptRealMode);
  els.utilityClose.addEventListener("click", () => els.utilityDialog.close());
  els.authOpenBtn.addEventListener("click", () => {
    if (!supabaseClient) {
      toast("Supabase publishable key is missing");
      return;
    }
    setAuthMode("signin");
    els.authDialog.showModal();
  });
  els.signOutBtn.addEventListener("click", signOut);
  els.authForm.addEventListener("submit", handleAuthSubmit);
  els.authToggle.addEventListener("click", () => setAuthMode(state.authMode === "signin" ? "signup" : "signin"));
  els.modalClose.addEventListener("click", () => els.authDialog.close());
  document.addEventListener("keydown", (event) => {
    if (event.key === "/" && document.activeElement !== els.searchInput) {
      event.preventDefault();
      els.searchInput.focus();
    }
    if (event.key === "Enter" && document.activeElement === els.betInput) {
      setBet(els.betInput.value);
    }
  });
}

async function init() {
  setBalance(state.balance);
  setBet(state.bet);
  renderRecentWins();
  renderProviderSlots();
  renderActiveGame();
  renderGames();
  syncFilterButtons();
  bindEvents();
  setAuthMode("signin");
  updateModeUi();
  await loadSession();
}

init();
