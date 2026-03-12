import Link from 'next/link'
import IntroductionText from '@/components/sections/introduction/introductionText'
import IntroductionImage from '@/components/sections/introduction/introductionImage'
import Experience from '@/components/sections/experience'
import Projects from '@/components/sections/projects'
import Skills from '@/components/sections/skills'
import Connect from '@/components/sections/connect'
import About from '@/components/sections/about'

const page = () => {
  return (
    <>
      <header className='w-full fixed top-0 z-50 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-md'>
        <nav className='w-full mx-auto px-[4vw] py-2 flex items-center justify-center shadow-[0_8px_30px_rgb(0,0,0,0.12)]'>
          <div className='flex flex-wrap justify-center items-center gap-[3vw]'>
            <a href="#introduction" className='text-[clamp(0.875rem,1.2vw,1.125rem)] hover:underline'>
              Home
            </a>
            <a href="#experience" className='text-[clamp(0.875rem,1.2vw,1.125rem)] hover:underline'>
              Experience
            </a>

            <a href="#projects" className='text-[clamp(0.875rem,1.2vw,1.125rem)] hover:underline'>
              Projects
            </a>

            <a href="#skills" className='text-[clamp(0.875rem,1.2vw,1.125rem)] hover:underline'>
              Skills
            </a>

            <a href="#about" className='text-[clamp(0.875rem,1.2vw,1.125rem)] hover:underline'>
              About
            </a>

            <a href="#connect" className='text-[clamp(0.875rem,1.2vw,1.125rem)] hover:underline'>
              Connect
            </a>
          </div>
        </nav>
        <div className="w-full text-center bg-gray-100 dark:bg-zinc-800 text-gray-800 dark:text-gray-200 text-xs py-1.5 md:hidden">
          This website is designed for desktops
        </div>
      </header >

      {/*Introduction section*/}
      <section id='introduction' className='w-full px-[5vw] md:px-[10vw] py-[3vh] flex flex-col-reverse md:grid md:grid-cols-2 items-center gap-10 md:gap-0 mt-[10vh] md:mt-0'>
        {/* Image */}
        <div className="flex px-[5vw] pt-[2vh] md:pt-[8vh] justify-center md:justify-start max-h-[80vh] w-full">
          <div className="w-full h-full max-w-[60vw] sm:max-w-[40vw] md:max-w-[22vw]">
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

      {/*Experience section */}
      <section id='experience' className='w-full px-[10vw] py-[5vh]'>
        <Experience />
      </section>

      {/*Projects section*/}
      <section id='projects' className='w-full px-[10vw] py-[5vh]'>
        <Projects />
      </section>

      {/*Skills*/}
      <section id='skills' className='w-full px-[10vw] py-[5vh]'>
        <Skills />
      </section>

      {/*About me*/}
      <section id='about' className='w-full px-[10vw] py-[5vh]'>
        <About />
      </section>

      {/*Connect*/}
      <section id='connect' className='w-full px-[10vw] py-[5vh]'>
        <Connect />
      </section>
    </>
  )
}

export default page