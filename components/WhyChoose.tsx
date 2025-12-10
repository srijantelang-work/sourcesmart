"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, ShieldCheck, TrendingDown, Globe2, BarChart3, Lock, ArrowRight, LayoutDashboard, Cpu } from "lucide-react";

// Condensed 6 items into 4 powerful categories for a cleaner layout
const features = [
    {
        id: "speed",
        title: "Velocity & Reach",
        description: "Reduce procurement cycles from months to days. Instantly access verified manufacturers across 50+ countries. We combine high-speed matching with a global trust network.",
        stats: "50k+ Suppliers • < 24h Turnaround",
        gradient: "from-blue-500/20 to-indigo-500/20",
        icon: Zap,
        image: "/real-supplier-discovery.png" // Fallback to existing asset
    },
    {
        id: "intelligence",
        title: "Market Intelligence",
        description: "Don't buy blind. Our engine ingests millions of data points—commodity indices, labor rates, and shipping costs—to give you the leverage you need in every negotiation.",
        stats: "Live Indices • Predictive Risk",
        gradient: "from-emerald-500/20 to-teal-500/20",
        icon: TrendingDown,
        image: "/real-market-trends.png"
    },
    {
        id: "automation",
        title: "Autonomous Sourcing",
        description: "The first platform that negotiates for you. Set your parameters, and let AI agents handle the back-and-forth, securing the best terms without the busywork.",
        stats: "Avg. 15% Savings • 0 Manual Emails",
        gradient: "from-orange-500/20 to-red-500/20",
        icon: Cpu,
        image: "/real-ai-chat.png"
    },
    {
        id: "trust",
        title: "Enterprise Grade",
        description: "Built for the Fortune 500. SOC 2 Type II compliant, automated ISO verification, and bank-grade encryption for all your sensitive supply chain data.",
        stats: "SOC 2 Type II • ISO Verified",
        gradient: "from-purple-500/20 to-pink-500/20",
        icon: ShieldCheck,
        image: "/real-rfq.png"
    }
];

export function WhyChoose() {
    const [activeFeature, setActiveFeature] = useState(0);

    return (
        <section id="why-us" className="py-24 lg:py-32 bg-background relative overflow-hidden">
            <Container>
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

                    {/* Left Column: Title & Interactive List */}
                    <div className="w-full lg:w-1/2 relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mb-8 lg:mb-12"
                        >
                            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground tracking-tight">
                                Why leaders switch to <span className="underline decoration-blue-500/30 decoration-4 underline-offset-4">SourceSmart</span>
                            </h2>
                            <p className="text-xl text-muted-foreground">
                                Traditional procurement is broken. We fixed it by removing the friction between discovery and delivery.
                            </p>
                        </motion.div>

                        <div className="space-y-4">
                            {features.map((feature, index) => (
                                <div
                                    key={index}
                                    onMouseEnter={() => setActiveFeature(index)}
                                    onClick={() => setActiveFeature(index)}
                                    className={`group cursor-pointer p-6 rounded-2xl border transition-all duration-300 relative overflow-hidden ${activeFeature === index
                                        ? "bg-secondary/40 border-primary/20 shadow-lg"
                                        : "bg-transparent border-transparent hover:bg-secondary/20"
                                        }`}
                                >
                                    <div className="flex items-start gap-4 relaltive z-10">
                                        <div className={`mt-1 p-2 rounded-lg transition-colors duration-300 ${activeFeature === index ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground group-hover:bg-primary/20 group-hover:text-primary"
                                            }`}>
                                            <feature.icon size={20} />
                                        </div>
                                        <div>
                                            <h3 className={`text-xl font-bold mb-2 transition-colors ${activeFeature === index ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"
                                                }`}>
                                                {feature.title}
                                            </h3>

                                            <div className={`overflow-hidden transition-all duration-300 ${activeFeature === index ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"
                                                }`}>
                                                <p className="text-muted-foreground leading-relaxed mb-4">
                                                    {feature.description}
                                                </p>
                                                <div className="inline-flex items-center text-xs font-bold px-3 py-1 rounded-full bg-background border border-border/50 text-foreground">
                                                    {feature.stats}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Mobile Image View - Visible when active on mobile */}
                                    <div className={`lg:hidden overflow-hidden transition-all duration-300 ${activeFeature === index ? "max-h-[600px] opacity-100 mt-6" : "max-h-0 opacity-0"}`}>
                                        <div className="relative w-full rounded-xl overflow-hidden bg-secondary/10 border border-border/50">
                                            <div className="relative w-full aspect-video">
                                                <Image
                                                    src={feature.image}
                                                    alt={feature.title}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                            {/* Simplified Overlay for Mobile - Relative now */}
                                            <div className="p-3 bg-background/50 border-t border-border/50">
                                                <div className="flex justify-between items-center text-[10px] text-muted-foreground">
                                                    <span className="uppercase tracking-wider font-bold text-xs">{feature.title}</span>
                                                    <span className="font-bold text-primary">High Impact</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Active Sidebar Indicator */}
                                    {activeFeature === index && (
                                        <motion.div
                                            layoutId="active-indicator"
                                            className="absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-l-2xl"
                                        />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Dynamic Visual Visualization - Desktop Only */}
                    <div className="hidden lg:flex w-full lg:w-1/2 relative items-start">
                        <div className="sticky top-32 w-full aspect-square lg:aspect-auto lg:h-[500px] rounded-3xl overflow-hidden border border-border/50 shadow-2xl bg-secondary/5">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeFeature}
                                    initial={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
                                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                                    exit={{ opacity: 0, scale: 1.05 }}
                                    transition={{ duration: 0.4 }}
                                    className="absolute inset-0 p-8 flex items-center justify-center"
                                >
                                    {/* Background Gradient */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${features[activeFeature].gradient} opacity-20`} />

                                    {/* Image with contain to prevent cropping */}
                                    <div className="relative w-full h-full">
                                        <Image
                                            src={features[activeFeature].image}
                                            alt={features[activeFeature].title}
                                            fill
                                            className="object-contain drop-shadow-2xl"
                                        />
                                    </div>

                                    {/* Floating Stats Card Mockup */}
                                    <div className="absolute bottom-8 left-8 right-8 p-6 bg-background/80 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl">
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="p-2 bg-primary/20 rounded-full text-primary">
                                                <LayoutDashboard size={20} />
                                            </div>
                                            <div>
                                                <div className="text-xs text-muted-foreground uppercase tracking-wider font-bold">Feature Highlight</div>
                                                <div className="text-base font-bold text-foreground">{features[activeFeature].title}</div>
                                            </div>
                                        </div>
                                        <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                                            <motion.div
                                                className="h-full bg-primary"
                                                initial={{ width: 0 }}
                                                animate={{ width: "75%" }}
                                                transition={{ duration: 1, delay: 0.2 }}
                                            />
                                        </div>
                                        <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                                            <span>Impact Analysis</span>
                                            <span>High</span>
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>

                </div>
            </Container>
        </section>
    );
}
