import React from 'react'
import { TextShimmer } from '../ui/text-shimmer'

const About = () => {
    return (
        <div className="flex flex-col px-[5vw] pt-[2vh] md:pt-[5vh]">
            <h2 className='text-[clamp(1.5rem,2vw,1.875rem)] pb-[1.5vh]'>About Me</h2>
            <span className='text-gray-700 dark:text-gray-300 text-xl text-justify'>I’m a <TextShimmer>passionate</TextShimmer> developer crafting minimal, user-centric websites for people who value clarity over chaos.<br />

                I believe the best digital experiences are invisible — they guide, not distract. I build with intention, design with empathy,
                and code in rhythm.<br />

                I don’t just ship websites.<br />
                I ship experiences that feel calm, fast, and beautifully simple while being scalable.
                <br /><br />
                Beyond code, I find inspiration in games and art. Games teach me systems, flow, and engagement.
                Art teaches me restraint, emotion, and balance.</span>
        </div >
    )
}

export default About