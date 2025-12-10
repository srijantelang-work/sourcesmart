import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", ...props }, ref) => {
        const variants = {
            primary: "bg-gradient-to-r from-[#2D7CFF] to-[#006BFF] text-white hover:shadow-[0_0_20px_rgba(45,124,255,0.4)] shadow-[0_4px_10px_rgba(45,124,255,0.2)] border border-transparent active:scale-[0.98]",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-lg shadow-gray-900/10 active:scale-[0.98]",
            outline: "bg-background border-2 border-border text-foreground hover:border-primary hover:text-primary active:scale-[0.98]",
            ghost: "bg-transparent text-foreground hover:bg-secondary",
        };

        const sizes = {
            sm: "px-5 py-2 text-sm",
            md: "px-7 py-3 text-base font-medium",
            lg: "px-9 py-4 text-lg font-bold",
        };

        return (
            <button
                ref={ref}
                className={cn(
                    "inline-flex items-center justify-center rounded-full transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer",
                    variants[variant],
                    sizes[size],
                    className
                )}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";
