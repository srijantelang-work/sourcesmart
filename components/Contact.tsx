"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { Mail, Phone, CheckCircle2, ArrowRight } from "lucide-react";

export function Contact() {
    return (
        <section id="contact" className="py-24 lg:py-32 bg-[#0F1629] relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px]" />

            <Container className="relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* Left Side: Pitch */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                            Transform your sourcing strategy today.
                        </h2>
                        <p className="text-xl text-blue-200 mb-10 leading-relaxed">
                            Stop relying on outdated spreadsheets and fragmented data.
                            See how SourceSmart AI can help you find better suppliers and reduce risk.
                        </p>

                        <div className="space-y-6 mb-12">
                            {[
                                "Get a personalized demo of our AI Copilot",
                                "Access exclusive market intelligence reports",
                                "Receive a free supply chain risk assessment"
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-4">
                                    <CheckCircle2 className="text-[#00C853] w-6 h-6 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-300 text-lg">{item}</span>
                                </div>
                            ))}
                        </div>

                        <div className="p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm">
                            <div className="flex items-center gap-4 text-white mb-4">
                                <div className="p-3 bg-blue-500/20 rounded-xl">
                                    <Mail size={24} className="text-[#2D7CFF]" />
                                </div>
                                <div>
                                    <div className="text-sm text-gray-400 font-medium">Email our sales team</div>
                                    <a href="mailto:sales@sourcesmart.ai" className="text-lg font-bold hover:text-[#2D7CFF] transition-colors">sales@sourcesmart.ai</a>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Side: Form */}
                    <motion.div
                        className="bg-white rounded-3xl p-8 lg:p-10 shadow-2xl relative"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-bold text-[#1C1F34] mb-6">Schedule a Demo</h3>
                        <form className="space-y-5">
                            <div className="grid grid-cols-2 gap-5">
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-[#1C1F34]">First Name</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#2D7CFF] focus:ring-2 focus:ring-blue-100 outline-none transition-all bg-gray-50 focus:bg-white" placeholder="Jane" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-[#1C1F34]">Last Name</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#2D7CFF] focus:ring-2 focus:ring-blue-100 outline-none transition-all bg-gray-50 focus:bg-white" placeholder="Doe" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-[#1C1F34]">Work Email</label>
                                <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#2D7CFF] focus:ring-2 focus:ring-blue-100 outline-none transition-all bg-gray-50 focus:bg-white" placeholder="jane@company.com" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-[#1C1F34]">Company Name</label>
                                <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#2D7CFF] focus:ring-2 focus:ring-blue-100 outline-none transition-all bg-gray-50 focus:bg-white" placeholder="Acme Industries" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-[#1C1F34]">Material Focus</label>
                                <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#2D7CFF] focus:ring-2 focus:ring-blue-100 outline-none transition-all bg-gray-50 focus:bg-white text-gray-700">
                                    <option value="">Select a category...</option>
                                    <option value="metals">Metals (Steel, Copper, etc.)</option>
                                    <option value="electronics">Electronics / PCBs</option>
                                    <option value="chemicals">Chemicals</option>
                                    <option value="plastics">Plastics / Polymers</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <Button size="lg" className="w-full justify-center mt-4 h-14 text-lg shadow-lg shadow-blue-500/20 group">
                                Request Demo <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </Button>

                            <p className="text-xs text-center text-gray-400 mt-4">
                                By submitting, you agree to our Terms and Privacy Policy.
                            </p>
                        </form>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
}
