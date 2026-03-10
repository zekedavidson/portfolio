import Link from 'next/link'
import Image from 'next/image'
import Introduction from '@/components/ui/introduction'

const page = () => {
  return (
    <>
      <header className='w-full sticky top-0 z-50'>
        <nav className='w-full mx-auto px-15 py-3 flex items-center justify-center shadow-[0_8px_30px_rgb(0,0,0,0.12)]'>
          <div className='flex items-center gap-15'>
            <Link href="#experience" className='text-[18px]'>
              Experience
            </Link>

            <Link href="#projects" className='text-[18px]'>
              Projects
            </Link>

            <Link href="#contact" className='text-[18px]'>
              Contact
            </Link>
          </div>
        </nav>
      </header >

      <section id='introduction' className='w-full px-70 grid grid-cols-2 items-center'>
        {/* Image */}
        <div className="flex px-30 pt-30 pb-0 justify-start max-h-[700px]">
          <div className="w-full h-full max-w-[350px]">
            <div className="aspect-2/3 w-full h-full relative shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">
              <Image
                src="/gary.png"
                alt="gary"
                fill
                className="object-cover grayscale hover:grayscale-0"
                priority
              />
            </div>
          </div>
        </div>

        {/* Text */}
        <div className='flex flex-cols items-center text-center justify-center relative'>
          <Introduction />
        </div>

      </section>
    </>
  )
}

export default page