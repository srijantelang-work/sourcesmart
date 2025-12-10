
"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { motion } from "framer-motion";
import { Zap, ShieldCheck, TrendingDown, Globe2, BarChart3, Lock } from "lucide-react";

const benefits = [
    {
        title: "Lightning Fast Sourcing",
        description: "Reduce RFQ cycle times from weeks to hours with automated supplier matching and AI-driven negotiations.",
        icon: Zap,
    },
    {
        title: "Global Compliance",
        description: "Automatically screen suppliers against ISO, GDPR, and ESG standards. reduce supply chain risk zero.",
        icon: ShieldCheck,
    },
    {
        title: "Cost Reduction",
        description: "Real-time market data ensures you never overpay. Average users save 15-20% on direct materials in the first year.",
        icon: TrendingDown,
    },
    {
        title: "Global Network",
        description: "Access a verified database of 50,000+ manufacturers across 50 countries, instantly searchable.",
        icon: Globe2,
    },
    {
        title: "Deep Analytics",
        description: "Gain full visibility into spending patterns, supplier performance, and market forecasts.",
        icon: BarChart3,
    },
    {
        title: "Enterprise Security",
        description: "Bank-grade encryption and SOC 2 Type II compliance ensure your sensitive data is always protected.",
        icon: Lock,
    },
];

export function WhyChoose() {
    return (
        <section id="why-us" className="py-24 bg-background relative overflow-hidden">
            <Container>
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
                            Why innovative teams choose <span className="text-primary">SourceSmart</span>
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            The only platform that combines global supplier discovery with autonomous negotiation agents.
                        </p>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {benefits.map((benefit, i) => (
                        <motion.div
                            key={i}
                            className="p-8 rounded-2xl bg-secondary/30 border border-border/50 hover:bg-secondary/50 hover:border-primary/20 transition-all duration-300 group"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <benefit.icon size={24} />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-foreground">{benefit.title}</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                {benefit.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
