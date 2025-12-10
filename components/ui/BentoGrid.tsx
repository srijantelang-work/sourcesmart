"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export const BentoGrid = ({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
                className
            )}
        >
            {children}
        </div>
    );
};

export const BentoGridItem = ({
    className,
    title,
    description,
    header,
    icon,
}: {
    className?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    header?: React.ReactNode;
    icon?: React.ReactNode;
}) => {
    return (
        <motion.div
            whileHover={{ scale: 1.01 }}
            className={cn(
                "row-span-1 rounded-xl group/bento hover:shadow-2xl hover:shadow-indigo-500/10 transition duration-300 shadow-none p-6 bg-white dark:bg-zinc-900/50 dark:border-white/10 border border-neutral-200 justify-between flex flex-col space-y-4",
                "backdrop-blur-sm",
                className
            )}
        >
            {header}
            <div className="group-hover/bento:translate-x-2 transition duration-200">
                {icon}
                <div className="font-sans font-bold text-navy dark:text-neutral-200 mb-2 mt-2">
                    {title}
                </div>
                <div className="font-sans font-normal text-muted-foreground text-xs text-pretty">
                    {description}
                </div>
            </div>
        </motion.div>
    );
};
