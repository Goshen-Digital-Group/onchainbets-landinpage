"use client";

import { motion } from "framer-motion";
import { Wallet, Gamepad2, Target, Crown } from "lucide-react";

export default function HowToPlaySection() {
  const steps = [
    {
      icon: <Wallet className="h-6 w-6" />,
      title: "Connect Wallet",
      description: "Use Any Solana wallet to begin.",
    },
    {
      icon: <Gamepad2 className="h-6 w-6" />,
      title: "Pick Your Game",
      description: "Slots, dice, cards or join live tournaments.",
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Place Your Bet",
      description: "One click to confirm — no hidden fees, ever.",
    },
    {
      icon: <Crown className="h-6 w-6" />,
      title: "Win & Withdraw",
      description: "Winnings paid instantly to your wallet. No delays.",
    },
  ];

  return (
    <section
      id="how-to-play"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/20 to-black pointer-events-none"></div>
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-emerald-500/5 rounded-full blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl -z-10 animate-pulse delay-1000"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-300 mb-6">
            How to Play
          </h2>
          <p className="text-lg md:text-xl text-green-200 max-w-3xl mx-auto leading-relaxed">
            Get started in just a few simple steps your next big win is moments away.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.03 }}
              className="flex"
            >
              <div className="group flex flex-col items-center text-center p-8 bg-green-900/60 backdrop-blur-md border border-gray-700/50 hover:border-emerald-500/50 rounded-2xl transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/10 w-full h-full">
                {/* Icon */}
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-500/20 to-green-600/20 group-hover:from-emerald-500/30 group-hover:to-green-500/30 rounded-xl flex items-center justify-center mb-5 shadow-inner transition-all duration-300 group-hover:scale-110 group-hover:shadow-emerald-500/20">
                  <div className="text-emerald-400 group-hover:text-emerald-300 transition-colors">
                    {step.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-green-400 mb-2">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-green-100 text-sm leading-relaxed px-1 text-center">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}