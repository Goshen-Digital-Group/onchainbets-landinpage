"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Shield,
  BarChart3,
  Dice1,
  Users,
  Trophy,
  Star,
  Wallet,
  Ticket,
  Clock,
  Copy,
  CheckCircle,
  Gamepad2,
  Target,
  Crown,
} from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import LoadingScreen from "@/components/loading-screen";
import OnChainBetsLogo from '@/components/OnChainBetsLogo';

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);
  const [copied, setCopied] = useState(false);
  const [width, setWidth] = useState(0);
  const [windowWidth, setWindowWidth] = useState(1200); // default fallback
  const heroRef = useRef<HTMLDivElement>(null);

  const cryptoAddress = "000000000000000000000000000000000";

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(cryptoAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  useEffect(() => {
    // GSAP animations will be added here
    if (typeof window !== "undefined") {
      // Smooth scroll animations and parallax effects
    }

    // This code only runs in the browser
    setWidth(window.innerWidth);
    setWindowWidth(window.innerWidth);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      <motion.div
        className="min-h-screen bg-black"
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Navigation */}
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
          className="border-b border-gray-800 bg-black/95 backdrop-blur-md sticky top-0 z-50 shadow-lg"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <motion.div
                className="flex items-center space-x-3"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
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
              </motion.div>

              <div className="hidden md:flex items-center justify-center flex-1 space-x-8">
                <motion.a
                  href="#games"
                  className="text-gray-300 hover:text-emerald-400 transition-colors font-medium"
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  Games
                </motion.a>
                <motion.a
                  href="#features"
                  className="text-gray-300 hover:text-emerald-400 transition-colors font-medium"
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  Features
                </motion.a>
                <motion.a
                  href="#how-to-play"
                  className="text-gray-300 hover:text-emerald-400 transition-colors font-medium"
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  How to Play
                </motion.a>
                <motion.a
                  href="#security"
                  className="text-gray-300 hover:text-emerald-400 transition-colors font-medium"
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  Security
                </motion.a>
                <motion.a
                  href="/docs"
                  className="text-gray-300 hover:text-emerald-400 transition-colors font-medium"
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  Docs
                </motion.a>
              </div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white px-6 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all duration-300">
                  Launch App
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.nav>

        {/* Hero Section */}
        <section
          ref={heroRef}
          className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
        >
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
            <div className="absolute inset-0 bg-[url('/images/onchainbet-banner-bg.png')] bg-cover bg-center opacity-60"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
            <div className="absolute inset-0 opacity-20">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1),transparent_50%)]"></div>
              <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(16,185,129,0.05)_50%,transparent_75%)]"></div>
            </div>

            {/* Flowing images animation */}
            <div className="absolute inset-0 overflow-hidden opacity-50">
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-12 h-12 bg-gradient-to-br from-emerald-500/20 to-green-500/20 rounded-lg backdrop-blur-sm border border-emerald-500/30"
                  initial={{ y: "100vh", x: Math.random() * windowWidth }}
                  animate={{
                    y: "-100px",
                    x: Math.random() * windowWidth,
                  }}
                  transition={{
                    duration: 8 + Math.random() * 4,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: i * 0.5,
                    ease: "linear",
                  }}
                >
                  <Image
                    src={`/casino-chip.png?key=sq3dz&height=48&width=48&query=casino-chip-${i}`}
                    alt="Casino element"
                    width={48}
                    height={48}
                    className="rounded-lg opacity-60"
                  />
                </motion.div>
              ))}
            </div>

            <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-emerald-600/20 to-green-600/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-green-600/20 to-emerald-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-black/50 to-transparent backdrop-blur-sm"></div>
          </div>

          <div className="max-w-6xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
         
            </motion.div>

            <motion.div
              className="mb-6 text-center"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <img
                src="/logo-2-02.svg"
                alt="ONCHAINBETS Logo"
                className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl h-auto mx-auto"
              />
            </motion.div>

            <motion.p
              className="text-md text-gray-100 mb-12 max-w-3xl mx-auto leading-relaxed"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.1 }}
            >
              Where fairness, transparency, and instant payouts are guaranteed.
              Every game runs on the blockchain making outcomes provably fair
              and your funds always in your control.
            </motion.p>

            <motion.div
              className="mb-12 max-w-2xl mx-auto"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.3 }}
            >
              <Card className="bg-green-900 backdrop-blur-sm border border-emerald-600/30 shadow-lg hover:shadow-xl hover:border-emerald-500/50 transition-all duration-300 p-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/onchainbet-banner-bg.png')] bg-cover bg-center opacity-60"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/10 to-green-900/10"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(16,185,129,0.1),transparent_70%)]"></div>
                <div className="text-center relative z-10">
                  <div className="flex items-center justify-center px-10 mb-4">
                
                    <h3 className="text-lg font-bold text-white">
                   <OnChainBetsLogo/>     Official OnChainBets Address  <OnChainBetsLogo/>
                    </h3>
                  </div>
                <div className="bg-green-800 rounded-lg p-2 mb-4 border border-green-700 w-96 mx-auto">
          <code className="text-emerald-400 text-sm font-mono break-all">
            {cryptoAddress}
          </code>
        </div>
                  <div className="flex items-center justify-center space-x-4">
                    <Button
                      onClick={copyToClipboard}
                      variant="outline"
                      size="sm"
                      className="border-emerald-600/50 bg-green-950 text-emerald-400 hover:bg-emerald-600/90 "
                    >
                      {copied ? (
                        <>
                          <CheckCircle className="h-4 w-4 mr-2" />
                          Copied!
                        </>
                      ) : (
                        <>
                          <Copy className="h-4 w-4 mr-2" />
                          Copy Address
                        </>
                      )}
                    </Button>
                  </div>
                  <p className="text-xs text-gray-100 mt-3">
                    ⚠️ This is the official OnChainBets contract address. Always
                    verify before sending funds.
                  </p>
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.5 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a href="https://play.onchainbets.fun" tabIndex={-1} target="_blank" rel="noopener noreferrer">
                  <Button
                  size="lg"
                  className="bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white px-8 py-4 text-lg font-semibold shadow-lg"
                  >
                  <OnChainBetsLogo /> Play Now <OnChainBetsLogo />
                  </Button>
                </a>
              </motion.div>
            </motion.div>

            <motion.div
              className="mt-16 relative"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.0, delay: 1.7 }}
            >
              <div className="w-full max-w-2xl mx-auto h-80 relative rounded-3xl overflow-hidden shadow-2xl border border-emerald-600/30">
                <Image
                  src="/images/onchainbet-banner.png"
                  alt="OnChainBet Banner"
                  fill
                  className="object-cover"
                  style={{
                    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/20 to-green-600/20 backdrop-blur-[1px]" />
              </div>
      <Badge 
  className="bg-gradient-to-r from-emerald-900/50 to-green-900/50 text-emerald-300 border border-emerald-600/50 px-6 py-2 text-sm font-medium shadow-sm backdrop-blur-sm rounded-md mt-4 mx-auto block"
>
  OnChainBets Official Banner
</Badge>
            </motion.div>
          </div>
        </section>

        <section
          id="features"
          className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50 backdrop-blur-sm relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800"></div>
          <div className="absolute inset-0 bg-[url('/images/onchainbet-banner-bg.png')] bg-cover bg-center opacity-60"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_75%,rgba(16,185,129,0.1),transparent_50%)]"></div>

          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              className="text-center mb-16"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Badge className="mb-4 bg-gradient-to-r from-green-400/50 to-green-600/50 text-emerald-300 border-emerald-600/50 px-4 py-2 backdrop-blur-sm">
                🚀 Why Choose OnChainBet?
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Built for the Future
                <br />
                of Gaming
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the next generation of online gaming with blockchain
                technology, ensuring fairness and transparency in every bet.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                {
                  icon: <Shield className="h-8 w-8 text-green-400" />,
                  title: "100% Transparent & Provably Fair",
                  description:
                    "Every game outcome is verifiable on the blockchain. No hidden algorithms, just pure transparency.",
                },
                {
                  icon: <Wallet className="h-8 w-8 text-green-400" />,
                  title: "No Middlemen",
                  description:
                    "Play directly from your wallet. Your funds remain in your control at all times.",
                },
                {
                  icon: <Clock className="h-8 w-8 text-green-400" />,
                  title: "Instant Payouts",
                  description:
                    "Win and get paid instantly. No withdrawal delays or processing fees.",
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="border-green-600/30 hover:shadow-xl hover:border-emerald-500/50 transition-all duration-300 bg-green-700/30 backdrop-blur-sm h-full">
                    <CardHeader className="pb-4">
                      <div className="w-16 h-16 bg-emerald-900/50 rounded-2xl flex items-center justify-center mb-4">
                        {feature.icon}
                      </div>
                      <CardTitle className="text-xl font-bold text-white">
                        {feature.title}
                      </CardTitle>
                      <CardDescription className="text-gray-300 text-base">
                        {feature.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="games"
          className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-600 to-emerald-600 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('/images/onchainbet-2.png')] bg-cover bg-center opacity-60"></div>
    
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>

          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <Badge className="mb-6 bg-white/20 text-white border-white/30 px-4 py-2 backdrop-blur-sm">
                🎰 Casino Games
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Play Your Favorite Games
              </h2>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                From classic casino games to modern innovations, all powered by
                blockchain technology.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {[
                {
                  icon: <Dice1 className="h-8 w-8" />,
                  title: "Dice Betting",
                  description:
                    "Quick, fun, and fair — roll the dice and win instantly.",
                },
                {
                  icon: <Star className="h-8 w-8" />,
                  title: "Slot Machines",
                  description:
                    "Spin the reels with blockchain-powered slots. No rigging, just pure randomness.",
                },
                {
                  icon: <Trophy className="h-8 w-8" />,
                  title: "Card Games",
                  description:
                    "Enjoy decentralized versions of Blackjack, Poker, and more classic favorites.",
                },
                {
                  icon: <BarChart3 className="h-8 w-8" />,
                  title: "Sports Betting",
                  description:
                    "Bet on live sports and events with odds you can verify on-chain.",
                },
                {
                  icon: <Users className="h-8 w-8" />,
                  title: "Tournaments",
                  description:
                    "Climb the leaderboard and compete for massive prize pools.",
                },
                {
                  icon: <Ticket className="h-8 w-8" />,
                  title: "NFT Tickets",
                  description:
                    "Every bet is represented by a digital ticket (NFT) you can redeem for winnings.",
                },
              ].map((game, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <Card className="bg-green-600/25 backdrop-blur-sm border-white/50 hover:shadow-xl transition-all duration-300 h-full">
                    <CardHeader className="text-center">
                      <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white">
                        {game.icon}
                      </div>
                      <CardTitle className="text-xl font-bold text-white mb-3">
                        {game.title}
                      </CardTitle>
                      <CardDescription className="text-white">
                        {game.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="text-center"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="bg-white/20 hover:bg-white/30 text-white border border-white/30 px-8 py-4 text-lg font-semibold backdrop-blur-sm transition-all duration-300"
                >
                  View All Games
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section
          id="how-to-play"
          className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/60 backdrop-blur-sm relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-black to-gray-900"></div>
          <div className="absolute inset-0 bg-[url('/images/onchainbet-1.png')] bg-cover bg-center opacity-40"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,rgba(16,185,129,0.1),transparent_50%)]"></div>

          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                How to Play
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Get started in just a few simple steps and begin your winning
                journey.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <Wallet className="h-8 w-8 text-white" />,
                  title: "Connect Your Wallet",
                  description:
                    "Use MetaMask, Coinbase Wallet, or another EVM-compatible wallet.",
                },
                {
                  icon: <Gamepad2 className="h-8 w-8 text-white" />,
                  title: "Choose Your Game",
                  description:
                    "Slots, dice, cards, sports betting, or tournaments.",
                },
                {
                  icon: <Target className="h-8 w-8 text-white" />,
                  title: "Place Your Bet",
                  description:
                    "Confirm the transaction directly from your wallet.",
                },
                {
                  icon: <Crown className="h-8 w-8 text-white" />,
                  title: "Win & Claim",
                  description:
                    "When results are in, redeem your winnings instantly.",
                },
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <Card className="bg-green-900/30 backdrop-blur-sm border border-emerald-600/30 hover:shadow-xl hover:border-emerald-500/50 transition-all duration-300 h-full text-center p-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-600 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                      {step.icon}
                    </div>
                    <CardTitle className="text-lg font-bold text-white mb-3">
                      {step.title}
                    </CardTitle>
                    <CardDescription className="text-gray-300 leading-relaxed text-sm">
                      {step.description}
                    </CardDescription>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="security"
          className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800"></div>
          <div className="absolute inset-0 bg-[url('/images/onchainbet-banner-bg.png')] bg-cover bg-center opacity-60"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1),transparent_50%)]"></div>

          <div className="max-w-6xl mx-auto text-center relative z-10">
          
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Your Security is Our Priority
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Built on blockchain technology with multiple layers of security to
              ensure your funds and data are always protected.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <Card className="bg-green-600/30 border-green-700 hover:bg-gray-750 transition-all backdrop-blur-sm">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-white text-xl mb-3">
                    Blockchain Security
                  </CardTitle>
                  <CardDescription className="text-gray-300 mb-6">
                    All transactions are secured by the blockchain. Your funds
                    are protected by cryptographic security that's virtually
                    unbreakable.
                  </CardDescription>
                  <Button
                    variant="outline"
                    className="border-green-600 text-green-400 hover:bg-green-600 hover:text-white bg-transparent"
                  >
                    Learn More
                  </Button>
                </CardHeader>
              </Card>

              <Card className="bg-green-600/30 border-green-700 hover:bg-gray-750 transition-all backdrop-blur-sm">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <BarChart3 className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-white text-xl mb-3">
                    Provably Fair
                  </CardTitle>
                  <CardDescription className="text-gray-300 mb-6">
                    Every game outcome can be verified independently. No hidden
                    algorithms or manipulation - just pure mathematical
                    fairness.
                  </CardDescription>
                  <Button
                    variant="outline"
                    className="border-green-600 text-green-400 hover:bg-green-600 hover:text-white bg-transparent"
                  >
                    Verify Games
                  </Button>
                </CardHeader>
              </Card>

              <Card className="bg-green-600/30 border-green-700 hover:bg-gray-750 transition-all backdrop-blur-sm">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Wallet className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-white text-xl mb-3">
                    Non-Custodial
                  </CardTitle>
                  <CardDescription className="text-gray-300 mb-6">
                    Your funds never leave your wallet until you decide to bet.
                    We never hold your money - you maintain full control at all
                    times.
                  </CardDescription>
                  <Button
                    variant="outline"
                    className="border-green-600 text-green-400 hover:bg-green-600 hover:text-white bg-transparent"
                  >
                    Connect Wallet
                  </Button>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/onchainbet-banner-bg.png')] bg-cover bg-center opacity-60"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/95 to-black/90"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>

          <div className="max-w-6xl mx-auto relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
              <div className="col-span-2">
                <motion.div
                  className="flex items-center space-x-3 mb-6"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Image
                    src="/images/onchainbet-logo.png"
                    alt="OnChainBet"
                    width={32}
                    height={32}
                    className="rounded-lg"
                  />
                  <span className="text-xl font-bold">OnChainBet</span>
                </motion.div>
                <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                  The next-generation decentralized casino. Transparent, secure,
                  and provably fair gaming on the blockchain.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-4 text-white">Games</h4>
                <ul className="space-y-3 text-sm text-gray-400">
                  <li>
                    <a
                      href="#"
                      className="hover:text-green-400 transition-colors"
                    >
                      Dice
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-green-400 transition-colors"
                    >
                      Slots
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-green-400 transition-colors"
                    >
                      Card Games
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-green-400 transition-colors"
                    >
                      Sports Betting
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-4 text-white">Platform</h4>
                <ul className="space-y-3 text-sm text-gray-400">
                  <li>
                    <a
                      href="#"
                      className="hover:text-green-400 transition-colors"
                    >
                      Tournaments
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-green-400 transition-colors"
                    >
                      Leaderboard
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-green-400 transition-colors"
                    >
                      NFT Tickets
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-green-400 transition-colors"
                    >
                      Analytics
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-4 text-white">Community</h4>
                <ul className="space-y-3 text-sm text-gray-400">
                  <li>
                    <a
                      href="#"
                      className="hover:text-green-400 transition-colors"
                    >
                      Discord
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-green-400 transition-colors"
                    >
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-green-400 transition-colors"
                    >
                      Telegram
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-green-400 transition-colors"
                    >
                      Blog
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-4 text-white">Legal</h4>
                <ul className="space-y-3 text-sm text-gray-400">
                  <li>
                    <a
                      href="#"
                      className="hover:text-green-400 transition-colors"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-green-400 transition-colors"
                    >
                      Terms of Service
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-green-400 transition-colors"
                    >
                      Responsible Gaming
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-green-400 transition-colors"
                    >
                      Fairness
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-gray-400 mb-4 md:mb-0">
                &copy; 2025 OnChainBets. All rights reserved.
              </p>
              <div className="flex items-center space-x-6">
                <a
                  href="#"
                  className="text-gray-400 hover:text-green-400 transition-colors"
                >
                  <span className="sr-only">Twitter</span>
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.073 4.073 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a15.785 15.785 0 006.29 1.84" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-green-400 transition-colors"
                >
                  <span className="sr-only">Discord</span>
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M16.942 5.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-7.737zM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </motion.div>
    </>
  );
}
