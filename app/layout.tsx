// app/layout.tsx
import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
  weight: ["200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "OnchainBets - Decentralized Betting on Solana",
  description:
    "The future of transparent, verifiable betting with deep liquidity and maximum rewards on Solana blockchain.",
  generator: "Onchainbets",
  icons: {
    icon: "/onchainbet-small-colored-01.svg",
  },
  openGraph: {
    title: "OnChain Bets - Decentralized Betting on Solana",
    description:
      "The future of transparent, verifiable betting with deep liquidity and maximum rewards on Solana blockchain.",
    url: "https://onchainbets.fun",
    siteName: "OnChain Bets",
    images: [
      {
        url: "/images/onchainbet-banner-bg.png",
        width: 1200,
        height: 630,
        alt: "OnChain Bets - Bet on Solana with full transparency",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OnChain Bets - Decentralized Betting on Solana",
    description:
      "The future of transparent, verifiable betting with deep liquidity and maximum rewards on Solana blockchain.",
    images: ["/images/onchainbet-banner-bg.png"],
    site: "@onchainbets",
    creator: "@you",
  },
};

export const viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={bricolage.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}