"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ModeToggle } from "@/components/ModeToggle";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");

    // Handle scroll for glass effect and active section tracking
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);

            // Simple active section detection
            const sections = ["why-us", "features", "product-tour", "about"];
            for (const section of sections) {
                const el = document.getElementById(section);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top >= 0 && rect.top <= 300) {
                        setActiveSection(section);
                    }
                }
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Platform", href: "#features" },
        { name: "Why Us", href: "#why-us" },
        { name: "Product Tour", href: "#product-tour" },
        { name: "About", href: "#about" },
    ];

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled ? "py-4" : "py-6"
            )}
        >
            <Container className="max-w-7xl mx-auto px-4">
                <div className={cn(
                    "relative flex items-center justify-between transition-all duration-300 rounded-full border",
                    isScrolled
                        ? "bg-white/80 dark:bg-black/80 backdrop-blur-md border-border/50 shadow-lg px-6 py-3"
                        : "bg-transparent border-transparent px-0 py-2"
                )}>

                    {/* Logo Section */}
                    <Link href="/" className="flex items-center gap-2.5 group relative z-50">
                        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-600 to-violet-600 text-white flex items-center justify-center font-bold text-lg shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform">
                            S
                        </div>
                        <span className={cn(
                            "text-lg font-bold tracking-tight transition-colors",
                            isScrolled ? "text-foreground" : "text-foreground"
                        )}>
                            SourceSmart
                        </span>
                    </Link>

                    {/* Desktop Center Nav - The "floating pill" style */}
                    <div className="hidden md:flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                        <div className={cn(
                            "flex items-center gap-1 p-1 rounded-full transition-all duration-300",
                            isScrolled ? "" : "bg-white/50 dark:bg-black/50 border border-white/20 backdrop-blur-sm shadow-sm"
                        )}>
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setActiveSection(link.href.substring(1))}
                                    className={cn(
                                        "px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 relative",
                                        activeSection === link.href.substring(1)
                                            ? "text-white"
                                            : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                                    )}
                                >
                                    {activeSection === link.href.substring(1) && (
                                        <motion.div
                                            layoutId="active-pill"
                                            className="absolute inset-0 bg-primary rounded-full -z-10 shadow-md shadow-primary/20"
                                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                        />
                                    )}
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Right Actions */}
                    <div className="hidden md:flex items-center gap-3 relative z-50">
                        <ModeToggle />
                        <div className="h-6 w-px bg-border/50 mx-1" />
                        <Button
                            variant="ghost"
                            className="font-medium hover:bg-transparent hover:text-primary transition-colors"
                        >
                            Sign In
                        </Button>
                        <Button
                            className="rounded-full px-6 shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all hover:scale-105"
                        >
                            Get Started
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center gap-4 relative z-50">
                        <ModeToggle />
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 rounded-full bg-secondary/50 backdrop-blur-md text-foreground hover:text-primary transition-colors"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </Container>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 right-0 mt-2 p-4 rounded-3xl bg-background/95 backdrop-blur-xl border border-border shadow-2xl md:hidden z-40 overflow-hidden mx-4"
                    >
                        <div className="flex flex-col space-y-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="p-4 rounded-2xl hover:bg-secondary/50 font-medium text-lg flex items-center justify-between group"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                    <ChevronDown className="-rotate-90 opacity-0 group-hover:opacity-50 transition-all" size={20} />
                                </Link>
                            ))}
                            <div className="h-px bg-border/50 my-4" />
                            <Button className="w-full rounded-xl py-6 text-lg">
                                Get Started Now
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
