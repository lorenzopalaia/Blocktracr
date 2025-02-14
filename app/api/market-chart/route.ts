import { NextResponse, NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  const days = searchParams.get("days");

  if (!id || !days) {
    return NextResponse.json(
      { error: "Missing required parameters" },
      { status: 400 },
    );
  }

  const apiKey = process.env.COINGECKO_API_KEY;
  const coingeckoUrl = `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}&x_cg_demo_api_key=${apiKey}`;

  try {
    const response = await fetch(coingeckoUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`CoinGecko API error: ${response.statusText}`);
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Market chart fetch error:", error);
    return NextResponse.json(
      { error: "Failed to fetch market chart data" },
      { status: 500 },
    );
  }
}
