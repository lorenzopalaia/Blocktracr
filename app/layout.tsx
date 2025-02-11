import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

import CoinBar from "@/components/CoinBar";

const poppins = Poppins({
  weight: "400",
  variable: "--font-poppins",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Blocktracr",
  description: "A simple, easy-to-use cryptocurrency tracker.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <CoinBar />
        {children}
      </body>
    </html>
  );
}
