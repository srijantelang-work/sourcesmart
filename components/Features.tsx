"use client";

import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/BentoGrid";
import { Bot, Globe, Search, Send, TrendingUp, Zap } from "lucide-react";
import { motion } from "framer-motion";

export function Features() {
    return (
        <section id="features" className="py-20 lg:py-32 bg-secondary dark:bg-black relative overflow-hidden">
            <div className="absolute inset-0 dark:bg-grid-white/[0.02] bg-grid-black/[0.02] -z-[1]" />

            <div className="max-w-4xl mx-auto text-center mb-16 px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl md:text-5xl font-bold dark:text-white text-navy mb-6">
                        Everything you need to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">source smarter.</span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Replace disjointed tools with a single, intelligent operating system designed for modern procurement teams.
                    </p>
                </motion.div>
            </div>

            <BentoGrid className="max-w-6xl mx-auto px-4">
                {items.map((item, i) => (
                    <BentoGridItem
                        key={i}
                        title={item.title}
                        description={item.description}
                        header={item.header}
                        icon={item.icon}
                        className={i === 3 || i === 0 ? "md:col-span-2" : ""}
                    />
                ))}
            </BentoGrid>
        </section>
    );
}

const items = [
    {
        title: "Global Supplier Discovery",
        description: "Instantly access a verified database of manufacturers across 50+ countries. Filter by certification, capacity, and sustainability score.",
        header: <SkeletonOne />,
        icon: <Globe className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Market Intelligence",
        description: "Real-time tracking of commodity prices and market trends to inform your buying decisions.",
        header: <SkeletonTwo />,
        icon: <TrendingUp className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Automated RFQs",
        description: "Send to 50+ suppliers in one click. Compare quotes side-by-side with AI analysis.",
        header: <SkeletonThree />,
        icon: <Send className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "AI Procurement Copilot",
        description: "Your intelligent assistant for negotiation strategies, risk handling, and supplier matching. Available 24/7.",
        header: <SkeletonFour />,
        icon: <Bot className="h-4 w-4 text-neutral-500" />,
    },
];

function SkeletonOne() {
    const suppliers = [
        { name: "Apex Steel Works", location: "Germany, EU", rating: "4.9", verified: true },
        { name: "Nippon Metals", location: "Japan", rating: "4.8", verified: true },
        { name: "Global Alloys Inc.", location: "USA", rating: "4.7", verified: false },
        { name: "Vietnam Copper Co.", location: "Vietnam", rating: "4.6", verified: true },
    ];

    return (
        <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-900 dark:to-neutral-800 p-4 relative overflow-hidden group">
            <div className="absolute inset-x-0 bottom-0 top-1/3 bg-gradient-to-t from-white via-white/80 to-transparent dark:from-black dark:via-black/80 z-10" />

            <div className="flex flex-col gap-3 w-full">
                {suppliers.map((supplier, i) => (
                    <div key={i} className="flex items-center justify-between bg-white dark:bg-neutral-800/50 p-3 rounded-lg shadow-sm border border-neutral-200 dark:border-neutral-700/50">
                        <div className="flex items-center gap-3">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${i === 0 ? 'bg-blue-100 text-blue-600' : 'bg-neutral-100 text-neutral-500'}`}>
                                {supplier.name.substring(0, 2).toUpperCase()}
                            </div>
                            <div>
                                <div className="text-xs font-bold text-neutral-800 dark:text-neutral-200">{supplier.name}</div>
                                <div className="text-[10px] text-neutral-500">{supplier.location}</div>
                            </div>
                        </div>
                        {supplier.verified && (
                            <span className="text-[10px] px-2 py-0.5 rounded-full bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 font-medium">Verified</span>
                        )}
                    </div>
                ))}
            </div>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20">
                <div className="bg-blue-600 text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg hover:scale-105 transition-transform flex items-center gap-2">
                    <Globe className="w-3 h-3" /> View 50+ Matches
                </div>
            </div>
        </div>
    );
}

function SkeletonTwo() {
    return (
        <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-900 dark:to-neutral-800 relative group overflow-hidden flex flex-col justify-between p-4">

            {/* Header/Stats */}
            <div className="flex justify-between items-start z-10">
                <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-wider text-neutral-500 font-semibold">Commodity Index</span>
                    <span className="text-xl font-bold text-neutral-800 dark:text-neutral-200 mt-1">$4,230.50</span>
                </div>
                <div className="flex flex-col items-end gap-1">
                    <div className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-[10px] px-1.5 py-0.5 rounded font-bold flex items-center gap-1">
                        <TrendingUp className="w-3 h-3" /> +12.5%
                    </div>
                </div>
            </div>

            {/* Chart Area */}
            <div className="relative h-24 w-full mt-4">
                {/* Grid Lines */}
                <div className="absolute inset-0 flex flex-col justify-between">
                    <div className="w-full h-px border-t border-dashed border-neutral-300 dark:border-neutral-700/50"></div>
                    <div className="w-full h-px border-t border-dashed border-neutral-300 dark:border-neutral-700/50"></div>
                    <div className="w-full h-px border-t border-dashed border-neutral-300 dark:border-neutral-700/50"></div>
                </div>

                {/* Main Graph Line (Copper) */}
                <svg viewBox="0 0 100 40" preserveAspectRatio="none" className="absolute inset-0 w-full h-full text-blue-500 stroke-current stroke-[3] fill-none z-10">
                    <defs>
                        <linearGradient id="gradientblue" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="currentColor" stopOpacity="0.2" />
                            <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                    <path d="M0 30 C 20 25, 40 10, 50 15 S 80 5, 100 2" />
                    <path d="M0 30 C 20 25, 40 10, 50 15 S 80 5, 100 2 V 40 H 0 Z" className="fill-blue-500/10 stroke-none" />
                </svg>

                {/* Secondary Graph Line (Steel) */}
                <svg viewBox="0 0 100 40" preserveAspectRatio="none" className="absolute inset-0 w-full h-full text-purple-400 stroke-current stroke-[2] fill-none z-0 opacity-60">
                    <path d="M0 35 C 30 35, 50 25, 60 28 S 90 20, 100 15" strokeDasharray="4 2" />
                </svg>

                {/* Tooltip Dot Mockup */}
                <div className="absolute top-[5%] right-0 w-3 h-3 bg-blue-500 rounded-full border-2 border-white dark:border-neutral-800 shadow-sm z-20"></div>
            </div>

            {/* Legend */}
            <div className="flex gap-4 mt-2">
                <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                    <span className="text-[10px] text-neutral-500">Copper</span>
                </div>
                <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                    <span className="text-[10px] text-neutral-500">Steel</span>
                </div>
            </div>
        </div>
    );
}

function SkeletonThree() {
    const rfqs = [
        { id: "#2049", title: "Aluminum 6061 Extrusions", status: "Received (5)", date: "2m ago" },
        { id: "#2050", title: "CNC Machined Parts", status: "Sent", date: "15m ago" },
        { id: "#2051", title: "Stainless Steel Bolts", status: "Draft", date: "1h ago" },
    ];

    return (
        <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-900 dark:to-neutral-800 p-4 flex-col gap-3">
            {rfqs.map((rfq, i) => (
                <div key={i} className={`flex items-center justify-between p-3 rounded-lg shadow-sm border border-neutral-200 dark:border-neutral-700/50 bg-white dark:bg-neutral-800 w-full transform transition-all duration-300 hover:scale-[1.02] ${i === 0 ? 'border-l-4 border-l-blue-500' : ''}`}>
                    <div>
                        <div className="text-[10px] text-neutral-400 font-mono mb-0.5">{rfq.id}</div>
                        <div className="text-xs font-bold text-neutral-800 dark:text-neutral-200">{rfq.title}</div>
                    </div>
                    <div className={`text-[10px] font-bold px-2 py-1 rounded ${rfq.status.includes("Received") ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300" :
                        rfq.status === "Sent" ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300" :
                            "bg-gray-100 text-gray-500"
                        }`}>
                        {rfq.status}
                    </div>
                </div>
            ))}
            <div className="mt-auto flex justify-center">
                <button className="text-[10px] font-bold text-neutral-500 flex items-center gap-1 hover:text-blue-600 transition-colors">
                    View All <Send className="w-2 h-2" />
                </button>
            </div>
        </div>
    );
}

function SkeletonFour() {
    const [step, setStep] = React.useState(0);

    React.useEffect(() => {
        const timer = setInterval(() => {
            setStep((prev) => (prev + 1) % 6);
        }, 2000);
        return () => clearInterval(timer);
    }, []);

    const messages = [
        { role: "user", text: "Backup suppliers for coils?" },
        { role: "ai", text: "Scanning global database..." },
        { role: "ai", text: "Found 3 verified in Vietnam." },
        { role: "user", text: "ISO 9001 certified?" },
        { role: "ai", text: "Yes, all 3 are certified." },
    ];

    return (
        <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-900 dark:to-neutral-800 p-4 relative overflow-hidden flex-col justify-end">
            <div className="absolute top-0 right-0 p-4 opacity-[0.03]">
                <Bot className="h-32 w-32 text-neutral-900 dark:text-white" />
            </div>

            <div className="space-y-3 relative z-10 w-full mb-2 h-[180px] overflow-y-hidden flex flex-col justify-end">
                {messages.map((msg, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: msg.role === 'user' ? 20 : -20 }}
                        animate={{
                            opacity: step >= i + 1 ? 1 : 0,
                            x: 0,
                            display: step >= i + 1 ? 'block' : 'none'
                        }}
                        className={`p-2.5 rounded-2xl text-xs max-w-[85%] shadow-sm ${msg.role === 'user'
                            ? "bg-blue-600 text-white self-end rounded-br-none"
                            : "bg-white dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-700/50 self-start rounded-bl-none font-medium"
                            }`}
                    >
                        {msg.text}
                    </motion.div>
                ))}

                {/* Thinking Indicator */}
                <motion.div
                    animate={{ opacity: step === 1 || step === 5 ? 1 : 0 }}
                    className="self-start bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700/50 p-2 rounded-2xl rounded-bl-none flex gap-1 shadow-sm"
                >
                    <span className="w-1 h-1 bg-neutral-400 rounded-full animate-bounce" />
                    <span className="w-1 h-1 bg-neutral-400 rounded-full animate-bounce delay-100" />
                    <span className="w-1 h-1 bg-neutral-400 rounded-full animate-bounce delay-200" />
                </motion.div>
            </div>
        </div>
    );
}
