"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function ProductTour() {
    // We'll use a sticky scroll layout. 
    // The container will track scroll progress to switch active states if needed, 
    // but for simplicity and robustness, we will stick the image column.

    return (
        <section id="product-tour" className="py-24 lg:py-32 bg-background relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-50/30 -skew-x-12 translate-x-32" />

            <Container className="relative z-10">
                <div className="text-center mb-24 max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-[#2D7CFF] font-bold tracking-wider uppercase text-sm mb-4 block">Platform Capabilities</span>
                        <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                            Built for modern procurement teams
                        </h2>
                        <p className="text-lg text-gray-500 dark:text-gray-400">
                            SourceSmart connects every step of your purchasing lifecycle, from discovery to payment, in one intelligent interface.
                        </p>
                    </motion.div>
                </div>

                <div className="flex flex-col gap-32">
                    <FeatureBlock
                        title="Discover Suppliers Quickly"
                        desc="Search by material, quantity, location — get top matches instantly with our verified global database."
                        image="/real-supplier-discovery.png"
                        benefits={["50+ Countries Verified", "Instant Capability Matching", "ISO Certification Filter"]}
                        index={0}
                    />
                    <FeatureBlock
                        title="Manage RFQs End-to-End"
                        desc="Save time with smart RFQ creation, reminders, and negotiation tracking in one unified pipeline."
                        image="/real-rfq.png"
                        benefits={["One-Click Bulk Sending", "Auto-Reminders", "Side-by-Side Comparison"]}
                        index={1}
                        reverse
                    />
                    <FeatureBlock
                        title="Track Market Trends & Risks"
                        desc="Real-time pricing, forecasts, and disruption alerts help you buy at the right time and mitigate risks."
                        image="/real-market-trends.png"
                        benefits={["Commodity Price Alerts", "Supply Chain Disruption Map", "Inflation Forecasts"]}
                        index={2}
                    />
                    <FeatureBlock
                        title="AI That Works Like Your Analyst"
                        desc="Ask anything — from finding suppliers to understanding pricing volatility. Your 24/7 intelligent assistant."
                        image="/real-ai-chat.png"
                        benefits={["Natural Language Queries", "Instant Reports", "Negotiation Scripts"]}
                        index={3}
                        reverse
                    />
                </div>

                <div className="mt-32 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-bold text-foreground mb-8">Ready to modernize your sourcing?</h3>
                        <div className="flex justify-center gap-4">
                            <Button size="lg" className="shadow-xl shadow-blue-500/20 group">
                                View Full Feature Set <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
}

function FeatureBlock({ title, desc, image, benefits, index, reverse = false }: { title: string, desc: string, image: string, benefits: string[], index: number, reverse?: boolean }) {
    return (
        <div className={`flex flex-col lg:flex-row items-center gap-16 lg:gap-24 ${reverse ? 'lg:flex-row-reverse' : ''}`}>

            {/* Text Side */}
            <motion.div
                className="flex-1 space-y-8"
                initial={{ opacity: 0, x: reverse ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
            >
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#2D7CFF] flex items-center justify-center font-bold text-xl mb-6 shadow-sm">
                    {index + 1}
                </div>

                <h3 className="text-3xl lg:text-4xl font-bold text-foreground leading-tight">{title}</h3>
                <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed bg-white/50 dark:bg-black/20 backdrop-blur-sm rounded-xl">
                    {desc}
                </p>

                <ul className="space-y-4 pt-2">
                    {benefits.map((benefit, i) => (
                        <li key={i} className="flex items-center gap-3 text-foreground font-medium">
                            <CheckCircle2 className="text-[#2D7CFF] w-5 h-5 flex-shrink-0" />
                            {benefit}
                        </li>
                    ))}
                </ul>
            </motion.div>

            {/* Image Side */}
            <motion.div
                className="flex-1 w-full"
                initial={{ opacity: 0, scale: 0.95, y: 40 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
            >
                <div className="relative group">
                    <div className={`absolute -inset-4 bg-gradient-to-r from-blue-100 to-purple-50 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl -z-10 transform-gpu will-change-[opacity]`} />
                    <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100/50 dark:border-gray-800/50 bg-white dark:bg-black/40">
                        <Image
                            src={image}
                            alt={title}
                            width={800}
                            height={600}
                            className="w-full h-auto object-cover transform group-hover:scale-[1.02] transition-transform duration-700 will-change-transform"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                        />
                        {/* Glossy Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none" />
                    </div>
                    {/* Floating Badge Decoration */}
                    <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-500/10 rounded-full blur-[40px] -z-10" />
                </div>
            </motion.div>
        </div>
    )
}
