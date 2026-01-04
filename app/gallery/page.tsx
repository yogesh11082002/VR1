"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import CTASection from "@/components/CTASection";
import { motion, AnimatePresence } from "framer-motion";

// Gallery categories and images
const categories = ["All", "Events", "Cleaning", "Gardening", "Printing", "Moving"];

const galleryItems = [
    { id: 1, category: "Events", title: "Corporate Event Setup", emoji: "🎪" },
    { id: 2, category: "Events", title: "Wedding Decoration", emoji: "💒" },
    { id: 3, category: "Cleaning", title: "Office Deep Clean", emoji: "🏢" },
    { id: 4, category: "Cleaning", title: "Home Sanitization", emoji: "🏠" },
    { id: 5, category: "Gardening", title: "Terrace Garden", emoji: "🌿" },
    { id: 6, category: "Gardening", title: "Office Plants", emoji: "🪴" },
    { id: 7, category: "Printing", title: "Banner Printing", emoji: "🖼️" },
    { id: 8, category: "Printing", title: "Corporate Branding", emoji: "📋" },
    { id: 9, category: "Moving", title: "Home Relocation", emoji: "📦" },
    { id: 10, category: "Moving", title: "Office Shifting", emoji: "🏬" },
    { id: 11, category: "Events", title: "Birthday Party", emoji: "🎂" },
    { id: 12, category: "Cleaning", title: "Carpet Cleaning", emoji: "🧽" },
];

export default function GalleryPage() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [selectedItem, setSelectedItem] = useState<typeof galleryItems[0] | null>(null);

    const filteredItems = activeCategory === "All"
        ? galleryItems
        : galleryItems.filter(item => item.category === activeCategory);

    return (
        <main className="relative min-h-screen">
            {/* Background */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[-20%] left-[-10%] w-[50rem] h-[50rem] bg-gradient-to-br from-brand/20 via-blue-600/10 to-transparent rounded-full blur-3xl opacity-50" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[40rem] h-[40rem] bg-gradient-to-tl from-purple-600/15 via-brand-accent/10 to-transparent rounded-full blur-3xl opacity-40" />
            </div>

            <div className="relative z-10">
                <Navbar />

                <PageHeader
                    title="Our Work"
                    subtitle="See the quality and professionalism we bring to every project"
                    breadcrumb={[{ label: "Gallery", href: "/gallery" }]}
                />

                {/* Category Filters */}
                <section className="container py-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-wrap justify-center gap-3"
                    >
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 ${activeCategory === category
                                        ? "bg-brand text-white shadow-lg shadow-brand/30"
                                        : "glass hover:bg-white/10 text-slate-300"
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </motion.div>
                </section>

                {/* Gallery Grid */}
                <section className="container pb-20">
                    <motion.div layout className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
                        <AnimatePresence mode="popLayout">
                            {filteredItems.map((item, i) => (
                                <motion.div
                                    key={item.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    transition={{ duration: 0.4, delay: i * 0.05 }}
                                    onClick={() => setSelectedItem(item)}
                                    className="group cursor-pointer"
                                >
                                    <div className="glass rounded-2xl aspect-square relative overflow-hidden hover:bg-white/10 transition-all duration-500">
                                        {/* Placeholder Image */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
                                            <span className="text-8xl transform group-hover:scale-125 transition-transform duration-500">
                                                {item.emoji}
                                            </span>
                                        </div>

                                        {/* Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <div className="absolute bottom-0 left-0 right-0 p-4">
                                                <span className="text-xs text-brand font-medium uppercase tracking-wider">
                                                    {item.category}
                                                </span>
                                                <h3 className="text-white font-bold mt-1">{item.title}</h3>
                                            </div>
                                        </div>

                                        {/* Zoom Icon */}
                                        <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <span className="text-white text-lg">🔍</span>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>

                    {filteredItems.length === 0 && (
                        <div className="text-center py-20">
                            <p className="text-slate-400">No items found in this category.</p>
                        </div>
                    )}
                </section>

                {/* Stats */}
                <section className="container py-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="glass rounded-3xl p-10 text-center"
                    >
                        <h2 className="text-3xl font-heading font-bold text-white mb-8">
                            Our Track Record
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {[
                                { number: "5,000+", label: "Events Managed" },
                                { number: "15,000+", label: "Cleanings Done" },
                                { number: "2,000+", label: "Gardens Created" },
                                { number: "10,000+", label: "Print Jobs" },
                            ].map((stat, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                >
                                    <div className="text-3xl md:text-4xl font-heading font-bold text-gradient mb-2">
                                        {stat.number}
                                    </div>
                                    <div className="text-slate-400 text-sm">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </section>

                <CTASection
                    title="Want to See More?"
                    subtitle="Visit our office to see our portfolio in detail or discuss your project requirements."
                    buttonText="Schedule a Visit"
                    buttonLink="/contact"
                />

                <Footer />
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedItem && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4"
                        onClick={() => setSelectedItem(null)}
                    >
                        {/* Backdrop */}
                        <div className="absolute inset-0 bg-dark-bg/95 backdrop-blur-xl" />

                        {/* Content */}
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ type: "spring", damping: 25 }}
                            className="relative z-10 max-w-4xl w-full"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="glass rounded-3xl overflow-hidden">
                                {/* Image */}
                                <div className="aspect-video bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
                                    <span className="text-[12rem]">{selectedItem.emoji}</span>
                                </div>

                                {/* Info */}
                                <div className="p-6">
                                    <span className="text-brand text-sm font-medium uppercase tracking-wider">
                                        {selectedItem.category}
                                    </span>
                                    <h3 className="text-2xl font-heading font-bold text-white mt-2">
                                        {selectedItem.title}
                                    </h3>
                                    <p className="text-slate-400 mt-2">
                                        Professional {selectedItem.category.toLowerCase()} services delivered with excellence.
                                        Contact us to discuss your requirements.
                                    </p>
                                </div>
                            </div>

                            {/* Close Button */}
                            <button
                                onClick={() => setSelectedItem(null)}
                                className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                            >
                                ✕
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </main>
    );
}
