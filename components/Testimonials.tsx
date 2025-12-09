"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { motion } from "framer-motion";

export function Testimonials() {
    const testimonials = [
        {
            quote: "SourceSmart AI reduced our sourcing cycle by 30% and helped us negotiate better prices throughout the year.",
            author: "Alex Jenkins",
            role: "Procurement Lead",
            company: "Global Automotive Mfg",
            companyLogo: "GA",
        },
        {
            quote: "The market intelligence alerts saved us from a major disruption in our copper supply chain. It paid for itself in one month.",
            author: "Sarah Chen",
            role: "Supply Chain Director",
            company: "Apex Electronics",
            companyLogo: "AE",
        },
        {
            quote: "Finally, a tool that actually understands complex RFQ requirements. The AI recommendations are surprisingly accurate.",
            author: "Michael Ross",
            role: "Senior Buyer",
            company: "Industrial Heavy Corp",
            companyLogo: "IH",
        },
        {
            quote: "We've cut our supplier discovery time from weeks to hours. The AI chat feature is like having an expert analyst on demand.",
            author: "Jennifer Martinez",
            role: "Head of Procurement",
            company: "TechManufacture Inc",
            companyLogo: "TM",
        },
    ];

    return (
        <section id="testimonials" className="py-20 lg:py-28 bg-[#0A0F1E] text-white overflow-hidden relative">
            {/* Background effects */}
            <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
                <div className="absolute right-0 top-0 w-96 h-96 bg-blue-500 rounded-full blur-[120px]" />
                <div className="absolute left-0 bottom-0 w-80 h-80 bg-purple-500 rounded-full blur-[120px]" />
            </div>

            <Container className="relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        className="text-3xl lg:text-4xl font-bold mb-4"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Testimonials
                    </motion.h2>
                    <motion.p
                        className="text-lg text-gray-400"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        Powering procurement teams from <span className="text-[#2D7CFF]">high growth Start-ups to Fortune 500 companies</span>.
                    </motion.p>
                </div>

                <div className="relative flex overflow-hidden group">
                    {/* Gradient Masks */}
                    <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0A0F1E] to-transparent z-10 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0A0F1E] to-transparent z-10 pointer-events-none" />

                    <div className="flex animate-scroll gap-6 w-max hover:[animation-play-state:paused] py-4">
                        {[...testimonials, ...testimonials, ...testimonials].map((testimonial, i) => (
                            <div
                                key={i}
                                className="w-[350px] flex-shrink-0 bg-[#0F1629] border border-[#1E293B] rounded-2xl p-6 hover:border-[#2D7CFF]/50 transition-all duration-300 group/card"
                            >
                                {/* Company Logo Badge */}
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#2D7CFF] to-[#006BFF] flex items-center justify-center text-white font-bold text-sm">
                                        {testimonial.companyLogo}
                                    </div>
                                    <div>
                                        <div className="font-bold text-white text-sm">{testimonial.author}</div>
                                        <div className="text-xs text-gray-400">{testimonial.role}</div>
                                    </div>
                                </div>

                                {/* Quote */}
                                <p className="text-sm text-gray-300 leading-relaxed mb-4">
                                    "{testimonial.quote}"
                                </p>

                                {/* Company Name */}
                                <div className="text-xs text-gray-500 font-medium">
                                    {testimonial.company}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}
