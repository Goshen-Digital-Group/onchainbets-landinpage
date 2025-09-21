"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Loader
import OnchainBetsLoader from "@/components/ui/OnchainBetsLoader";

// Sections
import Navbar from "@/components/sections/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import GamesSection from "@/components/sections/GamesSection";
import HowToPlaySection from "@/components/sections/HowToPlaySection";
import SecuritySection from "@/components/sections/SecuritySection";
import Footer from "@/components/sections/Footer";

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);
  const [isClient, setIsClient] = useState(false); // 👈 NEW

  useEffect(() => {
    setIsClient(true); // 👈 Only run on client
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 32000); // Show loader for 32 seconds? (maybe typo? usually 3000 = 3s)
    return () => clearTimeout(timer);
  }, []);

  if (!isClient) {
    return null; // 👈 Don't render anything on server
  }

  return (
    <>
      {/* Custom Animated Loader */}
      {isLoading && <OnchainBetsLoader onComplete={() => setIsLoading(false)} />}

      {/* Main Content */}
      <motion.div
        className="min-h-screen bg-black"
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.5 }}
      >
        <Navbar />
        <HeroSection />
        <FeaturesSection />
        <GamesSection />
        <HowToPlaySection />
        <SecuritySection />
        <Footer />
      </motion.div>
    </>
  );
}