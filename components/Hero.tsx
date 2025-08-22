
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Decorative blurred circles */}
      <div className="absolute top-[-5rem] left-[-5rem] w-72 h-72 bg-blue-500/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-[-5rem] right-[-5rem] w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl animate-pulse" />

      <div className="container relative z-10 pt-20 md:pt-32 pb-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              One-Stop Solution for{" "}
              <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent animate-gradient">
                Delhi NCR
              </span>
            </h1>

            <p className="mt-5 text-lg text-gray-300 max-w-lg">
              Event management, deep cleaning, part-time manpower, marketing
              promoters, logistics, invigilators, car washing, packing & moving,
              gardening, printing, AC services, electricians & plumbers — all
              under one roof.
            </p>

            <div className="mt-8 flex gap-4">
              <Link
                href="#contact"
                className="px-6 py-3 rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold shadow-lg hover:shadow-blue-500/40 transition-transform transform hover:scale-105"
              >
                🚀 Book Service
              </Link>
              <a
                href="tel:+919999999999"
                className="px-6 py-3 rounded-2xl border border-gray-400 text-gray-200 hover:border-blue-400 hover:text-blue-400 transition-colors"
              >
                📞 Call Now
              </a>
            </div>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center"
          >
            <div className="relative w-[90%] md:w-[80%] lg:w-[70%] aspect-square rounded-3xl overflow-hidden shadow-2xl border border-gray-700">
              <Image
                src="/hero-city.png" // <- replace with a city/services themed image
                alt="Delhi NCR Services"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center">
                <p className="font-semibold text-white text-lg">
                  Trusted Services for Homes & Offices
                </p>
                <p className="text-sm text-gray-300">
                  Delhi • Noida • Gurugram • Faridabad • Ghaziabad
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
