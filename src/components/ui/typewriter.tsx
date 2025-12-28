"use client";

import { useState, useEffect, useRef, memo } from "react";

interface LazyLoadProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
}

// Simple fade-in with CSS only - no Framer Motion for performance
export const LazyLoad = memo(({ children, className, delay = 0 }: LazyLoadProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => setIsVisible(true), delay * 1000);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        observer.observe(element);
        return () => observer.disconnect();
    }, [delay]);

    return (
        <div
            ref={ref}
            className={className}
            style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(15px)',
                transition: 'opacity 0.4s ease-out, transform 0.4s ease-out',
            }}
        >
            {children}
        </div>
    );
});

LazyLoad.displayName = 'LazyLoad';

interface TypewriterOnViewProps {
    text: string;
    delay?: number;
    className?: string;
}

export const TypewriterOnView = memo(({ text, delay = 15, className }: TypewriterOnViewProps) => {
    const containerRef = useRef<HTMLSpanElement>(null);
    const [isVisible, setIsVisible] = useState(false);
    const [displayedText, setDisplayedText] = useState("");
    const indexRef = useRef(0);

    // Viewport detection
    useEffect(() => {
        const element = containerRef.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        observer.observe(element);
        return () => observer.disconnect();
    }, []);

    // Typing animation with requestAnimationFrame
    useEffect(() => {
        if (!isVisible) return;

        let animationId: number;
        let lastTime = 0;

        const animate = (time: number) => {
            if (time - lastTime >= delay) {
                if (indexRef.current < text.length) {
                    indexRef.current += 1;
                    setDisplayedText(text.slice(0, indexRef.current));
                    lastTime = time;
                } else {
                    return;
                }
            }
            animationId = requestAnimationFrame(animate);
        };

        animationId = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationId);
    }, [isVisible, text, delay]);

    const isComplete = displayedText.length >= text.length;

    return (
        <span ref={containerRef} className={className}>
            {displayedText}
            {isVisible && !isComplete && (
                <span
                    className="inline-block w-0.5 h-[1em] bg-white ml-0.5 align-middle"
                    style={{ animation: 'pulse 0.8s ease-in-out infinite' }}
                />
            )}
        </span>
    );
});

TypewriterOnView.displayName = 'TypewriterOnView';

export default TypewriterOnView;
