import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import AnchorTemporaryDrawer from './Drawer';
// import ThemeSwitcher from './ThemeSwitcher'
const ThemeSwitcher = dynamic(()=>import("./ThemeSwitcher"),{ssr:false});

const Header = () => {
  return (
    <header className='p-2 fixed w-full bg-white dark:bg-[#121010] z-50 top-0'>
    <div className='flex justify-between items-center w-10/12 m-auto'>

        {/* logo */}
        <div>
            <Image src={"https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnav_logo.e5fb945a.png&w=96&q=75"}
            width={80}
            height={80}
            alt='logo'
            className='dark:hidden'/>
            <Image src={"https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FnewLogo.9985891c.png&w=96&q=75"}
            width={80}
            height={80}
            alt='logo'
            className='hidden dark:block'/>
        </div>

        {/* navbar */}
        <nav className='md:flex justify-between gap-8 items-center hidden'>
            <Link href={"https://makemyweb.ai/en"} target='blank'>MakeMyWeb.</Link>
            <Link href={"/"}>Home</Link>
            <Link href={"/company"}>About</Link>
            <Link href={"/blogs"}>Blogs</Link>
            <ThemeSwitcher/>
        </nav>
        <div className='md:hidden'>
          <AnchorTemporaryDrawer/>
        </div>

    </div>
    </header>
  )
}

export default Header