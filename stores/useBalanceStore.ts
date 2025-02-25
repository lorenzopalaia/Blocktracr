import { create } from "zustand";
import { type Exchange } from "ccxt";

interface BalanceValue {
  crypto: string;
  amount: number;
  usdtValue: number;
}

interface ExchangeBalance {
  totalValues: BalanceValue[];
  freeValues: BalanceValue[];
  usedValues: BalanceValue[];
  totalBalance: number;
  freeBalance: number;
  usedBalance: number;
}

interface BalanceStoreState {
  balanceByUser: Record<string, ExchangeBalance>;
  currentUserId: string | null;
  loading: boolean;
  error: string | null;
  fetchBalance: (userId: string, exchange: Exchange) => Promise<void>;
  resetUserBalance: () => void;
}

// Helper functions moved from exchange.ts
async function calculateBalanceValues(
  balanceType: Record<string, number | undefined>,
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

function calculateTotalBalance(values: BalanceValue[]): number {
  return values.reduce((sum, { usdtValue }) => sum + Number(usdtValue), 0);
}

export const useBalanceStore = create<BalanceStoreState>((set, get) => ({
  balanceByUser: {},
  currentUserId: null,
  loading: false,
  error: null,
  fetchBalance: async (userId: string, exchange: Exchange) => {
    // Se abbiamo già il balance in cache per questo utente e non è in caricamento, usalo
    if (get().balanceByUser[userId] && !get().loading) {
      set({ currentUserId: userId, error: null });
      return;
    }

    set({ loading: true, error: null, currentUserId: userId });
    try {
      const balance = await exchange.fetchBalance();

      const totalValues = await calculateBalanceValues(
        balance.total as unknown as Record<string, number>,
        exchange,
      );
      const freeValues = await calculateBalanceValues(
        balance.free as unknown as Record<string, number>,
        exchange,
      );
      const usedValues = await calculateBalanceValues(
        balance.used as unknown as Record<string, number>,
        exchange,
      );

      const exchangeBalance = {
        totalValues,
        freeValues,
        usedValues,
        totalBalance: calculateTotalBalance(totalValues),
        freeBalance: calculateTotalBalance(freeValues),
        usedBalance: calculateTotalBalance(usedValues),
      };

      set((state) => ({
        balanceByUser: { ...state.balanceByUser, [userId]: exchangeBalance },
        loading: false,
      }));
    } catch (error) {
      set({ error: (error as Error).message, loading: false });
    }
  },
  resetUserBalance: () => {
    set({ currentUserId: null });
  },
}));
