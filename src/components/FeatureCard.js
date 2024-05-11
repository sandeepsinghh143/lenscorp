import Image from 'next/image'
import React from 'react'

const FeatureCard = ({feature}) => {
  return (
    <div className='bg-white dark:bg-[#1a1c1f] p-5 h-[500px] flex flex-col justify-between sm:w-[300px] rounded-3xl w-full'>
        <div className='text-3xl font-semibold p-3'>{feature.title}</div>
        <Image src={feature.image} alt='feature' width={150} height={150} className='self-center p-3'/>
        <div className='p-1'>{feature.desc}</div>
    </div>
  )
}

export default FeatureCard