"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ModeToggle } from "@/components/ModeToggle";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        let ticking = false;
        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    setIsScrolled(window.scrollY > 10);
                    ticking = false;
                });
                ticking = true;
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Why Us", href: "#why-us" },
        { name: "Features", href: "#features" },
        { name: "Workflow", href: "#workflow" },
        { name: "Product Tour", href: "#product-tour" },
        { name: "Pricing", href: "#pricing" },
        { name: "About", href: "#about" },
        { name: "Testimonials", href: "#testimonials" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
                isScrolled
                    ? "bg-white/80 dark:bg-black/80 backdrop-blur-md py-3"
                    : "bg-transparent py-5"
            )}
        >
            <Container className="flex items-center justify-between h-10 max-w-[1400px]">
                <div className="flex items-center gap-10">
                    <Link href="/" className="flex items-center gap-2.5 group">
                        {/* Logo Icon */}
                        <div className="w-8 h-8 rounded-lg bg-foreground text-background flex items-center justify-center font-bold text-lg group-hover:scale-105 transition-transform">
                            S
                        </div>
                        <span className="text-lg font-bold text-foreground tracking-tight">
                            SourceSmart
                        </span>
                    </Link>

                    {/* Desktop Nav - Matches Aave's 14px 500 weight style */}
                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-[14px] font-medium text-neutral-600 dark:text-neutral-300 hover:text-foreground hover:bg-black/5 dark:hover:bg-white/10 px-4 py-2 rounded-lg transition-all"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Right Actions - Matches Aave's specific button style */}
                <div className="hidden md:flex items-center gap-4">
                    <ModeToggle />
                    <Button
                        className="rounded-[8px] bg-[#2B2D31] dark:bg-white text-white dark:text-black hover:bg-black dark:hover:bg-gray-200 font-medium text-[16px] h-auto px-5 py-2.5 shadow-none border-none"
                    >
                        Launch App
                    </Button>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center gap-4">
                    <ModeToggle />
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-foreground hover:text-primary transition-colors"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </Container>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border shadow-lg animate-in slide-in-from-top-2">
                    <Container className="py-6 flex flex-col space-y-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-foreground hover:text-primary font-medium text-base block py-2"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Button className="w-full justify-center rounded-[8px] bg-[#2B2D31] text-white h-12">
                            Launch App
                        </Button>
                    </Container>
                </div>
            )}
        </nav>
    );
}
