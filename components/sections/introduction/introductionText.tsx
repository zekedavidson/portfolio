'use client'
import { useRef } from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Clock } from '@/components/ui/clock'
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { GlowEffect } from '@/components/motion-primitives/glow-effect';
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient';
HoverBorderGradient

const FONT_WEIGHTS = {
    subtitle: { min: 100, max: 400, default: 100 },
    title: { min: 400, max: 1000, default: 400 },
    superText: { min: 100, max: 400, default: 100 }
}

const renderText = (text: string, className: string, baseWeight: number = 400) => {
    return [...text].map((char, i) => (
        <span
            key={i}
            className={className}
            style={{ fontVariationSettings: `'wght' ${baseWeight}` }}>
            {char === " " ? "\u00A0" : char}
        </span>
    ))
}

const setupTextHover = (container: HTMLElement | null, type: keyof typeof FONT_WEIGHTS) => {
    if (!container) return;

    const letters = container.querySelectorAll("span");
    const { min, max, default: base } = FONT_WEIGHTS[type];

    const animateLetter = (letter: Element, weight: number, duration = 0.25) => {
        return gsap.to(letter, {
            duration,
            ease: 'power2.out',
            fontVariationSettings: `'wght' ${weight}`,
        });
    };

    const handleMouseMove = (e: MouseEvent) => {
        const { left } = container.getBoundingClientRect();
        const mouseX = e.clientX - left;

        letters.forEach((letter) => {
            const { left: l, width: w } = letter.getBoundingClientRect();
            const distance = Math.abs(mouseX - (l - left + w / 2));
            const intensity = Math.exp(-(distance ** 2) / 2000);

            animateLetter(letter, min + (max - min) * intensity);
        });
    };

    const handleMouseLeave = () => letters.forEach((letter) => animateLetter(letter, base, 0.5))

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mousemove", handleMouseLeave);

};

const springOptions = { bounce: 0.1 };

const IntroductionText = () => {
    const titleRef = useRef(null)
    const subtitleRef = useRef(null)
    const superTextRef = useRef(null)

    useGSAP(() => {
        setupTextHover(titleRef.current, 'title');
        setupTextHover(subtitleRef.current, "subtitle");
        setupTextHover(superTextRef.current, "superText");

    }, [])

    return (
        <section id="title-heading">
            {/* <p ref={superTextRef}>{renderText("Hi I'm", 'text-5xl text-left', 100)}</p> */}
            <div className='items-center justify-center text-center'>
                <h1 ref={titleRef}>{renderText("Gary Bhatia", 'text-[clamp(3rem,8vw,7.5rem)]', 400)}</h1>
                <p ref={subtitleRef}>{renderText("Web Developer", 'text-[clamp(1.5rem,4vw,3.75rem)] italic', 100)}</p>
            </div>

            <div className='flex items-center justify-center mt-5 gap-3'>
                <p>IST</p><Clock />
            </div>
            <div className='mt-5 flex items-center justify-center gap-[10vw]'>
                <div className="flex justify-center text-center">
                    <HoverBorderGradient
                        containerClassName="rounded-full"
                        as="button"
                        className="dark:bg-black bg-black text-white dark:text-white flex items-center space-x-3 px-6 hover:cursor-pointer"
                    >
                        <span className='flex'>Resume<ArrowUpRight /></span>
                    </HoverBorderGradient>
                </div>
                <div className="flex justify-center text-center">
                    <HoverBorderGradient
                        containerClassName="rounded-full"
                        as="button"
                        className="dark:bg-black bg-black text-white dark:text-white flex items-center space-x-3 px-6 hover:cursor-pointer"
                    >
                        <span className='flex'>Connect<ArrowRight /></span>
                    </HoverBorderGradient>
                </div>
            </div>

        </section >
    )
}

export default IntroductionText