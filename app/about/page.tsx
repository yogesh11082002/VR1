"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import AnimatedCounter from "@/components/AnimatedCounter";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";

const timeline = [
    {
        year: "2009",
        title: "The Beginning",
        description: "VR1 was founded with a simple vision: provide reliable, professional services to homes and businesses in Delhi.",
    },
    {
        year: "2012",
        title: "Expanding Services",
        description: "Added event management, cleaning, and manpower services to our portfolio.",
    },
    {
        year: "2015",
        title: "Regional Growth",
        description: "Expanded operations to cover entire Delhi NCR including Noida, Gurugram, and Faridabad.",
    },
    {
        year: "2018",
        title: "10,000 Customers",
        description: "Celebrated serving 10,000 happy customers across all service categories.",
    },
    {
        year: "2021",
        title: "Digital Transformation",
        description: "Launched online booking platform and mobile app for seamless service booking.",
    },
    {
        year: "2024",
        title: "Industry Leader",
        description: "Recognized as one of the leading multi-service providers in Delhi NCR.",
    },
];

const team = [
    {
        name: "Vikram Rao",
        role: "Founder & CEO",
        avatar: "VR",
        description: "20+ years of experience in service industry management.",
    },
    {
        name: "Priya Sharma",
        role: "Operations Head",
        avatar: "PS",
        description: "Ensures smooth service delivery across all categories.",
    },
    {
        name: "Amit Kumar",
        role: "Customer Relations",
        avatar: "AK",
        description: "Dedicated to customer satisfaction and quality assurance.",
    },
    {
        name: "Sneha Gupta",
        role: "HR Manager",
        avatar: "SG",
        description: "Manages our team of 500+ verified professionals.",
    },
];

const values = [
    {
        icon: "🎯",
        title: "Excellence",
        description: "We strive for excellence in every service we deliver, no matter how small.",
    },
    {
        icon: "🤝",
        title: "Trust",
        description: "Building long-term relationships through transparency and reliability.",
    },
    {
        icon: "⚡",
        title: "Efficiency",
        description: "Quick response and efficient execution to respect your time.",
    },
    {
        icon: "💡",
        title: "Innovation",
        description: "Continuously improving our services with modern techniques and tools.",
    },
];

export default function AboutPage() {
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
                    title="About VR1"
                    subtitle="Your trusted partner for comprehensive home and business services across Delhi NCR since 2009"
                    breadcrumb={[{ label: "About", href: "/about" }]}
                />

                {/* Story Section */}
                <section className="container py-20">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-4xl font-heading font-bold text-white mb-6">
                                Our Story
                            </h2>
                            <div className="space-y-4 text-slate-300 leading-relaxed">
                                <p>
                                    VR1 was born from a simple observation: finding reliable, professional
                                    service providers in Delhi NCR was unnecessarily difficult. Whether it
                                    was cleaning, event management, or home repairs, quality and consistency
                                    were always a gamble.
                                </p>
                                <p>
                                    We set out to change that. Starting with just a small team of verified
                                    professionals, we focused on one thing: delivering exceptional service
                                    with complete transparency. No hidden charges, no unreliable workers,
                                    no compromises.
                                </p>
                                <p>
                                    Today, VR1 serves thousands of homes and businesses across Delhi, Noida,
                                    Gurugram, Faridabad, and Ghaziabad. Our network of 500+ trained professionals
                                    continues to grow, but our commitment to quality remains unchanged.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="glass rounded-3xl p-10"
                        >
                            <div className="grid grid-cols-2 gap-8">
                                <AnimatedCounter end={15} suffix="+" label="Years Experience" />
                                <AnimatedCounter end={10} suffix="K+" label="Happy Customers" />
                                <AnimatedCounter end={500} suffix="+" label="Team Members" />
                                <AnimatedCounter end={50} suffix="+" label="Services" />
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Values Section */}
                <section className="container py-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-heading font-bold text-white mb-4">
                            Our Values
                        </h2>
                        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                            The principles that guide everything we do
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-4 gap-6">
                        {values.map((value, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="glass rounded-2xl p-6 text-center group hover:bg-white/10 transition-all duration-300"
                            >
                                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform">
                                    {value.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
                                <p className="text-slate-400 text-sm">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Timeline Section */}
                <section className="container py-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-heading font-bold text-white mb-4">
                            Our Journey
                        </h2>
                        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                            Key milestones in our growth story
                        </p>
                    </motion.div>

                    <div className="relative">
                        {/* Timeline Line */}
                        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand via-brand-accent to-brand hidden md:block" />

                        <div className="space-y-12">
                            {timeline.map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: i * 0.1 }}
                                    className={`relative flex items-center gap-8 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                                        }`}
                                >
                                    <div className={`flex-1 ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                                        <div className="glass rounded-2xl p-6 inline-block">
                                            <div className="text-brand font-bold text-xl mb-2">
                                                {item.year}
                                            </div>
                                            <h3 className="text-xl font-bold text-white mb-2">
                                                {item.title}
                                            </h3>
                                            <p className="text-slate-400 text-sm">{item.description}</p>
                                        </div>
                                    </div>

                                    {/* Timeline Dot */}
                                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-brand shadow-lg shadow-brand/50" />

                                    <div className="flex-1 hidden md:block" />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Team Section */}
                <section className="container py-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-heading font-bold text-white mb-4">
                            Leadership Team
                        </h2>
                        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                            Meet the people driving VR1 forward
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-4 gap-6">
                        {team.map((member, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="glass rounded-2xl p-6 text-center group hover:bg-white/10 transition-all duration-300"
                            >
                                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-brand to-brand-accent flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 group-hover:scale-110 transition-transform">
                                    {member.avatar}
                                </div>
                                <h3 className="text-lg font-bold text-white mb-1">{member.name}</h3>
                                <p className="text-brand text-sm mb-2">{member.role}</p>
                                <p className="text-slate-400 text-sm">{member.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Coverage Section */}
                <section className="container py-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="glass rounded-3xl p-10 text-center"
                    >
                        <h2 className="text-3xl font-heading font-bold text-white mb-4">
                            Service Coverage
                        </h2>
                        <p className="text-slate-400 mb-8">
                            We proudly serve the entire Delhi NCR region
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            {["Delhi", "Noida", "Gurugram", "Faridabad", "Ghaziabad", "Greater Noida"].map(
                                (city, i) => (
                                    <motion.span
                                        key={i}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.3, delay: i * 0.1 }}
                                        className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white font-medium"
                                    >
                                        📍 {city}
                                    </motion.span>
                                )
                            )}
                        </div>
                    </motion.div>
                </section>

                <CTASection
                    title="Join Our Growing Family"
                    subtitle="Whether you're a customer or looking to join our team, we'd love to hear from you."
                    buttonText="Get In Touch"
                    buttonLink="/contact"
                />

                <Footer />
            </div>
        </main>
    );
}
