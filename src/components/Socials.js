"use client"
import Link from 'next/link'
import React from 'react'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import Image from 'next/image';
import discordblack from '@/assets/discordblack.svg'
import discordwhite from '@/assets/discordwhite.svg'

const Socials = () => {
  return (
    <div className='flex items-center gap-6'>
        <Link href={"https://www.facebook.com/solutions.lenscorp?mibextid=2JQ9oc"} target="blank">
            <FacebookRoundedIcon fontSize='large'/>
        </Link>
        <Link href={"https://www.instagram.com/lens_corporation/"} target='blank'>
            <InstagramIcon fontSize='large'/>
        </Link>
        <Link href={"https://www.linkedin.com/company/lens-corporation/"} target='blank'>
            <LinkedInIcon fontSize='large'/>
        </Link>
        <Link href={"/"}>
            <Image src={discordblack} className='dark:hidden' alt='discord' width={25} height={25}/>
            <Image src={discordwhite} className='hidden dark:block' alt='discord' width={25} height={25}/>
        </Link>
        <Link href={"https://twitter.com/LensCorporation"}>
            <XIcon fontSize='large'/>
        </Link>
    </div>
  )
}

export default Socials