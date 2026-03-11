import Link from 'next/link'
import IntroductionText from '@/components/sections/introduction/introductionText'
import IntroductionImage from '@/components/sections/introduction/introductionImage'


const page = () => {
  return (
    <>
      <header className='w-full top-0 z-500 bg-transparent'>
        <nav className='w-full mx-auto px-[4vw] py-3 flex items-center justify-center shadow-[0_8px_30px_rgb(0,0,0,0.12)]'>
          <div className='flex items-center gap-[3vw]'>
            <Link href="#experience" className='text-[clamp(0.875rem,1.2vw,1.125rem)]'>
              Experience
            </Link>

            <Link href="#projects" className='text-[clamp(0.875rem,1.2vw,1.125rem)]'>
              Projects
            </Link>

            <Link href="#contact" className='text-[clamp(0.875rem,1.2vw,1.125rem)]'>
              Connect
            </Link>
          </div>
        </nav>
      </header >

      <section id='introduction' className='w-full px-[10vw] grid grid-cols-2 items-center'>
        {/* Image */}
        <div className="flex px-[5vw] pt-[8vh] justify-start max-h-[80vh]">
          <div className="w-full h-full max-w-[22vw]">
            <div className="aspect-2/3 w-full h-full relative shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">
              <IntroductionImage />
            </div>
          </div>
        </div>

        {/* Text */}
        <div className='flex flex-cols relative'>
          <IntroductionText />
        </div>
      </section>

      <section id='experience' className='w-full px-[10vw] py-[5vh]'>
        <div className="flex px-[5vw] pt-[8vh] justify-start max-h-[80vh]">
          <div className='flex flex-col mt-10'>
            <h2 className='text-3xl'>Experience</h2>
            <div className='flex flex-col'>
              <h2 className='text-gray-700 text-2xl mt-5'>Software Development Engineer Intern</h2>
              <h3 className='text-gray-500 text-xl'>VR Map Creators Pvt. Ltd. [June – August, 2025]</h3>
              <p className='text-gray-700 text-xl text-justify'>Developed and tested in-house software tools, contributing to the company’s product
                development lifecycle. Gained hands-on experience in full-stack development while
                enhancing teamwork, collaboration, and communication skills. Worked closely with the
                engineering team to debug, optimize, and improve existing systems for better efficiency.</p>

              <h2 className='text-gray-700 text-2xl mt-5'>Freelance (Automation Specialist)</h2>
              <h3 className='text-gray-500 text-xl'>[November – March, 2025]</h3>
              <p className='text-gray-700 text-xl text-justify'>Designed and implemented advanced multi-platform automation systems using Zapier and Make.com to
                connect tools like Airtable, Notion, Slack, Discord, Google Sheets, Typeform, Beehiiv, and webhooks.<br />Reduced manual operational workload by
                60–70% by building scalable workflows for lead management, reporting, project tracking, email segmentation, and real-time team notifications.<br />
                Developed centralized dashboards, automated data pipelines, and custom Discord bots to streamline data flow, improve reporting accuracy, and enhance
                team collaboration. <br />Built error-handling and monitoring systems within automations to ensure reliability, data consistency, and scalable infrastructure
                for growing client operations.</p>

            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default page