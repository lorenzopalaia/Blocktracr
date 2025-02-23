import { Metadata } from "next";

import { Section } from "@/components/ui/section";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import AddDialog from "./components/AddDialog";

import { createClient } from "@/utils/supabase/server";

import { decrypt } from "@/utils/encryption";

import ccxt from "ccxt";

import Overview from "./components/Overview";
import PieChart from "./components/PieChart";
import CoinsList from "./components/CoinsList";
import Trades from "./components/Trades";

import { fetchAllBalances, fetchAllTrades } from "@/utils/exchange";

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

  let exchangeData = null;
  let trades = null;

  if (!error && userExchange) {
    try {
      // @ts-expect-error ccxt does not have types for all exchanges
      const exchange = new ccxt[userExchange.exchange_id]({
        apiKey: decrypt(userExchange.api_key),
        secret: decrypt(userExchange.api_secret),
      });
      exchangeData = await fetchAllBalances(exchange);
      const tickers = exchangeData.totalValues.map(({ crypto }) => crypto);
      trades = await fetchAllTrades(exchange, tickers);
    } catch (e) {
      console.error("Error fetching exchange data:", e);
    }
  }

  return (
    <Section>
      <div className="max-w-container mx-auto">
        <div className="flex flex-col">
          <div className="flex-1 space-y-4 p-8 pt-6">
            <div className="flex items-center justify-between space-y-2">
              <div>
                <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
              </div>
            </div>
            {!exchangeData || !trades ? (
              <Card>
                <CardHeader>
                  <CardTitle>
                    Add an exchange to start tracking your portfolio
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    You can add an exchange to start tracking your portfolio. We
                    support a wide range of exchanges, so you can easily add
                    your exchange and start tracking your portfolio.
                  </p>
                </CardContent>
                <CardFooter>
                  <AddDialog user={user} />
                </CardFooter>
              </Card>
            ) : (
              <>
                <Card>
                  <CardHeader>
                    <CardTitle>Overview</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Overview values={exchangeData} />
                  </CardContent>
                </Card>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                  <Card className="col-span-4">
                    <CardHeader>
                      <CardTitle>Chart</CardTitle>
                    </CardHeader>
                    <CardContent className="pl-2">
                      <PieChart
                        values={exchangeData.totalValues}
                        balance={exchangeData.totalBalance}
                      />
                    </CardContent>
                  </Card>
                  <Card className="col-span-3">
                    <CardHeader>
                      <CardTitle>Balance</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CoinsList values={exchangeData.totalValues} />
                    </CardContent>
                  </Card>
                </div>
                <Card>
                  <CardHeader>
                    <CardTitle>Trades</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Trades values={trades} />
                  </CardContent>
                </Card>
              </>
            )}
          </div>
        </div>
      </div>
    </Section>
  );
}
