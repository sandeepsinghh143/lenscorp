import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const About = () => {
  return (
    <div className='bg-[#fcfbf7] dark:bg-black md:p-20 p-10'>
        <h2 className='text-center text-8xl font-medium mb-20'>About Us</h2>
        
        <div className='flex lg:flex-row sm:flex-col flex-col-reverse xl:w-[1000px] w-[full] m-auto bg-[#e3f3ff] dark:bg-[#1a1c1f] hover:scale-110 hover:transition-all hover:ease-in-out hover:duration-500 rounded-2xl'>
            {/* //Todo about section text */}
            <div className='flex justify-between items-center xl:w-1/2 lg:w-1/3 w-full'>
            <div className='flex flex-col justify-center items-center lg:items-start w-3/4 gap-8 m-auto'>
                <h3 className='sm:text-5xl text-4xl font-medium mb-10'>Welcome To LENS</h3>
                <p>We put our hearts, souls and sweat into designing and developing custom AI - powered solutions for your business so you don't have to.</p>
                <Link href={"/company"} className='border border-black dark:border-white w-44 text-center p-3 rounded-xl'>Learn More</Link>
            </div>
            </div>

            {/* //Todo about section image */}
            <div className='xl:w-1/2 lg:w-2/3 w-full flex justify-center items-center p-10'>
              <div className='h-[400px] overflow-hidden border-8 border-white rounded-xl text-center'>
                <Image src="https://lenscorp.ai/_next/image?url=%2FImages%2FaboutLatest.webp&w=640&q=75" alt="about" width={400} height={400} className='rounded-xl -mt-40'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About