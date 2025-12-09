import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const satoshi = localFont({
  src: [
    {
      path: "./fonts/Satoshi-Variable.ttf",
      style: "normal",
    },
    {
      path: "./fonts/Satoshi-VariableItalic.ttf",
      style: "italic",
    },
  ],
  variable: "--font-satoshi",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SourceSmart AI | Intelligent Procurement",
  description: "Discover trusted suppliers, track market risks, and make smarter purchasing decisions with SourceSmart AI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${satoshi.variable}`}>
      <body
        className={`antialiased`}
      >
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
