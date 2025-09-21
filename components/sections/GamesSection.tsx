"use client";

import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dice1, Star, Trophy, BarChart3, Users, Ticket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";

export default function GamesSection() {
const games = [
  {
    title: "DICE",
    value: "Roll. Win. Instantly.",
    description: "Quick, fun, and fair — roll the dice and win instantly.",
    image: "/casino-games/dice.png",
  },
  {
    title: "SLOT",
    value: "Pure Random Spins",
    description: "Spin the reels with blockchain-powered slots. No rigging, just pure randomness.",
    image: "/casino-games/slots.png",
  },
  {
    title: "BLACKJACK",
    value: "21 or Bust",
    description: "Enjoy decentralized versions of Blackjack, Poker, and more classic favorites.",
    image: "/casino-games/blackjack.png",
  },
  {
    title: "CRASH",
    value: "Cash Out or Crash",
    description: "Ride the multiplier curve — cash out before it crashes!",
    image: "/casino-games/crash.png", // ← Fixed missing "/"
  },
  {
    title: "MINES",
    value: "Dodge & Win",
    description: "Pick safe tiles and avoid hidden mines to multiply your bet.",
    image: "/casino-games/mines.png",
  },
  {
    title: "ROULETTE",
    value: "Spin & Predict",
    description: "Bet on numbers, colors, or odds — watch the ball decide your fate.",
    image: "/casino-games/roulette.png",
  },
];
  

  return (
    <section
      id="games"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-600 to-emerald-600 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[url('/images/onchainbet-2.png')] bg-cover bg-center opacity-60"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>

      <div className="max-w-6xl mx-auto relative z-10">
                <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
            >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                Play Your Favorite Games
            </h2>
            <p className="text-sm text-white/90 leading-relaxed">
                From classic casino games to modern innovations, all powered by blockchain technology.
            </p>
            </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {games.map((game, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <Card className="bg-green-600/25 backdrop-blur-sm border-white/50 hover:shadow-xl transition-all duration-300 h-full relative overflow-hidden rounded-2xl">
         {/* Image clipped into the card */}
                <div className="absolute inset-0">
                <Image
                    src={game.image}
                    alt={game.title}
                    fill
                    className="object-cover object-right opacity-70"
                    style={{
                    objectPosition: "100% 40%", // Aligns image to the right (100%) and center vertically
                    transform: "scale(1.2) translateX(5%)  translateY(15%)", // Slight zoom + move left to show more
                    }}
                />
                </div>

                {/* Content overlay */}
                <div className="relative z-10 p-6 flex flex-col justify-between h-full">
                  <div>
                    <CardTitle className="text-4xl font-bold text-white mb-2">{game.title}</CardTitle>
                    <div className="text-sm text-white/90 font-mono inline-block ">{game.value}</div>
                  </div>
                  <div className="text-white/80 text-sm mt-4">
                    {/* <span className="font-semibold">ONCHAINBET</span> */}
                  </div>
                </div>
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
            <a
              href="https://play.onchainbets.fun/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button
                size="lg"
                className="bg-green-400/20 hover:bg-green-800/80 text-white border border-white/30 px-8 py-4 text-md font-semibold backdrop-blur-sm transition-all duration-300"
              >
                View All Games
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}