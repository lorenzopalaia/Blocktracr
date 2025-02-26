import { Section } from "@/components/ui/section";
import Link from "next/link";

export default function Docs() {
  return (
    <Section>
      <div className="mx-auto max-w-4xl space-y-8 p-6">
        <div>
          <h1 className="mb-4 text-4xl font-bold">Blocktracr Documentation</h1>
          <p className="text-muted-foreground">
            Welcome to Blocktracr documentation. This guide will help you
            understand how to use the platform and its APIs.
          </p>
        </div>
        <div>
          <h2 className="mb-3 text-2xl font-bold">Getting Started</h2>
          <p className="mb-4">To start using Blocktracr, follow these steps:</p>
          <ol className="ml-4 list-inside list-decimal space-y-2">
            <li>
              Create an account on the{" "}
              <Link href="/signup" className="text-primary hover:underline">
                registration
              </Link>{" "}
              page
            </li>
            <li>
              Access your{" "}
              <Link href="/dashboard" className="text-primary hover:underline">
                Dashboard
              </Link>
            </li>
            <li>Configure your preferred exchange using your API keys</li>
          </ol>
        </div>
        <div>
          <h2 className="mb-3 text-2xl font-bold">Technologies</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="rounded-lg border p-4">
              <h3 className="mb-2 font-semibold">Frontend</h3>
              <ul className="text-muted-foreground space-y-1 text-sm">
                <li>Next.js</li>
                <li>React</li>
                <li>TypeScript</li>
                <li>Tailwind CSS</li>
                <li>shadcn/ui</li>
              </ul>
            </div>
            <div className="rounded-lg border p-4">
              <h3 className="mb-2 font-semibold">Backend</h3>
              <ul className="text-muted-foreground space-y-1 text-sm">
                <li>Supabase</li>
                <li>PostgreSQL</li>
                <li>Edge Functions</li>
              </ul>
            </div>
          </div>
          <h2 className="mb-3 text-2xl font-bold">API Reference</h2>
          <div className="space-y-6">
            <div>
              <h3 className="mb-2 text-xl font-semibold">
                Trending Cryptocurrencies
              </h3>
              <pre className="bg-muted rounded-lg p-4">
                <code>GET /api/trending</code>
              </pre>
              <p className="mt-2">
                Retrieve trending cryptocurrencies from the market.
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-xl font-semibold">Global Market Data</h3>
              <pre className="bg-muted rounded-lg p-4">
                <code>GET /api/global-market-data</code>
              </pre>
              <p className="mt-2">
                Get a complete overview of the crypto market.
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-xl font-semibold">
                Cryptocurrency List
              </h3>
              <pre className="bg-muted rounded-lg p-4">
                <code>GET /api/crypto-list</code>
              </pre>
              <p className="mt-2">
                View the top 250 cryptocurrencies by market cap.
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-xl font-semibold">Coin Details</h3>
              <pre className="bg-muted rounded-lg p-4">
                <code>GET /api/coins?id={"{coin_id}"}</code>
              </pre>
              <p className="mt-2">
                Retrieve detailed information about a specific cryptocurrency.
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-xl font-semibold">Market Chart</h3>
              <pre className="bg-muted rounded-lg p-4">
                <code>
                  GET /api/market-chart?id={"{coin_id}"}&days={"{days}"}
                </code>
              </pre>
              <p className="mt-2">
                Get historical price data for technical analysis.
              </p>
            </div>
          </div>
        </div>
        <div>
          <h2 className="mb-3 text-2xl font-bold">Dashboard Features</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="rounded-lg border p-4">
              <h3 className="mb-2 font-semibold">Portfolio Overview</h3>
              <p className="text-muted-foreground text-sm">
                View your total portfolio value and performance over time.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <h3 className="mb-2 font-semibold">Graphical Analysis</h3>
              <p className="text-muted-foreground text-sm">
                Interactive charts to analyze your asset distribution.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <h3 className="mb-2 font-semibold">Detailed Balance</h3>
              <p className="text-muted-foreground text-sm">
                Monitor the balance of each cryptocurrency in your portfolio.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <h3 className="mb-2 font-semibold">Trading History</h3>
              <p className="text-muted-foreground text-sm">
                Access your complete trading operation history.
              </p>
            </div>
          </div>
        </div>
        <div>
          <h2 className="mb-3 text-2xl font-bold">Security</h2>
          <ul className="ml-4 list-inside list-disc space-y-2">
            <li>End-to-end API key encryption</li>
            <li>Mandatory user authentication</li>
            <li>Secure session management</li>
            <li>Input parameter validation</li>
          </ul>
        </div>
      </div>
    </Section>
  );
}
