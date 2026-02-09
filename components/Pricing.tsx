
"use client";

import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

const plans = [
    {
        name: "Starter",
        price: "$0",
        period: "/month",
        description: "Perfect for small teams getting started with smart sourcing.",
        features: [
            "Unlimited Supplier Discovery",
            "5 Active RFQs / month",
            "Basic Market Insights",
            "Email Support"
        ],
        cta: "Get Started",
        popular: false
    },
    {
        name: "Pro",
        price: "$199",
        period: "/month",
        description: "For growing procurement teams needing full power.",
        features: [
            "Unlimited RFQs",
            "AI Negotiation Copilot",
            "Advanced Market Intelligence",
            "Supply Chain Risk Maps",
            "Priority Support",
            "ERP Integration (Basic)"
        ],
        cta: "Start Free Trial",
        popular: true
    },
    {
        name: "Enterprise",
        price: "Custom",
        period: "",
        description: "Custom solutions for global organizations.",
        features: [
            "Dedicated Account Manager",
            "Custom AI Models",
            "Full ERP Integration (SAP, Oracle)",
            "SLA Guarantees",
            "On-premise Deployment Option",
            "SSO & Advanced Security"
        ],
        cta: "Contact Sales",
        popular: false
    }
];

export function Pricing() {
    return (
        <section id="pricing" className="py-24 bg-background relative">
            <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02] -z-[1]" />
            <Container>
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
                            Simple, transparent pricing
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            Start for free and scale as your sourcing needs grow.
                        </p>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {plans.map((plan, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className={`relative p-8 rounded-2xl border flex flex-col ${plan.popular
                                ? "bg-background border-blue-500/50 shadow-2xl shadow-blue-500/10 scale-105 z-10"
                                : "bg-background/50 border-border shadow-sm hover:border-border/80"
                                }`}
                        >
                            {plan.popular && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                                    Most Popular
                                </div>
                            )}

                            <div className="mb-8">
                                <h3 className="text-xl font-bold mb-2 text-foreground">{plan.name}</h3>
                                <p className="text-sm text-muted-foreground mb-6 h-10">{plan.description}</p>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                                    <span className="text-muted-foreground">{plan.period}</span>
                                </div>
                            </div>

                            <ul className="space-y-4 mb-8 flex-1">
                                {plan.features.map((feature, f) => (
                                    <li key={f} className="flex items-start gap-3 text-sm text-muted-foreground">
                                        <Check className="w-5 h-5 text-blue-500 flex-shrink-0" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <Link href="#contact">
                                <Button
                                    className={`w-full rounded-[8px] ${plan.popular ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-secondary text-foreground hover:bg-secondary/80'}`}
                                >
                                    {plan.cta}
                                </Button>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
