"use client";

import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";

const testimonials = [
    {
        id: 1,
        name: "Rajesh Kumar",
        role: "Business Owner",
        location: "Delhi",
        content:
            "VR1 handled our office deep cleaning with exceptional professionalism. The team was punctual, thorough, and left our workspace spotless. Highly recommend their services!",
        rating: 5,
        avatar: "RK",
    },
    {
        id: 2,
        name: "Priya Sharma",
        role: "Event Organizer",
        location: "Noida",
        content:
            "We've used VR1 for multiple corporate events and they never disappoint. Their event management team is creative, organized, and handles everything seamlessly.",
        rating: 5,
        avatar: "PS",
    },
    {
        id: 3,
        name: "Amit Verma",
        role: "Homeowner",
        location: "Gurugram",
        content:
            "The AC servicing team was excellent. They diagnosed the issue quickly, fixed it on the spot, and the pricing was very reasonable. Will definitely use them again.",
        rating: 5,
        avatar: "AV",
    },
    {
        id: 4,
        name: "Sneha Gupta",
        role: "HR Manager",
        location: "Faridabad",
        content:
            "We needed part-time staff for our warehouse on short notice. VR1 provided skilled workers within hours. Their manpower services are reliable and efficient.",
        rating: 5,
        avatar: "SG",
    },
    {
        id: 5,
        name: "Vikram Singh",
        role: "Restaurant Owner",
        location: "Ghaziabad",
        content:
            "The printing quality for our menus and banners was outstanding. Quick turnaround and competitive pricing. VR1 is now our go-to for all printing needs.",
        rating: 5,
        avatar: "VS",
    },
];

export default function TestimonialsCarousel() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        if (isAutoPlaying) {
            intervalRef.current = setInterval(() => {
                setActiveIndex((prev) => (prev + 1) % testimonials.length);
            }, 5000);
        }
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [isAutoPlaying]);

    const handleDotClick = (index: number) => {
        setActiveIndex(index);
        setIsAutoPlaying(false);
        setTimeout(() => setIsAutoPlaying(true), 10000);
    };

    return (
        <div className="relative max-w-4xl mx-auto">
            {/* Testimonial Cards */}
            <div className="relative h-[400px] md:h-[300px]">
                {testimonials.map((testimonial, index) => (
                    <motion.div
                        key={testimonial.id}
                        initial={{ opacity: 0, scale: 0.9, x: 100 }}
                        animate={{
                            opacity: index === activeIndex ? 1 : 0,
                            scale: index === activeIndex ? 1 : 0.9,
                            x: index === activeIndex ? 0 : 100,
                            zIndex: index === activeIndex ? 10 : 0,
                        }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="absolute inset-0"
                    >
                        <div className="glass rounded-3xl p-8 md:p-12 h-full flex flex-col justify-between">
                            {/* Quote Icon */}
                            <div className="text-6xl text-brand/20 font-serif absolute top-4 left-6">
                                "
                            </div>

                            {/* Content */}
                            <p className="text-lg md:text-xl text-slate-300 leading-relaxed relative z-10 mt-8">
                                {testimonial.content}
                            </p>

                            {/* Author Info */}
                            <div className="flex items-center gap-4 mt-6">
                                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-brand to-brand-accent flex items-center justify-center text-white font-bold text-lg">
                                    {testimonial.avatar}
                                </div>
                                <div>
                                    <h4 className="font-bold text-white">{testimonial.name}</h4>
                                    <p className="text-sm text-slate-400">
                                        {testimonial.role} • {testimonial.location}
                                    </p>
                                </div>
                                <div className="ml-auto flex gap-1">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <span key={i} className="text-yellow-400">
                                            ★
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center gap-3 mt-8">
                {testimonials.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => handleDotClick(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${index === activeIndex
                                ? "bg-brand w-8"
                                : "bg-slate-600 hover:bg-slate-500"
                            }`}
                        aria-label={`Go to testimonial ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}
