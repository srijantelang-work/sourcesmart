"use client";

import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { motion } from "framer-motion";
import { Globe, Users, TrendingUp, Award } from "lucide-react";

export function About() {
    const stats = [
        { number: "$2B+", label: "Sourcing Volume", description: "Processed securely through our AI pipelines." },
        { number: "50k+", label: "Global Suppliers", description: "Verified across 50+ jurisdictions." },
        { number: "24/7", label: "Uptime", description: "Always-on market intelligence." },
        { number: "100%", label: "Audit Trail", description: "Complete transparency on every RFQ." },
        { number: "15%", label: "Avg. Savings", description: "Optimized via competitive bidding models." },
        { number: "< 2h", label: "Response Time", description: "Instant supplier matching capabilities." },
    ];

    return (
        <section id="about" className="py-32 bg-background relative overflow-hidden border-t border-border/40">
            <Container>
                <div className="max-w-4xl mx-auto text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <div className="w-16 h-16 mx-auto bg-foreground text-background rounded-full flex items-center justify-center mb-8">
                            <span className="text-3xl font-bold">SM</span>
                        </div>
                        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 text-foreground">
                            The SourceSmart Protocol
                        </h2>
                        <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto">
                            Decentralizing knowledge, centralizing control. We are building the liquidity layer for global supply chain intelligence.
                        </p>
                    </motion.div>
                </div>

                {/* Marquee Section */}
                <div className="relative full-width overflow-hidden group">
                    {/* Gradient Masks */}
                    <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

                    <div className="flex gap-6 animate-scroll hover:pause whitespace-nowrap">
                        {[...stats, ...stats, ...stats].map((stat, i) => (
                            <StatCard key={i} {...stat} />
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}

function StatCard({ number, label, description }: { number: string, label: string, description: string }) {
    return (
        <div className="w-[300px] md:w-[400px] flex-shrink-0 p-8 rounded-xl bg-secondary/20 border border-border/50 text-center hover:bg-secondary/40 transition-colors mx-2 whitespace-normal">
            <div className="text-4xl lg:text-5xl font-bold text-foreground mb-2 tracking-tight">{number}</div>
            <div className="text-sm font-bold uppercase tracking-widest text-primary mb-4">{label}</div>
            <p className="text-sm text-muted-foreground">{description}</p>
        </div>
    )
}

