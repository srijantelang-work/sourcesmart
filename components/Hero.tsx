"use client";

import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";

export function Hero() {
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">

            {/* Background Gradients - Optimized opacity/blur for performance */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50/50 via-white to-transparent -z-10" />

            <Container className="relative z-10">
                <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50/80 border border-blue-100 text-[#2D7CFF] text-sm font-semibold mb-6 backdrop-blur-sm">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                            </span>
                            New: AI Negotiation Copilot
                        </span>

                        <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-[1.1] tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#475569]">
                            The Operating System for <br />
                            Global Procurement
                        </h1>

                        <p className="text-xl text-[#6B7280] mb-10 max-w-2xl mx-auto leading-relaxed">
                            SourceSmart unifies supplier discovery, RFQ management, and market intelligence into one intelligent platform. Source faster, smarter, and with less risk.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Button size="lg" className="h-14 px-8 text-lg shadow-xl shadow-blue-500/20 w-full sm:w-auto group">
                                Start Sourcing Free <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </Button>
                            <Button variant="outline" size="lg" className="h-14 px-8 text-lg w-full sm:w-auto group border-2">
                                <PlayCircle className="mr-2 group-hover:scale-110 transition-transform text-[#2D7CFF]" /> Watch Demo
                            </Button>
                        </div>

                        <div className="mt-8 text-sm text-gray-500 flex items-center justify-center gap-6">
                            <span className="flex items-center gap-1"><span className="text-green-500">✓</span> No credit card required</span>
                            <span className="flex items-center gap-1"><span className="text-green-500">✓</span> 14-day free trial</span>
                        </div>
                    </motion.div>
                </div>

                {/* Hero Dashboard Image */}
                <motion.div
                    className="relative max-w-6xl mx-auto"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    <div className="relative rounded-2xl bg-[#0F1629] p-2 sm:p-4 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] border border-gray-800/50 backdrop-blur-sm">
                        <div className="rounded-xl overflow-hidden bg-white relative">
                            <Image
                                src="/real-dashboard.png"
                                alt="SourceSmart Dashboard"
                                width={1400}
                                height={900}
                                className="w-full h-auto"
                                priority
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1400px"
                            />
                            {/* Gloss effect */}
                            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
                        </div>
                    </div>

                    {/* Background Glow under image */}
                    <div className="absolute -inset-4 bg-blue-500/20 blur-[60px] -z-10 rounded-full opacity-50" />
                </motion.div>

                {/* Social Proof Ticker */}
                <div className="mt-24 pt-10 border-t border-gray-100 relative">
                    <p className="text-center text-gray-400 text-sm font-semibold uppercase tracking-widest mb-8">Trusted by sourcing teams at</p>

                    <div className="relative flex overflow-hidden group">
                        {/* Gradient Masks for smooth fade out */}
                        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

                        <div className="flex items-center gap-16 whitespace-nowrap animate-scroll">
                            {[
                                'Acme Corp', 'Global Dynamics', 'Future Industries', 'TechFlow', 'BuildRight',
                                'Acme Corp', 'Global Dynamics', 'Future Industries', 'TechFlow', 'BuildRight'
                            ].map((company, i) => (
                                <span
                                    key={i}
                                    className="text-2xl font-bold text-gray-300 hover:text-[#1C1F34] transition-colors cursor-default"
                                >
                                    {company}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

            </Container>
        </section>
    );
}
