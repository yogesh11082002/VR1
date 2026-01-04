"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const footerLinks = {
  services: [
    { label: "Event Management", href: "/services/event-management" },
    { label: "Cleaning Services", href: "/services/cleaning" },
    { label: "Manpower", href: "/services/manpower" },
    { label: "AC Services", href: "/services/ac-services" },
    { label: "View All", href: "/services" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Our Gallery", href: "/gallery" },
    { label: "Testimonials", href: "/#testimonials" },
    { label: "Contact", href: "/contact" },
    { label: "Careers", href: "/contact" },
  ],
  support: [
    { label: "Help Center", href: "/contact" },
    { label: "FAQs", href: "/contact#faq" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Refund Policy", href: "#" },
  ],
};

const socialLinks = [
  { icon: "📘", label: "Facebook", href: "#" },
  { icon: "📸", label: "Instagram", href: "#" },
  { icon: "🐦", label: "Twitter", href: "#" },
  { icon: "💼", label: "LinkedIn", href: "#" },
  { icon: "📺", label: "YouTube", href: "#" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-slate-800 bg-slate-900/50 mt-auto">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark-bg to-transparent pointer-events-none" />

      <div className="container relative z-10 px-6 pt-16 pb-8">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="font-heading font-extrabold text-3xl tracking-tight flex items-center gap-1 mb-6"
            >
              <span className="text-white">VR</span>
              <span className="text-brand">1</span>
              <div className="w-2 h-2 rounded-full bg-brand-accent animate-pulse ml-1" />
            </Link>
            <p className="text-slate-400 leading-relaxed mb-6 max-w-sm">
              Your trusted partner for comprehensive home and business services
              across Delhi NCR. Reliable, professional, and always on time.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-xl glass flex items-center justify-center text-lg hover:bg-white/10 transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-heading font-bold text-white mb-6">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-brand transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-heading font-bold text-white mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-brand transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-heading font-bold text-white mb-6">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-brand transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info Bar */}
        <div className="glass rounded-2xl p-6 mb-12">
          <div className="grid md:grid-cols-3 gap-6 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <span className="text-2xl">📍</span>
              <div>
                <div className="text-white font-medium">Location</div>
                <div className="text-slate-400 text-sm">Delhi NCR, India</div>
              </div>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-3">
              <span className="text-2xl">📞</span>
              <div>
                <div className="text-white font-medium">Call Us</div>
                <a href="tel:+919999999999" className="text-slate-400 text-sm hover:text-brand transition-colors">
                  +91 99999 99999
                </a>
              </div>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-3">
              <span className="text-2xl">✉️</span>
              <div>
                <div className="text-white font-medium">Email</div>
                <a href="mailto:hello@vr1.example" className="text-slate-400 text-sm hover:text-brand transition-colors">
                  hello@vr1.example
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} VR1 Services Pvt. Ltd. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span>Made with</span>
            <span className="text-red-500">❤️</span>
            <span>in India</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
