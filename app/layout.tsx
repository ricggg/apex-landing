import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Apex — Grow Your Business With Confidence",
  description:
    "The all-in-one platform to launch, grow, and scale your business. Get more leads, convert more customers, and grow faster.",
  keywords: ["business growth", "leads", "marketing platform", "SaaS"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  );
}