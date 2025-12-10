"use client";

import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";

export function Hero() {
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-background">
            {/* Aave-inspired Gradient Background - Optimized */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10 transform-gpu">
                <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-purple-500/20 rounded-full blur-[120px] opacity-50 mix-blend-multiply dark:mix-blend-screen animate-pulse transform-gpu" style={{ animationDuration: '4s' }} />
                <div className="absolute top-[10%] right-[-10%] w-[50%] h-[50%] bg-blue-500/20 rounded-full blur-[100px] opacity-40 mix-blend-multiply dark:mix-blend-screen transform-gpu" />
                <div className="absolute bottom-[10%] left-[30%] w-[40%] h-[40%] bg-pink-500/20 rounded-full blur-[100px] opacity-30 mix-blend-multiply dark:mix-blend-screen transform-gpu" />
            </div>

            <Container className="relative z-10">
                <div className="flex flex-col items-center text-center max-w-5xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <div className="mb-8 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/50 backdrop-blur-sm border border-border/50 text-sm font-medium text-foreground">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                            </span>
                            v1.0 is live: AI Negotiation Copilot
                        </div>

                        <h1 className="text-6xl lg:text-8xl font-bold mb-8 tracking-tight text-foreground">
                            The Operating System for
                            <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                                Global Procurement.
                            </span>
                        </h1>

                        <p className="text-xl lg:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed font-light">
                            SourceSmart unifies supplier discovery, RFQ management, and market intelligence into one intelligent platform. Source faster, smarter, and with less risk.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Button size="lg" className="h-14 px-8 text-lg rounded-full bg-foreground text-background hover:bg-foreground/90 shadow-xl">
                                Start Sourcing Free <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                            <Button variant="outline" size="lg" className="h-14 px-8 text-lg rounded-full border-2 border-border/50 hover:bg-secondary/50 hover:border-border transition-all">
                                <PlayCircle className="mr-2 w-5 h-5" /> Watch Demo
                            </Button>
                        </div>
                    </motion.div>
                </div>

                {/* Glassmorphic Dashboard Preview */}
                <motion.div
                    className="relative max-w-6xl mx-auto"
                    initial={{ opacity: 0, scale: 0.95, y: 40 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="relative rounded-2xl glass-card p-2 sm:p-4 bg-white/5 backdrop-blur-2xl border border-white/10 dark:border-white/5 shadow-2xl">
                        <div className="rounded-xl overflow-hidden bg-background/50 relative">
                            <div className="absolute top-0 left-0 w-full h-8 bg-muted/50 border-b border-white/5 flex items-center px-4 gap-2 z-10">
                                <div className="w-3 h-3 rounded-full bg-red-400/80" />
                                <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
                                <div className="w-3 h-3 rounded-full bg-green-400/80" />
                            </div>
                            <Image
                                src="/real-dashboard.png"
                                alt="SourceSmart Dashboard"
                                width={1400}
                                height={900}
                                className="w-full h-auto mt-8 block dark:opacity-90 grayscale-[10%] hover:grayscale-0 transition-all duration-700"
                                priority
                            />
                        </div>
                    </div>

                    {/* Background Glow under image */}
                    <div className="absolute -inset-10 top-20 bg-gradient-to-r from-blue-500/30 to-purple-600/30 blur-[80px] -z-10 opacity-60" />
                </motion.div>

                {/* Companies Filter/Ticker */}
                <div className="mt-32 pt-10 border-t border-border/10 relative">
                    <p className="text-center text-muted-foreground text-sm font-medium uppercase tracking-widest mb-10 opacity-70">Trusted by modern sourcing teams</p>
                    <div className="relative flex overflow-hidden group">
                        {/* Gradient Masks for smooth fade out */}
                        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
                        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

                        <div className="flex items-center gap-16 whitespace-nowrap animate-scroll">
                            {[
                                'Acme Corp', 'Global Dynamics', 'Future Industries', 'TechFlow', 'BuildRight',
                                'Acme Corp', 'Global Dynamics', 'Future Industries', 'TechFlow', 'BuildRight'
                            ].map((company, i) => (
                                <span
                                    key={i}
                                    className="text-2xl font-bold text-muted-foreground/30 hover:text-foreground/80 transition-colors cursor-default"
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
