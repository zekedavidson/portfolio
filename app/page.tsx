import Link from 'next/link'
import Image from 'next/image'
import IntroductionText from '@/components/sections/introduction/introductionText'
import IntroductionImage from '@/components/sections/introduction/introductionImage'

const page = () => {
  return (
    <>
      <header className='w-full sticky top-0 z-50'>
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
        <div className="flex px-[5vw] pt-[8vh] pb-0 justify-start max-h-[80vh]">
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

      <section id='experience' className='w-full px-[10vw]'>

      </section>
    </>
  )
}

export default page