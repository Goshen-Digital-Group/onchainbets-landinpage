"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Copy, CheckCircle } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import OnChainBetsLogo from '@/components/OnChainBetsLogo';

export default function HeroSection() {
  const [copied, setCopied] = useState(false);
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

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
        <div className="absolute inset-0 bg-[url('/images/onchainbet-banner-bg.png')] bg-cover bg-center opacity-60"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(16,185,129,0.05)_50%,transparent_75%)]"></div>
        </div>

        {/* Animated floating chips */}
        <div className="absolute inset-0 overflow-hidden opacity-50">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-12 h-12 bg-gradient-to-br from-emerald-500/20 to-green-500/20 rounded-lg backdrop-blur-sm border border-emerald-500/30"
              initial={{ y: "100vh", x: Math.random() * window.innerWidth }}
              animate={{
                y: "-100px",
                x: Math.random() * window.innerWidth,
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
          <div className="bg-green-900 backdrop-blur-sm border border-emerald-600/30 shadow-lg hover:shadow-xl hover:border-emerald-500/50 transition-all duration-300 p-6 relative overflow-hidden rounded-xl">
            <div className="absolute inset-0 bg-[url('/images/onchainbet-banner-bg.png')] bg-cover bg-center opacity-60"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/10 to-green-900/10"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(16,185,129,0.1),transparent_70%)]"></div>
            <div className="text-center relative z-10">
              <h3 className="text-lg font-bold text-white mb-4">
                <OnChainBetsLogo /> Official Onchainbets Address <OnChainBetsLogo />
              </h3>
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
                  className="border-emerald-600/50 bg-green-950 text-emerald-400 hover:bg-emerald-600/90"
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
                ⚠️ This is the official Onchainbets contract address. Always verify before sending funds.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <a href="https://play.onchainbets.fun" target="_blank" rel="noopener noreferrer">
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
              style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/20 to-green-600/20 backdrop-blur-[1px]" />
          </div>
          <Badge className="bg-gradient-to-r from-emerald-900/50 to-green-900/50 text-emerald-300 border border-emerald-600/50 px-6 py-2 text-sm font-medium shadow-sm backdrop-blur-sm rounded-md mt-4 mx-auto block">
            Onchainbets Official Banner
          </Badge>
        </motion.div>
      </div>
    </section>
  );
}