'use client'
import React, { useRef, useState } from 'react'
import Image from 'next/image';

export default function IntroductionImage() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current) return;

        const rect = containerRef.current.getBoundingClientRect();

        setPosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    return (
        <div
            ref={containerRef}
            className="w-full h-full absolute inset-0 cursor-crosshair z-10"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Image
                src="/gary.png"
                alt="gary"
                fill
                className="object-cover grayscale"
                priority
            />
            <div
                className="absolute inset-0 pointer-events-none transition-opacity duration-300 ease-in-out"
                style={{
                    // Fade in the spotlight when hovered, fade out when leaving
                    opacity: isHovered ? 1 : 0,
                    // The radial gradient mask creates the "spotlight" circle
                    "--mask-image": `radial-gradient(15vw circle at ${position.x}px ${position.y}px, black 40%, transparent 100%)`,
                    WebkitMaskImage: "var(--mask-image)",
                    maskImage: "var(--mask-image)",
                } as React.CSSProperties}
            >
                <Image
                    src="/gary_og.png"
                    alt="gary"
                    fill
                    className="object-cover"
                />
            </div>
        </div>
    )
}