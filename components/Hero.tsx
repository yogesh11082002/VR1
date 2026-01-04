"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const floatingIcons = ["🏠", "🧹", "🔧", "📦", "🌿", "❄️", "🖨️", "🚗", "📋", "💼"];

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Floating service icons */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingIcons.map((icon, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 100 }}
            animate={{
              opacity: [0.2, 0.4, 0.2],
              y: [100, -100],
              x: [0, Math.random() * 40 - 20],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              delay: i * 1.5,
              ease: "linear"
            }}
            className="absolute text-4xl"
            style={{
              left: `${10 + (i * 9)}%`,
              bottom: `-10%`,
            }}
          >
            {icon}
          </motion.div>
        ))}
      </div>

      {/* Hero Content */}
      <div className="container relative z-10 px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-slate-300 mb-8">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Serving 10,000+ Happy Customers
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold leading-tight mb-8"
          >
            <span className="text-white">One-Stop</span>
            <br />
            <span className="bg-gradient-to-r from-brand via-blue-400 to-brand-accent bg-clip-text text-transparent animate-gradient">
              Solution
            </span>
            <br />
            <span className="text-white">for Delhi NCR</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Event management, deep cleaning, manpower, marketing promoters,
            logistics, car washing, packing & moving, gardening, printing,
            AC services, electricians & plumbers — all under one roof.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              href="#contact"
              className="group relative px-8 py-4 rounded-2xl bg-gradient-to-r from-brand to-brand-dark text-white font-bold text-lg shadow-2xl shadow-brand/25 hover:shadow-brand/40 transition-all overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Book a Service
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-brand-dark to-brand opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>

            <a
              href="tel:+919999999999"
              className="px-8 py-4 rounded-2xl glass glass-hover text-white font-semibold text-lg flex items-center gap-3"
            >
              <span className="text-2xl">📞</span>
              +91 99999 99999
            </a>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-16 flex flex-wrap justify-center gap-8 text-slate-500 text-sm"
          >
            {["Delhi", "Noida", "Gurugram", "Faridabad", "Ghaziabad"].map((city, i) => (
              <span key={i} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand/60" />
                {city}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-bg to-transparent pointer-events-none" />
    </section>
  );
}
