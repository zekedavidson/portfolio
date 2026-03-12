'use client'
import React, { useState } from 'react'

const ReadMore = ({ text, limit = 200 }: { text: string; limit?: number }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const needsTruncation = text.length > limit;

    return (
        <span className='whitespace-pre-line'>
            {isExpanded || !needsTruncation
                ? text
                : `${text.slice(0, limit)}... `}
            {needsTruncation && (
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className='ml-1 text-gray-500 dark:text-gray-400 hover:underline cursor-pointer font-medium'
                >
                    {isExpanded ? 'Read less' : 'Read more'}
                </button>
            )}
        </span>
    );
};

const Experience = () => {
    return (
        <div className="flex px-[5vw] pt-[2vh] md:pt-[8vh] justify-start md:max-h-[80vh]">
            <div className='flex flex-col mt-5 md:mt-10'>
                <h2 className='text-[clamp(1.5rem,2vw,1.875rem)] pb-[1.5vh] md:pb-0 md:text-3xl'>Experience</h2>
                <div className='flex flex-col'>
                    <h2 className='text-gray-700 dark:text-gray-200 text-xl md:text-2xl mt-5'>Software Development Engineer Intern</h2>
                    <h3 className='text-gray-500 dark:text-gray-400 text-lg md:text-xl'>VR Map Creators Pvt. Ltd. [June – August, 2025]</h3>
                    <p className='text-gray-700 dark:text-gray-300 text-base md:text-xl text-justify'>Developed and tested in-house software tools, contributing to the company&apos;s product
                        development lifecycle. Gained hands-on experience in full-stack development while
                        enhancing teamwork, collaboration, and communication skills. Worked closely with the
                        engineering team to debug, optimize, and improve existing systems for better efficiency.</p>

                    <h2 className='text-gray-700 dark:text-gray-200 text-xl md:text-2xl mt-5'>Freelance (Automation Specialist)</h2>
                    <h3 className='text-gray-500 dark:text-gray-400 text-lg md:text-xl'>[November – March, 2025]</h3>
                    <p className='text-gray-700 dark:text-gray-300 text-base md:text-xl text-justify'>
                        <ReadMore
                            text="Designed and implemented advanced multi-platform automation systems using Zapier and Make.com to connect tools like Airtable, Notion, Slack, Discord, Google Sheets, Typeform, Beehiiv, and webhooks. Reduced manual operational workload by 60–70% by building scalable workflows for lead management, reporting, project tracking, email segmentation, and real-time team notifications. Developed centralized dashboards, automated data pipelines, and custom Discord bots to streamline data flow, improve reporting accuracy, and enhance team collaboration. Built error-handling and monitoring systems within automations to ensure reliability, data consistency, and scalable infrastructure for growing client operations."
                            limit={200}
                        />
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Experience