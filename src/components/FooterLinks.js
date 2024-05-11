import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Socials from './Socials'

const FooterLinks = () => {
  return (
    <div className='flex sm:flex-row flex-col justify-between sm:items-start items-center m-auto py-20 lg:px-40 px-10 sm:gap-0 gap-8'>
        <div className='sm:block flex flex-col items-center'>
            <Image src={"https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnav_logo.e5fb945a.png&w=96&q=75"} className='dark:hidden mb-4'
            width={80}
            height={80}
            alt='footer'
            />
            <Image src={"https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FnewLogo.9985891c.png&w=96&q=75"}
            width={80}
            height={80}
            className='hidden dark:block mb-4'
            alt='footer'
            />
            <div className='mb-12'>Tomorrow's Vision, Today!</div>
            <Socials/>
        </div>
        <div className='flex flex-col gap-2 sm:items-start items-center'>
            <div className='mb-10 font-semibold spacing tracking-widest'>SITEMAP</div>
            <Link href={"https://makemyweb.ai/en"} target='blank'>MakeMyWeb.</Link>
            <Link href={"#services"}>Services</Link>
            <div>Products</div>
            <Link href={"#blogs"}>Blogs</Link>
            <Link href={"/about"}>Life at LENS</Link>
        </div>
        <div className='flex flex-col sm:items-start items-center gap-2'>
            <div className='mb-10 font-semibold tracking-widest'>CONNECT</div>
            <Link href={"tel:+1-517-9300-792"}>+1-517-9300-792</Link>
            <Link href={"tel:+91-9990-736-796"}>+91-9990-736-796</Link>
            <Link href={"mailto:solutions@lenscorp.ai"}>solutions@lenscorp.ai</Link>
        </div>
    </div>
  )
}

export default FooterLinks