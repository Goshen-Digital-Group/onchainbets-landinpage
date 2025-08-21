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
  title: "OnchainBets - Decentralized Betting on Solana",
  description:
    "The future of transparent, verifiable betting with deep liquidity and maximum rewards on Solana blockchain.",
  generator: "Onchainbets",

  // Favicon
  icons: {
    icon: "/onchainbet-small-colored-01.svg", // ✅ SVG favicon is supported!
  },



  // Open Graph (Social media preview)
  openGraph: {
    title: "OnChain Bets - Decentralized Betting on Solana",
    description:
      "The future of transparent, verifiable betting with deep liquidity and maximum rewards on Solana blockchain.",
    url: "https://onchainbets.example.com", // 🔁 Replace with your actual domain
    siteName: "OnChain Bets",
    images: [
      {
        url: "/images/onchainbet-banner-bg.png", // Must be public/images/...
        width: 1200,
        height: 630,
        alt: "OnChain Bets - Bet on Solana with full transparency",
      },
    ],
    type: "website",
  },

  // Twitter metadata
  twitter: {
    card: "summary_large_image",
    title: "OnChain Bets - Decentralized Betting on Solana",
    description:
      "The future of transparent, verifiable betting with deep liquidity and maximum rewards on Solana blockchain.",
    images: ["/images/onchainbet-banner-bg.png"],
    site: "@onchainbets", // Replace with real handle
    creator: "@you",
  },

  // Theme color for mobile
  // themeColor: "#000000",
}

export const viewport = {
  themeColor: "#ffffff", // ADD this line
  // ...other viewport settings if needed...
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}>
      <body>{children}</body>
    </html>
  )
}