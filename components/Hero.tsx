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
            {/* Premium Sophisticated Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
                {/* Subtle Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                {/* Spotlight / Radial Gradient - very subtle */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-500/20 via-background to-transparent opacity-40 dark:opacity-20 blur-3xl"></div>
            </div>

            <Container className="relative z-10">
                <div className="flex flex-col items-center text-center max-w-5xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <div className="mb-8 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/50 backdrop-blur-sm border border-border/50 text-sm font-medium text-foreground/80 hover:bg-secondary/80 transition-colors cursor-pointer">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                            </span>
                            v1.0 is live: AI Negotiation Copilot
                        </div>

                        <h1 className="text-5xl lg:text-7xl font-bold mb-8 tracking-tight text-foreground">
                            The Operating System for
                            <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-white dark:to-zinc-400">
                                Global Procurement.
                            </span>
                        </h1>

                        <p className="text-xl lg:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed font-light">
                            SourceSmart unifies supplier discovery, RFQ management, and market intelligence into one intelligent platform. Source faster, smarter, and with less risk.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Button size="lg" className="h-14 px-8 text-lg rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-indigo-500/20 transition-all">
                                Start Sourcing Free <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                            <Button variant="outline" size="lg" className="h-14 px-8 text-lg rounded-full border border-border/50 bg-background/50 backdrop-blur-sm hover:bg-secondary transition-all">
                                <PlayCircle className="mr-2 w-5 h-5" /> Watch Demo
                            </Button>
                        </div>
                    </motion.div>
                </div>

                {/* Refined Dashboard Preview */}
                <motion.div
                    className="relative max-w-6xl mx-auto"
                    initial={{ opacity: 0, scale: 0.98, y: 40 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="relative rounded-2xl p-1 bg-gradient-to-b from-border/40 to-border/10 shadow-2xl">
                        <div className="rounded-xl overflow-hidden bg-background relative border border-border/20 shadow-inner">
                            {/* Browser Header Mockup */}
                            <div className="absolute top-0 left-0 w-full h-10 bg-muted/30 border-b border-border/40 flex items-center px-4 gap-2 z-10 backdrop-blur-md">
                                <div className="flex gap-1.5">
                                    <div className="w-3 h-3 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                                    <div className="w-3 h-3 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                                    <div className="w-3 h-3 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                                </div>
                                <div className="mx-auto w-[60%] h-5 bg-background/50 rounded-md border border-border/30" />
                            </div>

                            <Image
                                src="/real-dashboard.png"
                                alt="SourceSmart Dashboard"
                                width={1400}
                                height={900}
                                className="w-full h-auto mt-10 block dark:opacity-90 dark:brightness-[0.9] transition-all duration-700"
                                priority
                            />
                        </div>
                    </div>

                    {/* Subtle glow behind dashboard - reduced intensity */}
                    <div className="absolute -inset-4 top-10 bg-indigo-500/10 dark:bg-indigo-500/20 blur-[60px] -z-10 rounded-[3rem]" />
                </motion.div>

                {/* Companies Filter/Ticker */}
                <div className="mt-32 pt-10 border-t border-border/40 relative">
                    <p className="text-center text-muted-foreground text-sm font-medium uppercase tracking-widest mb-10 opacity-60">Trusted by modern sourcing teams</p>
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
                                    className="text-xl font-bold text-muted-foreground/40 hover:text-foreground/80 transition-colors cursor-default"
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
