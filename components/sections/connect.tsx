'use client'
import Card from '../ui/card';
import React, { useState } from 'react'
import { Mail } from 'lucide-react'
import { Phone } from 'lucide-react';

export default function Connect() {
    const [copiedEmail, setIsCopiedEmail] = useState(false);
    const email = "bhatiagary28@gmail.com";

    const handleCopyEmail = async () => {
        await navigator.clipboard.writeText(email);
        setIsCopiedEmail(true);
        setTimeout(() => setIsCopiedEmail(false), 2000);
    };

    const [copiedNumber, setIsCopiedNumber] = useState(false);
    const number = "+919811219899";
    const handleCopyNumber = async () => {
        await navigator.clipboard.writeText(number);
        setIsCopiedNumber(true);
        setTimeout(() => setIsCopiedNumber(false), 2000);
    };

    return (
        <div className="flex flex-col px-[5vw] pt-[5vh]">
            <h2 className='text-[clamp(1.5rem,2vw,1.875rem)] pb-[1.5vh]'>Connect</h2>
            <div className='flex max-w-full border-2 rounded-2xl shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]'>
                <div className='w-full grid grid-cols-2'>
                    <div className='flex flex-col px-[3vw] py-[3vh]'>
                        <h1 className='font-bold text-[clamp(2.5rem,5vw,3.75rem)]'>Get in Touch.</h1>
                        <h3 className='px-[0.5vw] text-[clamp(1rem,1.5vw,1.25rem)]'>Got an idea, a project, or just want to talk automation, AI, or web stuff?
                            I’m always open to collaborating, solving problems, and creating smart solutions.
                            <br /><br />
                            Drop me a message, I’ll get back to you as soon as I can!
                        </h3><br />
                        <span className='w-fit flex px-[0.5vw] text-[clamp(1rem,1.5vw,1.25rem)] hover:underline gap-[0.5vw] items-center cursor-pointer' onClick={handleCopyEmail}><Mail />bhatiagary28@gmail.com</span>
                        {copiedEmail && (
                            <span className="text-green-600 text-[0.875rem] px-[1vw]">Copied to clipboard!</span>
                        )}

                        <span className='w-fit flex px-[0.5vw] text-[clamp(1rem,1.5vw,1.25rem)] hover:underline gap-[0.5vw] items-center cursor-pointer' onClick={handleCopyNumber}><Phone />+919811219899</span>
                        {copiedNumber && (
                            <span className="text-green-600 text-[0.875rem] px-[1vw]">Copied to clipboard!</span>
                        )}
                    </div>
                    <div className='pl-[5vw]'>
                        <div className='w-full flex flex-col gap-[5vh] py-[6vh]'>
                            <Card
                                title="linkedin.com/in/gary-bhatia/"
                                imageSrc="/linked.png"
                                className="w-full! sm:w-fit sm:pr-15 bg-transparent"
                            />
                            <Card
                                title="github.com/zekedavidson"
                                imageSrc="/github.svg"
                                className="w-full! sm:w-fit sm:pr-15 bg-transparent"
                            />
                            <Card
                                title="cheeseball28"
                                imageSrc="/disc.png"
                                className="w-full! sm:w-fit sm:pr-15 bg-transparent"
                            />

                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
