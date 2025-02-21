"use client";

import { useState } from "react";
import { createClient } from "@/utils/supabase/client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Plug } from "lucide-react";
import ccxt from "ccxt";
import { type User } from "@supabase/supabase-js";
import { encrypt } from "@/utils/encryption";

export default function AddDialog({ user }: { user: User | null }) {
  const supabase = createClient();
  const exchanges = ccxt.exchanges;
  const [loading, setLoading] = useState(false);
  const [exchangeName, setExchangeName] = useState<string>("");
  const [apiKey, setApiKey] = useState<string>("");
  const [apiSecret, setApiSecret] = useState<string>("");

  async function saveExchange() {
    try {
      setLoading(true);

      const encryptedApiKey = encrypt(apiKey);
      const encryptedApiSecret = encrypt(apiSecret);

      const { error } = await supabase.from("exchanges").upsert({
        user_id: user?.id,
        exchange_id: exchangeName,
        api_key: encryptedApiKey,
        api_secret: encryptedApiSecret,
      });

      if (error) throw error;
      alert("Exchange added successfully!");
    } catch (error) {
      console.error("Error saving exchange details:", error);
      alert("Error saving exchange details!");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          <Plug size={16} />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Exchange</DialogTitle>
          <DialogDescription>Add your exchange details</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Select onValueChange={(value) => setExchangeName(value)}>
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Select an exchange" />
              </SelectTrigger>
              <SelectContent>
                {exchanges.map((exchange) => (
                  <SelectItem
                    className="capitalize"
                    key={exchange}
                    value={exchange}
                  >
                    {exchange}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="api_key" className="text-right">
              API Key
            </Label>
            <Input
              id="api_key"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              className="col-span-3"
            />
            <Label htmlFor="api_secret" className="text-right">
              API Secret
            </Label>
            <Input
              id="api_secret"
              value={apiSecret}
              onChange={(e) => setApiSecret(e.target.value)}
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={saveExchange} disabled={loading}>
            {loading ? "Saving..." : "Save changes"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
