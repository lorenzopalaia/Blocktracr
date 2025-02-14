import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

import ThemeProvider from "@/app/components/Layout/ThemeProvider";
import Navbar from "@/app/components/Layout/Navbar";
import Footer from "@/app/components/Layout/Footer";

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
    <html suppressHydrationWarning lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
