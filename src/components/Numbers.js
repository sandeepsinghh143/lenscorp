import React from 'react'
import { numbers } from '@/data/number'
import NumberCard from './NumberCard'
const Numbers = () => {
  return (
    <div className='bg-[#262f5c] dark:bg-[#242424] text-white p-16 flex flex-col justify-center items-center gap-20'>
        <div className='text-4xl font-semibold text-center'>By the numbers</div>
        <div className='flex justify-between xl:w-[60%] w-[90%] m-auto'>
            {numbers.map((number)=>(
                <NumberCard key={number.num} number={number}/>
            )
            )}
        </div>
    </div>
  )
}

export default Numbers