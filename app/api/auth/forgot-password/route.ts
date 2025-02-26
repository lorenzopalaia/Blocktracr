import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const supabase = await createClient();

  const email = formData.get("email") as string;

  const siteUrl = process.env.SITE_URL || "https://blocktracr.lorenzopalaia.it";

  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: new URL("/reset-password", siteUrl).toString(),
  });

  if (error) {
    return NextResponse.redirect(new URL("/error", req.url), {
      status: 302,
    });
  }

  revalidatePath("/", "layout");
  return NextResponse.redirect(new URL("/", req.url), {
    status: 302,
  });
}
