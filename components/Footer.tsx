"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Container } from "@/components/ui/Container";
import { Twitter, Linkedin, Facebook, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function Footer() {
    const [mounted, setMounted] = useState(false);
    const { theme, resolvedTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    // Determine which logo to show based on theme
    const isDark = mounted && (theme === 'dark' || resolvedTheme === 'dark');
    const logoSrc = isDark ? "/S(2).png" : "/S_1_-removebg-preview.png";

    return (
        <footer className="bg-background dark:bg-[#020617] text-gray-600 dark:text-gray-400 border-t border-border dark:border-gray-800 relative overflow-hidden">

            <Container className="relative z-10 pt-20 pb-12">

                {/* CTA Section */}
                <div className="relative rounded-3xl overflow-hidden px-8 py-20 mb-24 text-center text-white shadow-2xl shadow-blue-900/40 ring-1 ring-white/10 group">
                    {/* Background Layer - Deep Animated Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 animate-gradient-slow bg-[length:200%_200%] transform-gpu will-change-[background-position]" />

                    {/* Texture Layer - CSS Grid */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)] pointer-events-none transform-gpu" />

                    {/* Texture Layer - Noise */}
                    <div className="absolute inset-0 opacity-[0.15] mix-blend-overlay transform-gpu" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E")` }} />

                    {/* Floating Abstract Shapes */}
                    <div className="absolute -top-24 -left-24 w-72 h-72 bg-blue-400/30 rounded-full blur-[80px] mix-blend-screen animate-pulse transform-gpu will-change-transform" style={{ animationDuration: '4s' }} />
                    <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-purple-400/30 rounded-full blur-[80px] mix-blend-screen animate-pulse delay-1000 transform-gpu will-change-transform" style={{ animationDuration: '5s' }} />

                    {/* Content */}
                    <div className="relative z-10 max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight drop-shadow-sm">Ready to modernize your supply chain?</h2>
                        <p className="text-blue-100/90 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
                            Join 500+ forward-thinking procurement teams sourcing faster with AI. Experience the future of purchasing today.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-5 justify-center">
                            <Link href="#contact">
                                <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50 hover:scale-105 transition-all duration-300 border-none h-14 px-8 text-lg font-bold shadow-xl shadow-black/10">
                                    Get Started Free <ArrowRight className="ml-2 w-5 h-5" />
                                </Button>
                            </Link>
                            <Link href="#contact">
                                <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 hover:border-white h-14 px-8 text-lg bg-transparent backdrop-blur-sm transition-all duration-300">
                                    Book a Demo
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
                    <div className="col-span-2 lg:col-span-2">
                        <Link href="/" className="flex items-center space-x-2 mb-6">
                            <Image
                                src={logoSrc}
                                alt="SourceSmart Logo"
                                width={40}
                                height={40}
                            />
                            <span className="text-2xl font-bold text-foreground dark:text-white tracking-tight">
                                SourceSmart
                            </span>
                        </Link>
                        <p className="text-base mb-8 leading-relaxed max-w-sm">
                            The intelligent procurement platform for modern manufacturing and supply chain teams.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-foreground dark:text-white font-bold mb-6 text-lg">Product</h4>
                        <ul className="space-y-4 text-base">
                            <FooterLink href="#features">Features</FooterLink>
                            <FooterLink href="#">Documentation</FooterLink>
                            <FooterLink href="#services">Services</FooterLink>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-foreground dark:text-white font-bold mb-6 text-lg">Company</h4>
                        <ul className="space-y-4 text-base">
                            <FooterLink href="#about">About Us</FooterLink>
                            <FooterLink href="#contact">Contact</FooterLink>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-foreground dark:text-white font-bold mb-6 text-lg">Legal</h4>
                        <ul className="space-y-4 text-base">
                            <FooterLink href="/privacy">Privacy Policy</FooterLink>
                            <FooterLink href="/terms">Terms of Service</FooterLink>
                            <FooterLink href="#contact">Security</FooterLink>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-border dark:border-white/10 flex flex-col md:flex-row justify-between items-center text-sm font-medium">
                    <div className="opacity-70">&copy; {new Date().getFullYear()} SourceSmart AI. All rights reserved.</div>
                    <div className="mt-4 md:mt-0 space-x-8 opacity-70">
                        <Link href="/privacy" className="hover:text-primary dark:hover:text-white transition-colors">Privacy</Link>
                        <Link href="/terms" className="hover:text-primary dark:hover:text-white transition-colors">Terms</Link>
                        <Link href="/privacy" className="hover:text-primary dark:hover:text-white transition-colors">Cookies</Link>
                    </div>
                </div>
            </Container>
        </footer>
    );
}

function SocialLink({ href, icon: Icon }: { href: string, icon: any }) {
    return (
        <Link href={href} className="w-10 h-10 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center hover:scale-110 hover:bg-blue-600 hover:text-white transition-all duration-300">
            <Icon size={18} />
        </Link>
    )
}

function FooterLink({ href, children }: { href: string, children: React.ReactNode }) {
    return (
        <li>
            <Link href={href} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors w-full block hover:translate-x-1 duration-200">{children}</Link>
        </li>
    )
}
