"use client";

import React, { memo } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Button3DProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    variant?: "primary" | "secondary" | "outline";
    size?: "sm" | "md" | "lg";
    className?: string;
}

export const Button3D = memo(React.forwardRef<HTMLButtonElement, Button3DProps>(
    ({ children, variant = "primary", size = "md", className, ...props }, ref) => {
        const baseStyles = "relative font-semibold rounded-xl transition-all duration-150 transform-gpu will-change-transform";

        const variants = {
            primary: [
                "bg-gradient-to-b from-white to-neutral-200 text-neutral-900",
                "shadow-[0_4px_0_0_#a3a3a3,0_6px_12px_rgba(0,0,0,0.2)]",
                "hover:shadow-[0_2px_0_0_#a3a3a3,0_4px_8px_rgba(0,0,0,0.15)]",
                "active:shadow-[0_0px_0_0_#a3a3a3,0_1px_2px_rgba(0,0,0,0.1)]",
                "hover:translate-y-[2px]",
                "active:translate-y-[4px]",
                "border border-neutral-300",
            ].join(" "),
            secondary: [
                "bg-gradient-to-b from-neutral-800 to-neutral-900 text-white",
                "shadow-[0_4px_0_0_#171717,0_6px_12px_rgba(0,0,0,0.4)]",
                "hover:shadow-[0_2px_0_0_#171717,0_4px_8px_rgba(0,0,0,0.3)]",
                "active:shadow-[0_0px_0_0_#171717,0_1px_2px_rgba(0,0,0,0.2)]",
                "hover:translate-y-[2px]",
                "active:translate-y-[4px]",
                "border border-neutral-700",
            ].join(" "),
            outline: [
                "bg-transparent text-white",
                "shadow-[0_4px_0_0_#262626,0_6px_12px_rgba(0,0,0,0.2)]",
                "hover:shadow-[0_2px_0_0_#262626,0_4px_8px_rgba(0,0,0,0.15)]",
                "active:shadow-[0_0px_0_0_#262626,0_1px_2px_rgba(0,0,0,0.1)]",
                "hover:translate-y-[2px]",
                "active:translate-y-[4px]",
                "border-2 border-neutral-600",
                "hover:border-neutral-500",
                "hover:bg-neutral-900/50",
            ].join(" "),
        };

        const sizes = {
            sm: "px-4 py-2 text-sm",
            md: "px-6 py-3 text-base",
            lg: "px-8 py-4 text-lg",
        };

        return (
            <motion.button
                ref={ref as any}
                className={cn(baseStyles, variants[variant], sizes[size], className)}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 500, damping: 20 }}
                {...(props as any)}
            >
                {/* Content */}
                <span className="relative z-10 flex items-center justify-center gap-2">
                    {children}
                </span>
            </motion.button>
        );
    }
));

Button3D.displayName = "Button3D";

export default Button3D;
