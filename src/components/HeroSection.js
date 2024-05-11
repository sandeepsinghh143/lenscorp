import Image from 'next/image'
import React from 'react'
import Hero from "@/assets/hero-bg.png"
import Link from 'next/link'

const HeroSection = () => {
  return (
    <div className='w-full top-0 relative'>
        <Image src={Hero} className='w-full h-screen dark:hidden'/>
        {/* <video className='hidden dark:block' autoPlay={true}>
            <source src='https://res.cloudinary.com/detwrhe0k/video/upload/v1691730947/lenscorp-website/pexels-pressmaster-3129671-3840x2160-30fps_1_ak5nsz_d7alrn.mp4' type='video/mp4' className='absolute w-screen h-screen'/>
        </video> */}
        <video className='hidden dark:block' src="https://res.cloudinary.com/detwrhe0k/video/upload/v1691730947/lenscorp-website/pexels-pressmaster-3129671-3840x2160-30fps_1_ak5nsz_d7alrn.mp4" autoPlay={true}/>
        <div className='absolute top-[30%] left-[15%] 2xl:w-2/6 w-3/6 dark:w-[100%] dark:text-center dark:left-0'>
            <h1 className='2xl:text-8xl text-6xl mb-12'>We are at the forefront of AI</h1>
            <p className='text-2xl mb-6 hidden md:block'>From Conserving Wildlife to Automatically Generating Caricatures<span className='font-semibold dark:block'>– We Do It All</span></p>
            <Link href={"/about"}>
              <button className='border border-black dark:border-white bg-black dark:bg-white text-white dark:text-black py-3 px-8 rounded-lg text-xl hover:bg-white hover:text-black font-medium hover:px-9 transition-all duration-300'>
                Learn More
              </button>
            </Link>
        </div>
    </div>
  )
}

export default HeroSection