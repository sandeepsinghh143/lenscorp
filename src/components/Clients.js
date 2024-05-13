import Image from 'next/image'
import React from 'react'

const Clients = () => {
  return (
    <div className='p-10 max-w-screen overflow-x-hidden'>
        <h1 className='text-center text-4xl font-semibold'>We Work With Amazing Clients</h1>
        <div className='flex justify-center items-center gap-8 p-20 clients dark:hidden'>
            <Image src={"https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FCo_1.ad2ee302.png&w=256&q=75"} alt='client' width={200} height={200}/>
            <Image src={"https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FCo_3.37f82c98.png&w=256&q=75"} alt='client' width={200} height={200}/>
            <Image src={"https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FCo_2.7e06895b.png&w=256&q=75"} alt='client' width={200} height={200}/>
            <Image src={"https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgrov.97a72987.png&w=128&q=75"} alt='client' width={200} height={200}/>
        </div>

        <div className='dark:flex justify-center items-center gap-8 p-20 clients hidden'>
            <Image src={"https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FGlobal_white.7630bd08.png&w=256&q=75"} alt='client' width={200} height={200}/>
            <Image src={"https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FZkt_white.cacd6ecf.png&w=256&q=75"} alt='client' width={200} height={200}/>
            <Image src={"https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FCore_white.8ba066be.png&w=256&q=75"} alt='client' width={200} height={200}/>
            <Image src={"https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FGrove.f0ee63ad.png&w=128&q=75"} alt='client' width={200} height={200}/>
        </div>
    </div>
  )
}

export default Clients