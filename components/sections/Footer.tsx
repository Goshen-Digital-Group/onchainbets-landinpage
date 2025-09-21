"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/onchainbet-banner-bg.png')] bg-cover bg-center opacity-60"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/95 to-black/90"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>

      <div className="max-w-6xl mx-auto relative z-10 text-center">
        {/* Social Icons */}
        <div className="flex justify-center space-x-8 mb-12">
          {/* Twitter/X */}
          <a
            href="https://x.com/Onchainbetsfun"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="text-gray-400 hover:text-green-400 transition-colors"
          >
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8.29 20.251c7.548 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.42a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.073 4.073 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a15.785 15.785 0 008.29 1.84z" />
            </svg>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Goshen-Digital-Group/onchainbets"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-gray-400 hover:text-green-400 transition-colors"
          >
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23a11.509 11.509 0 016 0c2.293-1.552 3.298-1.23 3.298-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>

          {/* Documentation */}
          <a
            href="https://www.onchainbets.fun/docs"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Documentation"
            className="text-gray-400 hover:text-green-400 transition-colors"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </a>

          {/* X Community */}
          <a
            href="https://x.com/i/communities/1959009958617334252"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X Community"
            className="text-gray-400 hover:text-green-400 transition-colors"
          >
            <span className="text-xl">𝕏</span>
          </a>
        </div>

        {/* Description */}
        <p className="text-sm font-medium text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8">
          Onchainbets is the next-generation decentralized casino built on blockchain technology.
          We offer transparent, secure, and provably fair gaming experiences with instant payouts.
          Every game outcome is verifiable on-chain, ensuring fairness and trust for all players.
        </p>

        {/* Logo */}
        <div className="mb-8">
          <Image
            src="/onchainlog-08.svg"
            alt="OnChainBets"
            width={80}
            height={80}
            className="mx-auto"
          />
        </div>

        {/* Copyright */}
        <p className="text-xs text-gray-500">
          © 2025 Onchainbets
        </p>
      </div>
    </footer>
  );
}