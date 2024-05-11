import Link from 'next/link'
import React from 'react'

const FooterCredit = () => {
  return (
    <div className='bg-[#272e5c] dark:bg-[#252524] text-white py-12 md:px-40 sm:px-10 p-6 flex justify-between items-center'>
        <div>
            <span className='text-[#888682]'>{new Date().getFullYear().toString()} </span>
            LENS, Inc.
            <span className='text-[#888682]'> All rights reserved.</span>
        </div>
        <div className='flex justify-between items-center'>
            <Link href={"https://lenscorp.ai/Files/LENS_Code_of_Conduct.pdf"} target='blank' className='mr-8'>Code of conduct</Link>
            <Link href={"https://lenscorp.ai/Files/LENS_Sustainability_Goals.pdf"}target='blank'>Sustainability Goals</Link>
        </div>
    </div>
  )
}

export default FooterCredit