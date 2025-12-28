'use client'

import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"
import { Button3D } from "@/components/ui/button-3d"
import { Eye, MessageCircle } from "lucide-react"

export function HeroSpline() {
    return (
        <Card className="w-full min-h-[500px] md:h-[600px] bg-black/[0.96] relative overflow-hidden border-none rounded-none">
            <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="white"
            />

            <div className="flex flex-col md:flex-row h-full">
                {/* Left content */}
                <div className="flex-1 p-8 md:p-16 relative z-10 flex flex-col justify-center">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                        Creative
                        <br />
                        Developer
                    </h1>
                    <p className="mt-6 text-neutral-300 max-w-lg text-lg md:text-xl">
                        Crafting immersive digital experiences through innovative design
                        and cutting-edge technology. Bringing ideas to life with stunning visuals.
                    </p>
                    <div className="mt-8 flex flex-wrap gap-4">
                        <Button3D variant="primary" size="lg">
                            <Eye size={20} />
                            View Work
                        </Button3D>
                        <Button3D variant="outline" size="lg">
                            <MessageCircle size={20} />
                            Contact
                        </Button3D>
                    </div>
                </div>

                {/* Right content - Spline 3D */}
                <div className="flex-1 relative min-h-[300px] md:min-h-full">
                    <SplineScene
                        scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                        className="w-full h-full"
                    />
                </div>
            </div>
        </Card>
    )
}
