import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trade } from "ccxt";

interface TradesProps {
  values: Trade[];
}

export default function Trades({ values }: TradesProps) {
  return (
    <div className="grid gap-4">
      {values.map((trade) => (
        <Card key={trade.id}>
          <CardContent className="p-4">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {/* Trade Info & Symbol */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Badge
                    variant={trade.side === "buy" ? "default" : "destructive"}
                    className="uppercase"
                  >
                    {trade.side}
                  </Badge>
                  <span className="font-bold">{trade.symbol}</span>
                </div>
                <div className="text-muted-foreground text-sm">
                  {trade.type || "N/A"} • {trade.takerOrMaker || "N/A"}
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-sm font-medium">Amount & Price</div>
                <div>
                  {trade.amount} {trade.symbol?.split("/")[0]}
                  <span className="text-muted-foreground text-sm"> @ </span>$
                  {trade.price}
                </div>
                <div className="text-sm font-medium">
                  Total: ${trade.cost?.toFixed(2)}
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-sm font-medium">Fees</div>
                <div className="text-sm">
                  {trade.fee?.cost?.toFixed(6)} {trade.fee?.currency}
                  {trade.fee?.rate &&
                    ` (${(trade.fee.rate * 100).toFixed(2)}%)`}
                </div>
              </div>
              <div className="space-y-2">
                <div>
                  {trade.datetime
                    ? new Date(trade.datetime).toLocaleString()
                    : "N/A"}
                </div>
                <div className="text-muted-foreground truncate text-xs">
                  ID: {trade.id}
                </div>
                {trade.order && (
                  <div className="text-muted-foreground truncate text-xs">
                    Order: {trade.order}
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
