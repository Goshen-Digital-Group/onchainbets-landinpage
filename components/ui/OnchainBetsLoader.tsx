"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

function ElegantShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = "from-emerald-500/[0.15]",
}: {
  className?: string;
  delay?: number;
  width?: number;
  height?: number;
  rotate?: number;
  gradient?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -150, rotate: rotate - 15 }}
      animate={{ opacity: 1, y: 0, rotate: rotate }}
      transition={{ duration: 2.4, delay, ease: [0.23, 0.86, 0.39, 0.96] }}
      className={cn("absolute pointer-events-none", className)}
    >
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        style={{ width, height }}
        className="relative"
      >
        <div
          className={cn(
            "absolute inset-0 rounded-full bg-gradient-to-r to-transparent",
            gradient,
            "backdrop-blur-[2px] border border-emerald-500/20",
            "shadow-[0_8px_32px_0_rgba(16,185,129,0.1)]",
            "after:absolute after:inset-0 after:rounded-full",
            "after:bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.2),transparent_70%)]"
          )}
        />
      </motion.div>
    </motion.div>
  );
}

export default function OnchainBetsLoader({ onComplete }: { onComplete: () => void }) {
  const controls = useAnimation();

  useEffect(() => {
    const timer = setTimeout(() => {
      controls.start({
        opacity: 0,
        y: 100,
        transition: { duration: 0.8, ease: "easeInOut" },
      });
      const completeTimer = setTimeout(() => onComplete(), 800);
      return () => clearTimeout(completeTimer);
    }, 3000);

    return () => clearTimeout(timer);
  }, [controls, onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/10 to-green-100/10 blur-3xl" />

      {/* Floating Shapes — Responsive positions & sizes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <ElegantShape
          delay={0.2}
          width={window.innerWidth < 768 ? 300 : 600}
          height={window.innerWidth < 768 ? 70 : 140}
          rotate={10}
          className="left-[-10%] top-[10%]"
        />
        <ElegantShape
          delay={0.4}
          width={window.innerWidth < 768 ? 250 : 400}
          height={window.innerWidth < 768 ? 60 : 100}
          rotate={-12}
          className="right-[-5%] top-[60%]"
        />
        <ElegantShape
          delay={0.3}
          width={window.innerWidth < 768 ? 150 : 250}
          height={window.innerWidth < 768 ? 40 : 70}
          rotate={8}
          className="left-[10%] bottom-[10%]"
        />
        <ElegantShape
          delay={0.5}
          width={window.innerWidth < 768 ? 120 : 180}
          height={window.innerWidth < 768 ? 30 : 50}
          rotate={-20}
          className="right-[15%] top-[5%]"
        />
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={controls}
        className="relative z-20 text-center px-6 max-w-md sm:max-w-lg"
      >
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, type: "spring", bounce: 0.3 }}
          className="mb-8 mx-auto w-30 h-30 sm:w-40 sm:h-40 md:w-30 md:h-30 relative"
        >
          <div className="absolute inset-0 rounded-lg pointer-events-none" />
          <Image
            src="/logo-2-02.svg"
            alt="Onchainbets Logo"
            fill
            className="object-contain"
            priority
            sizes="(max-width: 640px) 4rem, (max-width: 768px) 5rem, 6rem"
            onError={(e) => {
              console.error("Logo failed to load:", e);
              const target = e.target as HTMLImageElement;
              target.style.backgroundColor = "rgba(16, 185, 129, 0.2)";
              target.style.padding = "0.5rem";
            }}
          />
        </motion.div>

        {/* Loading Dots */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          className="flex justify-center space-x-1.5 mt-6 sm:space-x-2 sm:mt-8"
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2 }}
              className="w-2 h-2 sm:w-3 sm:h-3 bg-green-100 rounded-full"
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}