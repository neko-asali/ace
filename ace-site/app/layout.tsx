import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ace Creative Enterprise (A.C.E.)",
  description:
    "A.C.E. provides turn-key design and manufacturing services for creators, startups, and enterprise partners.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
