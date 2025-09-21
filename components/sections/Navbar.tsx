"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
      className="border-b border-gray-800 bg-black/95 backdrop-blur-md sticky top-0 z-50 shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Image
              src="/onchainbet-small-colored-01.svg"
              alt="OnChainBet"
              width={40}
              height={40}
              className="rounded-lg"
            />
            <span className="text-md font-bold bg-gradient-to-r from-green-400 to-green-400 bg-clip-text text-transparent">
              Onchainbets
            </span>
          </motion.div>

          {/* Desktop Navigation Links */}
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
            <Link
              href="/docs"
              className="text-gray-300 hover:text-emerald-400 transition-colors font-medium"
            >
              Docs
            </Link>
          </div>

          {/* Launch Button */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a
              href="https://play.onchainbets.fun/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white px-6 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all duration-300">
                Launch App
              </Button>
            </a>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
}