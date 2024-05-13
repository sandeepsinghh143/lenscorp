import Image from 'next/image'
import React from 'react'

const Contact = () => {
  return (
    <div className='flex lg:flex-row flex-col w-full justify-between bg-[#fcfaf6] dark:bg-[#242424] py-1'>
        <div className='lg:w-1/2 w-[90%] flex flex-col justify-center gap-10 xl:pl-40 p-4'>
            <div className='text-7xl w-8/12'>Get in touch with us</div>
            <div className='w-fit text-2xl'>Send your enquiry now!</div>
            <div className='max-w-fit flex justify-between bg-[#ecedec] dark:bg-black p-1 md:pl-8 rounded-full'>
                <input type="email" name="email" id="" placeholder='Enter email address' className='bg-transparent border-0 outline-0 md:p-3 md:text-base text-sm text-[#887f95]'/>
                <button className='bg-[#262f5c] text-white md:py-3 md:px-8 p-2 rounded-full'>Request Demo</button>
            </div>
        </div>
        <div className='lg:w-1/2 w-[90%] m-auto h-[600px] flex justify-center items-center dark:bg-black'>
            <Image src={"https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmap_2_white.1bdb3808.png&w=750&q=75"}
            alt='map'
            width={700}
            height={900}
            objectFit='contain'
            className=''/>
        </div>
    </div>
  )
}

export default Contact