"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface PageHeaderProps {
    title: string;
    subtitle?: string;
    breadcrumb?: { label: string; href: string }[];
    backgroundImage?: string;
}

export default function PageHeader({
    title,
    subtitle,
    breadcrumb,
    backgroundImage,
}: PageHeaderProps) {
    return (
        <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-32 pb-20">
            {/* Background Image with Overlay */}
            {backgroundImage && (
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${backgroundImage})` }}
                >
                    <div className="absolute inset-0 bg-dark-bg/80 backdrop-blur-sm" />
                </div>
            )}

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-dark-bg via-transparent to-dark-bg pointer-events-none" />

            {/* Animated Particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-brand/30 rounded-full"
                        initial={{
                            x: Math.random() * 100 + "%",
                            y: "100%",
                            opacity: 0,
                        }}
                        animate={{
                            y: "-100%",
                            opacity: [0, 1, 0],
                        }}
                        transition={{
                            duration: 5 + Math.random() * 5,
                            repeat: Infinity,
                            delay: Math.random() * 5,
                            ease: "linear",
                        }}
                    />
                ))}
            </div>

            {/* Content */}
            <div className="container relative z-10 text-center">
                {/* Breadcrumb */}
                {breadcrumb && (
                    <motion.nav
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex items-center justify-center gap-2 text-sm text-slate-400 mb-6"
                    >
                        <Link href="/" className="hover:text-brand transition-colors">
                            Home
                        </Link>
                        {breadcrumb.map((item, i) => (
                            <span key={i} className="flex items-center gap-2">
                                <span className="text-slate-600">/</span>
                                <Link
                                    href={item.href}
                                    className="hover:text-brand transition-colors"
                                >
                                    {item.label}
                                </Link>
                            </span>
                        ))}
                    </motion.nav>
                )}

                {/* Title */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6"
                >
                    {title}
                </motion.h1>

                {/* Subtitle */}
                {subtitle && (
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto"
                    >
                        {subtitle}
                    </motion.p>
                )}

                {/* Decorative Line */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="w-24 h-1 bg-gradient-to-r from-brand to-brand-accent mx-auto mt-8 rounded-full"
                />
            </div>
        </section>
    );
}
