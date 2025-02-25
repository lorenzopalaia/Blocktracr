import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Error | Blocktracr",
  description: "Sorry, something went wrong",
};

export default function ErrorPage() {
  return <p>Sorry, something went wrong</p>;
}
