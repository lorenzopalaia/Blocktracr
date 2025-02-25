import AccountForm from "@/app/account/components/AccountForm";

import { createClient } from "@/utils/supabase/server";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Account | Blocktracr",
  description: "Update your account information",
};

export default async function Account() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return <AccountForm user={user} />;
}
