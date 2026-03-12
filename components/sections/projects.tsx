"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/hooks/use-outside-click";

export default function Projects() {
    const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
        null
    );
    const ref = useRef<HTMLDivElement>(null);
    const id = useId();

    useEffect(() => {
        function onKeyDown(event: KeyboardEvent) {
            if (event.key === "Escape") {
                setActive(false);
            }
        }

        if (active && typeof active === "object") {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [active]);

    useOutsideClick(ref, () => setActive(null));

    return (
        <div className="px-[5vw] pt-[2vh] md:pt-[5vh]">
            <h2 className='text-[clamp(1.5rem,2vw,1.875rem)] pb-[1.5vh] md:text-3xl mb-6'>Projects</h2>
            <AnimatePresence>
                {active && typeof active === "object" && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/20 h-full w-full z-10"
                    />
                )}
            </AnimatePresence>
            <AnimatePresence>
                {active && typeof active === "object" ? (
                    <div className="fixed inset-0  grid place-items-center z-100">
                        <motion.button
                            key={`button-${active.title}-${id}`}
                            layout
                            initial={{
                                opacity: 0,
                            }}
                            animate={{
                                opacity: 1,
                            }}
                            exit={{
                                opacity: 0,
                                transition: {
                                    duration: 0.05,
                                },
                            }}
                            className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
                            onClick={() => setActive(null)}
                        >
                            <CloseIcon />
                        </motion.button>
                        <motion.div
                            layoutId={`card-${active.title}-${id}`}
                            ref={ref}
                            className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
                        >
                            <motion.div layoutId={`image-${active.title}-${id}`}>
                                <img
                                    width={200}
                                    height={200}
                                    src={active.src}
                                    alt={active.title}
                                    className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                                />
                            </motion.div>

                            <div>
                                <div className="flex justify-between items-start p-4">
                                    <div className="">
                                        <motion.h3
                                            layoutId={`title-${active.title}-${id}`}
                                            className="font-bold text-neutral-700 dark:text-neutral-200"
                                        >
                                            {active.title}
                                        </motion.h3>
                                        <motion.p
                                            layoutId={`description-${active.description}-${id}`}
                                            className="text-neutral-600 dark:text-neutral-400"
                                        >
                                            {active.description}
                                        </motion.p>
                                    </div>

                                    <motion.a
                                        layoutId={`button-${active.title}-${id}`}
                                        href={active.ctaLink}
                                        target="_blank"
                                        className="px-4 py-3 text-sm rounded-full font-bold bg-black text-white"
                                    >
                                        {active.ctaText}
                                    </motion.a>
                                </div>
                                <div className="pt-4 relative px-4">
                                    <motion.div
                                        layout
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                                    >
                                        {typeof active.content === "function"
                                            ? active.content()
                                            : active.content}
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                ) : null}
            </AnimatePresence>
            <ul className="max-w-5xl flex flex-col gap-[3vh]">
                {cards.map((card, index) => (
                    <motion.div
                        layoutId={`card-${card.title}-${id}`}
                        key={`card-${card.title}-${id}`}
                        onClick={() => setActive(card)}
                        className="p-5 flex flex-col md:flex-row justify-between items-center border-2 rounded-2xl bg-white dark:hover:bg-neutral-800 cursor-pointer shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]"
                    >
                        <div className="flex gap-5 flex-col md:flex-row items-center">
                            <motion.div layoutId={`image-${card.title}-${id}`}>
                                <img
                                    width={100}
                                    height={100}
                                    src={card.src}
                                    alt={card.title}
                                    className="h-40 w-40 md:h-25 md:w-25 rounded-lg object-cover object-top"
                                />
                            </motion.div>
                            <div className="">
                                <motion.h3
                                    layoutId={`title-${card.title}-${id}`}
                                    className="font-medium text-xl text-gray-800 dark:text-neutral-200 text-center md:text-left"
                                >
                                    {card.title}
                                </motion.h3>
                                <motion.p
                                    layoutId={`description-${card.description}-${id}`}
                                    className="text-neutral-600 dark:text-neutral-400 text-center md:text-left text-base"
                                >
                                    {card.description}
                                </motion.p>
                            </div>
                        </div>
                        {/* <motion.button
                            layoutId={`button-${card.title}-${id}`}
                            className="px-4 py-2 text-sm rounded-full font-bold bg-gray-200 hover:bg-black hover:text-white text-black mt-4 md:mt-0"
                        >
                            {card.ctaText}
                        </motion.button> */}
                    </motion.div>
                ))}
            </ul>
        </div>
    );
}

export const CloseIcon = () => {
    return (
        <motion.svg
            initial={{
                opacity: 0,
            }}
            animate={{
                opacity: 1,
            }}
            exit={{
                opacity: 0,
                transition: {
                    duration: 0.05,
                },
            }}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4 text-black dark:text-white"
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M18 6l-12 12" />
            <path d="M6 6l12 12" />
        </motion.svg>
    );
};

const cards = [
    {
        description: "JavaScript, Node.js, Express.js, MongoDB, HTML, CSS",
        title: "BookHaven (AirBnb Inspired Hotel Booking Webapp)",
        src: "/bookhaven.jpeg",
        ctaText: "View",
        ctaLink: "https://github.com/zekedavidson/BookHaven-Airbnb-inspired-webapp",
        content: () => {
            return (
                <p>

                    Developed a full-stack hotel booking platform with user and admin authentication using
                    JavaScript, Node.js, Express, and HTML/CSS. Implemented core features such as
                    login/signup, hotel listing management (add/edit), and secure password handling using
                    hashing. Integrated geocoding APIs for real-time hotel location tracking and interactive
                    map display. Ensured modular backend routing with clean and responsive UI design for
                    a seamless user experience. <br />
                    <a href="https://github.com/zekedavidson/BookHaven-Airbnb-inspired-webapp" className="text-black dark:text-white hover:underline">[Github Link]</a><br />

                </p>
            );
        },
    },
    {
        description: "React, TypeScript, TailwindCSS, AI Integration (PuterJS)",
        title: "AI Resume Analyzer",
        src: "/resume-analyzer.jpeg",
        ctaText: "View",
        ctaLink: "https://ai-resume-analyzer-jtoj.onrender.com/",
        content: () => {
            return (
                <p>
                    Built an AI-powered web application that analyzes resumes against job descriptions and
                    provides ATS scores, content feedback, and improvement suggestions. Implemented
                    secure resume uploads, role-specific evaluation, and real-time insights using AI
                    services. Developed a responsive frontend with React, TypeScript, and TailwindCSS for
                    seamless user experience.<br />
                    <a href="https://github.com/zekedavidson/ai-resume-analyzer" className="text-black dark:text-white hover:underline">[Github Link]</a><br />

                </p>
            );
        },
    },

    {
        description: "Next.js, React, Tailwind CSS, TypeScript",
        title: "Minimalistic Personal Portfolio",
        src: "/portfolio.jpeg",
        ctaText: "View",
        ctaLink: "https://portfolio-zgy3.vercel.app/",
        content: () => {
            return (
                <p>
                    Designed and developed a fully responsive, modern portfolio website to showcase web development and
                    automation projects. Implemented a dynamic UI with custom CSS Grid layouts, interactive GSAP/Framer
                    Motion animations, and fluid typography for seamless scaling across all devices. <br />
                    <a href="https://github.com/zekedavidson/portfolio" className="text-black dark:text-white hover:underline">[Github Link]</a>

                </p>
            );
        },
    },

    {
        description: "React.js, Node.js, TailwindCSS, Appwrite",
        title: "Movie Database Application",
        src: "/moviedb.jpeg",
        ctaText: "View",
        ctaLink: "https://moviedbapp-f5ml.onrender.com/",
        content: () => {
            return (
                <p>
                    Engineered a modern, full-stack Movie Database Application utilizing React and Vite for
                    lightning-fast development and optimized performance. Implemented key features
                    including real-time movie search, dynamic movie cards with posters/ratings, and a fully
                    responsive UI styled with Tailwind CSS. Managed state using React Hooks and
                    leveraged Appwrite for robust backend services.<br />
                    <a href="https://github.com/zekedavidson/moviedb-app" className="text-black dark:text-white hover:underline">[Github Link]</a>

                </p>
            );
        },
    },
];
