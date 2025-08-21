import type { Metadata } from "next"
import { Inter, Space_Grotesk } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
})

export const metadata: Metadata = {
  title: "OnChain Bets - Decentralized Betting on Solana",
  description:
    "The future of transparent, verifiable betting with deep liquidity and maximum rewards on Solana blockchain.",

  // Basic favicon
  icons: {
    icon: "/onchainbet-small-colored-01.svg",
  },

  // Open Graph (Facebook, LinkedIn, etc.)
  openGraph: {
    title: "OnChain Bets - Decentralized Betting on Solana",
    description:
      "The future of transparent, verifiable betting with deep liquidity and maximum rewards on Solana blockchain.",
    url: "", // Replace with your live URL
    siteName: "OnChain Bets",
    images: [
      {
        url: "/images/onchainbet-banner-bg.png", // Must be in the public folder
        width: 1200,
        height: 630,
        alt: "OnChain Bets - Bet on Solana with full transparency",
      },
    ],
    type: "website",
  },

  // Twitter (X) Metadata
  twitter: {
    card: "summary_large_image",
    title: "OnChain Bets - Decentralized Betting on Solana",
    description:
      "The future of transparent, verifiable betting with deep liquidity and maximum rewards on Solana blockchain.",
    images: ["/images/onchainbet-banner-bg.png"], // Same image or different one
    site: "@onchainbets", // Replace with your actual Twitter handle
    creator: "@you", // Optional
  },

  // Optional: App color for mobile (theme color)
  themeColor: "#000000",
}