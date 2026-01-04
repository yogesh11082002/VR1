"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import { motion } from "framer-motion";

const contactInfo = [
    {
        icon: "📍",
        title: "Visit Us",
        details: ["VR1 Services Pvt. Ltd.", "123, Business Tower", "Connaught Place, Delhi 110001"],
    },
    {
        icon: "📞",
        title: "Call Us",
        details: ["+91 99999 99999", "+91 88888 88888", "Mon-Sat: 9AM - 8PM"],
    },
    {
        icon: "✉️",
        title: "Email Us",
        details: ["hello@vr1.example", "support@vr1.example", "careers@vr1.example"],
    },
    {
        icon: "💬",
        title: "WhatsApp",
        details: ["+91 99999 99999", "Quick Response", "24/7 Available"],
    },
];

const faqs = [
    {
        question: "How quickly can you provide service?",
        answer: "For most services, we can have a team at your location within 24-48 hours. Emergency services like electrician and plumber can be arranged within 2-4 hours.",
    },
    {
        question: "Are your staff background-verified?",
        answer: "Yes, all our staff members undergo thorough background verification including address verification, identity check, and reference checks before joining our team.",
    },
    {
        question: "What areas do you cover?",
        answer: "We provide services across entire Delhi NCR including Delhi, Noida, Greater Noida, Gurugram, Faridabad, and Ghaziabad.",
    },
    {
        question: "Do you offer AMC (Annual Maintenance Contract)?",
        answer: "Yes, we offer customized AMC packages for services like AC maintenance, gardening, and office cleaning. Contact us for detailed pricing.",
    },
    {
        question: "What payment methods do you accept?",
        answer: "We accept cash, UPI, bank transfer, and all major credit/debit cards. Payment is typically done after service completion.",
    },
];

export default function ContactPage() {
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
                    title="Contact Us"
                    subtitle="Get in touch with our team for any inquiries or service requests"
                    breadcrumb={[{ label: "Contact", href: "/contact" }]}
                />

                {/* Contact Info Cards */}
                <section className="container py-20">
                    <div className="grid md:grid-cols-4 gap-6 mb-20">
                        {contactInfo.map((info, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="glass rounded-2xl p-6 text-center group hover:bg-white/10 transition-all duration-300"
                            >
                                <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform">
                                    {info.icon}
                                </div>
                                <h3 className="text-lg font-bold text-white mb-3">{info.title}</h3>
                                <div className="space-y-1">
                                    {info.details.map((detail, j) => (
                                        <p key={j} className="text-slate-400 text-sm">
                                            {detail}
                                        </p>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Main Contact Section */}
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-3xl font-heading font-bold text-white mb-6">
                                Send Us a Message
                            </h2>
                            <p className="text-slate-400 mb-8">
                                Fill out the form below and our team will get back to you within
                                24 hours with a detailed quote.
                            </p>
                            <div className="glass rounded-3xl p-8">
                                <ContactForm />
                            </div>
                        </motion.div>

                        {/* Map & Additional Info */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="space-y-8"
                        >
                            {/* Map Placeholder */}
                            <div className="glass rounded-3xl overflow-hidden h-[300px] relative">
                                <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                                    <div className="text-center">
                                        <div className="text-6xl mb-4">🗺️</div>
                                        <p className="text-slate-400">
                                            Interactive map coming soon
                                        </p>
                                        <a
                                            href="https://maps.google.com"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-block mt-4 text-brand hover:underline"
                                        >
                                            Open in Google Maps →
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Working Hours */}
                            <div className="glass rounded-2xl p-6">
                                <h3 className="text-xl font-bold text-white mb-4">
                                    Working Hours
                                </h3>
                                <div className="space-y-3">
                                    <div className="flex justify-between text-slate-300">
                                        <span>Monday - Saturday</span>
                                        <span className="text-white font-medium">9:00 AM - 8:00 PM</span>
                                    </div>
                                    <div className="flex justify-between text-slate-300">
                                        <span>Sunday</span>
                                        <span className="text-white font-medium">10:00 AM - 6:00 PM</span>
                                    </div>
                                    <div className="flex justify-between text-slate-300">
                                        <span>Emergency Services</span>
                                        <span className="text-green-400 font-medium">24/7 Available</span>
                                    </div>
                                </div>
                            </div>

                            {/* Quick Actions */}
                            <div className="grid grid-cols-2 gap-4">
                                <a
                                    href="tel:+919999999999"
                                    className="glass rounded-2xl p-6 text-center hover:bg-white/10 transition-all group"
                                >
                                    <div className="text-3xl mb-2">📞</div>
                                    <div className="text-white font-medium group-hover:text-brand transition-colors">
                                        Call Now
                                    </div>
                                </a>
                                <a
                                    href="https://wa.me/919999999999"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="glass rounded-2xl p-6 text-center hover:bg-white/10 transition-all group"
                                >
                                    <div className="text-3xl mb-2">💬</div>
                                    <div className="text-white font-medium group-hover:text-green-400 transition-colors">
                                        WhatsApp
                                    </div>
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="container py-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-4xl font-heading font-bold text-white mb-4">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                            Quick answers to common questions
                        </p>
                    </motion.div>

                    <div className="max-w-3xl mx-auto space-y-4">
                        {faqs.map((faq, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="glass rounded-2xl p-6"
                            >
                                <h3 className="text-lg font-bold text-white mb-2 flex items-start gap-3">
                                    <span className="text-brand">Q.</span>
                                    {faq.question}
                                </h3>
                                <p className="text-slate-400 ml-7">{faq.answer}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                <Footer />
            </div>
        </main>
    );
}
