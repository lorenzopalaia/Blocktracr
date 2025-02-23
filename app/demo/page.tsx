import { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import Overview from "../dashboard/components/Overview";
import PieChart from "../dashboard/components/PieChart";
import CoinsList from "../dashboard/components/CoinsList";
import Trades from "../dashboard/components/Trades";

import { demoBalanceData, demoTrades } from "@/utils/demoData";

export const metadata: Metadata = {
  title: "Demo Dashboard",
  description: "Example dashboard with demo data.",
};

export default function DemoPage() {
  return (
    <Section>
      <div className="max-w-container mx-auto">
        <div className="flex flex-col">
          <div className="flex-1 space-y-4 p-8 pt-6">
            <div className="flex items-center justify-between space-y-2">
              <div>
                <h2 className="text-3xl font-bold tracking-tight">
                  Demo Dashboard
                </h2>
              </div>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <Overview values={demoBalanceData} />
              </CardContent>
            </Card>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="col-span-4">
                <CardHeader>
                  <CardTitle>Chart</CardTitle>
                </CardHeader>
                <CardContent className="pl-2">
                  <PieChart
                    values={demoBalanceData.totalValues}
                    balance={demoBalanceData.totalBalance}
                  />
                </CardContent>
              </Card>
              <Card className="col-span-3">
                <CardHeader>
                  <CardTitle>Balance</CardTitle>
                </CardHeader>
                <CardContent>
                  <CoinsList values={demoBalanceData.totalValues} />
                </CardContent>
              </Card>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Trades</CardTitle>
              </CardHeader>
              <CardContent>
                <Trades values={demoTrades} />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Section>
  );
}
