"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import CTASection from "@/components/CTASection";
import { services } from "@/lib/services";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ServicesPage() {
    return (
        <main className="relative min-h-screen">
            {/* Background */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[-20%] right-[-10%] w-[50rem] h-[50rem] bg-gradient-to-bl from-brand/20 via-blue-600/10 to-transparent rounded-full blur-3xl opacity-50" />
                <div className="absolute bottom-[-20%] left-[-10%] w-[40rem] h-[40rem] bg-gradient-to-tr from-purple-600/15 via-brand-accent/10 to-transparent rounded-full blur-3xl opacity-40" />
            </div>

            <div className="relative z-10">
                <Navbar />

                <PageHeader
                    title="Our Services"
                    subtitle="Comprehensive solutions for all your home and business needs across Delhi NCR"
                    breadcrumb={[{ label: "Services", href: "/services" }]}
                />

                {/* Services Grid */}
                <section className="container py-20">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, i) => (
                            <motion.div
                                key={service.key}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                            >
                                <Link href={`/services/${service.key}`} className="block group">
                                    <div className="glass rounded-3xl p-8 h-full hover:bg-white/10 transition-all duration-500 relative overflow-hidden">
                                        {/* Glow Effect */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-brand/10 via-transparent to-brand-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                        <div className="relative z-10">
                                            {/* Icon */}
                                            <div className="relative w-20 h-20 mb-6">
                                                <div className="absolute inset-0 bg-brand/20 blur-xl rounded-full group-hover:bg-brand/40 transition-all duration-300" />
                                                <div className="relative text-6xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                                                    {service.icon}
                                                </div>
                                            </div>

                                            {/* Title */}
                                            <h3 className="text-2xl font-heading font-bold text-white mb-3 group-hover:text-brand transition-colors">
                                                {service.title}
                                            </h3>

                                            {/* Description */}
                                            <p className="text-slate-400 leading-relaxed mb-6">
                                                {service.blurb}
                                            </p>

                                            {/* CTA */}
                                            <span className="inline-flex items-center gap-2 text-brand font-semibold group-hover:gap-4 transition-all">
                                                Learn More
                                                <span className="text-lg">→</span>
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Process Section */}
                <section className="container py-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
                            How It Works
                        </h2>
                        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                            Getting started with VR1 is simple and hassle-free
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            {
                                step: "01",
                                title: "Choose Service",
                                desc: "Browse our services and select what you need",
                            },
                            {
                                step: "02",
                                title: "Get Quote",
                                desc: "Receive a free, no-obligation quote within hours",
                            },
                            {
                                step: "03",
                                title: "Schedule",
                                desc: "Pick a convenient time that works for you",
                            },
                            {
                                step: "04",
                                title: "Relax",
                                desc: "Sit back while our professionals handle everything",
                            },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.15 }}
                                className="relative"
                            >
                                {/* Connector Line */}
                                {i < 3 && (
                                    <div className="hidden md:block absolute top-12 left-[60%] w-full h-0.5 bg-gradient-to-r from-brand/50 to-transparent" />
                                )}

                                <div className="glass rounded-2xl p-6 text-center relative z-10">
                                    <div className="text-5xl font-heading font-bold text-brand/30 mb-4">
                                        {item.step}
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-slate-400 text-sm">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                <CTASection
                    title="Need a Custom Solution?"
                    subtitle="We offer tailored packages for businesses with unique requirements. Contact us for a personalized quote."
                    buttonText="Contact Us"
                    buttonLink="/contact"
                />

                <Footer />
            </div>
        </main>
    );
}
