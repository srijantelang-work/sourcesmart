"use client";

import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Twitter, Linkedin, Facebook } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-[#0b0f19] text-gray-400 py-16 border-t border-gray-800/50">
            <Container>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">

                    <div className="col-span-2 lg:col-span-2">
                        <Link href="/" className="flex items-center space-x-2 mb-6">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#2D7CFF] to-[#006BFF] flex items-center justify-center text-white font-bold text-lg">
                                S
                            </div>
                            <span className="text-xl font-bold text-white tracking-tight">
                                SourceSmart<span className="text-[#006BFF]">AI</span>
                            </span>
                        </Link>
                        <p className="text-sm max-w-xs mb-8 leading-relaxed">
                            The intelligent procurement platform for modern manufacturing and supply chain teams.
                        </p>
                        <div className="flex space-x-4">
                            <SocialLink href="#" icon={Twitter} />
                            <SocialLink href="#" icon={Linkedin} />
                            <SocialLink href="#" icon={Facebook} />
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Product</h4>
                        <ul className="space-y-4 text-sm">
                            <FooterLink href="#features">Features</FooterLink>
                            <FooterLink href="#">Pricing</FooterLink>
                            <FooterLink href="#">Documentation</FooterLink>
                            <FooterLink href="#services">Services</FooterLink>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Company</h4>
                        <ul className="space-y-4 text-sm">
                            <FooterLink href="#about">About Us</FooterLink>
                            <FooterLink href="#">Careers</FooterLink>
                            <FooterLink href="#">Blog</FooterLink>
                            <FooterLink href="#contact">Contact</FooterLink>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Legal</h4>
                        <ul className="space-y-4 text-sm">
                            <FooterLink href="#">Privacy Policy</FooterLink>
                            <FooterLink href="#">Terms of Service</FooterLink>
                            <FooterLink href="#">Security</FooterLink>
                        </ul>
                    </div>

                </div>

                <div className="pt-8 border-t border-gray-800/50 flex flex-col md:flex-row justify-between items-center text-xs">
                    <div>&copy; {new Date().getFullYear()} SourceSmart AI. All rights reserved.</div>
                    <div className="mt-4 md:mt-0 space-x-6">
                        <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms</Link>
                        <Link href="#" className="hover:text-white transition-colors">Cookies</Link>
                    </div>
                </div>
            </Container>
        </footer>
    );
}

function SocialLink({ href, icon: Icon }: { href: string, icon: any }) {
    return (
        <Link href={href} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#2D7CFF] hover:text-white transition-all duration-300">
            <Icon size={18} />
        </Link>
    )
}

function FooterLink({ href, children }: { href: string, children: React.ReactNode }) {
    return (
        <li>
            <Link href={href} className="hover:text-[#2D7CFF] transition-colors">{children}</Link>
        </li>
    )
}
