import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const supabase = await createClient();

  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    return NextResponse.redirect(new URL("/error", req.url), {
      status: 302,
    });
  }

  revalidatePath("/", "layout");
  return NextResponse.redirect(new URL("/account", req.url), {
    status: 302,
  });
}
