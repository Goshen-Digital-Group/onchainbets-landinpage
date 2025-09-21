"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import Image from "next/image";
import { Circle } from "lucide-react";
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
      className={cn("absolute", className)}
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

      {/* Floating Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <ElegantShape delay={0.2} width={600} height={140} rotate={10} className="left-[-10%] top-[10%]" />
        <ElegantShape delay={0.4} width={400} height={100} rotate={-12} className="right-[-5%] top-[60%]" />
        <ElegantShape delay={0.3} width={250} height={70} rotate={8} className="left-[10%] bottom-[10%]" />
        <ElegantShape delay={0.5} width={180} height={50} rotate={-20} className="right-[15%] top-[5%]" />
      </div>

      {/* Content — NOW FADES IN ON MOUNT, THEN FADES OUT AFTER 3S */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }} // ← Fade IN on mount
        exit={controls} // ← Fade OUT after 3s (optional, if using AnimatePresence)
        className="relative z-20 text-center px-6 max-w-lg"
      >
 

        {/* Logo — Added border for debugging */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, type: "spring", bounce: 0.3 }}
          className="mb-8 mx-auto w-20 h-20 md:w-70 md:h-70 relative"
        >
          <div className="absolute inset-0 rounded-lg pointer-events-none" />
          <Image
            src="/logo-2-02.svg"
            alt="Onchainbets Logo"
            fill
            className="object-contain"
            priority
            onError={(e) => {
              console.error("Logo failed to load:", e);
              const target = e.target as HTMLImageElement;
              target.style.backgroundColor = "rgba(16, 185, 129, 0.2)";
              target.style.padding = "1rem";
            }}
          />
        </motion.div>

   

   

        {/* Loading Dots */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          className="flex justify-center space-x-2 mt-8"
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2 }}
              className="w-3 h-3 bg-green-100 rounded-full"
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}