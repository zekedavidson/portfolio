import React from 'react'
import Card from '../ui/card'

const Skills = () => {
    return (
        <div className="flex px-[5vw] pt-[5vh]">
            <div className='flex flex-col'>
                <h2 className='text-3xl'>Skills</h2>
                <h3 className='text-2xl text-gray-700 mt-5 mb-[1vh]'>Web Development Stack</h3>
                <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-[5vw] gap-y-[3vh]'>
                    <Card
                        title="HTML"
                        imageSrc="/HTML.png"
                    />
                    <Card
                        title="JavaScript"
                        imageSrc="/javascript.png"
                    />
                    <Card
                        title="TypeScript"
                        imageSrc="/typescript.png"
                    />
                    <Card
                        title="Tailwind"
                        imageSrc="/Tailwind.png"
                    />
                    <Card
                        title="React"
                        imageSrc="/react.png"
                    />
                    <Card
                        title="NextJS"
                        imageSrc="/nextjs.png"
                    />
                    <Card
                        title="express"
                        imageSrc="/expressjs.png"
                    />
                    <Card
                        title="PostgresQL"
                        imageSrc="/postgresql.png"
                    />
                    <Card
                        title="MongoDB"
                        imageSrc="/mongo.png"
                    />
                    <Card
                        title="Vercel"
                        imageSrc="/vercel.svg"
                    />
                    <Card
                        title="Github"
                        imageSrc="/github.svg"
                    />
                    <Card
                        title="ShadcnUI"
                        imageSrc="/shadcn.png"
                    />
                </div>
                <h3 className='text-2xl text-gray-700 mt-[5vh] mb-[1vh]'>Automation Stack</h3>
                <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-[5vw] gap-y-[3vh]'>
                    <Card
                        title="Zapier"
                        imageSrc="/zapier.svg"
                    />
                    <Card
                        title="Make.com"
                        imageSrc="/make.png"
                    />
                    <Card
                        title="OpenAI"
                        imageSrc="/openai.png"
                    />
                    <Card
                        title="n8n"
                        imageSrc="/n8n.png"
                    />
                </div>
            </div>
        </div>
    )
}

export default Skills