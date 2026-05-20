export type CoinPackage = {
  id: string;
  coins: number;
  amountUsd: number;
  label: string;
};

export const coinPackages: Record<string, CoinPackage> = {
  coins_test_1usd: { id: "coins_test_1usd", coins: 100, amountUsd: 1, label: "100 VERS Coins Test" },
  coins_10k: { id: "coins_10k", coins: 10000, amountUsd: 4.99, label: "10,000 VERS Coins" },
  coins_50k: { id: "coins_50k", coins: 50000, amountUsd: 14.99, label: "50,000 VERS Coins" },
  coins_100k: { id: "coins_100k", coins: 100000, amountUsd: 24.99, label: "100,000 VERS Coins" },
  coins_500k: { id: "coins_500k", coins: 500000, amountUsd: 79.99, label: "500,000 VERS Coins" },
  coins_1m: { id: "coins_1m", coins: 1000000, amountUsd: 129.99, label: "1,000,000 VERS Coins" },
};

export function getCoinPackage(packageId: string | undefined): CoinPackage | null {
  if (!packageId) return null;
  return coinPackages[packageId] || null;
}
