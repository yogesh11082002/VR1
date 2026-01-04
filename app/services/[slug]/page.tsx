"use client";

import { useParams } from "next/navigation";
import { services } from "@/lib/services";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";
import Link from "next/link";

// Extended service data for detail pages
const serviceDetails: Record<string, {
    features: string[];
    benefits: string[];
    pricing: string;
    coverage: string[];
}> = {
    "event-management": {
        features: [
            "Complete event planning and coordination",
            "Venue selection and decoration",
            "Catering arrangements",
            "Entertainment and DJ services",
            "Photography and videography",
            "Guest management and invitations",
        ],
        benefits: [
            "Stress-free event organization",
            "Professional execution",
            "Budget-friendly packages",
            "One-stop solution for all event needs",
        ],
        pricing: "Starting from ₹25,000",
        coverage: ["Delhi", "Noida", "Gurugram", "Faridabad", "Ghaziabad"],
    },
    "cleaning": {
        features: [
            "Deep cleaning for homes and offices",
            "Carpet and upholstery cleaning",
            "Kitchen and bathroom sanitization",
            "Window and glass cleaning",
            "Post-construction cleaning",
            "Regular maintenance cleaning",
        ],
        benefits: [
            "Trained and verified cleaning staff",
            "Eco-friendly cleaning products",
            "Flexible scheduling",
            "Satisfaction guaranteed",
        ],
        pricing: "Starting from ₹1,500",
        coverage: ["Delhi", "Noida", "Gurugram", "Faridabad", "Ghaziabad"],
    },
    "manpower": {
        features: [
            "Part-time and full-time staff",
            "Waiters and servers for events",
            "Security guards and bouncers",
            "Housekeeping staff",
            "Office assistants",
            "Skilled and unskilled labor",
        ],
        benefits: [
            "Background-verified personnel",
            "Quick deployment",
            "Supervised workforce",
            "Replacement guarantee",
        ],
        pricing: "Starting from ₹500/day",
        coverage: ["Delhi", "Noida", "Gurugram", "Faridabad", "Ghaziabad"],
    },
    "promoters": {
        features: [
            "Leaflet and flyer distribution",
            "Visiting card distribution",
            "Brand promotion activities",
            "Mall and exhibition promoters",
            "Campaign execution",
            "Daily reporting and tracking",
        ],
        benefits: [
            "Trained promotional staff",
            "GPS-tracked distribution",
            "Detailed activity reports",
            "Pan-Delhi coverage",
        ],
        pricing: "Starting from ₹350/person/day",
        coverage: ["Delhi", "Noida", "Gurugram", "Faridabad", "Ghaziabad"],
    },
    "loading": {
        features: [
            "Loading and unloading services",
            "Warehouse material handling",
            "Container stuffing/destuffing",
            "Heavy lifting services",
            "Logistics support",
            "Supervised labor teams",
        ],
        benefits: [
            "Experienced handlers",
            "Safe material handling",
            "Flexible team sizes",
            "24/7 availability",
        ],
        pricing: "Starting from ₹2,000",
        coverage: ["Delhi", "Noida", "Gurugram", "Faridabad", "Ghaziabad"],
    },
    "invigilators": {
        features: [
            "Exam invigilation services",
            "Interview panel management",
            "Document verification",
            "Candidate management",
            "Hall arrangement",
            "Result processing support",
        ],
        benefits: [
            "Trained invigilators",
            "Strict protocol adherence",
            "Large team availability",
            "Pan-India deployment",
        ],
        pricing: "Starting from ₹500/person/day",
        coverage: ["Delhi", "Noida", "Gurugram", "Faridabad", "Ghaziabad"],
    },
    "car-wash": {
        features: [
            "Door-to-door car washing",
            "Interior and exterior cleaning",
            "Premium wax and polish",
            "Engine bay cleaning",
            "Upholstery shampooing",
            "Monthly subscription plans",
        ],
        benefits: [
            "Waterless eco-friendly wash",
            "Trained car care specialists",
            "Premium products used",
            "Flexible scheduling",
        ],
        pricing: "Starting from ₹299",
        coverage: ["Delhi", "Noida", "Gurugram", "Faridabad", "Ghaziabad"],
    },
    "packing-moving": {
        features: [
            "Complete packing services",
            "Local and intercity shifting",
            "Office relocation",
            "Safe handling of fragile items",
            "Vehicle transportation",
            "Storage solutions",
        ],
        benefits: [
            "Trained packing team",
            "Insured transportation",
            "End-to-end tracking",
            "Damage protection",
        ],
        pricing: "Starting from ₹3,500",
        coverage: ["Delhi", "Noida", "Gurugram", "Faridabad", "Ghaziabad"],
    },
    "gardening": {
        features: [
            "Garden design and landscaping",
            "Regular maintenance",
            "Plant supply and installation",
            "Lawn care and mowing",
            "Pest control for plants",
            "Seasonal planting",
        ],
        benefits: [
            "Experienced horticulturists",
            "AMC options available",
            "Quality plants and materials",
            "Custom garden designs",
        ],
        pricing: "Starting from ₹2,000",
        coverage: ["Delhi", "Noida", "Gurugram", "Faridabad", "Ghaziabad"],
    },
    "printing": {
        features: [
            "Flex and banner printing",
            "Business cards and letterheads",
            "Brochures and catalogs",
            "Standees and hoardings",
            "T-shirt and merchandise printing",
            "Corporate branding materials",
        ],
        benefits: [
            "High-quality printing",
            "Quick turnaround",
            "Competitive pricing",
            "Free design assistance",
        ],
        pricing: "Starting from ₹500",
        coverage: ["Delhi", "Noida", "Gurugram", "Faridabad", "Ghaziabad"],
    },
    "ac-services": {
        features: [
            "AC installation and uninstallation",
            "Regular servicing and cleaning",
            "Gas refilling",
            "Repair and maintenance",
            "AMC packages",
            "Emergency breakdown service",
        ],
        benefits: [
            "Certified technicians",
            "Genuine spare parts",
            "90-day warranty on repairs",
            "Same-day service",
        ],
        pricing: "Starting from ₹499",
        coverage: ["Delhi", "Noida", "Gurugram", "Faridabad", "Ghaziabad"],
    },
    "electrical-plumbing": {
        features: [
            "Electrical wiring and repair",
            "Plumbing installation",
            "Fixture installation",
            "Leak detection and repair",
            "Appliance installation",
            "Emergency repairs",
        ],
        benefits: [
            "Licensed professionals",
            "Quality workmanship",
            "Transparent pricing",
            "24/7 emergency service",
        ],
        pricing: "Starting from ₹299",
        coverage: ["Delhi", "Noida", "Gurugram", "Faridabad", "Ghaziabad"],
    },
};

export default function ServiceDetailPage() {
    const params = useParams();
    const slug = params.slug as string;

    const service = services.find((s) => s.key === slug);
    const details = serviceDetails[slug];

    if (!service) {
        return (
            <main className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-white mb-4">Service Not Found</h1>
                    <Link href="/services" className="text-brand hover:underline">
                        Back to Services
                    </Link>
                </div>
            </main>
        );
    }

    return (
        <main className="relative min-h-screen">
            {/* Background */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[-20%] right-[-10%] w-[50rem] h-[50rem] bg-gradient-to-bl from-brand/20 via-blue-600/10 to-transparent rounded-full blur-3xl opacity-50" />
            </div>

            <div className="relative z-10">
                <Navbar />

                {/* Hero Section */}
                <section className="relative pt-32 pb-20 overflow-hidden">
                    <div className="container">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            {/* Left Content */}
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                {/* Breadcrumb */}
                                <nav className="flex items-center gap-2 text-sm text-slate-400 mb-6">
                                    <Link href="/" className="hover:text-brand transition-colors">
                                        Home
                                    </Link>
                                    <span>/</span>
                                    <Link href="/services" className="hover:text-brand transition-colors">
                                        Services
                                    </Link>
                                    <span>/</span>
                                    <span className="text-white">{service.title}</span>
                                </nav>

                                <div className="text-7xl mb-6">{service.icon}</div>

                                <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
                                    {service.title}
                                </h1>

                                <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                                    {service.blurb}
                                </p>

                                <div className="flex flex-wrap gap-4">
                                    <Link
                                        href="/contact"
                                        className="px-8 py-4 rounded-xl bg-gradient-to-r from-brand to-brand-dark text-white font-bold shadow-lg shadow-brand/25 hover:shadow-brand/40 transition-all"
                                    >
                                        Get Free Quote
                                    </Link>
                                    <a
                                        href="tel:+919999999999"
                                        className="px-8 py-4 rounded-xl glass glass-hover text-white font-semibold flex items-center gap-2"
                                    >
                                        <span>📞</span>
                                        Call Now
                                    </a>
                                </div>
                            </motion.div>

                            {/* Right Content - Info Card */}
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <div className="glass rounded-3xl p-8">
                                    <h3 className="text-xl font-bold text-white mb-6">Quick Info</h3>

                                    <div className="space-y-4">
                                        <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl">
                                            <span className="text-2xl">💰</span>
                                            <div>
                                                <div className="text-sm text-slate-400">Pricing</div>
                                                <div className="text-white font-semibold">
                                                    {details?.pricing || "Contact for quote"}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl">
                                            <span className="text-2xl">📍</span>
                                            <div>
                                                <div className="text-sm text-slate-400">Coverage</div>
                                                <div className="text-white font-semibold">
                                                    {details?.coverage?.join(", ") || "All Delhi NCR"}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl">
                                            <span className="text-2xl">⏰</span>
                                            <div>
                                                <div className="text-sm text-slate-400">Availability</div>
                                                <div className="text-white font-semibold">24/7 Available</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Features & Benefits */}
                <section className="container py-20">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Features */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="glass rounded-3xl p-8"
                        >
                            <h2 className="text-2xl font-heading font-bold text-white mb-6">
                                What's Included
                            </h2>
                            <div className="space-y-4">
                                {details?.features?.map((feature, i) => (
                                    <div
                                        key={i}
                                        className="flex items-start gap-3 p-3 bg-white/5 rounded-xl"
                                    >
                                        <span className="text-brand text-lg">✓</span>
                                        <span className="text-slate-300">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Benefits */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="glass rounded-3xl p-8"
                        >
                            <h2 className="text-2xl font-heading font-bold text-white mb-6">
                                Why Choose Us
                            </h2>
                            <div className="space-y-4">
                                {details?.benefits?.map((benefit, i) => (
                                    <div
                                        key={i}
                                        className="flex items-start gap-3 p-3 bg-white/5 rounded-xl"
                                    >
                                        <span className="text-brand text-lg">★</span>
                                        <span className="text-slate-300">{benefit}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Related Services */}
                <section className="container py-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl font-heading font-bold text-white mb-4">
                            Related Services
                        </h2>
                        <p className="text-slate-400">
                            You might also be interested in these services
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {services
                            .filter((s) => s.key !== slug)
                            .slice(0, 3)
                            .map((s, i) => (
                                <motion.div
                                    key={s.key}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                >
                                    <Link href={`/services/${s.key}`} className="block group">
                                        <div className="glass rounded-2xl p-6 hover:bg-white/10 transition-all">
                                            <span className="text-4xl">{s.icon}</span>
                                            <h3 className="text-lg font-bold text-white mt-4 mb-2 group-hover:text-brand transition-colors">
                                                {s.title}
                                            </h3>
                                            <p className="text-slate-400 text-sm">{s.blurb}</p>
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                    </div>
                </section>

                <CTASection
                    title="Ready to Book?"
                    subtitle="Get a free quote for your requirements. Our team will get back to you within 2 hours."
                    buttonText="Get Quote Now"
                    buttonLink="/contact"
                />

                <Footer />
            </div>
        </main>
    );
}
