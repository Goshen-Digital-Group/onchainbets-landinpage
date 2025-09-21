"use client";

import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Shield, BarChart3, Wallet } from "lucide-react";
import { motion } from "framer-motion";

export default function SecuritySection() {
  const securityFeatures = [
    {
      icon: <Shield className="h-8 w-8 text-white" />,
      title: "Blockchain Security",
      description: "All transactions are secured by the blockchain. Your funds are protected by cryptographic security that's virtually unbreakable.",
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-white" />,
      title: "Provably Fair",
      description: "Every game outcome can be verified independently. No hidden algorithms or manipulation — just pure mathematical fairness.",
    },
    {
      icon: <Wallet className="h-8 w-8 text-white" />,
      title: "Non-Custodial",
      description: "Your funds never leave your wallet until you decide to bet. We never hold your money — you maintain full control at all times.",
    },
  ];

  return (
    <section
      id="security"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white relative overflow-hidden"
    >
      {/* Background Layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800"></div>
      <div className="absolute inset-0 bg-[url('/images/onchainbet-banner-bg.png')] bg-cover bg-center opacity-60"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1),transparent_50%)]"></div>

      {/* Content */}
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Your Security is Our Priority
        </h2>
        <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          Built on blockchain technology with multiple layers of security to ensure your funds and data are always protected.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <Card className="bg-green-600/30 border-green-700 hover:bg-gray-750 transition-all backdrop-blur-sm h-full flex flex-col">
                <CardHeader className="text-center flex-grow">
                  <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-white text-xl mb-3">
                    {feature.title}
                  </CardTitle>
                  <CardDescription className="text-gray-300">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}