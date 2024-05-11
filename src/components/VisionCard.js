import Image from 'next/image'
import React from 'react';

const VisionCard = ({vision}) => {
  return (
    <div className={`container py-3 px-12 relative xl:w-1/2 w-full ${vision.direction=="left"?"left-0 xl:border-r-2 border-dashed border-black dark:border-white":"xl:left-[50%] left-[25%] xl:border-l-2 border-dashed border-black dark:border-white"}`}>
        <Image src={vision.image} alt='logo' width={60} height={60} className={`absolute rounded-full border-4 border-black p-2 dark:hidden ${vision.direction=="right" ?"-left-9":"-right-9"}`}/>
        <Image src={vision.imageWhite} alt='logo' width={60} height={60} className={`absolute rounded-full border-4 border-white p-2 hidden dark:block ${vision.direction=="right" ?"-left-9":"-right-9"}`}/>
        <div className='text-box py-3 px-8 relative rounded hover:scale-105'>
            <div className={'text-3xl font-semibold mb-10'}>{vision.title}</div>
            <div className={''}>{vision.desc}</div>
        </div>
    </div>
  )
}

export default VisionCard