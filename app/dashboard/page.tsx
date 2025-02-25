import { Section } from "@/components/ui/section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import AddDialog from "./components/AddDialog";

import { createClient } from "@/utils/supabase/server";

import { decrypt } from "@/utils/encryption";

import ccxt from "ccxt";

import Overview from "@/components/Overview";
import PieChart from "@/components/PieChart";
import Balance from "@/components/Balance";
import Trades from "@/components/Trades";

import { fetchAllBalances, fetchAllTrades } from "@/utils/exchange";

import Link from "next/link";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard | Blocktracr",
  description: "View an overview of your portfolio and recent trades",
};

export default async function DashboardPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: userExchange, error: exchangeError } = await supabase
    .from("exchanges")
    .select()
    .eq("user_id", user?.id)
    .single();

  const {
    data: profile,
    error: profileError,
    status,
  } = await supabase
    .from("profiles")
    .select(`full_name, username, website, avatar_url`)
    .eq("id", user?.id)
    .single();

  if (profileError && status !== 406) {
    console.log(profileError);
    throw profileError;
  }

  let exchangeData = null;
  let trades = null;
  let apiError = null;

  if (!exchangeError && userExchange) {
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
      apiError = true;
    }
  }

  return (
    <Section>
      <div className="max-w-container mx-auto">
        <div className="flex flex-col">
          <div className="flex-1 space-y-4 p-8 pt-6">
            <div className="flex items-center justify-between space-y-2">
              <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
              <AddDialog user={user} action={userExchange ? "edit" : "add"} />
            </div>
            {/* Exchange non configurato */}
            {exchangeError && (
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
              </Card>
            )}

            {/* Credenziali non valide */}
            {apiError && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-destructive">
                    Invalid API Credentials
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    The API credentials for {userExchange?.exchange_id} seem to
                    be invalid. Please check your API key and secret and try
                    again.
                  </p>
                </CardContent>
              </Card>
            )}

            {/* Dati validi - mostra dashboard */}
            {!exchangeError && !apiError && exchangeData && trades && (
              <>
                <p className="text-muted-foreground">
                  Welcome back,{" "}
                  <Link href="/account" className="text-foreground font-bold">
                    {profile?.full_name || profile?.username || user?.email}
                  </Link>
                  ! Here you can see an overview of your portfolio, a breakdown
                  of your assets, and your recent trades.
                </p>
                <p className="text-muted-foreground">
                  Connected to{" "}
                  <span className="text-foreground font-bold capitalize">
                    {userExchange.exchange_id}
                  </span>
                </p>
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
                      <Balance values={exchangeData.totalValues} />
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
