"use client";

import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Book,
  Shield,
  Zap,
  Users,
  TrendingUp,
  Lock,
  BarChart3,
  Dice1,
  Target,
  Trophy,
  MessageCircle,
  Github,
  Twitter,
  Menu,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

export default function DocsPage() {
  const [activeSection, setActiveSection] = useState("introduction");
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const handleSectionClick = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Icons only for collapsed state
  const navItems = [
    { id: "introduction", label: "Introduction", icon: Book },
    { id: "why-onchainbet", label: "Why Onchainbets?", icon: Shield },
    { id: "how-to-play", label: "How to Play", icon: Zap },
    { id: "games", label: "Available Games", icon: Dice1 },
    { id: "provably-fair", label: "Provably Fair", icon: Lock },
    { id: "community", label: "Community", icon: Users },
    { id: "roadmap", label: "Roadmap", icon: TrendingUp },
  ];

  return (
    <div className="h-screen bg-black relative overflow-hidden flex flex-col">
      {/* Background Effects */}
      <div
        className="fixed inset-0 opacity-5 bg-no-repeat bg-center bg-contain pointer-events-none"
        style={{
          backgroundImage: "url('/images/onchainbet-logo.png')",
          backgroundSize: "80%",
        }}
      />
      <div className="fixed inset-0 bg-gradient-to-br from-emerald-900/10 via-black to-green-900/10 pointer-events-none" />

      {/* Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="border-b border-gray-800 bg-black/95 backdrop-blur-md z-50 shadow-lg flex-shrink-0"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
              <Link href="/" className="flex items-center space-x-3">
                <Image
                  src="/images/onchainbet-logo.png"
                  alt="OnChainBet"
                  width={40}
                  height={40}
                  className="rounded-lg"
                />
                <span className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
                 Onchainbets
                </span>
              </Link>
            </motion.div>

            <div className="hidden md:flex items-center justify-center space-x-8 flex-1">
              <motion.div whileHover={{ y: -2 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                <Link href="/" className="text-gray-300 hover:text-emerald-400 transition-colors">
                  Home
                </Link>
              </motion.div>
              <motion.a
                href="#games"
                className="text-gray-300 hover:text-emerald-400 transition-colors"
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                Games
              </motion.a>
              <motion.a
                href="#security"
                className="text-gray-300 hover:text-emerald-400 transition-colors"
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                Security
              </motion.a>
              <motion.a
                href="#community"
                className="text-gray-300 hover:text-emerald-400 transition-colors"
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                Community
              </motion.a>
              <motion.a
                href="#roadmap"
                className="text-gray-300 hover:text-emerald-400 transition-colors"
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                Roadmap
              </motion.a>
            </div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
               <a href="https://play.onchainbets.fun/" target="_blank" rel="noopener noreferrer">
            <Button className="bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white px-6 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all duration-300">
              Launch App
            </Button>
          </a>
            </motion.div>
          </div>
        </div>
      </motion.nav>

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Persistent Collapsible Sidebar */}
        
        <motion.div
          className={`flex-shrink-0 border-r border-gray-800 bg-black/50 backdrop-blur-sm flex flex-col ${
            isSidebarCollapsed ? "w-16" : "w-64"
          }`}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >

{/* Persistent Collapsible Sidebar */}
<motion.div
  className={`flex-shrink-0 border-r border-gray-800 bg-black/50 backdrop-blur-sm transition-all duration-300 ${
    isSidebarCollapsed ? "w-20" : "w-64"
  }`}
>
  {/* Header with Label and Toggle Button */}
  <div className="p-3 border-b border-gray-800 flex items-center justify-between scale-75">
    {!isSidebarCollapsed ? (
      <div className="flex items-center space-x-3 flex-1">
      
        <span className="text-white font-medium text-1xl">Getting Started</span>
      </div>
    ) : (
      <div className="flex items-center justify-center flex-1">
        
      </div>
    )}

    {/* Toggle Button */}
    <button
      onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
      className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center text-white hover:bg-emerald-400 transition-colors focus:outline-none shadow-md ml-2 flex-shrink-0"
      aria-label={isSidebarCollapsed ? "Expand sidebar" : "Collapse sidebar"}
    >
      {isSidebarCollapsed ? <Menu className="h-5 w-5" /> : <X className="h-5 w-5 text-white" />}
    </button>
  </div>

  {/* Nav Items */}
  <div className="p-3 flex-1 overflow-y-auto ">
    <nav className="space-y-1">
      {navItems.map((item) => (
        <motion.div
          key={item.id}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <button
            onClick={() => handleSectionClick(item.id)}
            className={`w-full flex items-center space-x-3 p-2 rounded-lg transition-all duration-200 text-sm ${
              activeSection === item.id
                ? "text-emerald-400 bg-emerald-600/20 border-l-2 border-emerald-400"
                : "text-gray-300 hover:text-emerald-400 hover:bg-emerald-600/10"
            }`}
            style={{
              justifyContent: isSidebarCollapsed ? "center" : "flex-start",
            }}
          >
            <item.icon className="h-5 w-5 flex-shrink-0" />
            {!isSidebarCollapsed && <span className="truncate">{item.label}</span>}
          </button>
        </motion.div>
      ))}
    </nav>
  </div>


</motion.div>


        </motion.div>

        {/* Main Content */}
        <div className="flex-1 overflow-y-auto relative">
          <div
            className="fixed inset-0 opacity-10 bg-no-repeat bg-center bg-cover pointer-events-none"
            style={{
              backgroundImage: "url('/images/onchainbet-banner.png')",
              backgroundAttachment: "fixed",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="max-w-4xl mx-auto px-8 py-8 relative z-10">
            <motion.div
              className="prose prose-lg max-w-none"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {/* Header */}
              <div className="mb-12">
                <div className="flex items-center space-x-3 mb-4">
               
                  <div>
                    <h1 className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent m-0">
                      Onchainbets Documentation
                    </h1>
                    <p className="text-xl text-gray-300 m-0">The Future of Decentralized Gaming</p>
                  </div>
                </div>
                <p className="text-lg text-gray-300 mb-6">
                  100% transparent, provably fair casino games built on Solana blockchain.
                </p>
                 {/*
                <div className="flex flex-wrap gap-3">
                  <Badge className="bg-gradient-to-r from-emerald-900/50 to-green-900/50 text-emerald-300 border-emerald-600/50">
                    🌐 onchainbet.xyz
                  </Badge>
                  <Badge className="bg-gradient-to-r from-blue-900/50 to-cyan-900/50 text-blue-300 border-blue-600/50">
                    💬 Discord
                  </Badge>
                  <Badge className="bg-gradient-to-r from-sky-900/50 to-blue-900/50 text-sky-300 border-sky-600/50">
                    🐦 @OnChainBet
                  </Badge>
                </div>
                */}
              </div>

              {/* Introduction */}
              <section id="introduction" className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-6">Introduction</h2>
                <div className="bg-gradient-to-r from-green-700/90 to-green-900/30 border border-green-600/50 rounded-lg p-6 mb-6 shadow-sm">
                  <p className="text-gray-300 leading-relaxed">
                   Onchainbets is the world's first fully decentralized casino built on Solana. Every game, every bet,
                    and every payout happens entirely on-chain with complete transparency and provable fairness.
                  </p>
                </div>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Unlike traditional online casinos that rely on centralized servers and hidden algorithms, Onchainbets
                  operates through smart contracts where every outcome is verifiable and every transaction is public.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Experience the future of gaming where trust is built into the code, not promised by corporations.
                </p>
              </section>

              {/* Why OnChainBet */}
              <section id="why-onchainbet" className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-6">Why Onchainbets?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    whileHover={{ y: -5, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Card className="border-emerald-600/30  bg-gradient-to-br from-green-800/90 to-green-900/90 backdrop-blur-sm shadow-lg hover:shadow-xl hover:border-emerald-500/50 transition-all duration-300 h-full">
                      <CardHeader>
                        <div className="flex items-center space-x-3">
                          <Shield className="h-6 w-6 text-emerald-400" />
                          <CardTitle className="text-lg text-white">100% Transparent</CardTitle>
                        </div>
                        <CardDescription className="text-gray-300">
                          Every bet generates an NFT ticket stored on-chain. All game logic is open-source and
                          verifiable.
                        </CardDescription>
                      </CardHeader>
                    </Card>
                  </motion.div>
                  <motion.div
                    whileHover={{ y: -5, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Card className="border-emerald-600/30  bg-gradient-to-br from-green-800/90 to-green-900/90 backdrop-blur-sm shadow-lg hover:shadow-xl hover:border-emerald-500/50 transition-all duration-300 h-full">
                      <CardHeader>
                        <div className="flex items-center space-x-3">
                          <Zap className="h-6 w-6 text-emerald-400" />
                          <CardTitle className="text-lg text-white">Instant Payouts</CardTitle>
                        </div>
                        <CardDescription className="text-gray-300">
                          Winnings are automatically sent to your wallet the moment you win. No delays, no withdrawal
                          limits.
                        </CardDescription>
                      </CardHeader>
                    </Card>
                  </motion.div>
                  <motion.div
                    whileHover={{ y: -5, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Card className="border-emerald-600/30  bg-gradient-to-br from-green-800/90 to-green-900/90 backdrop-blur-sm shadow-lg hover:shadow-xl hover:border-emerald-500/50 transition-all duration-300 h-full">
                      <CardHeader>
                        <div className="flex items-center space-x-3">
                          <Lock className="h-6 w-6 text-emerald-400" />
                          <CardTitle className="text-lg text-white">Provably Fair</CardTitle>
                        </div>
                        <CardDescription className="text-gray-300">
                          Cryptographically verifiable randomness ensures every game outcome is fair and cannot be
                          manipulated.
                        </CardDescription>
                      </CardHeader>
                    </Card>
                  </motion.div>
                  <motion.div
                    whileHover={{ y: -5, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Card className="border-emerald-600/30  bg-gradient-to-br from-green-800/90 to-green-900/90 backdrop-blur-sm shadow-lg hover:shadow-xl hover:border-emerald-500/50 transition-all duration-300 h-full">
                      <CardHeader>
                        <div className="flex items-center space-x-3">
                          <Users className="h-6 w-6 text-emerald-400" />
                          <CardTitle className="text-lg text-white">No KYC Required</CardTitle>
                        </div>
                        <CardDescription className="text-gray-300">
                          Play anonymously with just your Solana wallet. No personal information required.
                        </CardDescription>
                      </CardHeader>
                    </Card>
                  </motion.div>
                </div>
              </section>

              {/* Games */}
              <section id="games" className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-6">Games</h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                 Onchainbets offers 11 fully on-chain games, each designed for fairness, speed, and excitement.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                  {[
                    { icon: Dice1, name: "Dice", desc: "Bet on a number range (1–100). Win if roll falls in range." },
                    { icon: Target, name: "Slots", desc: "Spin the reels. Match symbols. Win big." },
                    { icon: Trophy, name: "Flip", desc: "Heads or tails. 50/50 odds. Double or nothing." },
                    {
                      icon: TrendingUp,
                      name: "HiLo",
                      desc: "Guess if the next card is higher or lower. Chain wins to increase payout.",
                    },
                    {
                      icon: BarChart3,
                      name: "Mines",
                      desc: "Avoid mines on a 5x5 grid. Uncover tiles to multiply your bet.",
                    },
                    {
                      icon: Target,
                      name: "Roulette",
                      desc: "European-style (0–36). Bet on numbers, colors, or ranges.",
                    },
                  ].map((game, index) => (
                    <motion.div
                      key={game.name}
                      className="bg-gradient-to-br from-gray-800/50 to-gray-700/50 rounded-lg p-4 border border-emerald-600/30 hover:shadow-lg hover:border-emerald-500/50 transition-all duration-300"
                      whileHover={{ y: -3, scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <div className="flex items-center space-x-3 mb-2">
                        <game.icon className="h-5 w-5 text-emerald-400" />
                        <h4 className="font-semibold text-white">{game.name}</h4>
                      </div>
                      <p className="text-sm text-gray-300">{game.desc}</p>
                    </motion.div>
                  ))}
                </div>
                <div className="bg-gradient-to-r from-green-900/30 to-green-900/30 border border-green-600/50 rounded-lg p-6 shadow-sm">
                  <h4 className="font-semibold text-white mb-2">Additional Games</h4>
                  <p className="text-white text-sm mb-3">
                    <strong>Plinko:</strong> Drop a ball through pegs. Landing bin determines payout.
                    <br />
                    <strong>Crash:</strong> Watch a multiplier rise. Cash out before it crashes.
                    <br />
                    <strong>Blackjack:</strong> Classic 21. Beat the dealer. On-chain logic.
                    <br />
                    <strong>Jackpot:</strong> Progressive prize pool funded by a % of every bet. Randomly triggered.
                    <br />
                    <strong>Plinko Race:</strong> Multiplayer Plinko. Players drop simultaneously. Highest win wins
                    extra.
                  </p>
                  <p className="text-blue-200 text-sm font-medium">
                    All games are built with on-chain randomness and transparent payout logic.
                  </p>
                </div>
              </section>

              {/* Provably Fair */}
              <section id="provably-fair" className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-6">Provably Fair System</h2>
                <div className="bg-gradient-to-r from-emerald-900/30 to-green-900/30 border border-emerald-600/50 rounded-lg p-6 mb-6 shadow-sm">
                  <h4 className="font-semibold text-emerald-300 mb-4">How It Works</h4>
                  <div className="space-y-3 text-emerald-200">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-emerald-600/50 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-bold text-white">1</span>
                      </div>
                      <p className="text-sm">
                        Before the game, your browser generates a client seed (never sent to us).
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-emerald-600/50 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-bold text-white">2</span>
                      </div>
                      <p className="text-sm">A commit hash (SHA256 of the seed) is stored on-chain.</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-emerald-600/50 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-bold text-white">3</span>
                      </div>
                      <p className="text-sm">After the game, the Solana block hash is used as the server seed.</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-emerald-600/50 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-bold text-white">4</span>
                      </div>
                      <p className="text-sm">The final outcome is computed from: SHA256(client_seed + block_hash)</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-800/50 border border-gray-600/50 rounded-lg p-4 shadow-sm">
                  <p className="text-gray-300 text-sm mb-2">
                    ✅{" "}
                    <strong>
                      No one — not even the developers — can manipulate the outcome after your bet is placed.
                    </strong>
                  </p>
                  <p className="text-gray-400 text-sm">
                    🔍 You can verify the result at any time using your seed and the transaction data.
                  </p>
                </div>
              </section>

              {/* How to Play */}
            {/* How to Play */}
<section id="how-to-play" className="mb-12">
  <h2 className="text-3xl font-bold text-white mb-6">How to Play</h2>

  {/* Match the Provably Fair card style: gradient + border + padding */}
  <div className="bg-gradient-to-r from-emerald-900/30 to-green-900/30 border border-emerald-600/50 rounded-lg p-6 mb-6 shadow-sm">
    <h4 className="font-semibold text-emerald-300 mb-4">How It Works</h4>

    <div className="space-y-6">
      <div className="flex items-start space-x-4">
        <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0 border border-emerald-600/50">
          <span className="text-sm font-bold text-emerald-400">1</span>
        </div>
        <div>
          <h4 className="font-semibold text-white mb-2">Connect Your Wallet</h4>
          <p className="text-gray-300 text-sm mb-2">
            Click "Connect" in the top-right corner and choose your wallet:
          </p>
          <ul className="text-sm text-gray-300 space-y-1">
            <li>• Phantom</li>
            <li>• Backpack</li>
            <li>• Solflare</li>
            <li>• Ledger (via extension)</li>
          </ul>
        </div>
      </div>

      <div className="flex items-start space-x-4">
        <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0 border border-emerald-600/50">
          <span className="text-sm font-bold text-emerald-400">2</span>
        </div>
        <div>
          <h4 className="font-semibold text-white mb-2">Choose a Game</h4>
          <p className="text-gray-300 text-sm">
            Browse the game grid and click any title: Dice, Slots, Flip, HiLo, Mines, Roulette, Plinko,
            Crash, Blackjack, Jackpot, Plinko Race.
          </p>
        </div>
      </div>

      <div className="flex items-start space-x-4">
        <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0 border border-emerald-600/50">
          <span className="text-sm font-bold text-emerald-400">3</span>
        </div>
        <div>
          <h4 className="font-semibold text-white mb-2">Place a Bet</h4>
          <ul className="text-sm text-gray-300 space-y-1">
            <li>• Enter your bet amount</li>
            <li>• Set game parameters (e.g., dice range, crash auto-cashout)</li>
            <li>• Confirm with your wallet</li>
          </ul>
        </div>
      </div>

      <div className="flex items-start space-x-4">
        <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0 border border-emerald-600/50">
          <span className="text-sm font-bold text-emerald-400">4</span>
        </div>
        <div>
          <h4 className="font-semibold text-white mb-2">Watch & Win</h4>
          <ul className="text-sm text-gray-300 space-y-1">
            <li>• The result is computed instantly and settled on-chain</li>
            <li>• Winnings are automatically sent to your wallet</li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  {/* Matched info box: use same style as provably fair, but with yellow for tip */}
  <div className="bg-gradient-to-r from-yellow-900/30 to-yellow-800/20 border border-yellow-600/50 rounded-lg p-4 shadow-sm">
    <p className="text-yellow-200 text-sm">
      💡 <strong>Tip:</strong> Use FAKE tokens in demo mode to practice risk-free.
    </p>
  </div>
</section>

              {/* Community */}
              <section id="community" className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-6">Community</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    whileHover={{ y: -5, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Card className="border-green-600/30 bg-gradient-to-br from-green-800/90 to-green-900/90 backdrop-blur-sm shadow-lg hover:shadow-xl hover:border-emerald-500/50 transition-all duration-300 h-full">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <MessageCircle className="h-6 w-6 text-green-400" />
                            <CardTitle className="text-lg text-white">Discord</CardTitle>
                          </div>
                          <Button
                            size="sm"
                            className="bg-green-600 hover:bg-green-700 text-white"
                            onClick={() => window.open("https://discord.gg/onchainbet", "_blank")}
                          >
                            Join
                          </Button>
                        </div>
                        <CardDescription className="text-gray-300">
                          Live support, community events, and exclusive giveaways
                        </CardDescription>
                      </CardHeader>
                    </Card>
                  </motion.div>
                  <motion.div
                    whileHover={{ y: -5, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Card className="border-emerald-600/30  bg-gradient-to-br from-green-800/90 to-green-900/90 backdrop-blur-sm shadow-lg hover:shadow-xl hover:border-emerald-500/50 transition-all duration-300 h-full">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <Twitter className="h-6 w-6 text-green-400" />
                            <CardTitle className="text-lg text-white">Twitter</CardTitle>
                          </div>
                          <Button
                            size="sm"
                            className="bg-green-600 hover:bg-green-700 text-white"
                            onClick={() => window.open("https://twitter.com/OnChainBet", "_blank")}
                          >
                            Follow
                          </Button>
                        </div>
                        <CardDescription className="text-gray-300">
                          Latest updates, big wins, and community highlights
                        </CardDescription>
                      </CardHeader>
                    </Card>
                  </motion.div>
                  <motion.div
                    whileHover={{ y: -5, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Card className="border-emerald-600/30  bg-gradient-to-br from-green-800/90 to-green-900/90 backdrop-blur-sm shadow-lg hover:shadow-xl hover:border-emerald-500/50 transition-all duration-300 h-full">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <Github className="h-6 w-6 text-green-300" />
                            <CardTitle className="text-lg text-white">GitHub</CardTitle>
                          </div>
                          <Button
                            size="sm"
                            className="bg-green-600 hover:bg-green-700 text-white"
                            onClick={() => window.open("https://github.com/onchainbet", "_blank")}
                          >
                            View
                          </Button>
                        </div>
                        <CardDescription className="text-gray-300">
                          Open-source smart contracts and frontend code
                        </CardDescription>
                      </CardHeader>
                    </Card>
                  </motion.div>
                  <motion.div
                    whileHover={{ y: -5, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Card className="border-emerald-600/30  bg-gradient-to-br from-green-800/90 to-green-900/90 backdrop-blur-sm shadow-lg hover:shadow-xl hover:border-emerald-500/50 transition-all duration-300 h-full">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <Users className="h-6 w-6 text-emerald-400" />
                            <CardTitle className="text-lg text-white">Community </CardTitle>
                          </div>
                          <Button
                            size="sm"
                            className="bg-green-600 hover:bg-green-700 text-white"
                            onClick={() => window.open("https://x.com/i/communities/1959009958617334252", "_blank")}
                          >
                            Join
                          </Button>
                        </div>
                        <CardDescription className="text-gray-300">
                          Quick updates and community discussions
                        </CardDescription>
                      </CardHeader>
                    </Card>
                  </motion.div>
                </div>
              </section>

             {/* Roadmap */}
    <section id="roadmap" className="mb-12 ">
  <h2 className="text-3xl font-bold text-white mb-6">Roadmap</h2>

<div className="bg-gradient-to-r from-emerald-900/30 to-green-900/30 
                border border-emerald-600/50 
                rounded-lg 
                p-6
                shadow-sm 
                mt-8">


  {/* Timeline Items */}
  <div className="space-y-6 text-left"> {/* ← Left-aligned content */}
    {/* Q1 2025 */}
    <div className="border-l-4 border-emerald-600/50 pl-6">
      <div className="flex items-center space-x-3 mb-2">
        <div className="w-3 h-3 bg-emerald-600 rounded-full"></div>
        <h4 className="font-semibold text-white">Q1 2025 - Platform Launch</h4>
      </div>
      <p className="text-gray-300 text-sm">
        Launch v1.0 with 11 fully on-chain games and provably fair system.
      </p>
    </div>

    {/* Q2 2025 */}
    <div className="border-l-4 border-emerald-600/30 pl-6">
      <div className="flex items-center space-x-3 mb-2">
        <div className="w-3 h-3 bg-emerald-600/50 rounded-full"></div>
        <h4 className="font-semibold text-white">Q2 2025 - Token & Governance</h4>
      </div>
      <p className="text-gray-300 text-sm">
        Introduce $BETS token with staking rewards and community governance.
      </p>
    </div>

    {/* Q3 2025 */}
    <div className="border-l-4 border-emerald-600/30 pl-6">
      <div className="flex items-center space-x-3 mb-2">
        <div className="w-3 h-3 bg-emerald-600/30 rounded-full"></div>
        <h4 className="font-semibold text-white">Q3 2025 - Security Audit</h4>
      </div>
      <p className="text-gray-300 text-sm">
        Complete third-party security audit by leading blockchain security firms.
      </p>
    </div>

    {/* Q4 2025 */}
    <div className="border-l-4 border-emerald-600/30 pl-6">
      <div className="flex items-center space-x-3 mb-2">
        <div className="w-3 h-3 bg-emerald-600/30 rounded-full"></div>
        <h4 className="font-semibold text-white">Q4 2025 - Mobile App</h4>
      </div>
      <p className="text-gray-300 text-sm">
        Native mobile applications for iOS and Android platforms.
      </p>
    </div>

    {/* 2026 */}
    <div className="border-l-4 border-emerald-600/30 pl-6">
      <div className="flex items-center space-x-3 mb-2">
        <div className="w-3 h-3 bg-emerald-600/30 rounded-full"></div>
        <h4 className="font-semibold text-white">2026 - Multichain Expansion</h4>
      </div>
      <p className="text-gray-300 text-sm">
        Expand to Ethereum L2s, Sei, and other high-performance blockchains.
      </p>
    </div>
  </div>
</div>
  {/* ✅ CTA Card – Now with EXACT same background & border as "Provably Fair" and "How to Play" */}
  <motion.div
    className="bg-gradient-to-r from-emerald-900/30 to-green-900/30 
               border border-emerald-600/50 
               rounded-lg 
               p-6 
               text-center 
               shadow-sm 
               mt-8"
    whileHover={{ scale: 1.02 }}
    transition={{ type: "spring", stiffness: 400, damping: 10 }}
  >
    <h3 className="text-xl font-bold text-emerald-300 mb-2">🏁 Ready to Play?</h3>
    <p className="text-emerald-200 mb-4">
      No sign-up. No KYC. Just connect your wallet and start winning.
    </p>

    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <a
        href="https://play.onchainbets.fun"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button
          size="lg"
          className="bg-gradient-to-r from-emerald-600 to-green-600 
                     hover:from-emerald-700 hover:to-green-700 
                     text-white px-8 py-4 text-lg font-semibold shadow-lg"
        >
          Play Now
        </Button>
      </a>
    </motion.div>
  </motion.div>
</section>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-800 bg-black/95 backdrop-blur-md flex-shrink-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <p className="text-gray-400 text-sm">© 2025 Onchainbets. All rights reserved.</p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Twitter className="h-4 w-4" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Github className="h-4 w-4" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <MessageCircle className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}