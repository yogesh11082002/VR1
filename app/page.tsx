"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import ServicesGrid from "@/components/ServicesGrid";
import Footer from "@/components/Footer";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import AnimatedCounter from "@/components/AnimatedCounter";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";
import Link from "next/link";

const featuredServices = [
  { icon: "🎉", title: "Event Management", href: "/services/event-management" },
  { icon: "🧹", title: "Cleaning Services", href: "/services/cleaning" },
  { icon: "👷", title: "Manpower", href: "/services/manpower" },
  { icon: "❄️", title: "AC Services", href: "/services/ac-services" },
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Animated Gradient Orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-20%] left-[-10%] w-[40rem] h-[40rem] bg-gradient-to-br from-brand/30 via-blue-600/20 to-transparent rounded-full blur-3xl opacity-50"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 80, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[40%] right-[-15%] w-[50rem] h-[50rem] bg-gradient-to-bl from-purple-600/20 via-brand-accent/20 to-transparent rounded-full blur-3xl opacity-40"
        />
        <motion.div
          animate={{
            x: [0, 60, 0],
            y: [0, -40, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-10%] left-[20%] w-[35rem] h-[35rem] bg-gradient-to-tr from-cyan-500/15 via-blue-500/15 to-transparent rounded-full blur-3xl opacity-50"
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />

        {/* Featured Services Quick Access */}
        <section className="container py-16 relative z-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {featuredServices.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link
                  href={service.href}
                  className="glass glass-hover rounded-2xl p-6 flex flex-col items-center text-center group"
                >
                  <span className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </span>
                  <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">
                    {service.title}
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Services Section */}
        <Section
          id="services"
          title="Our Services"
          subtitle="Comprehensive solutions tailored for homes and businesses across Delhi NCR"
        >
          <ServicesGrid limit={6} showSeeMore={true} />
        </Section>

        {/* Stats Section */}
        <section className="container py-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-3xl p-10 md:p-16"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <AnimatedCounter end={10000} suffix="+" label="Happy Customers" />
              <AnimatedCounter end={50} suffix="+" label="Services Offered" />
              <AnimatedCounter end={15} suffix="+" label="Years Experience" />
              <AnimatedCounter end={99} suffix="%" label="Satisfaction Rate" />
            </div>
          </motion.div>
        </section>

        {/* About Preview */}
        <Section id="about" title="Why Choose VR1" subtitle="Experience excellence with every service">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "✅",
                title: "Verified Professionals",
                desc: "All our staff undergo thorough background checks and professional training.",
              },
              {
                icon: "⚡",
                title: "Quick Turnaround",
                desc: "We value your time. Fast response and efficient service delivery guaranteed.",
              },
              {
                icon: "💎",
                title: "Premium Quality",
                desc: "Top-notch equipment and materials for impeccable results every time.",
              },
              {
                icon: "🏠",
                title: "Door-to-Door",
                desc: "Complete convenience with services delivered right at your doorstep.",
              },
              {
                icon: "💰",
                title: "Transparent Pricing",
                desc: "No hidden charges. Clear, upfront pricing for all services.",
              },
              {
                icon: "🌍",
                title: "Wide Coverage",
                desc: "Delhi, Noida, Gurugram, Faridabad, Ghaziabad - we've got you covered.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass rounded-2xl p-6 text-center group hover:bg-white/10 transition-all duration-300"
              >
                <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="font-heading font-bold text-lg text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-brand hover:text-brand-accent transition-colors font-semibold"
            >
              Learn more about us
              <span>→</span>
            </Link>
          </motion.div>
        </Section>

        {/* Testimonials */}
        <Section
          id="testimonials"
          title="What Our Clients Say"
          subtitle="Trusted by thousands of happy customers across Delhi NCR"
        >
          <TestimonialsCarousel />
        </Section>

        {/* CTA Section */}
        <CTASection
          title="Ready to Get Started?"
          subtitle="Contact us today for a free consultation and quote. We're here to help with all your service needs."
          buttonText="Get Free Quote"
          buttonLink="/contact"
        />

        <Footer />
      </div>
    </main>
  );
}
