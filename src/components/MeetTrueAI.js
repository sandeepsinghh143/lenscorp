import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const MeetTrueAI = () => {
  return (
    <div className='true-ai my-32 bg-[#272f5d] dark:bg-[#242424] py-32 relative flex justify-between items-center'>
        <div className='absolute -left-4 -top-16 w-full -rotate-3 h-40 bg-white dark:bg-black overflow-y-hidden'></div>
        <div className='w-1/3 hidden md:flex justify-center items-center'>
            <Image src={"https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FvectorAi.8ec84e23.png&w=384&q=75"}
            alt="true-ai"
            width={400}
            height={400}
            />
        </div>
        <div className='text-white text-2xl flex flex-col items-center gap-8 p-6 md:p-0 w-full md:w-1/3'>
            <div className='text-6xl'>Meet Tru-AI</div>
            <div>Design. Create. Deploy.</div>
            <div>___ the Future of AI | Power to EDIT</div>
            <div className='text-base'>Based On Your Website & Traffic Trends, Tru-AI Optimises Your Website</div>
            <Link href={"https://makemyweb.ai/en"} className='rounded-xl py-3 px-6 hover:bg-white hover:text-black hover:px-9 border border-white'>Learn More</Link>
        </div>
        <div className='sm:w-[30%] hidden md:block w-full rounded-l-3xl sm:h-88 relative'>
            <video src="https://res.cloudinary.com/detwrhe0k/video/upload/v1691730954/lenscorp-website/product-intro_1_dmajx1_qaemeu.mp4" autoPlay={true} muted className='overflow-hidden w-full h-full z-0 rounded-l-full'/>
        </div>
    </div>
  )
}

export default MeetTrueAI