
'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const navLinks = [
  { href: '#', label: 'Home' },
  { href: '#services', label: 'Services' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="sticky top-0 z-50 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 backdrop-blur-lg border-b border-gray-700 shadow-lg"
    >
      <nav className="container flex items-center justify-between h-16 px-6">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.1, rotate: -2 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <Link href="/" className="font-extrabold text-2xl tracking-wide">
            <span className="text-blue-400">VR</span>
            <span className="text-white">1</span>
          </Link>
        </motion.div>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -2 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Link
                href={link.href}
                className="relative font-medium text-gray-300 hover:text-blue-400 transition-colors group"
              >
                {link.label}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Button */}
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            href="#contact"
            className="px-5 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold shadow-lg hover:shadow-blue-500/50 transition-all"
          >
            🚀 Get Quote
          </Link>
        </motion.div>
      </nav>
    </motion.header>
  );
}

