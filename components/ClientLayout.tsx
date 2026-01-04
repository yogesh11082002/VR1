"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollToTop from "./ScrollToTop";

// Register GSAP plugins
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function ClientLayout({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        // GSAP ScrollTrigger animations for elements with data-gsap attribute
        const ctx = gsap.context(() => {
            // Fade up animations
            gsap.utils.toArray<HTMLElement>("[data-gsap='fade-up']").forEach((el) => {
                gsap.fromTo(
                    el,
                    { y: 60, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 1,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: el,
                            start: "top 85%",
                            end: "bottom 20%",
                            toggleActions: "play none none reverse",
                        },
                    }
                );
            });

            // Scale animations
            gsap.utils.toArray<HTMLElement>("[data-gsap='scale']").forEach((el) => {
                gsap.fromTo(
                    el,
                    { scale: 0.8, opacity: 0 },
                    {
                        scale: 1,
                        opacity: 1,
                        duration: 0.8,
                        ease: "back.out(1.7)",
                        scrollTrigger: {
                            trigger: el,
                            start: "top 85%",
                            toggleActions: "play none none reverse",
                        },
                    }
                );
            });

            // Parallax effect for backgrounds
            gsap.utils.toArray<HTMLElement>("[data-gsap='parallax']").forEach((el) => {
                gsap.to(el, {
                    yPercent: -30,
                    ease: "none",
                    scrollTrigger: {
                        trigger: el,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true,
                    },
                });
            });

            // Stagger animations for grids
            gsap.utils.toArray<HTMLElement>("[data-gsap='stagger-container']").forEach((container) => {
                const items = container.querySelectorAll("[data-gsap='stagger-item']");
                gsap.fromTo(
                    items,
                    { y: 40, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.6,
                        stagger: 0.1,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: container,
                            start: "top 80%",
                            toggleActions: "play none none reverse",
                        },
                    }
                );
            });
        });

        return () => ctx.revert();
    }, []);

    return (
        <>
            {children}
            <ScrollToTop />
        </>
    );
}
