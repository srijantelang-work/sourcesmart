"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useScroll, useTransform, motion, useInView } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ArrowRight, CheckCircle2, Search, BarChart3, Radio, Bot } from "lucide-react";

const tours = [
    {
        id: "discovery",
        title: "Global Supplier Discovery",
        subtitle: "Verified Manufacturer Database",
        description: "Stop relying on outdated directory listings. Access our real-time database of 50,000+ verified manufacturers with deep filters for certifications, capacity, and ESG scores.",
        benefits: ["ISO 9001 & 14001 Filters", "real-time Production Capacity", "3D Facility Tours"],
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2940&auto=format&fit=crop",
        localImage: "/real-supplier-discovery.png",
        icon: Search,
        customIcon: null,
        accent: "text-blue-500",
        bg: "bg-blue-500/10"
    },
    {
        id: "rfq",
        title: "Intelligent RFQ Management",
        subtitle: "Automated Negotiation Pipelines",
        description: "Create one master RFQ and let our agents distribute it to the perfect supplier match. Watch as bids flow in, automatically normalized for apple-to-apples comparison.",
        benefits: ["Bulk RFQ Distribution", "Auto-Normalization of Bids", "Historical Price Benchmarking"],
        localImage: "/real-rfq.png",
        icon: Radio,
        customIcon: "/project-management.png",
        accent: "text-purple-500",
        bg: "bg-purple-500/10"
    },
    {
        id: "market",
        title: "Market Watch & Risks",
        subtitle: "Predictive Supply Chain Analytics",
        description: "Don't get caught by price spikes. Our engine monitors commodity indices and geopolitical news to warn you of disruptions before they hit your P&L.",
        benefits: ["Commodity Price Alerts", "Supply Chain Disruption Map", "Inflation Forecasts"],
        localImage: "/real-market-trends.png",
        icon: BarChart3,
        customIcon: "/pie-chart.png",
        accent: "text-emerald-500",
        bg: "bg-emerald-500/10"
    },
    {
        id: "copilot",
        title: "AI Procurement Copilot",
        subtitle: "24/7 Strategic Assistant",
        description: "Your new best employee never sleeps. Ask complex questions about your spend, generate contract drafts, or simulate negotiation scenarios instantly.",
        benefits: ["Natural Language Queries", "Instant Contract Drafting", "Negotiation Scripts"],
        localImage: "/real-ai-chat.png",
        icon: Bot,
        customIcon: "/microchip.png",
        accent: "text-orange-500",
        bg: "bg-orange-500/10"
    }
];


export function ProductTour() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [activeCard, setActiveCard] = useState(0);

    return (
        <section id="product-tour" className="bg-background relative">
            <Container>
                <div className="py-20 lg:py-32">
                    {/* Section Header */}
                    <div className="max-w-3xl mb-24">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl lg:text-6xl font-bold tracking-tighter mb-6 text-foreground"
                        >
                            Orchestrate your <br />
                            <span className="text-primary opacity-80">entire supply chain.</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-xl text-muted-foreground max-w-xl"
                        >
                            Experience a flow that feels like magic. One platform to discover, negotiate, and manage it all.
                        </motion.p>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-20" ref={containerRef}>
                        {/* Left Side: Scrollable Text Content */}
                        <div className="w-full lg:w-[40%] flex flex-col gap-16 lg:gap-[30vh] pb-20 lg:pb-[50vh]">
                            {tours.map((tour, index) => (
                                <TourTextBlock
                                    key={index}
                                    tour={tour}
                                    index={index}
                                    setActive={setActiveCard}
                                />
                            ))}
                        </div>

                        {/* Right Side: Sticky Visuals */}
                        <div className="hidden lg:block w-[60%] relative">
                            <div className="sticky top-10 h-screen flex items-start justify-center py-20">
                                <div className="relative w-full aspect-[4/3] rounded-3xl border border-border/50 bg-secondary/5 shadow-2xl overflow-hidden backdrop-blur-sm">
                                    {/* Abstract Fancy Background per card */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/20 to-background z-0" />

                                    {/* Render all images stacked, fade between them */}
                                    {tours.map((tour, index) => (
                                        <motion.div
                                            key={tour.id}
                                            className="absolute inset-4 rounded-2xl overflow-hidden border border-border/40 shadow-inner bg-background"
                                            initial={{ opacity: 0, scale: 0.95, y: 20, filter: "blur(10px)" }}
                                            animate={{
                                                opacity: activeCard === index ? 1 : 0,
                                                scale: activeCard === index ? 1 : 0.95,
                                                y: activeCard === index ? 0 : 20,
                                                filter: activeCard === index ? "blur(0px)" : "blur(4px)",
                                                zIndex: activeCard === index ? 10 : 0
                                            }}
                                            transition={{ duration: 0.6, ease: "circOut" }}
                                        >
                                            {/* Window Controls Decoration */}
                                            <div className="h-8 bg-muted/30 border-b border-border/40 flex items-center px-4 gap-2">
                                                <div className="w-3 h-3 rounded-full bg-red-400/80" />
                                                <div className="w-3 h-3 rounded-full bg-amber-400/80" />
                                                <div className="w-3 h-3 rounded-full bg-green-400/80" />
                                                <div className="ml-auto text-[10px] text-muted-foreground font-mono opacity-50">
                                                    sourcesmart_v2.0.exe
                                                </div>
                                            </div>

                                            {/* Image/Content */}
                                            <div className="relative w-full h-full bg-secondary/10">
                                                <Image
                                                    src={tour.localImage}
                                                    alt={tour.title}
                                                    fill
                                                    className="object-contain object-center scale-90"
                                                />
                                                {/* Gradient Overlay for blending */}
                                                <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent pointer-events-none" />
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}

function TourTextBlock({ tour, index, setActive }: { tour: any, index: number, setActive: (i: number) => void }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { margin: "-20% 0px -50% 0px", amount: 0.3 });

    useEffect(() => {
        if (isInView) {
            setActive(index);
        }
    }, [isInView, index, setActive]);

    return (
        <div ref={ref} className="group min-h-0 lg:min-h-[50vh] flex flex-col justify-center lg:justify-start py-10 lg:py-0">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-colors duration-500 ${tour.bg}`}>
                {tour.customIcon ? (
                    <Image
                        src={tour.customIcon}
                        alt={tour.title}
                        width={24}
                        height={24}
                        className="object-contain dark:invert"
                    />
                ) : (
                    <tour.icon size={24} className="text-black dark:text-white" />
                )}
            </div>

            <h3 className="text-3xl font-bold mb-4 text-foreground flex items-center gap-4">
                <span className="text-muted-foreground/30 text-lg font-mono">0{index + 1}</span>
                {tour.title}
            </h3>

            {/* Mobile Image */}
            <div className="w-full aspect-video relative mb-6 rounded-xl overflow-hidden lg:hidden border border-border/50 shadow-sm">
                <Image
                    src={tour.localImage}
                    alt={tour.title}
                    fill
                    className="object-cover"
                />
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-md">
                {tour.description}
            </p>

            <ul className="space-y-4">
                {tour.benefits.map((benefit: string, i: number) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-medium text-foreground/80">
                        <CheckCircle2 className={`w-5 h-5 ${tour.accent}`} />
                        {benefit}
                    </li>
                ))}
            </ul>

            <div className="mt-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                <Link href="#contact">
                    <Button variant="outline" className="gap-2">
                        Learn more <ArrowRight className="w-4 h-4" />
                    </Button>
                </Link>
            </div>
        </div>
    )
}
