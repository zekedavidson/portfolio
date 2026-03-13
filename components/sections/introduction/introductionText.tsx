'use client'
import { useRef } from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Clock } from '@/components/ui/clock'
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { TextLoop } from '@/components/ui/text-loop';
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient';
import Link from 'next/link';

const FONT_WEIGHTS = {
    subtitle: { min: 100, max: 400, default: 100 },
    title: { min: 400, max: 1000, default: 400 },
    subText: { min: 300, max: 900, default: 300 }
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

const IntroductionText = () => {
    const titleRef = useRef(null)
    const subtitleRef = useRef(null)
    const subTextRef = useRef(null)

    useGSAP(() => {
        setupTextHover(titleRef.current, 'title');
        setupTextHover(subtitleRef.current, "subtitle");
        setupTextHover(subTextRef.current, "subText");

    }, [])

    return (
        <section id="title-heading">
            {/* <p ref={superTextRef}>{renderText("Hi I'm", 'text-5xl text-left', 100)}</p> */}
            <div className='items-center justify-center text-center'>
                <h1 ref={titleRef}>{renderText("Gary Bhatia", 'text-[clamp(3rem,8vw,7.5rem)]', 400)}</h1>
            </div>
            <div className='flex items-center justify-center -mt-6'>
                <TextLoop className='text-sm text-[clamp(1.5rem,4vw,3.75rem)] italic font-extralight'>
                    <span>Web Developer</span>
                    <span className='text-[clamp(1.5rem,3vw,3.75rem)]'>Automation Specialist</span>
                </TextLoop>
            </div>


            <div className='flex items-center justify-center mt-5 gap-3'>
                <p>IST</p><Clock />
            </div>
            <div className='mt-5 flex items-center justify-center gap-[5vw]'>
                <div className="flex justify-center text-center">
                    <Link href="https://drive.google.com/file/d/1PwH4RvpGSHiIamSk5E8jrtETNPfbXbta/view?usp=sharing" target="_blank">
                        <HoverBorderGradient
                            containerClassName="rounded-full"
                            as="button"
                            className="dark:bg-black bg-black text-white dark:text-white flex items-center space-x-3 px-6 hover:cursor-pointer"
                        >
                            <span className='flex'>Resume<ArrowUpRight /></span>
                        </HoverBorderGradient>
                    </Link>

                </div>
                <div className="flex justify-center text-center">
                    <a href="#connect">
                        <HoverBorderGradient
                            containerClassName="rounded-full"
                            as="button"
                            className="dark:bg-black bg-black text-white dark:text-white flex items-center space-x-3 px-6 hover:cursor-pointer"
                        >
                            <span className='flex'>Connect<ArrowRight /></span>
                        </HoverBorderGradient>
                    </a>
                </div>
            </div>
            <div className='items-center justify-center flex text-center mt-10 text-gray-600 dark:text-gray-400'>
                <p ref={subTextRef}>{renderText("A fullstack developer with strong foundation and hands-on experience in React frameworks, JavaScript, and responsive websites.", 'text-[clamp(1.2rem,1vw,4rem)]', 300)}</p>
            </div>

        </section >
    )
}

export default IntroductionText