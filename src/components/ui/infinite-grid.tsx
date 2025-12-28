import React, { memo, useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface InfiniteGridProps {
    className?: string;
    gridSize?: number;
    showBlurSpheres?: boolean;
}

/**
 * Ultra-optimized Infinite Grid Component
 * Uses pure CSS for maximum cross-browser performance
 */
export const InfiniteGrid = memo(({
    className,
    gridSize = 50,
    showBlurSpheres = false // Disabled by default for performance
}: InfiniteGridProps) => {
    const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
    const [isMobile, setIsMobile] = useState(false);

    // Detect mobile on mount
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Throttled mouse move for performance
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (isMobile) return; // Disable on mobile
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    const handleMouseLeave = () => setMousePos({ x: -1000, y: -1000 });

    return (
        <div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={cn("absolute inset-0 overflow-hidden", className)}
        >
            {/* Static CSS Grid - maximum performance */}
            <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                    backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
                    backgroundSize: `${gridSize}px ${gridSize}px`
                }}
            />

            {/* Simple glow effect - desktop only, no blur */}
            {!isMobile && mousePos.x > 0 && (
                <div
                    className="absolute w-80 h-80 rounded-full pointer-events-none transition-opacity duration-200"
                    style={{
                        left: mousePos.x - 160,
                        top: mousePos.y - 160,
                        background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)',
                    }}
                />
            )}

            {/* Decorative elements - simplified, no blur */}
            {showBlurSpheres && !isMobile && (
                <div className="absolute inset-0 pointer-events-none opacity-30">
                    <div className="absolute right-0 top-0 w-48 h-48 rounded-full bg-purple-600/20" />
                    <div className="absolute left-0 bottom-0 w-48 h-48 rounded-full bg-blue-600/20" />
                </div>
            )}
        </div>
    );
});

InfiniteGrid.displayName = 'InfiniteGrid';

export default InfiniteGrid;
