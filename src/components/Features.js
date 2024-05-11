import React from 'react'
import { features } from '@/data/features';
import { otherFeatures } from '@/data/features';
import FeatureCard from './FeatureCard';

const Features = () => {
  return (
    <div className='flex flex-col 2xl:gap-10 gap-4 bg-gradient-to-r from-teal-50 to-orange-50 bg-opacity-50 2xl:p-20 p-12 dark:from-black dark:to-black dark:text-white'>
        <div className='text-center text-2xl font-semibold'>WHY CHOOSE LENS</div>
        <div className='w-fit py-3 px-9 text-7xl m-auto text-center'>AI-driven solutions backed by science</div>
        <div className='xl:w-1/2 w-2/3 m-auto text-2xl text-center'>Every piece of AI technology shipped from LENS is thoroughly benchmarked via rigorous evaluations. With a global network of experts and academicians, we guarantee the most accurate and robust solutions in the market.
        </div>

        <div className='flex flex-wrap items-center justify-center gap-x-2 md:w-full m-auto lg:w-2/3 xl:w-1/2'>
            {features.map((feature)=>(
                <div className='p-2 sm:w-[45%] w-[90%] m-auto'>✔️ {feature}</div>
            ))}
        </div>
        <div className='flex flex-wrap justify-center items-center m-auto gap-4'>
            {otherFeatures.map((feature)=>(
                <FeatureCard feature={feature}/>
            ))}
        </div>
    </div>
  )
}

export default Features