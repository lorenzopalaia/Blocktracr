"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";

import { createClient } from "@/utils/supabase/client";

import { toast } from "sonner";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
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
import { encrypt, decrypt } from "@/utils/encryption";

export default function AddDialog({
  user,
  action,
}: {
  user: User | null;
  action: "add" | "edit";
}) {
  const supabase = createClient();
  const exchanges = ccxt.exchanges;
  const [loading, setLoading] = useState(false);
  const [fetchLoading, setFetchLoading] = useState(true);
  const [exchangeName, setExchangeName] = useState<string>("");
  const [apiKey, setApiKey] = useState<string>("");
  const [apiSecret, setApiSecret] = useState<string>("");

  const router = useRouter();

  const getExchangeDetails = useCallback(async () => {
    try {
      setFetchLoading(true);

      const { data: exchangeData, error } = await supabase
        .from("exchanges")
        .select("id, exchange_id, api_key, api_secret")
        .eq("user_id", user?.id)
        .single();

      if (error && error.code !== "PGRST116") {
        console.error(error);
        throw error;
      }

      if (exchangeData) {
        setExchangeName(exchangeData.exchange_id);
        // Decifra i dati sensibili
        setApiKey(decrypt(exchangeData.api_key));
        setApiSecret(decrypt(exchangeData.api_secret));
      }
    } catch (error) {
      console.error("Error loading exchange exchangeData:", error);
      toast.error("Error loading exchange exchangeData!");
    } finally {
      setFetchLoading(false);
    }
  }, [user, supabase]);

  // Carica i dati quando il dialog viene aperto
  useEffect(() => {
    getExchangeDetails();
  }, [getExchangeDetails]);

  async function saveExchange() {
    try {
      setLoading(true);

      const encryptedApiKey = encrypt(apiKey);
      const encryptedApiSecret = encrypt(apiSecret);

      const { error } = await supabase.from("exchanges").upsert(
        {
          user_id: user?.id,
          exchange_id: exchangeName,
          api_key: encryptedApiKey,
          api_secret: encryptedApiSecret,
        },
        { onConflict: "user_id" },
      );

      if (error) {
        console.error("Error saving exchange details:", error);
        throw error;
      }
      router.refresh();
      toast.success(
        action === "add"
          ? "Exchange added successfully!"
          : "Exchange updated successfully!",
      );
    } catch (error) {
      console.error("Error saving exchange details:", error);
      toast.error("Error saving exchange details!");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="flex cursor-pointer items-center gap-2"
        >
          <span>{action === "add" ? "Add" : "Edit"} Exchange</span>
          <Plug size={16} />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            {action === "add" ? "Add" : "Edit"} Exchange
          </DialogTitle>
          <DialogDescription>
            {action === "add" ? "Add" : "Edit"}
            your exchange details
          </DialogDescription>
        </DialogHeader>
        {fetchLoading ? (
          <div className="py-4 text-center">Loading...</div>
        ) : (
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Select
                value={exchangeName}
                onValueChange={(value) => setExchangeName(value)}
              >
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
        )}
        <DialogFooter>
          <DialogClose asChild>
            <Button type="submit" onClick={saveExchange} disabled={loading}>
              {loading ? "Saving..." : "Save changes"}
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
