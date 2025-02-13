import { NextResponse } from "next/server";

export async function GET() {
  const apiKey = process.env.COINGECKO_API_KEY;
  const url = `https://api.coingecko.com/api/v3/global?x_cg_demo_api_key=${apiKey}`;

  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  return NextResponse.json(data);
}
