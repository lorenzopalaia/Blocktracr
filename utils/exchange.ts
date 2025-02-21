import { type Exchange, type Balance } from "ccxt";

interface BalanceType extends Partial<Balance> {
  [key: string]: number | undefined;
}

interface BalanceValue {
  crypto: string;
  amount: number;
  usdtValue: number;
}

export async function calculateBalanceValues(
  balanceType: BalanceType,
  exchange: Exchange,
): Promise<BalanceValue[]> {
  return Promise.all(
    Object.entries(balanceType)
      .filter(([, amount]) => Number(amount) > 0)
      .map(async ([crypto, amount]) => {
        const numAmount = Number(amount);
        if (crypto === "USDT")
          return { crypto, amount: numAmount, usdtValue: numAmount };
        const ticker = await exchange.fetchTicker(`${crypto}/USDT`);
        const lastPrice = ticker.last ?? 0;
        return {
          crypto,
          amount: numAmount,
          usdtValue: lastPrice * numAmount,
        };
      }),
  ).then((values) => values.sort((a, b) => b.usdtValue - a.usdtValue));
}

export function calculateTotalBalance(values: BalanceValue[]): number {
  return values.reduce((sum, { usdtValue }) => sum + Number(usdtValue), 0);
}

export async function fetchAllBalances(exchange: Exchange) {
  const balance = await exchange.fetchBalance();

  const totalValues = await calculateBalanceValues(balance.total, exchange);
  const freeValues = await calculateBalanceValues(balance.free, exchange);
  const usedValues = await calculateBalanceValues(balance.used, exchange);

  return {
    totalValues,
    freeValues,
    usedValues,
    totalBalance: calculateTotalBalance(totalValues),
    freeBalance: calculateTotalBalance(freeValues),
    usedBalance: calculateTotalBalance(usedValues),
  };
}

export async function fetchAllTrades(exchange: Exchange, tickers: string[]) {
  return (
    await Promise.all(
      tickers
        .filter((ticker) => ticker !== "USDT")
        .map(async (crypto) => {
          try {
            const symbol = `${crypto}/USDT`;
            const trades = await exchange.fetchMyTrades(symbol);
            return trades;
          } catch (error) {
            console.error(`Error fetching trades for ${crypto}: ${error}`);
            return [];
          }
        }),
    )
  ).flat();
}
