import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Legal",
  description: "Zero1 Studio terms of service and legal information.",
};

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
