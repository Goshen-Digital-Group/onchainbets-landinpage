"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface LoadingScreenProps {
  onComplete: () => void
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [displayText, setDisplayText] = useState("")
  const fullText = "ONCHAINBETS"

  useEffect(() => {
    let currentIndex = 0
    const typeInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(typeInterval)
        setTimeout(onComplete, 1000)
      }
    }, 150)

    return () => clearInterval(typeInterval)
  }, [onComplete])

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="relative">
        {/* Glass effect background */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-green-600/20 rounded-3xl backdrop-blur-xl border border-emerald-500/30"
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        {/* Typewriter text */}
        <div className="relative z-10 p-12">
          <motion.h1
            className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent text-center"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {displayText}
            <motion.span
              className="inline-block w-1 h-16 md:h-20 bg-emerald-400 ml-2"
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY }}
            />
          </motion.h1>

          <motion.p
            className="text-center text-gray-400 mt-6 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            The Next-Generation Decentralized Casino
          </motion.p>
        </div>
      </div>
    </motion.div>
  )
}
