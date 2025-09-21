"use client";

import { motion } from "framer-motion";
import { SocialTooltip, SocialItem } from '@/components/ui/social-media';
import {
  Globe,
  Github,
  Book,
  Twitter,
  Users,
  Send,
} from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: (
        <svg className="h-8 w-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12 12 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: '100% Transparent & Provably Fair',
      description: 'Every game outcome is verifiable on the blockchain. No hidden algorithms, just pure transparency.',
    },
    {
      icon: (
        <svg className="h-8 w-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5l-7 7-4-4" />
        </svg>
      ),
      title: 'No Middlemen',
      description: 'Play directly from your wallet. Your funds remain in your control at all times.',
    },
    {
      icon: (
        <svg className="h-8 w-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Instant Payouts',
      description: 'Win and get paid instantly. No withdrawal delays or processing fees.',
    },
  ];

  const socialLinks: SocialItem[] = [
    {
      href: "https://onchainbets.fun",
      ariaLabel: "Play",
      tooltip: "Onchainbets Casino",
      icon: Globe,
      color: "#10B981", // Emerald green
    },
    {
      href: "https://github.com/Goshen-Digital-Group/onchainbets",
      ariaLabel: "GitHub",
      tooltip: "GitHub Repository",
      icon: Github,
      color: "#10B981", // GitHub black
    },
    {
      href: "https://www.onchainbets.fun/docs",
      ariaLabel: "Docs",
      tooltip: "Documentation",
      icon: Book,
      color: "#10B981", // Blue
    },
    {
      href: "https://x.com/Onchainbetsfun",
      ariaLabel: "X (Twitter)",
      tooltip: "Follow on X",
      icon: Twitter,
      color: "#10B981", // Black
    },
    {
      href: "https://x.com/i/communities/1959009958617334252",
      ariaLabel: "X Community",
      tooltip: "Join X Community",
      icon: Users,
      color: "#10B981", // Twitter blue
    },
  ];

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50 backdrop-blur-sm relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800"></div>
      <div className="absolute inset-0 bg-[url('/images/onchainbet-4.png')] bg-cover bg-center opacity-60" aria-hidden="true"></div>
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
          <div className="mb-4 bg-gradient-to-r from-green-400/50 to-green-600/50 text-emerald-300 border-emerald-600/50 px-4 py-2 backdrop-blur-sm rounded-full inline-block">
            🚀 Why Choose Onchainbets?
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Built for the Future<br />of Gaming
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the next generation of online gaming with blockchain technology, ensuring fairness and transparency in every bet.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="border border-green-600/30 hover:shadow-xl hover:border-emerald-500/50 transition-all duration-300 bg-green-700/30 backdrop-blur-sm h-full rounded-xl p-6">
                <div className="w-16 h-16 bg-emerald-900/50 rounded-2xl flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl md:text-2xl font-bold text-white mb-6">CONNECT WITH US</h3>
        <div className="flex items-center  justify-center">
            <SocialTooltip items={socialLinks} />
          </div>
          
        </div>
      </div>
    </section>
  );
}