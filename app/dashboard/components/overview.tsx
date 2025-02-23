import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Coins, DollarSign, Lock, Unlock } from "lucide-react";

interface OverviewProps {
  values: {
    totalBalance: number;
    totalValues: Array<{
      crypto: string;
      amount: number;
      usdtValue: number;
    }>;
    freeBalance: number;
    usedBalance: number;
    freeValues: Array<{
      crypto: string;
      amount: number;
      usdtValue: number;
    }>;
    usedValues: Array<{
      crypto: string;
      amount: number;
      usdtValue: number;
    }>;
  };
}

export default function Overview({ values }: OverviewProps) {
  const getPercentage = (value: number): string => {
    if (!values.totalBalance || values.totalBalance === 0) return "0.00";
    return ((value / values.totalBalance) * 100).toFixed(2);
  };

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Total Cryptocurrencies
          </CardTitle>
          <Coins className="text-muted-foreground h-4 w-4" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            {values.totalValues?.length ?? 0}
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Balance</CardTitle>
          <DollarSign className="text-muted-foreground h-4 w-4" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            ${values.totalBalance?.toFixed(2) ?? "0.00"}
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Used Balance</CardTitle>
          <Lock className="text-muted-foreground h-4 w-4" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            ${values.usedBalance?.toFixed(2) ?? "0.00"}
          </div>
          <p className="text-muted-foreground text-xs">
            {getPercentage(values.usedBalance)}% of total balance
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Free Balance</CardTitle>
          <Unlock className="text-muted-foreground h-4 w-4" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            ${values.freeBalance?.toFixed(2) ?? "0.00"}
          </div>
          <p className="text-muted-foreground text-xs">
            {getPercentage(values.freeBalance)}% of total balance
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
