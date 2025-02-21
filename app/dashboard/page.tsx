import { Metadata } from "next";
import Image from "next/image";

import { Button } from "@/components/ui/button";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CalendarDateRangePicker } from "./components/date-range-picker";
/* import { MainNav } from "./components/main-nav"; */
// import { Overview } from "./components/overview";
// import { RecentSales } from "./components/recent-sales";
/* import { Search } from "./components/search";
import TeamSwitcher from "./components/team-switcher";
import { UserNav } from "./components/user-nav"; */
import AddDialog from "./components/AddDialog";

import { createClient } from "@/utils/supabase/server";

import { decrypt } from "@/utils/encryption";

import ccxt from "ccxt";

import PieChart from "./components/PieChart";
import CoinsList from "./components/CoinsList";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Example dashboard app built using the components.",
};

export default async function DashboardPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: userExchange, error } = await supabase
    .from("exchanges")
    .select()
    .eq("user_id", user?.id)
    .single();

  if (error) {
    console.error("Error fetching exchanges:", error);
  }

  // @ts-expect-error ccxt does not have types for all exchanges
  const exchange = new ccxt[userExchange.exchange_id]({
    apiKey: decrypt(userExchange.api_key),
    secret: decrypt(userExchange.api_secret),
  });

  const balance = await exchange.fetchBalance();

  const total = balance.total;
  const free = balance.free;
  const used = balance.used;

  interface BalanceType {
    [key: string]: number;
  }

  const calculateBalanceValues = async (balanceType: BalanceType) => {
    return Promise.all(
      Object.entries(balanceType)
        .filter(([, amount]) => Number(amount) > 0)
        .map(async ([crypto, amount]) => {
          const numAmount = Number(amount);
          if (crypto === "USDT")
            return { crypto, amount: numAmount, usdtValue: numAmount };
          const ticker = await exchange.fetchTicker(`${crypto}/USDT`);
          return {
            crypto,
            amount: numAmount,
            usdtValue: ticker.last * numAmount,
          };
        }),
    ).then((values) => values.sort((a, b) => b.usdtValue - a.usdtValue));
  };

  const totalValues = await calculateBalanceValues(total);
  const freeValues = await calculateBalanceValues(free);
  const usedValues = await calculateBalanceValues(used);

  const totalBalance = totalValues.reduce(
    (sum, { usdtValue }) => sum + Number(usdtValue),
    0,
  );
  const freeBalance = freeValues.reduce(
    (sum, { usdtValue }) => sum + Number(usdtValue),
    0,
  );
  const usedBalance = usedValues.reduce(
    (sum, { usdtValue }) => sum + Number(usdtValue),
    0,
  );

  /* const tickers = totalValues.map(({ crypto }) => `${crypto}`);

  const trades = (
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
  ).flat(); */

  return (
    <>
      <div className="md:hidden">
        <Image
          src="/examples/dashboard-light.png"
          width={1280}
          height={866}
          alt="Dashboard"
          className="block dark:hidden"
        />
        <Image
          src="/examples/dashboard-dark.png"
          width={1280}
          height={866}
          alt="Dashboard"
          className="hidden dark:block"
        />
      </div>
      <div className="hidden flex-col md:flex">
        {/* <div className="border-b">
          <div className="flex h-16 items-center px-4">
            <TeamSwitcher />
            <MainNav className="mx-6" />
            <div className="ml-auto flex items-center space-x-4">
              <Search />
              <UserNav />
            </div>
          </div>
        </div> */}
        <div className="flex-1 space-y-4 p-8 pt-6">
          <div className="flex items-center justify-between space-y-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
              <AddDialog user={user} />
            </div>
            <div className="flex items-center space-x-2">
              <CalendarDateRangePicker />
              <Button>Download</Button>
            </div>
          </div>
          <Tabs defaultValue="overview" className="space-y-4">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="analytics" disabled>
                Analytics
              </TabsTrigger>
              <TabsTrigger value="reports" disabled>
                Reports
              </TabsTrigger>
              <TabsTrigger value="notifications" disabled>
                Notifications
              </TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Total Balance
                    </CardTitle>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="text-muted-foreground h-4 w-4"
                    >
                      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">
                      ${totalBalance.toFixed(2)}
                    </div>
                    <p className="text-muted-foreground text-xs">
                      +20.1% from last month
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Total Cryptocurrencies
                    </CardTitle>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="text-muted-foreground h-4 w-4"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">
                      {totalValues.length}
                    </div>
                    <p className="text-muted-foreground text-xs">
                      +180.1% from last month
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Used Balance
                    </CardTitle>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="text-muted-foreground h-4 w-4"
                    >
                      <rect width="20" height="14" x="2" y="5" rx="2" />
                      <path d="M2 10h20" />
                    </svg>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">
                      ${usedBalance.toFixed(2)}
                    </div>
                    <p className="text-muted-foreground text-xs">
                      +19% from last month
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Free Balance
                    </CardTitle>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="text-muted-foreground h-4 w-4"
                    >
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                    </svg>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">
                      ${freeBalance.toFixed(2)}
                    </div>
                    <p className="text-muted-foreground text-xs">
                      +201 since last hour
                    </p>
                  </CardContent>
                </Card>
              </div>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4">
                  <CardHeader>
                    <CardTitle>Overview</CardTitle>
                  </CardHeader>
                  <CardContent className="pl-2">
                    {/* <Overview /> */}
                    <PieChart values={totalValues} balance={totalBalance} />
                  </CardContent>
                </Card>
                <Card className="col-span-3">
                  <CardHeader>
                    <CardTitle>Balance</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {/* <RecentSales /> */}
                    <CoinsList values={totalValues} />
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
}
