import { NextResponse } from "next/server";

export async function GET() {
  const url = `https://api.coingecko.com/api/v3/search/trending`;

  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  return NextResponse.json(data);
}
