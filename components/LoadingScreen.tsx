"use client";

import { motion } from "framer-motion";

export default function LoadingScreen() {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="fixed inset-0 z-[100] bg-dark-bg flex items-center justify-center pointer-events-none"
        >
            <div className="text-center">
                {/* Logo */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8"
                >
                    <span className="font-heading font-extrabold text-6xl tracking-tight">
                        <span className="text-white">VR</span>
                        <span className="text-brand">1</span>
                    </span>
                </motion.div>

                {/* Loading Bar */}
                <div className="w-48 h-1 bg-slate-800 rounded-full overflow-hidden mx-auto">
                    <motion.div
                        initial={{ x: "-100%" }}
                        animate={{ x: "100%" }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="h-full w-1/2 bg-gradient-to-r from-brand to-brand-accent rounded-full"
                    />
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-slate-400 text-sm mt-4"
                >
                    Loading...
                </motion.p>
            </div>
        </motion.div>
    );
}
