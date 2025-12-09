"use client";

import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { motion } from "framer-motion";
import { Globe, Users, TrendingUp, Award } from "lucide-react";

export function About() {
    return (
        <section id="about" className="py-24 lg:py-32 bg-gray-50 overflow-hidden">
            <Container>

                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 mb-24">
                    {/* Mission Statement */}
                    <div className="flex-1">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-[#2D7CFF] font-bold tracking-wider uppercase text-sm mb-4 block">Our Mission</span>
                            <h2 className="text-4xl lg:text-5xl font-bold text-[#1C1F34] mb-8 leading-tight">
                                Empowering procurement teams to shape the future of global supply chains.
                            </h2>
                            <div className="space-y-6 text-lg text-gray-500">
                                <p>
                                    At SourceSmart, we believe that procurement is more than just buying goods. It's about strategic partnerships, risk management, and sustainability.
                                </p>
                                <p>
                                    Our platform combines cutting-edge AI with deep industry expertise to help teams move faster and smarter in an increasingly complex world.
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Stats Grid */}
                    <div className="flex-1">
                        <div className="grid grid-cols-2 gap-6">
                            <StatCard icon={Globe} number="50+" label="Countries Covered" delay={0.1} />
                            <StatCard icon={Users} number="10k+" label="Suppliers Verified" delay={0.2} />
                            <StatCard icon={TrendingUp} number="$2B+" label="Sourcing Volume" delay={0.3} />
                            <StatCard icon={Award} number="99%" label="Customer Satisfaction" delay={0.4} />
                        </div>
                    </div>
                </div>

                {/* Team Culture / Visual */}
                <motion.div
                    className="relative rounded-3xl overflow-hidden h-[400px] lg:h-[500px]"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                >
                    <div className="absolute inset-0 bg-[#0F1629]">
                        {/* Abstract Map Background */}
                        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #2D7CFF 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
                    </div>

                    <div className="relative z-10 h-full flex flex-col items-center justify-center text-center p-8">
                        <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">Build the supply chain of tomorrow.</h3>
                        <p className="text-blue-200 text-lg max-w-2xl mb-8">
                            Join hundreds of forward-thinking companies using SourceSmart to drive efficiency and innovation.
                        </p>
                        <div className="flex -space-x-4">
                            {[
                                { i: "JD", bg: "bg-blue-100 text-blue-600" },
                                { i: "AS", bg: "bg-purple-100 text-purple-600" },
                                { i: "MK", bg: "bg-green-100 text-green-600" },
                                { i: "PL", bg: "bg-amber-100 text-amber-600" },
                                { i: "TR", bg: "bg-rose-100 text-rose-600" }
                            ].map((user, idx) => (
                                <div key={idx} className={`w-12 h-12 rounded-full border-4 border-[#0F1629] ${user.bg} flex items-center justify-center font-bold text-xs ring-2 ring-[#0F1629]`}>
                                    {user.i}
                                </div>
                            ))}
                            <div className="w-12 h-12 rounded-full border-4 border-[#0F1629] bg-[#2D7CFF] flex items-center justify-center text-white font-bold text-xs ring-2 ring-[#0F1629]">
                                +500
                            </div>
                        </div>
                    </div>
                </motion.div>

            </Container>
        </section>
    );
}

function StatCard({ icon: Icon, number, label, delay }: { icon: any, number: string, label: string, delay: number }) {
    return (
        <motion.div
            className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay }}
        >
            <div className="bg-blue-50 w-12 h-12 rounded-xl flex items-center justify-center text-[#2D7CFF] mb-4">
                <Icon size={24} />
            </div>
            <div className="text-3xl font-bold text-[#1C1F34] mb-1">{number}</div>
            <div className="text-sm text-gray-400 font-medium uppercase tracking-wide">{label}</div>
        </motion.div>
    )
}
