import { Trade } from "ccxt";

export const demoBalanceData = {
  totalValues: [
    { crypto: "BTC", amount: 0.5, usdtValue: 25000 },
    { crypto: "ETH", amount: 4.2, usdtValue: 12600 },
    { crypto: "SOL", amount: 120, usdtValue: 8400 },
    { crypto: "USDT", amount: 5000, usdtValue: 5000 },
  ],
  freeValues: [
    { crypto: "BTC", amount: 0.3, usdtValue: 15000 },
    { crypto: "ETH", amount: 2.5, usdtValue: 7500 },
    { crypto: "SOL", amount: 80, usdtValue: 5600 },
    { crypto: "USDT", amount: 3000, usdtValue: 3000 },
  ],
  usedValues: [
    { crypto: "BTC", amount: 0.2, usdtValue: 10000 },
    { crypto: "ETH", amount: 1.7, usdtValue: 5100 },
    { crypto: "SOL", amount: 40, usdtValue: 2800 },
    { crypto: "USDT", amount: 2000, usdtValue: 2000 },
  ],
  totalBalance: 51000,
  freeBalance: 31100,
  usedBalance: 19900,
};

export const demoTrades: Trade[] = [
  {
    id: "134580475",
    timestamp: Date.now() - 3600000,
    datetime: new Date(Date.now() - 3600000).toISOString(),
    symbol: "BTC/USDT",
    type: "limit",
    side: "buy",
    price: 50000,
    amount: 0.1,
    cost: 5000,
    fee: {
      cost: 5,
      currency: "USDT",
      rate: 0.001,
    },
    takerOrMaker: "taker",
    info: {},
    order: "13940215216383945272",
  },
  {
    id: "134580476",
    timestamp: Date.now() - 7200000,
    datetime: new Date(Date.now() - 7200000).toISOString(),
    symbol: "ETH/USDT",
    type: "market",
    side: "sell",
    price: 3000,
    amount: 1.5,
    cost: 4500,
    fee: {
      cost: 4.5,
      currency: "USDT",
      rate: 0.001,
    },
    takerOrMaker: "maker",
    info: {},
    order: "13940215216383945273",
  },
  {
    id: "134580477",
    timestamp: Date.now() - 10800000,
    datetime: new Date(Date.now() - 10800000).toISOString(),
    symbol: "SOL/USDT",
    type: "limit",
    side: "buy",
    price: 100,
    amount: 50,
    cost: 5000,
    fee: {
      cost: 5,
      currency: "USDT",
      rate: 0.001,
    },
    takerOrMaker: "taker",
    info: {},
    order: "13940215216383945274",
  },
  {
    id: "134580478",
    timestamp: Date.now() - 14400000,
    datetime: new Date(Date.now() - 14400000).toISOString(),
    symbol: "BTC/USDT",
    type: "market",
    side: "sell",
    price: 60000,
    amount: 0.05,
    cost: 3000,
    fee: {
      cost: 3,
      currency: "USDT",
      rate: 0.001,
    },
    takerOrMaker: "maker",
    info: {},
    order: "13940215216383945275",
  },
  {
    id: "134580479",
    timestamp: Date.now() - 18000000,
    datetime: new Date(Date.now() - 18000000).toISOString(),
    symbol: "ETH/USDT",
    type: "limit",
    side: "buy",
    price: 2500,
    amount: 2,
    cost: 5000,
    fee: {
      cost: 5,
      currency: "USDT",
      rate: 0.001,
    },
    takerOrMaker: "taker",
    info: {},
    order: "13940215216383945276",
  },
  {
    id: "134580480",
    timestamp: Date.now() - 21600000,
    datetime: new Date(Date.now() - 21600000).toISOString(),
    symbol: "SOL/USDT",
    type: "market",
    side: "sell",
    price: 80,
    amount: 100,
    cost: 8000,
    fee: {
      cost: 8,
      currency: "USDT",
      rate: 0.001,
    },
    takerOrMaker: "maker",
    info: {},
    order: "13940215216383945277",
  },
];
