"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Send, TrendingUp, AlertTriangle, Bot, ArrowRight, Globe } from "lucide-react";
import { cn } from "@/lib/utils";

export function Services() {
    return (
        <section id="services" className="py-20 lg:py-32 bg-gray-50/50">
            <Container>
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div className="max-w-xl">
                        <motion.h2
                            className="text-3xl lg:text-5xl font-bold text-[#1C1F34] mb-6 leading-tight"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            Everything you need to <span className="text-[#2D7CFF] block mt-1">source smarter.</span>
                        </motion.h2>
                        <motion.p
                            className="text-lg text-gray-500"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                        >
                            Replace disjointed tools with a single, intelligent operating system designed for modern procurement.
                        </motion.p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <button className="hidden md:flex items-center gap-2 text-[#1C1F34] font-semibold hover:text-[#2D7CFF] transition-colors group">
                            View all features <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px] lg:auto-rows-[350px]">

                    {/* Card 1: Supplier Discovery (Large) */}
                    <motion.div
                        className="md:col-span-2 bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:border-blue-100 transition-all duration-300 relative overflow-hidden group"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="relative z-10 h-full flex flex-col justify-between">
                            <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#2D7CFF] flex items-center justify-center mb-4">
                                <Globe size={24} />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-[#1C1F34] mb-2 group-hover:text-[#2D7CFF] transition-colors">Global Supplier Discovery</h3>
                                <p className="text-gray-500 max-w-md">Instantly access a verified database of manufacturers across 50+ countries. Filter by certification, capacity, and sustainability score.</p>
                            </div>
                        </div>

                        {/* Abstract Map Visualization */}
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 w-[400px] h-[400px] opacity-10 group-hover:opacity-20 transition-opacity">
                            <div className="absolute inset-0 bg-blue-500 rounded-full blur-[100px]" />
                        </div>
                        {/* Fake UI Element - Supplier Search */}
                        <div className="absolute top-8 right-8 w-72 bg-white shadow-xl shadow-blue-900/5 rounded-xl border border-gray-100 p-4 hidden lg:block transform group-hover:-translate-y-2 transition-transform duration-500">
                            <div className="flex items-center gap-3 mb-4 border-b border-gray-50 pb-3">
                                <Search size={14} className="text-gray-400" />
                                <div className="text-xs text-gray-400 font-medium">Steel piping manufacturers...</div>
                            </div>
                            <div className="space-y-3">
                                {[
                                    { name: "Apex Steel Works", loc: "Germany", tag: "ISO 9001" },
                                    { name: "Global Metals Inc", loc: "USA", tag: "Verified" },
                                    { name: "Nippon Steel Corp", loc: "Japan", tag: "Top Rated" }
                                ].map((supplier, i) => (
                                    <div key={i} className="flex items-center justify-between group/item hover:bg-gray-50 p-1 rounded-lg transition-colors cursor-default">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-blue-50 text-[10px] flex items-center justify-center text-blue-600 font-bold">
                                                {supplier.name.substring(0, 2).toUpperCase()}
                                            </div>
                                            <div>
                                                <div className="text-xs font-bold text-gray-800">{supplier.name}</div>
                                                <div className="text-[10px] text-gray-400">{supplier.loc}</div>
                                            </div>
                                        </div>
                                        <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${supplier.tag === "Verified" ? "bg-green-100 text-green-700" :
                                            supplier.tag === "Top Rated" ? "bg-amber-100 text-amber-700" :
                                                "bg-gray-100 text-gray-600"
                                            }`}>
                                            {supplier.tag}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Card 2: Market Intelligence */}
                    <motion.div
                        className="bg-[#1C1F34] rounded-3xl p-8 shadow-xl text-white relative overflow-hidden group"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        <div className="relative z-10 h-full flex flex-col justify-between">
                            <div className="w-12 h-12 rounded-xl bg-white/10 text-white flex items-center justify-center mb-4">
                                <TrendingUp size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">Market Trends</h3>
                                <div className="flex items-baseline gap-2 mb-1">
                                    <span className="text-2xl font-bold text-white">$4,250</span>
                                    <span className="text-sm text-green-400 bg-green-400/10 px-1.5 py-0.5 rounded">+12.5%</span>
                                </div>
                                <p className="text-gray-400 text-xs">Copper Futures (Monthly)</p>
                            </div>
                        </div>
                        {/* Chart Visualization */}
                        {/* Chart Visualization */}
                        <div className="absolute bottom-0 right-0 left-0 h-24 opacity-40 group-hover:scale-[1.02] transition-transform duration-500 origin-bottom">
                            <svg viewBox="0 0 100 40" preserveAspectRatio="none" className="w-full h-full text-blue-500">
                                {/* Fill Gradient */}
                                <defs>
                                    <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="0%" stopColor="currentColor" stopOpacity="0.5" />
                                        <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
                                    </linearGradient>
                                </defs>
                                <path d="M0 35 C 20 35, 30 15, 50 20 C 70 25, 80 5, 100 10 L 100 40 L 0 40 Z" fill="url(#chartGradient)" />
                                {/* Stroke Line */}
                                <path d="M0 35 C 20 35, 30 15, 50 20 C 70 25, 80 5, 100 10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                            {/* Floating Price Tag */}
                            <div className="absolute top-[20%] right-[15%] bg-blue-600 text-[10px] font-bold px-2 py-1 rounded text-white shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                                Alert: Price Spike
                            </div>
                        </div>
                    </motion.div>

                    {/* Card 3: RFQ Automation */}
                    <motion.div
                        className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:border-blue-100 transition-all duration-300 group overflow-hidden"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <div className="h-full flex flex-col justify-between relative z-10">
                            <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-4">
                                <Send size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-[#1C1F34] mb-2">Automated RFQs</h3>
                                <p className="text-gray-500 text-sm mb-4">Send to 50+ suppliers in one click. Compare quotes side-by-side.</p>

                                {/* Mini list for RFQ */}
                                <div className="space-y-2 mt-auto">
                                    <div className="flex items-center justify-between text-[10px] text-gray-500 border-b border-gray-50 pb-1">
                                        <span>RFQ #2940</span>
                                        <span className="text-green-600 font-medium">5 Quotes Recvd</span>
                                    </div>
                                    <div className="flex items-center justify-between text-[10px] text-gray-500">
                                        <span>RFQ #2941</span>
                                        <span className="text-blue-600 font-medium">Sent</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Card 4: AI Assistant (Large Vertical or Horizontal) - Let's do horizontal col-span-2 */}
                    <motion.div
                        className="md:col-span-2 bg-gradient-to-br from-blue-50 to-white rounded-3xl p-8 shadow-sm border border-blue-100/50 hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        <div className="relative z-10 h-full flex flex-row items-center justify-between gap-8">
                            <div className="flex-1 max-w-sm">
                                <div className="w-12 h-12 rounded-xl bg-[#2D7CFF] text-white flex items-center justify-center mb-6">
                                    <Bot size={24} />
                                </div>
                                <h3 className="text-2xl font-bold text-[#1C1F34] mb-2">AI Procurement Copilot</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">
                                    Your intelligent assistant for negotiation strategies, risk handling, and supplier matching.
                                    Available 24/7.
                                </p>
                            </div>

                            {/* Chat Bubble Visual - Animated */}
                            <ChatAnimation />
                        </div>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
}

function ChatAnimation() {
    const [step, setStep] = React.useState(0);

    React.useEffect(() => {
        const delays = [500, 1500, 2000, 3000, 4000]; // Durations for steps 0, 1, 2, 3, 4

        const timer = setTimeout(() => {
            setStep((prev) => (prev + 1) % 5);
        }, delays[step]);

        return () => clearTimeout(timer);
    }, [step]);

    return (
        <div className="hidden sm:flex flex-col gap-4 w-80 text-xs font-medium min-h-[180px] justify-center">
            {/* User Message */}
            <motion.div
                className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm border border-gray-100 ml-2 self-start max-w-[90%]"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: step >= 1 ? 1 : 0, y: step >= 1 ? 0 : 10 }}
                transition={{ duration: 0.3 }}
            >
                <span className="text-gray-600">Find backup suppliers for aluminum coils in Vietnam.</span>
            </motion.div>

            {/* AI Response Area (Typing & Message) */}
            <div className="flex flex-col items-end gap-2 w-full min-h-[40px]">
                {/* Typing Indicator */}
                {step === 2 && (
                    <motion.div
                        className="bg-[#2D7CFF] p-3 rounded-2xl rounded-tr-none shadow-sm text-white flex gap-1 items-center w-14 justify-center"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <span className="w-1.5 h-1.5 bg-white rounded-full animate-bounce"></span>
                        <span className="w-1.5 h-1.5 bg-white rounded-full animate-bounce [animation-delay:0.1s]"></span>
                        <span className="w-1.5 h-1.5 bg-white rounded-full animate-bounce [animation-delay:0.2s]"></span>
                    </motion.div>
                )}

                {/* Actual Response */}
                {step >= 3 && (
                    <motion.div
                        className="bg-[#2D7CFF] p-3 rounded-2xl rounded-tr-none shadow-sm max-w-[95%] text-white"
                        initial={{ opacity: 0, scale: 0.95, x: 20 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                    >
                        <span>Analyzed 12 suppliers. Found 3 matches with ISO 9001 certification and available stock.</span>
                    </motion.div>
                )}
            </div>

            {/* Follow Up */}
            <motion.div
                className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm border border-gray-100 ml-2 self-start max-w-[80%] flex items-center gap-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: step >= 4 ? 1 : 0, y: step >= 4 ? 0 : 10 }}
            >
                <span className="text-gray-600">Start negotiation?</span>
                <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
            </motion.div>
        </div>
    );
}
