'use client'

import { Suspense, lazy, memo, useState, useEffect } from 'react'

// Lazy load Spline on desktop only
const Spline = lazy(() => import('@splinetool/react-spline'))

interface SplineSceneProps {
    scene: string
    className?: string
}

// Simple loading placeholder
const LoadingPlaceholder = memo(() => (
    <div className="w-full h-full flex items-center justify-center bg-neutral-900/50">
        <div className="flex flex-col items-center gap-4">
            <div className="w-10 h-10 border-2 border-white/20 border-t-white rounded-full animate-spin" />
            <span className="text-neutral-400 text-sm">Loading 3D...</span>
        </div>
    </div>
));

LoadingPlaceholder.displayName = 'LoadingPlaceholder';

// Fallback for mobile/slow devices
const MobileFallback = memo(() => (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-neutral-900 to-neutral-950">
        <div className="text-8xl md:text-9xl font-bold text-white/5 select-none">3D</div>
    </div>
));

MobileFallback.displayName = 'MobileFallback';

export const SplineScene = memo(({ scene, className }: SplineSceneProps) => {
    const [shouldLoad, setShouldLoad] = useState(false);
    const [isMobile, setIsMobile] = useState(true); // Default to mobile for SSR

    useEffect(() => {
        // Detect mobile/low-power devices
        const checkDevice = () => {
            const isMobileDevice = window.innerWidth < 768 ||
                'ontouchstart' in window ||
                navigator.maxTouchPoints > 0;

            // Also check for low memory devices if available
            const hasLowMemory = (navigator as any).deviceMemory && (navigator as any).deviceMemory < 4;

            setIsMobile(isMobileDevice || hasLowMemory);

            // Only load 3D on capable devices
            if (!isMobileDevice && !hasLowMemory) {
                // Delay loading slightly to prioritize other content
                setTimeout(() => setShouldLoad(true), 500);
            }
        };

        checkDevice();
        window.addEventListener('resize', checkDevice);
        return () => window.removeEventListener('resize', checkDevice);
    }, []);

    // Show fallback on mobile/low-power devices
    if (isMobile) {
        return <MobileFallback />;
    }

    // Show loading or 3D scene on desktop
    if (!shouldLoad) {
        return <LoadingPlaceholder />;
    }

    return (
        <Suspense fallback={<LoadingPlaceholder />}>
            <Spline
                scene={scene}
                className={className}
            />
        </Suspense>
    );
});

SplineScene.displayName = 'SplineScene';
