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
    id: "candy",
    gameId: "slots",
    title: "Candy Spin",
    studio: "VERS Originals",
    theme: "Sweet cluster slot",
    symbol: "SWEET",
    accent: "#ff5aa7",
    glow: "#ffcc3f",
  },
  {
    id: "olympus",
    gameId: "slots",
    title: "Olympus Reels",
    studio: "VERS Originals",
    theme: "Mythological free spins",
    symbol: "OLY",
    accent: "#18a8ff",
    glow: "#83ff62",
  },
  {
    id: "crash",
    gameId: "crash",
    title: "VERS Crash",
    studio: "VERS Originals",
    theme: "Multiplier arcade",
    symbol: "UP",
    accent: "#a977ff",
    glow: "#ff7047",
  },
  {
    id: "mines",
    gameId: "mines",
    title: "Neon Mines",
    studio: "VERS Originals",
    theme: "Grid reveal game",
    symbol: "MINE",
    accent: "#f7c94b",
    glow: "#18f5e7",
  },
  {
    id: "plinko",
    gameId: "plinko",
    title: "Plinko Rush",
    studio: "VERS Originals",
    theme: "Peg drop arcade",
    symbol: "DROP",
    accent: "#72f060",
    glow: "#f7c94b",
  },
];

const slotThemes = {
  olympus: {
    badge: "OLYMPUS",
    name: "Olympus mythological",
    accent: "#f7c94b",
    reel: "#1f2758",
    scatter: "SC",
    multiplier: "MX",
    symbols: [
      { id: "ZE", label: "Zeus", icon: "bolt", weight: 8, pay: 1.65 },
      { id: "HD", label: "Hades", icon: "helmet", weight: 8, pay: 1.45 },
      { id: "LY", label: "Lyre", icon: "lyre", weight: 14, pay: 0.9 },
      { id: "CR", label: "Crown", icon: "crown", weight: 16, pay: 0.72 },
      { id: "A", label: "Gem A", icon: "gem", weight: 22, pay: 0.42 },
      { id: "K", label: "Gem K", icon: "orb", weight: 24, pay: 0.36 },
    ],
  },
  candy: {
    badge: "CANDY",
    name: "Candy bonus",
    accent: "#ff5aa7",
    reel: "#401b4f",
    scatter: "BN",
    multiplier: "MX",
    symbols: [
      { id: "LO", label: "Lollipop", icon: "lollipop", weight: 9, pay: 1.35 },
      { id: "GB", label: "Gumball", icon: "candy", weight: 11, pay: 1.05 },
      { id: "CB", label: "Candy cube", icon: "cube", weight: 15, pay: 0.8 },
      { id: "GR", label: "Grapes", icon: "grapes", weight: 18, pay: 0.58 },
      { id: "A", label: "Sugar star", icon: "star", weight: 23, pay: 0.36 },
      { id: "K", label: "Sweet drop", icon: "drop", weight: 24, pay: 0.32 },
    ],
  },
  fishing: {
    badge: "FISHING",
    name: "Fishing bonus",
    accent: "#18a8ff",
    reel: "#0c3448",
    scatter: "FS",
    multiplier: "MX",
    symbols: [
      { id: "BA", label: "Bass", icon: "fish", weight: 8, pay: 1.55 },
      { id: "BO", label: "Boat", icon: "boat", weight: 10, pay: 1.16 },
      { id: "RO", label: "Rod", icon: "rod", weight: 15, pay: 0.78 },
      { id: "BU", label: "Buoy", icon: "buoy", weight: 17, pay: 0.55 },
      { id: "A", label: "Hook", icon: "hook", weight: 23, pay: 0.36 },
      { id: "K", label: "Wave", icon: "wave", weight: 25, pay: 0.3 },
    ],
  },
  book: {
    badge: "BOOK",
    name: "Book explorer",
    accent: "#ffb92e",
    reel: "#432d15",
    scatter: "BK",
    multiplier: "MX",
    symbols: [
      { id: "EX", label: "Explorer", icon: "compass", weight: 8, pay: 1.5 },
      { id: "MAP", label: "Map", icon: "map", weight: 10, pay: 1.12 },
      { id: "GEM", label: "Gem", icon: "gem", weight: 13, pay: 0.86 },
      { id: "KEY", label: "Key", icon: "key", weight: 17, pay: 0.58 },
      { id: "A", label: "Torch", icon: "torch", weight: 23, pay: 0.38 },
      { id: "K", label: "Relic", icon: "relic", weight: 25, pay: 0.32 },
    ],
  },
};

const i18n = {
  ru: {
    lang: "RU",
    search: "Поиск игр...",
    wallet: "Coin Balance · VERS Coins",
    realWallet: "Coin Balance · entertainment only",
    guest: "Гость",
    guestStatus: "Развлекательный аккаунт",
    login: "Войти",
    logout: "Выйти",
    coinTitle: "VERS Coins",
    coinText: "Entertainment credits only. No cash value.",
    nav: {
      all: "Лобби",
      slots: "Слоты",
      roulette: "Рулетка",
      promo: "Промо",
      vip: "VIP клуб",
      cashier: "Coin Shop",
      settings: "Настройки",
    },
    recent: "Последние выигрыши",
    selectedGame: "Выбрана игра",
    slot: {
      kicker: "HTML5 Engine",
    title: "VERS Mega Ways",
      copy: "6 барабанов, каскадные выигрыши, free spins, множители и VERS Coins.",
      theme: "Тема",
      admin: "Admin RTP",
      ready: "Готово к спину",
      loaded: "загружена",
      bet: "Ставка Coins",
      spin: "Spin",
      autoplay: "Автоигра",
      cascade: "Каскад",
      multiplier: "Множитель",
      freeSpins: "Free spins",
      targetRtp: "Target RTP",
      volatility: "Волатильность",
      low: "Низкая",
      medium: "Средняя",
      high: "Высокая",
      adminNote: "Admin-only настройки экономики VERS Coins. Платежи подтверждаются только backend/webhook.",
      spinning: "Спин",
      freeRunning: "Free spin",
      win: "Выигрыш",
      noWin: "Без выигрыша, следующий спин",
      realBlocked: "VERS Coins are entertainment credits only.",
    },
    providerTitle: "Featured VERS games",
    providerCopy: "Все игры запускаются прямо на сайте VERS и используют VERS Coins только для развлечения.",
    providerTag: "Internal games",
    catalogAll: "Все игры",
    catalogProvider: "Провайдер",
    catalogSort: "Сортировка",
    betTitle: "Ставка",
    autoGame: "Авто-игра",
    rounds: "Раундов",
    stopAt: "Стоп при x",
    cashout: "Collect",
    launch: "Play",
    profile: "Профиль",
    nickname: "Ник",
    avatar: "Аватар",
    saveProfile: "Сохранить профиль",
    newPassword: "Новый пароль",
    changePassword: "Сменить пароль",
    cashierTitle: "Coin Shop",
    buyCoins: "Buy Coins",
    stripePlaceholder: "Stripe placeholder",
    cryptoPlaceholder: "Crypto placeholder",
    amount: "Сумма",
    createRequest: "Создать заявку",
    shellNote: "VERS Coins have no monetary value and cannot be withdrawn, exchanged, sold, or redeemed for prizes.",
    sortPopular: "Популярные",
    sortOnline: "Онлайн",
    sortName: "Название",
  },
  en: {
    lang: "EN",
    search: "Search games...",
    wallet: "Coin Balance · VERS Coins",
    realWallet: "Coin Balance · entertainment only",
    guest: "Guest",
    guestStatus: "Entertainment account",
    login: "Sign in",
    logout: "Sign out",
    coinTitle: "VERS Coins",
    coinText: "Entertainment credits only. No cash value.",
    nav: {
      all: "Lobby",
      slots: "Slots",
      roulette: "Roulette",
      promo: "Promo",
      vip: "VIP club",
      cashier: "Cashier",
      settings: "Settings",
    },
    recent: "Recent wins",
    selectedGame: "Selected game",
    slot: {
      kicker: "HTML5 Engine",
    title: "VERS Mega Ways",
      copy: "6 reels, cascading wins, free spins, multipliers and VERS Coins entertainment balance.",
      theme: "Theme",
      admin: "Admin RTP",
      ready: "Ready for spin",
      loaded: "loaded",
      bet: "Bet Coins",
      spin: "Spin",
      autoplay: "Autoplay",
      cascade: "Cascade",
      multiplier: "Multiplier",
      freeSpins: "Free spins",
      targetRtp: "Target RTP",
      volatility: "Volatility",
      low: "Low",
      medium: "Medium",
      high: "High",
      adminNote: "Admin-only VERS Coins economy controls. Payment confirmations must happen on a trusted backend.",
      spinning: "Spinning",
      freeRunning: "Free spin running",
      win: "Win",
      noWin: "No win, next spin",
      realBlocked: "VERS Coins are entertainment credits only.",
    },
    providerTitle: "Featured VERS games",
    providerCopy: "All games run directly inside VERS casino using VERS Coins for entertainment only.",
    providerTag: "Internal games",
    catalogAll: "All games",
    catalogProvider: "Provider",
    catalogSort: "Sort",
    betTitle: "Bet",
    autoGame: "Auto-play",
    rounds: "Rounds",
    stopAt: "Stop at x",
    cashout: "Collect",
    launch: "Play",
    profile: "Profile",
    nickname: "Nickname",
    avatar: "Avatar",
    saveProfile: "Save profile",
    newPassword: "New password",
    changePassword: "Change password",
    cashierTitle: "Coin Shop",
    buyCoins: "Buy Coins",
    stripePlaceholder: "Stripe placeholder",
    cryptoPlaceholder: "Crypto placeholder",
    amount: "Amount",
    createRequest: "Create request",
    shellNote: "VERS Coins have no monetary value and cannot be withdrawn, exchanged, sold, or redeemed for prizes.",
    sortPopular: "Popular",
    sortOnline: "Online",
    sortName: "Name",
  },
};

const gameText = {
  en: {
    slots: {
      description: "Three reels, quick multipliers and a rare x50 for triple sevens.",
      action: "Spin",
    },
    roulette: {
      title: "Roulette",
      symbol: "?",
      description: "Pick a color, spin the wheel and see where the ball lands.",
      action: "Spin",
    },
    dice: {
      title: "Dice",
      symbol: "?",
      description: "Guess over or under the target. Clean math and instant results.",
      action: "Roll",
    },
    crash: {
      title: "Crash",
      symbol: "?",
      description: "The multiplier rises. Collect the Coin win before the crash.",
      action: "Start",
    },
    blackjack: {
      title: "Blackjack",
      description: "One fast hand against the dealer. 21 takes the pot.",
      action: "Deal",
    },
    plinko: {
      title: "Plinko",
      symbol: "?",
      description: "Drop the ball, catch a multiplier and take the payout.",
      action: "Drop ball",
    },
    mines: {
      title: "Mines",
      symbol: "?",
      description: "Open safe tiles and avoid mines. Longer runs raise the multiplier.",
      action: "Start",
    },
    wheel: {
      title: "Wheel",
      symbol: "?",
      description: "A lucky wheel with sectors from x0.2 to x10.",
      action: "Spin",
    },
  },
};

const coinPackages = [
  { id: "coins_10k", coins: 10000, amount: 4.99, label: "10,000 Coins" },
  { id: "coins_50k", coins: 50000, amount: 14.99, label: "50,000 Coins" },
  { id: "coins_100k", coins: 100000, amount: 24.99, label: "100,000 Coins" },
  { id: "coins_500k", coins: 500000, amount: 79.99, label: "500,000 Coins" },
  { id: "coins_1m", coins: 1000000, amount: 129.99, label: "1,000,000 Coins" },
];

const state = {
  balance: Number(localStorage.getItem("velora-balance")) || 100000,
  bet: Number(localStorage.getItem("velora-bet")) || 1000,
  user: null,
  profile: null,
  authMode: "signin",
  authReady: false,
  walletMode: localStorage.getItem("velora-wallet-mode") || "coins",
  settings: JSON.parse(localStorage.getItem("velora-settings") || "{}"),
  lang: localStorage.getItem("velora-lang") || "ru",
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
  slotEngine: {
    theme: localStorage.getItem("velora-slot-theme") || "olympus",
    bet: Number(localStorage.getItem("velora-slot-bet")) || 1000,
    grid: [],
    spinning: false,
    autoplay: false,
    autoplayRounds: 0,
    freeSpins: 0,
    multiplier: 1,
    cascade: 0,
    lastWin: 0,
    settings: JSON.parse(
      localStorage.getItem("velora-slot-settings") ||
        '{"rtp":94,"volatility":"medium","maxBet":1000000000,"maxWin":5000000,"bonusFrequency":5,"freeSpinCap":25000000}',
    ),
    freeSpinSessionWin: 0,
  },
};

const els = {
  balance: document.querySelector("#balance"),
  betInput: document.querySelector("#betInput"),
  decreaseBet: document.querySelector("#decreaseBet"),
  increaseBet: document.querySelector("#increaseBet"),
  quickBets: document.querySelectorAll(".quick-bets button"),
  languageBtn: document.querySelector("#languageBtn"),
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
  accountVip: document.querySelector("#accountVip"),
  profileBtn: document.querySelector("#profileBtn"),
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
  promoBtn: document.querySelector("#promoBtn"),
  vipBtn: document.querySelector("#vipBtn"),
  cashierBtn: document.querySelector("#cashierBtn"),
  settingsBtn: document.querySelector("#settingsBtn"),
  utilityDialog: document.querySelector("#utilityDialog"),
  utilityTitle: document.querySelector("#utilityTitle"),
  utilityContent: document.querySelector("#utilityContent"),
  utilityClose: document.querySelector("#utilityClose"),
  slotLauncherDialog: document.querySelector("#slotLauncherDialog"),
  slotLauncherTitle: document.querySelector("#slotLauncherTitle"),
  slotLauncherContent: document.querySelector("#slotLauncherContent"),
  slotLauncherClose: document.querySelector("#slotLauncherClose"),
  slotEngine: document.querySelector("#slotEngine"),
  slotThemeSelect: document.querySelector("#slotThemeSelect"),
  slotThemeBadge: document.querySelector("#slotThemeBadge"),
  slotGrid: document.querySelector("#slotGrid"),
  slotStatus: document.querySelector("#slotStatus"),
  slotWinDisplay: document.querySelector("#slotWinDisplay"),
  slotCascade: document.querySelector("#slotCascade"),
  slotMultiplier: document.querySelector("#slotMultiplier"),
  slotFreeSpins: document.querySelector("#slotFreeSpins"),
  slotBetInput: document.querySelector("#slotBetInput"),
  slotBetButtons: document.querySelectorAll("[data-slot-bet]"),
  slotSpinBtn: document.querySelector("#slotSpinBtn"),
  slotAutoplay: document.querySelector("#slotAutoplay"),
  slotAutoplayRounds: document.querySelector("#slotAutoplayRounds"),
  slotAdminToggle: document.querySelector("#slotAdminToggle"),
  slotAdminPanel: document.querySelector("#slotAdminPanel"),
  slotRtpInput: document.querySelector("#slotRtpInput"),
  slotRtpValue: document.querySelector("#slotRtpValue"),
  slotVolatilitySelect: document.querySelector("#slotVolatilitySelect"),
  slotMaxBetInput: document.querySelector("#slotMaxBetInput"),
  slotMaxWinInput: document.querySelector("#slotMaxWinInput"),
  slotBonusFrequencyInput: document.querySelector("#slotBonusFrequencyInput"),
  slotFreeSpinCapInput: document.querySelector("#slotFreeSpinCapInput"),
};

const supabaseSettings = window.VELORA_SUPABASE || {};
const paymentConfig = window.VERS_PAYMENT_CONFIG || {};
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
const MINI_GAME_MIN_BET = 100;
const MINI_GAME_MAX_BET = 1000000000;
const MINI_GAME_BET_STEP = 100;
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const tr = (key) => key.split(".").reduce((value, part) => value?.[part], i18n[state.lang]) ?? key;
const escapeHtml = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

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
  const requested = Number(value);
  const clean = clamp(
    Math.round((Number.isFinite(requested) ? requested : MINI_GAME_MIN_BET) / MINI_GAME_BET_STEP) * MINI_GAME_BET_STEP,
    MINI_GAME_MIN_BET,
    Math.min(MINI_GAME_MAX_BET, Math.max(MINI_GAME_MIN_BET, state.balance || MINI_GAME_MAX_BET)),
  );
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

function setText(selector, text) {
  const node = document.querySelector(selector);
  if (node) node.textContent = text;
}

function setLabelLead(selector, text) {
  const node = document.querySelector(selector);
  if (node?.firstChild) node.firstChild.textContent = text;
}

function applyLanguage() {
  const copy = i18n[state.lang];
  document.documentElement.lang = state.lang;
  els.languageBtn.lastChild.textContent = ` ${copy.lang}`;
  els.searchInput.placeholder = copy.search;
  setText('.nav-item[data-filter="all"] span:last-child', copy.nav.all);
  setText('.nav-item[data-filter="slots"] span:last-child', copy.nav.slots);
  setText('.nav-item[data-filter="roulette"] span:last-child', copy.nav.roulette);
  setText("#promoBtn span:last-child", copy.nav.promo);
  setText("#vipBtn span:last-child", copy.nav.vip);
  setText("#cashierBtn span:last-child", copy.nav.cashier);
  setText("#settingsBtn span:last-child", copy.nav.settings);
  setText(".game-heading span:last-child", copy.selectedGame);
  setText(".strip-title strong", copy.recent);
  setText(".slot-engine-head small", copy.slot.kicker);
  setText(".slot-engine-head h2", copy.slot.title);
  setText(".slot-engine-head p", copy.slot.copy);
  setLabelLead(".slot-theme-picker label", copy.slot.theme);
  setText("#slotAdminToggle", copy.slot.admin);
  setLabelLead(".slot-control-field", copy.slot.bet);
  setText("#slotSpinBtn", copy.slot.spin);
  const autoplayLabel = document.querySelector(".slot-auto-panel label");
  if (autoplayLabel) {
    autoplayLabel.innerHTML = "";
    autoplayLabel.append(els.slotAutoplay, document.createTextNode(` ${copy.slot.autoplay}`));
  }
  setLabelLead(".slot-admin-panel label:first-child", copy.slot.targetRtp);
  setLabelLead(".slot-admin-panel label:nth-child(2)", copy.slot.volatility);
  setText('.slot-admin-panel option[value="low"]', copy.slot.low);
  setText('.slot-admin-panel option[value="medium"]', copy.slot.medium);
  setText('.slot-admin-panel option[value="high"]', copy.slot.high);
  setText(".slot-admin-panel small", copy.slot.adminNote);
  setText(".provider-head h2", copy.providerTitle);
  setText(".provider-head p", copy.providerCopy);
  setText(".provider-head > span", copy.providerTag);
  setText('.tab[data-filter="all"]', copy.catalogAll);
  setText('.tab[data-filter="slots"]', copy.nav.slots);
  setText('.tab[data-filter="roulette"]', copy.nav.roulette);
  const selectLabels = document.querySelectorAll(".selects label");
  if (selectLabels[0]?.firstChild) selectLabels[0].firstChild.textContent = copy.catalogProvider;
  if (selectLabels[1]?.firstChild) selectLabels[1].firstChild.textContent = copy.catalogSort;
  setText(".bet-panel .section-head h2", copy.betTitle);
  setText(".switch-row > span:first-child", copy.autoGame);
  setLabelLead(".mini-grid label:first-child", copy.rounds);
  setLabelLead(".mini-grid label:nth-child(2)", copy.stopAt);
  setText("#cashoutBtn", copy.cashout);
  setText('#sortSelect option[value="popular"]', copy.sortPopular);
  setText('#sortSelect option[value="online"]', copy.sortOnline);
  setText('#sortSelect option[value="name"]', copy.sortName);
  updateModeUi();
  updateAccountUi();
  updateSlotMeters();
  updateAdminControls();
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
      display_name: state.profile?.display_name || "Player",
      avatar_url: state.profile?.avatar_url || "avatar-neon",
      games_played: state.profile?.games_played || 0,
      total_won: state.profile?.total_won || 0,
    })
    .eq("id", state.user.id);
  if (error) throw error;
}

function getAvatarLabel(profile = state.profile) {
  const avatar = profile?.avatar_url || localStorage.getItem("vers-avatar") || "avatar-neon";
  const map = {
    "avatar-neon": "V",
    "avatar-crown": "♛",
    "avatar-star": "★",
    "avatar-card": "A",
  };
  return map[avatar] || (profile?.display_name || "V").slice(0, 1).toUpperCase();
}

function getVipLevelName() {
  return getVipInfo().current.name;
}

function isAdmin() {
  return Boolean(state.profile?.is_admin || state.user?.app_metadata?.role === "admin" || state.user?.app_metadata?.is_admin);
}

function updateAccountUi() {
  const configured = Boolean(supabaseClient);
  els.accountChip.classList.toggle("is-online", Boolean(state.user));
  els.authOpenBtn.classList.toggle("is-hidden", Boolean(state.user));
  els.signOutBtn.classList.toggle("is-hidden", !state.user);
  els.authOpenBtn.textContent = tr("login");
  els.signOutBtn.textContent = tr("logout");

  if (!configured) {
    els.accountName.textContent = tr("guest");
    els.profileBtn.textContent = getAvatarLabel();
    els.accountVip.textContent = getVipLevelName();
    els.accountStatus.textContent = "Supabase key not set";
    return;
  }

  if (!state.user) {
    els.accountName.textContent = tr("guest");
    els.profileBtn.textContent = getAvatarLabel();
    els.accountVip.textContent = getVipLevelName();
    els.accountStatus.textContent = state.lang === "en" ? "Sign in to sync" : "Войдите для синхронизации";
    return;
  }

  const name = state.profile?.display_name || state.user.email?.split("@")[0] || "Player";
  els.accountName.textContent = name;
  els.profileBtn.textContent = getAvatarLabel();
  els.accountVip.textContent = getVipLevelName();
  els.accountStatus.textContent = state.user.email || (state.lang === "en" ? "Account active" : "Аккаунт активен");
}

function updateModeUi() {
  els.walletModeLabel.textContent = tr("wallet");
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
    { name: "Bronze", min: 0, perks: "Базовые промо и ежедневный бонус Coins" },
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
        <article><strong>Coins ${format(vip.totalWon)}</strong><span>Всего выиграно</span></article>
        <article><strong>Daily</strong><span>Бонусы только в Coins</span></article>
      </div>
      <p class="utility-note">VIP клуб работает только с VERS Coins. Уровни дают бонусы Coins и визуальные преимущества.</p>
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
          ["WELCOME", "10 000 Coins", "Стартовый бонус"],
          ["VIP5000", "5 000 Coins", "VIP Coin bonus"],
          ["LUCKY", "3 000 Coins", "Быстрый бонус"],
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
      <p class="utility-note">Промо начисляют только VERS Coins для развлечения. Coins нельзя вывести, обменять или продать.</p>
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
  toast(`Промо ${code}: +${format(promos[code])} Coins`);
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
        <strong>Coin Balance</strong>
        <p>VERS Coins являются развлекательными кредитами без денежной ценности. Их нельзя вывести, обменять, продать или получить за них призы.</p>
        <button id="realModeBtn" type="button">Понятно</button>
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
  state.walletMode = "coins";
  localStorage.setItem("velora-wallet-mode", "coins");
  updateModeUi();
  openUtility(
    "VERS Coins",
    `
      <div class="real-mode-card">
        <strong>Social casino entertainment credits</strong>
        <p>VERS Coins have no monetary value and cannot be withdrawn, exchanged, sold, transferred, or redeemed for prizes.</p>
      </div>
    `,
  );
}

function showCashier() {
  openUtility(
    tr("cashierTitle"),
    `
      <div class="cashier-panel coin-shop">
        ${coinPackages
          .map(
            (pack) => `
              <article>
                <strong>${pack.label}</strong>
                <p>$${pack.amount.toFixed(2)} · VERS Coins entertainment credits</p>
                <div class="coin-shop-actions">
                  <button type="button" data-buy-coins="${pack.id}" data-provider="stripe">Buy with Stripe</button>
                  <button type="button" data-buy-coins="${pack.id}" data-provider="crypto">Crypto</button>
                </div>
                <small>Cards, Apple Pay, and Google Pay may be available through Stripe Checkout.</small>
              </article>
            `,
          )
          .join("")}
      </div>
      <p class="utility-note">VERS Coins have no cash value and cannot be withdrawn.</p>
    `,
  );
  document.querySelectorAll("[data-buy-coins]").forEach((button) => {
    button.addEventListener("click", () => startCoinPurchase(button.dataset.buyCoins, button.dataset.provider, button));
  });
}

async function startCoinPurchase(packageId, provider, button) {
  const pack = coinPackages.find((item) => item.id === packageId);
  if (!pack) return;

  if (provider !== "stripe") {
    const checkoutUrl = paymentConfig.cryptoPaymentLinks?.[packageId];
    if (checkoutUrl) {
      window.open(checkoutUrl, "_blank", "noopener,noreferrer");
      return;
    }
    toast("Crypto payment placeholder: configure a provider and verify purchases with a backend webhook.");
    return;
  }

  if (!supabaseClient) {
    toast("Supabase is not configured yet.");
    return;
  }

  if (!state.user) {
    toast(state.lang === "en" ? "Sign in first" : "Сначала войдите в аккаунт");
    setAuthMode("signin");
    els.authDialog.showModal();
    return;
  }

  if (window.VERS_ENABLE_TEST_PAYMENTS) {
    setBalance(state.balance + pack.coins);
    toast(`${pack.label} added for development testing`);
    return;
  }

  const previousText = button?.textContent;
  if (button) {
    button.disabled = true;
    button.textContent = state.lang === "en" ? "Opening..." : "Открываем...";
  }

  try {
    const { data, error } = await supabaseClient.functions.invoke("create-stripe-checkout", {
      body: { package_id: packageId },
    });
    if (error) throw error;
    if (!data?.url) throw new Error("Stripe Checkout URL was not returned");
    window.location.href = data.url;
  } catch (error) {
    toast(error.message || "Could not start Stripe Checkout");
    if (button) {
      button.disabled = false;
      button.textContent = previousText;
    }
  }
}

function showProfileMenu() {
  const profileName = state.profile?.display_name || els.accountName.textContent || tr("guest");
  const safeName = escapeHtml(profileName);
  const avatar = state.profile?.avatar_url || localStorage.getItem("vers-avatar") || "avatar-neon";
  openUtility(
    tr("profile"),
    `
      <form id="profileForm" class="profile-form">
        <div class="profile-preview">
          <span>${getAvatarLabel()}</span>
          <div>
            <strong>${safeName}</strong>
            <small>VIP ${getVipLevelName()}${isAdmin() ? " · Admin" : ""}</small>
          </div>
        </div>
        <label>${tr("nickname")}<input id="profileNameInput" type="text" maxlength="24" value="${safeName}" /></label>
        <label>${tr("avatar")}
          <select id="profileAvatarSelect">
            <option value="avatar-neon" ${avatar === "avatar-neon" ? "selected" : ""}>VERS neon</option>
            <option value="avatar-crown" ${avatar === "avatar-crown" ? "selected" : ""}>Crown VIP</option>
            <option value="avatar-star" ${avatar === "avatar-star" ? "selected" : ""}>Star player</option>
            <option value="avatar-card" ${avatar === "avatar-card" ? "selected" : ""}>Card ace</option>
          </select>
        </label>
        <button type="submit">${tr("saveProfile")}</button>
      </form>
      <form id="passwordForm" class="profile-form">
        <label>${tr("newPassword")}<input id="newPasswordInput" type="password" minlength="6" autocomplete="new-password" /></label>
        <button type="submit">${tr("changePassword")}</button>
      </form>
    `,
  );
  document.querySelector("#profileForm")?.addEventListener("submit", saveProfileMenu);
  document.querySelector("#passwordForm")?.addEventListener("submit", changePassword);
}

const legalPages = {
  terms: ["Terms of Service", "VERS casino is a social casino and entertainment product. VERS Coins have no real-world monetary value and cannot be withdrawn, exchanged, sold, transferred for money, crypto, gift cards, NFTs, skins, goods, or prizes. Users must be 18+."],
  privacy: ["Privacy Policy", "We use account information to provide profiles, Coin Balance, purchase records, and support. Contact support@verscasino.com for privacy requests."],
  refund: ["Refund Policy", "Purchases are for VERS Coins entertainment credits only. Payments for Coins may be non-refundable once credited, unless required by law."],
  responsible: ["Responsible Play", "VERS is for entertainment only. Set personal limits, take breaks, and do not treat social casino play as a way to earn value or prizes."],
  age: ["Age Policy", "VERS casino is intended only for users 18 years of age or older."],
  contact: ["Contact", "Support email: support@verscasino.com"],
};

function showLegalPage(pageId) {
  const page = legalPages[pageId] || legalPages.terms;
  openUtility(
    page[0],
    `
      <div class="legal-copy">
        <p>${page[1]}</p>
        <p>VERS Coins are entertainment credits only. They cannot be redeemed for money, crypto, gift cards, NFTs, skins, goods, services, or prizes.</p>
      </div>
    `,
  );
}

async function saveProfileMenu(event) {
  event.preventDefault();
  const displayName = document.querySelector("#profileNameInput").value.trim() || "Player";
  const avatarUrl = document.querySelector("#profileAvatarSelect").value;
  localStorage.setItem("vers-avatar", avatarUrl);
  if (state.profile) {
    state.profile.display_name = displayName;
    state.profile.avatar_url = avatarUrl;
  }
  try {
    if (supabaseClient && state.user) await saveProfile();
    updateAccountUi();
    toast(state.lang === "en" ? "Profile saved" : "Профиль сохранен");
    els.utilityDialog.close();
  } catch (error) {
    toast(error.message || "Profile save failed");
  }
}

async function changePassword(event) {
  event.preventDefault();
  if (!supabaseClient || !state.user) {
    toast(state.lang === "en" ? "Sign in first" : "Сначала войдите в аккаунт");
    return;
  }
  const password = document.querySelector("#newPasswordInput").value;
  if (!password || password.length < 6) return toast(state.lang === "en" ? "Minimum 6 characters" : "Минимум 6 символов");
  const { error } = await supabaseClient.auth.updateUser({ password });
  if (error) return toast(error.message);
  toast(state.lang === "en" ? "Password changed" : "Пароль изменен");
  els.utilityDialog.close();
}

function setAuthMode(mode) {
  state.authMode = mode;
  const signup = mode === "signup";
  els.authTitle.textContent = signup ? "Создать аккаунт" : "Вход в VERS casino";
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
    .select("id,email,display_name,balance,games_played,total_won,avatar_url,is_admin")
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
    .select("id,email,display_name,balance,games_played,total_won,avatar_url,is_admin")
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
    await loadSlotSettingsRemote();
    state.balance = Number(state.profile.balance);
    els.balance.value = format(state.balance);
    localStorage.removeItem("velora-balance");
    state.authReady = true;
  }

  updateAccountUi();
  updateAdminControls();
}

async function handlePaymentReturn() {
  const url = new URL(window.location.href);
  const payment = url.searchParams.get("payment");
  if (!payment) return;

  url.searchParams.delete("payment");
  window.history.replaceState({}, "", `${url.pathname}${url.search}${url.hash}`);

  if (payment === "success") {
    toast("Payment received. Coins will appear after confirmation.");
    if (supabaseClient) {
      const { data } = await supabaseClient.auth.getSession();
      if (data.session) await applySession(data.session);
    }
    return;
  }

  if (payment === "cancel") {
    toast(state.lang === "en" ? "Payment cancelled." : "Оплата отменена.");
  }
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

function localizeGame(game) {
  return { ...game, ...(gameText[state.lang]?.[game.id] || {}) };
}

function addWin(gameTitle, amount, icon = "COIN") {
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
  toast(won ? `Выигрыш ${format(payout)} Coins` : "Раунд завершен без выигрыша");
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
    toast("Not enough VERS Coins. Open Coin Shop to buy Coins.");
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
            <small>Coins ${format(amount)}</small>
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
            <button type="button" data-provider-slot="${slot.id}">${tr("launch")}</button>
          </div>
        </article>
      `,
    )
    .join("");
  els.providerSlotsGrid.querySelectorAll("[data-provider-slot]").forEach((button) => {
    button.addEventListener("click", () => {
      const card = providerSlots.find((item) => item.id === button.dataset.providerSlot);
      if (card) selectGame(card.gameId, { scroll: true, hash: `game-${card.id}` });
    });
  });
}

function openProviderSlot(slotId) {
  const slot = providerSlots.find((item) => item.id === slotId);
  if (slot) selectGame(slot.gameId, { scroll: true, hash: `game-${slot.id}` });
}

function getSlotTheme() {
  return slotThemes[state.slotEngine.theme] || slotThemes.olympus;
}

function getSlotSymbols(theme, includeSpecial = true) {
  const volatility = state.slotEngine.settings.volatility || "medium";
  const scatterWeight = volatility === "high" ? 4 : volatility === "low" ? 7 : 5;
  const multiplierWeight = volatility === "high" ? 6 : volatility === "low" ? 3 : 4;
  const base = theme.symbols.map((symbol) => ({ ...symbol }));
  if (!includeSpecial) return base;
  return [
    ...base,
    { id: theme.scatter, label: "Scatter", icon: "scatter", weight: scatterWeight, pay: 0, special: "scatter" },
    { id: theme.multiplier, label: "Multiplier", icon: "multiplier", weight: multiplierWeight, pay: 0, special: "multiplier" },
  ];
}

function pickWeightedSymbol(symbols) {
  const total = symbols.reduce((sum, symbol) => sum + symbol.weight, 0);
  let roll = random(0, total);
  for (const symbol of symbols) {
    roll -= symbol.weight;
    if (roll <= 0) return { ...symbol };
  }
  return { ...symbols[symbols.length - 1] };
}

function makeSlotGrid(theme) {
  const symbols = getSlotSymbols(theme);
  return Array.from({ length: 30 }, () => pickWeightedSymbol(symbols));
}

function setSlotBet(value) {
  const adminMax = Number(state.slotEngine.settings.maxBet || 1000000000);
  const requested = Math.round(Number(value) || 1);
  if (requested < 1) toast("Minimum bet is 1 Coin");
  if (requested > state.balance) toast("Bet cannot exceed Coin Balance");
  state.slotEngine.bet = clamp(requested, 1, Math.min(adminMax, state.balance || adminMax));
  localStorage.setItem("velora-slot-bet", String(state.slotEngine.bet));
  if (els.slotBetInput) els.slotBetInput.value = state.slotEngine.bet;
}

function saveSlotSettings() {
  localStorage.setItem("velora-slot-settings", JSON.stringify(state.slotEngine.settings));
  saveSlotSettingsRemote().catch(() => {});
}

async function loadSlotSettingsRemote() {
  if (!supabaseClient || !state.user) return;
  const { data, error } = await supabaseClient
    .from("slot_engine_settings")
    .select("target_rtp,volatility")
    .eq("id", "global")
    .maybeSingle();
  if (error || !data) return;
  state.slotEngine.settings = {
    rtp: Number(data.target_rtp || state.slotEngine.settings.rtp),
    volatility: data.volatility || state.slotEngine.settings.volatility,
    maxBet: Number(data.max_bet || state.slotEngine.settings.maxBet || 1000000000),
    maxWin: Number(data.max_win || state.slotEngine.settings.maxWin || 5000000),
    bonusFrequency: Number(data.bonus_frequency || state.slotEngine.settings.bonusFrequency || 5),
    freeSpinCap: Number(data.free_spins_max_win || state.slotEngine.settings.freeSpinCap || 25000000),
  };
  localStorage.setItem("velora-slot-settings", JSON.stringify(state.slotEngine.settings));
}

async function saveSlotSettingsRemote() {
  if (!supabaseClient || !state.user || !isAdmin()) return;
  await supabaseClient.from("slot_engine_settings").upsert({
    id: "global",
    target_rtp: state.slotEngine.settings.rtp,
    volatility: state.slotEngine.settings.volatility,
    max_bet: state.slotEngine.settings.maxBet,
    max_win: state.slotEngine.settings.maxWin,
    bonus_frequency: state.slotEngine.settings.bonusFrequency,
    free_spins_max_win: state.slotEngine.settings.freeSpinCap,
    updated_by: state.user.id,
  });
}

function renderSlotEngine() {
  const theme = getSlotTheme();
  if (!state.slotEngine.grid.length) state.slotEngine.grid = makeSlotGrid(theme);
  if (els.slotThemeSelect) els.slotThemeSelect.value = state.slotEngine.theme;
  if (els.slotThemeBadge) els.slotThemeBadge.textContent = theme.badge;
  if (els.slotBetInput) els.slotBetInput.value = state.slotEngine.bet;
  if (els.slotRtpInput) els.slotRtpInput.value = state.slotEngine.settings.rtp;
  if (els.slotRtpValue) els.slotRtpValue.textContent = `${Number(state.slotEngine.settings.rtp).toFixed(1).replace(".0", "")}%`;
  if (els.slotVolatilitySelect) els.slotVolatilitySelect.value = state.slotEngine.settings.volatility;
  if (els.slotMaxBetInput) els.slotMaxBetInput.value = state.slotEngine.settings.maxBet || 1000000000;
  if (els.slotMaxWinInput) els.slotMaxWinInput.value = state.slotEngine.settings.maxWin || 5000000;
  if (els.slotBonusFrequencyInput) els.slotBonusFrequencyInput.value = state.slotEngine.settings.bonusFrequency || 5;
  if (els.slotFreeSpinCapInput) els.slotFreeSpinCapInput.value = state.slotEngine.settings.freeSpinCap || 25000000;
  els.slotEngine.style.setProperty("--slot-theme-accent", theme.accent);
  els.slotEngine.style.setProperty("--slot-theme-reel", theme.reel);
  if (!state.slotEngine.spinning && !state.slotEngine.lastWin) els.slotStatus.textContent = tr("slot.ready");
  renderSlotGrid();
  updateSlotMeters();
  updateAdminControls();
}

function updateAdminControls() {
  const allowed = isAdmin();
  els.slotAdminToggle.classList.toggle("is-locked", !allowed);
  els.slotAdminToggle.textContent = allowed ? tr("slot.admin") : `${tr("slot.admin")} 🔒`;
  if (!allowed) els.slotAdminPanel.hidden = true;
  els.slotRtpInput.disabled = !allowed;
  els.slotVolatilitySelect.disabled = !allowed;
  [els.slotMaxBetInput, els.slotMaxWinInput, els.slotBonusFrequencyInput, els.slotFreeSpinCapInput].forEach((input) => {
    if (input) input.disabled = !allowed;
  });
}

function renderSlotIcon(symbol) {
  const common = 'viewBox="0 0 64 64" aria-hidden="true" focusable="false"';
  const icons = {
    bolt: `<svg ${common}><path d="M36 4 14 36h16l-3 24 23-34H34l2-22Z"/><path class="shine" d="M34 10 20 31"/></svg>`,
    helmet: `<svg ${common}><path d="M11 38C12 17 26 8 43 12c7 2 11 8 11 17v19H38V34H25v14H11V38Z"/><path class="shine" d="M24 23c6-5 15-5 22 1"/></svg>`,
    lyre: `<svg ${common}><path d="M19 10c-6 14-4 30 13 38 17-8 19-24 13-38"/><path d="M22 12v28M30 10v34M38 12v28M18 49h28"/></svg>`,
    crown: `<svg ${common}><path d="m9 24 13 10 10-20 10 20 13-10-5 27H14L9 24Z"/><circle cx="32" cy="14" r="4"/></svg>`,
    gem: `<svg ${common}><path d="M14 18h36l8 12-26 28L6 30l8-12Z"/><path class="shine" d="M14 30h36M24 18l8 40 8-40"/></svg>`,
    orb: `<svg ${common}><circle cx="32" cy="32" r="22"/><path class="shine" d="M22 23c7-7 19-6 25 2"/></svg>`,
    lollipop: `<svg ${common}><circle cx="32" cy="23" r="16"/><path d="M42 35 24 59"/><path class="shine" d="M24 18c7-7 19-5 23 4"/></svg>`,
    candy: `<svg ${common}><path d="M21 22h22l8 10-8 10H21l-8-10 8-10Z"/><path d="M13 32 4 23v18l9-9ZM51 32l9-9v18l-9-9Z"/></svg>`,
    cube: `<svg ${common}><path d="m32 7 24 14v28L32 62 8 49V21L32 7Z"/><path class="shine" d="M8 21 32 35l24-14M32 35v27"/></svg>`,
    grapes: `<svg ${common}><circle cx="25" cy="25" r="9"/><circle cx="39" cy="25" r="9"/><circle cx="20" cy="38" r="9"/><circle cx="34" cy="39" r="9"/><circle cx="29" cy="52" r="8"/><path d="M34 15c4-7 10-8 17-5"/></svg>`,
    star: `<svg ${common}><path d="m32 6 7 17 18 1-14 12 5 18-16-10-16 10 5-18L7 24l18-1 7-17Z"/></svg>`,
    drop: `<svg ${common}><path d="M32 5c13 16 20 27 20 38 0 10-8 17-20 17s-20-7-20-17C12 32 19 21 32 5Z"/></svg>`,
    fish: `<svg ${common}><path d="M7 33c10-14 29-18 42-4l9-9v26l-9-8C36 51 17 47 7 33Z"/><circle class="dark" cx="42" cy="31" r="3"/></svg>`,
    boat: `<svg ${common}><path d="M8 38h48l-8 14H16L8 38Z"/><path d="M31 8v28M31 10l18 16H31"/></svg>`,
    rod: `<svg ${common}><path d="M14 50C29 20 43 10 55 8"/><path d="M21 38c13 0 21 5 23 16"/><circle cx="45" cy="55" r="4"/></svg>`,
    buoy: `<svg ${common}><circle cx="32" cy="32" r="23"/><circle class="cut" cx="32" cy="32" r="10"/><path d="M16 16 26 26M48 16 38 26M16 48l10-10M48 48 38 38"/></svg>`,
    hook: `<svg ${common}><path d="M36 7v36c0 9-7 15-15 12-7-3-8-12-2-17"/><path d="M28 7h16"/></svg>`,
    wave: `<svg ${common}><path d="M5 39c8-11 16-11 24 0s16 11 24 0"/><path d="M5 25c8-9 16-9 24 0s16 9 24 0"/></svg>`,
    compass: `<svg ${common}><circle cx="32" cy="32" r="24"/><path d="m41 13-6 22-22 6 16-12 12-16Z"/><circle class="dark" cx="32" cy="32" r="4"/></svg>`,
    map: `<svg ${common}><path d="m8 17 15-6 18 6 15-6v36l-15 6-18-6-15 6V17Z"/><path class="shine" d="M23 11v36M41 17v36"/></svg>`,
    key: `<svg ${common}><circle cx="21" cy="35" r="12"/><path d="M32 35h25M47 35v9M39 35v6"/></svg>`,
    torch: `<svg ${common}><path d="M25 28c-6-9 5-15 7-24 3 8 13 13 7 24H25Z"/><path d="M26 30h12l-4 28h-4l-4-28Z"/></svg>`,
    relic: `<svg ${common}><path d="M16 17h32v36H16V17Z"/><path class="shine" d="M23 25h18M23 34h14M23 43h18"/></svg>`,
    scatter: `<svg ${common}><path d="M32 5 39 24h20L43 36l6 20-17-12-17 12 6-20L5 24h20L32 5Z"/><circle class="dark" cx="32" cy="32" r="7"/></svg>`,
    multiplier: `<svg ${common}><circle cx="32" cy="32" r="25"/><path class="dark" d="m22 20 20 24M42 20 22 44"/></svg>`,
  };
  return icons[symbol.icon] || icons.gem;
}

function renderSlotGrid(winningIndexes = []) {
  if (!els.slotGrid) return;
  const winSet = new Set(winningIndexes);
  els.slotGrid.innerHTML = state.slotEngine.grid
    .map((symbol, index) => {
      const classes = ["slot-cell"];
      if (symbol.special === "scatter") classes.push("is-scatter");
      if (symbol.special === "multiplier") classes.push("is-multiplier");
      if (winSet.has(index)) classes.push("is-winning");
      return `<span class="${classes.join(" ")}" style="--delay:${(index % 6) * 34}ms" title="${symbol.label}" aria-label="${symbol.label}">${renderSlotIcon(symbol)}</span>`;
    })
    .join("");
}

function updateSlotMeters() {
  els.slotCascade.parentElement.innerHTML = `${tr("slot.cascade")} <b id="slotCascade">${state.slotEngine.cascade}</b>`;
  els.slotMultiplier.parentElement.innerHTML = `${tr("slot.multiplier")} <b id="slotMultiplier">x${state.slotEngine.multiplier}</b>`;
  els.slotFreeSpins.parentElement.innerHTML = `${tr("slot.freeSpins")} <b id="slotFreeSpins">${state.slotEngine.freeSpins}</b>`;
  els.slotCascade = document.querySelector("#slotCascade");
  els.slotMultiplier = document.querySelector("#slotMultiplier");
  els.slotFreeSpins = document.querySelector("#slotFreeSpins");
  els.slotWinDisplay.textContent = `${format(state.slotEngine.lastWin)} Coins`;
  els.slotSpinBtn.disabled = state.slotEngine.spinning;
}

function evaluateSlotWins(grid, theme) {
  const counts = new Map();
  const bySymbol = new Map();
  grid.forEach((symbol, index) => {
    if (symbol.special) return;
    counts.set(symbol.id, (counts.get(symbol.id) || 0) + 1);
    bySymbol.set(symbol.id, [...(bySymbol.get(symbol.id) || []), index]);
  });

  const winningIndexes = [];
  let baseMultiplier = 0;
  counts.forEach((count, id) => {
    if (count < 8) return;
    const symbol = theme.symbols.find((item) => item.id === id);
    if (!symbol) return;
    winningIndexes.push(...bySymbol.get(id));
    baseMultiplier += symbol.pay * Math.pow(count / 8, 1.22);
  });

  const scatters = grid.filter((symbol) => symbol.special === "scatter").length;
  const multipliers = grid.filter((symbol) => symbol.special === "multiplier").length;
  return { winningIndexes, baseMultiplier, scatters, multipliers };
}

function cascadeSlotGrid(winningIndexes, theme) {
  const winSet = new Set(winningIndexes);
  const source = getSlotSymbols(theme);
  const next = [...state.slotEngine.grid];
  for (let reel = 0; reel < 6; reel += 1) {
    const kept = [];
    for (let row = 4; row >= 0; row -= 1) {
      const index = row * 6 + reel;
      if (!winSet.has(index)) kept.push(next[index]);
    }
    for (let row = 4; row >= 0; row -= 1) {
      const index = row * 6 + reel;
      next[index] = kept.shift() || pickWeightedSymbol(source);
    }
  }
  state.slotEngine.grid = next;
}

function getCascadeMultiplier(extraMultipliers, isFreeSpin) {
  if (!extraMultipliers) return state.slotEngine.multiplier;
  const boost = Array.from({ length: extraMultipliers }, () => [2, 3, 5][randomInt(0, 2)]).reduce((sum, item) => sum + item, 0);
  if (isFreeSpin) {
    state.slotEngine.multiplier += boost;
    return state.slotEngine.multiplier;
  }
  return Math.max(state.slotEngine.multiplier, boost);
}

async function playSlotRound({ free = false } = {}) {
  const theme = getSlotTheme();
  const bet = state.slotEngine.bet;
  state.slotEngine.grid = makeSlotGrid(theme);
  state.slotEngine.cascade = 0;
  state.slotEngine.multiplier = free ? Math.max(2, state.slotEngine.multiplier) : 1;
  state.slotEngine.lastWin = 0;
  els.slotStatus.textContent = free ? tr("slot.freeRunning") : tr("slot.spinning");
  renderSlotGrid();
  updateSlotMeters();
  await sleep(420);

  let totalWin = 0;
  let safety = 0;
  let scatterAwarded = false;
  while (safety < 8) {
    safety += 1;
    const result = evaluateSlotWins(state.slotEngine.grid, theme);
    if (!scatterAwarded && result.scatters >= 4) {
      state.slotEngine.freeSpins += result.scatters >= 5 ? 12 : 10;
      scatterAwarded = true;
    }
    if (!result.winningIndexes.length) break;
    state.slotEngine.cascade += 1;
    const multiplier = getCascadeMultiplier(result.multipliers, free);
    const rtpScale = clamp(Number(state.slotEngine.settings.rtp || 94) / 94, 0.84, 1.08);
    const cascadeWin = Math.min(bet * result.baseMultiplier * multiplier * rtpScale, Number(state.slotEngine.settings.maxWin || 5000000));
    totalWin += cascadeWin;
    state.slotEngine.lastWin = totalWin;
    els.slotStatus.textContent = `${tr("slot.cascade")} ${state.slotEngine.cascade}: ${format(cascadeWin)} Coins`;
    renderSlotGrid(result.winningIndexes);
    updateSlotMeters();
    await sleep(520);
    cascadeSlotGrid(result.winningIndexes, theme);
    renderSlotGrid();
    await sleep(300);
  }

  state.slotEngine.lastWin = Math.round(totalWin * 100) / 100;
  if (state.slotEngine.lastWin > 0) {
    setBalance(state.balance + state.slotEngine.lastWin);
    addWin(theme.name, state.slotEngine.lastWin, theme.badge.slice(0, 2));
  }
  recordProfileRound(state.slotEngine.lastWin);
  els.slotStatus.textContent = state.slotEngine.lastWin > 0 ? `${tr("slot.win")} ${format(state.slotEngine.lastWin)} Coins` : tr("slot.noWin");
  updateSlotMeters();
  await sleep(520);
}

async function runSlotFreeSpins() {
  if (state.slotEngine.freeSpins > 0) {
    state.slotEngine.freeSpinSessionWin = 0;
    openUtility("10 FREE SPINS WON", `<div class="big-win-card"><strong>Bonus mode unlocked</strong><p>Free spins start automatically. Remaining spins are shown on the slot panel.</p></div>`);
    await sleep(900);
    if (els.utilityDialog.open) els.utilityDialog.close();
  }
  while (state.slotEngine.freeSpins > 0) {
    const before = state.slotEngine.lastWin;
    state.slotEngine.freeSpins -= 1;
    updateSlotMeters();
    await playSlotRound({ free: true });
    state.slotEngine.freeSpinSessionWin = Math.min(
      state.slotEngine.freeSpinSessionWin + Math.max(0, state.slotEngine.lastWin - before),
      Number(state.slotEngine.settings.freeSpinCap || 25000000),
    );
  }
  if (state.slotEngine.freeSpinSessionWin > 0) {
    openUtility(
      "Free Spins Summary",
      `<div class="big-win-card"><strong>${format(state.slotEngine.freeSpinSessionWin)} Coins</strong><p>Final Coin Balance: ${format(state.balance)} Coins</p><button type="button" data-continue-summary>Continue</button></div>`,
    );
    document.querySelector("[data-continue-summary]")?.addEventListener("click", () => els.utilityDialog.close());
  }
  state.slotEngine.multiplier = 1;
  updateSlotMeters();
}

async function spinSlot() {
  if (state.slotEngine.spinning) return;
  state.slotEngine.spinning = true;
  updateSlotMeters();
  try {
    if (!chargeBet(state.slotEngine.bet)) return;
    await playSlotRound();
    await runSlotFreeSpins();
  } finally {
    state.slotEngine.spinning = false;
    updateSlotMeters();
  }
}

async function runSlotAutoplay() {
  state.slotEngine.autoplayRounds = clamp(Number(els.slotAutoplayRounds.value) || 10, 1, 100);
  while (els.slotAutoplay.checked && state.slotEngine.autoplayRounds > 0 && state.balance >= state.slotEngine.bet) {
    state.slotEngine.autoplayRounds -= 1;
    els.slotAutoplayRounds.value = state.slotEngine.autoplayRounds || 1;
    await spinSlot();
    await sleep(420);
  }
  els.slotAutoplay.checked = false;
}

function renderGames() {
  let list = [...games];
  if (state.filter !== "all") list = list.filter((game) => game.id === state.filter);
  if (state.provider !== "all") list = list.filter((game) => game.provider === state.provider);
  if (state.query) {
    const query = state.query.toLowerCase();
    list = list.filter((game) => localizeGame(game).title.toLowerCase().includes(query));
  }
  if (state.sort === "online") list.sort((a, b) => b.online - a.online);
  if (state.sort === "name") list.sort((a, b) => localizeGame(a).title.localeCompare(localizeGame(b).title));

  els.gamesGrid.innerHTML = list
    .map((baseGame) => {
      const game = localizeGame(baseGame);
      const onlineText = state.lang === "en" ? "playing" : "играет";
      return `
        <article class="game-card ${game.id === state.activeGame ? "is-active" : ""}" style="--card-glow:${game.color}55; --card-border:${game.border}">
          <button type="button" data-game="${game.id}" aria-label="${state.lang === "en" ? "Select game" : "Выбрать игру"} ${game.title}">
            <div class="game-visual">
              <span class="game-symbol">${game.symbol}</span>
            </div>
            <div class="game-info">
              <strong>${game.title}</strong>
              <span><i class="online-dot"></i>${game.online.toLocaleString(state.lang === "en" ? "en-US" : "ru-RU")} ${onlineText}</span>
            </div>
          </button>
        </article>
      `;
    })
    .join("");

  els.gamesGrid.querySelectorAll("[data-game]").forEach((btn) => {
    btn.addEventListener("click", () => selectGame(btn.dataset.game, { scroll: true, hash: `game-${btn.dataset.game}` }));
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

function selectGame(gameId, options = {}) {
  if (state.crash.running) return toast("Сначала завершите Crash-раунд.");
  state.activeGame = gameId;
  state.mines.active = false;
  state.mines.locked = false;
  renderActiveGame();
  renderGames();
  if (options.hash) history.replaceState(null, "", `#${options.hash}`);
  if (options.scroll) document.querySelector("#activeGameSection")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function renderActiveGame() {
  const game = localizeGame(getActiveGame());
  els.activeGameTitle.textContent = game.title;
  els.activeGameDescription.textContent = game.description;
  els.playBtn.textContent = game.action;
  els.playBtn.disabled = false;
  els.cashoutBtn.classList.add("is-hidden");
  els.roundMessage.textContent = state.lang === "en" ? "Ready for bet." : "Готово к ставке.";
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
      <p class="control-note">Быстрая social-casino раздача: игрок против дилера. Лучшая рука до 21 получает Coins.</p>
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
  localizeDynamicControls(gameId);
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

function localizeDynamicControls(gameId) {
  if (state.lang !== "en") return;
  const title = els.dynamicControls.querySelector(".dynamic-title");
  const note = els.dynamicControls.querySelector(".control-note");
  const setDynamicText = (selector, text) => {
    const node = els.dynamicControls.querySelector(selector);
    if (node) node.textContent = text;
  };
  if (gameId === "plinko") {
    if (title) title.textContent = "Risk";
    setDynamicText('[data-risk="low"]', "Low");
    setDynamicText('[data-risk="medium"]', "Medium");
    setDynamicText('[data-risk="high"]', "High");
    const label = els.dynamicControls.querySelector(".range-row label");
    if (label) label.innerHTML = `Rows <strong>${state.rows}</strong>`;
  }
  if (gameId === "roulette") {
    if (title) title.textContent = "Color";
    setDynamicText('[data-roulette="red"]', "Red x2");
    setDynamicText('[data-roulette="black"]', "Black x2");
    setDynamicText('[data-roulette="green"]', "Zero x14");
  }
  if (gameId === "dice") {
    if (title) title.textContent = "Condition";
    setDynamicText('[data-dice-mode="over"]', "Over");
    setDynamicText('[data-dice-mode="under"]', "Under");
    const label = els.dynamicControls.querySelector(".range-row label");
    if (label) label.innerHTML = `Target <strong>${state.diceTarget}</strong>`;
  }
  if (gameId === "crash" && note) note.textContent = "After start, Collect locks the current Coin multiplier. If the curve crashes first, the round ends.";
  if (gameId === "mines" && note) note.textContent = "Open safe tiles, then collect the current Coin win. Two hidden tiles contain mines.";
  if (gameId === "blackjack" && note) note.textContent = "Fast social-casino hand: player against dealer. The bank pays the better hand up to 21 in Coins.";
  if (gameId === "slots" && note) {
    if (title) title.textContent = "Slots";
    note.textContent = "Two matching icons pay x1.8, three matching icons pay x10, and three sevens pay x50.";
  }
  if (gameId === "wheel" && note) {
    if (title) title.textContent = "Wheel";
    note.textContent = "Wheel sectors pay different multipliers. Higher sectors are rarer.";
  }
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
  toast(`Crash выплата ${format(payout)} Coins`);
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
  toast(`Mines выплата ${format(payout)} Coins`);
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
  els.decreaseBet.addEventListener("click", () => setBet(state.bet - MINI_GAME_BET_STEP));
  els.increaseBet.addEventListener("click", () => setBet(state.bet + MINI_GAME_BET_STEP));
  els.betInput.addEventListener("change", (event) => setBet(event.target.value));
  els.quickBets.forEach((btn) => btn.addEventListener("click", () => setBet(Number(btn.dataset.bet))));
  els.languageBtn.addEventListener("click", () => {
    state.lang = state.lang === "ru" ? "en" : "ru";
    localStorage.setItem("velora-lang", state.lang);
    applyLanguage();
    renderActiveGame();
    renderGames();
    renderProviderSlots();
  });
  els.profileBtn.addEventListener("click", showProfileMenu);
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
  els.cashierBtn.addEventListener("click", showCashier);
  els.settingsBtn.addEventListener("click", showSettings);
  document.querySelectorAll("[data-legal]").forEach((button) => {
    button.addEventListener("click", () => showLegalPage(button.dataset.legal));
  });
  els.utilityClose.addEventListener("click", () => els.utilityDialog.close());
  els.slotLauncherClose.addEventListener("click", () => {
    els.slotLauncherDialog.close();
    els.slotLauncherContent.innerHTML = "";
  });
  els.slotThemeSelect.addEventListener("change", (event) => {
    state.slotEngine.theme = event.target.value;
    localStorage.setItem("velora-slot-theme", state.slotEngine.theme);
    state.slotEngine.grid = makeSlotGrid(getSlotTheme());
    state.slotEngine.cascade = 0;
    state.slotEngine.multiplier = 1;
    state.slotEngine.lastWin = 0;
    els.slotStatus.textContent = `${getSlotTheme().name} loaded`;
    renderSlotEngine();
  });
  els.slotBetInput.addEventListener("change", (event) => setSlotBet(event.target.value));
  els.slotBetButtons.forEach((button) => {
    button.addEventListener("click", () => setSlotBet(button.dataset.slotBet));
  });
  els.slotSpinBtn.addEventListener("click", spinSlot);
  els.slotAutoplay.addEventListener("change", () => {
    if (els.slotAutoplay.checked) runSlotAutoplay();
  });
  els.slotAdminToggle.addEventListener("click", () => {
    if (!isAdmin()) {
      toast(state.lang === "en" ? "Admin access required" : "Нужен доступ администратора");
      return;
    }
    els.slotAdminPanel.hidden = !els.slotAdminPanel.hidden;
  });
  els.slotRtpInput.addEventListener("input", (event) => {
    if (!isAdmin()) return;
    state.slotEngine.settings.rtp = Number(event.target.value);
    els.slotRtpValue.textContent = `${Number(event.target.value).toFixed(1).replace(".0", "")}%`;
    saveSlotSettings();
  });
  els.slotVolatilitySelect.addEventListener("change", (event) => {
    if (!isAdmin()) return;
    state.slotEngine.settings.volatility = event.target.value;
    state.slotEngine.grid = makeSlotGrid(getSlotTheme());
    saveSlotSettings();
    renderSlotEngine();
  });
  [els.slotMaxBetInput, els.slotMaxWinInput, els.slotBonusFrequencyInput, els.slotFreeSpinCapInput].forEach((input) => {
    input?.addEventListener("change", () => {
      if (!isAdmin()) return;
      state.slotEngine.settings.maxBet = Number(els.slotMaxBetInput.value) || 1000000000;
      state.slotEngine.settings.maxWin = Number(els.slotMaxWinInput.value) || 5000000;
      state.slotEngine.settings.bonusFrequency = Number(els.slotBonusFrequencyInput.value) || 5;
      state.slotEngine.settings.freeSpinCap = Number(els.slotFreeSpinCapInput.value) || 25000000;
      saveSlotSettings();
      setSlotBet(state.slotEngine.bet);
    });
  });
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
  renderSlotEngine();
  renderActiveGame();
  renderGames();
  syncFilterButtons();
  bindEvents();
  applyLanguage();
  setAuthMode("signin");
  updateModeUi();
  await loadSession();
  await handlePaymentReturn();
}

init();
