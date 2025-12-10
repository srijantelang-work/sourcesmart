"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { motion, useScroll, useTransform } from "framer-motion";

export function About() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);

    return (
        <section id="about" className="py-24 lg:py-40 relative overflow-hidden bg-[#0B0F17] text-white">
            {/* Gradient Background */}
            <div className="absolute inset-0 w-full h-full pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,_#3b0764,transparent_50%)] opacity-70" />
                <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_100%_100%,_#1e1b4b,transparent_50%)] opacity-70" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />
            </div>

            <Container>
                <div ref={containerRef} className="relative z-10 max-w-6xl mx-auto text-center">

                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-12"
                    >
                        <span className="px-5 py-2 rounded-full border border-white/10 text-xs md:text-sm font-mono uppercase tracking-widest text-indigo-300 bg-white/5 backdrop-blur-sm">
                            The SourceSmart Ecosystem
                        </span>
                    </motion.div>

                    {/* Headline */}
                    <motion.h2
                        style={{ opacity }}
                        className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-24 max-w-4xl mx-auto"
                    >
                        We are building the <span className="text-indigo-400 italic font-serif">liquidity layer</span> for the global supply chain.
                    </motion.h2>

                    {/* DESKTOP: Connected Graph Layout (> md) */}
                    <div className="hidden md:block relative w-full h-[500px] mb-20">
                        {/* Connecting Lines SVG */}
                        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible" viewBox="0 0 800 500" preserveAspectRatio="none">
                            <defs>
                                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="rgba(99, 102, 241, 0.1)" />
                                    <stop offset="50%" stopColor="rgba(99, 102, 241, 0.5)" />
                                    <stop offset="100%" stopColor="rgba(99, 102, 241, 0.1)" />
                                </linearGradient>
                            </defs>
                            {/* Top Left to Center */}
                            <ConnectionPath d="M 150 120 C 250 120, 350 250, 400 250" />
                            {/* Top Right to Center */}
                            <ConnectionPath d="M 650 120 C 550 120, 450 250, 400 250" />
                            {/* Bottom Left to Center */}
                            <ConnectionPath d="M 150 380 C 250 380, 350 250, 400 250" />
                            {/* Bottom Right to Center */}
                            <ConnectionPath d="M 650 380 C 550 380, 450 250, 400 250" />
                        </svg>

                        {/* Center Node: $2B+ */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-center">
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                            >
                                <div className="text-[120px] font-bold tracking-tighter leading-none text-white drop-shadow-2xl">
                                    $2B<span className="text-indigo-400 align-top text-6xl">+</span>
                                </div>
                                <div className="text-xl font-medium text-white/80 mt-2 tracking-wide uppercase">Transaction Volume</div>
                            </motion.div>
                        </div>

                        {/* Surrounding Nodes */}
                        <StatNode top="10%" left="5%" value="50k+" label="Verified Suppliers" align="left" delay={0.2} />
                        <StatNode top="10%" right="5%" value="50+" label="Countries" align="right" delay={0.3} />
                        <StatNode bottom="10%" left="5%" value="15%" label="Average Savings" align="left" delay={0.4} />
                        <StatNode bottom="10%" right="5%" value="12k+" label="Active Buyers" align="right" delay={0.5} />
                    </div>

                    {/* MOBILE: Stacked Layout (< md) */}
                    <div className="md:hidden grid grid-cols-1 gap-12 mb-20">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="bg-white/5 p-8 rounded-2xl border border-white/10 text-center"
                        >
                            <div className="text-7xl font-bold text-white mb-2">$2B+</div>
                            <div className="text-white/60 font-medium uppercase tracking-widest text-sm">Transaction Volume</div>
                        </motion.div>

                        <div className="grid grid-cols-2 gap-8">
                            <MobileStatItem value="50k+" label="Verified Suppliers" />
                            <MobileStatItem value="50+" label="Countries" />
                            <MobileStatItem value="15%" label="Average Savings" />
                            <MobileStatItem value="12k+" label="Active Buyers" />
                        </div>
                    </div>

                    {/* Footer Quote */}
                    <motion.div
                        style={{ y }}
                        className="max-w-2xl mx-auto"
                    >
                        <p className="text-lg md:text-xl text-white/50 leading-relaxed font-light">
                            "In a world of volatile markets, the only competitive advantage is the speed at which you can adapt your supply chain."
                        </p>
                    </motion.div>

                </div>
            </Container>
        </section>
    );
}

function ConnectionPath({ d }: { d: string }) {
    return (
        <motion.path
            d={d}
            fill="none"
            stroke="url(#lineGradient)"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
        />
    );
}

function StatNode({ top, left, right, bottom, value, label, align = "left", delay }: any) {
    const style: React.CSSProperties = { position: "absolute" };
    if (top) style.top = top;
    if (bottom) style.bottom = bottom;
    if (left) style.left = left;
    if (right) style.right = right;

    return (
        <motion.div
            style={style}
            initial={{ opacity: 0, x: align === "left" ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay, duration: 0.6 }}
            className={`z-20 ${align === "right" ? "text-right" : "text-left"}`}
        >
            <div className="text-3xl lg:text-4xl font-bold text-white mb-1">{value}</div>
            <div className="text-sm font-mono text-indigo-300 uppercase tracking-wider">{label}</div>
        </motion.div>
    );
}

function MobileStatItem({ value, label }: { value: string, label: string }) {
    return (
        <div className="text-center">
            <div className="text-3xl font-bold text-white mb-1">{value}</div>
            <div className="text-xs text-white/50 uppercase tracking-wider">{label}</div>
        </div>
    )
}
