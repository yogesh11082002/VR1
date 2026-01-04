"use client";

import { services } from "@/lib/services";
import { motion } from "framer-motion";
import Link from "next/link";

interface ServicesGridProps {
    limit?: number;
    showSeeMore?: boolean;
}

export default function ServicesGrid({ limit, showSeeMore = false }: ServicesGridProps) {
    const displayedServices = limit ? services.slice(0, limit) : services;

    return (
        <div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {displayedServices.map((s, i) => (
                    <motion.div
                        key={s.key}
                        initial={{ opacity: 0, y: 40, scale: 0.95 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        whileHover={{ y: -8 }}
                        className="group relative glass rounded-3xl p-8 overflow-hidden transition-all duration-500"
                    >
                        {/* Internal Glow Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-br from-brand/10 via-transparent to-brand-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="relative z-10 flex flex-col h-full">
                            {/* Icon with glowing backdrop */}
                            <div className="relative w-16 h-16 mb-6">
                                <div className="absolute inset-0 bg-brand/20 blur-xl rounded-full group-hover:bg-brand/40 transition-all duration-300" />
                                <div className="relative text-5xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                                    {s.icon}
                                </div>
                            </div>

                            <h3 className="text-xl font-heading font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                                {s.title}
                            </h3>

                            <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                                {s.blurb}
                            </p>

                            <Link
                                href={`/services/${s.key}`}
                                className="inline-flex items-center gap-2 text-blue-400 font-semibold text-sm group-hover:text-blue-300 transition-colors"
                            >
                                Learn More
                                <span className="group-hover:translate-x-1 transition-transform">→</span>
                            </Link>
                        </div>
                    </motion.div>
                ))}
            </div>

            {showSeeMore && limit && services.length > limit && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <Link
                        href="/services"
                        className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-brand to-brand-dark text-white font-semibold shadow-lg shadow-brand/20 hover:shadow-brand/40 hover:scale-105 transition-all"
                    >
                        View All Services
                        <span>→</span>
                    </Link>
                </motion.div>
            )}
        </div>
    );
}
