'use client';

import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);

        const handleHashClick = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const anchor = target.closest('a');
            if (!anchor) return;
            
            const href = anchor.getAttribute('href');
            if (href?.startsWith('#') && href.length > 1) {
                e.preventDefault();
                const element = document.querySelector(href);
                if (element) {
                    element.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                    });
                    history.pushState(null, '', href);
                }
            }
        };
        document.addEventListener('click', handleHashClick);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
            document.removeEventListener('click', handleHashClick);
        };
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    onClick={scrollToTop}
                    className="fixed bottom-[5vh] right-[5vw] z-50 p-3 rounded-full bg-black dark:bg-white text-white dark:text-black shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] hover:scale-110 transition-transform focus:outline-none cursor-pointer"
                    aria-label="Scroll to top"
                >
                    <ArrowUp size={24} />
                </motion.button>
            )}
        </AnimatePresence>
    );
}
