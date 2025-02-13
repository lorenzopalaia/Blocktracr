import { NextResponse, NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json(
      { error: "Missing id parameter" },
      { status: 400 }
    );
  }

  const apiKey = process.env.COINGECKO_API_KEY;
  const coingeckoUrl = `https://api.coingecko.com/api/v3/coins/${id}?x_cg_demo_api_key=${apiKey}`;

  const response = await fetch(coingeckoUrl, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();
  return NextResponse.json(data);
}
