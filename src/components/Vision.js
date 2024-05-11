import { visionData } from '@/data/visionData'
import React from 'react'
import VisionCard from './VisionCard'

const Vision = () => {
  return (
    <div className='bg-[#fdfbf6] dark:bg-black flex flex-col gap-10 xl:p-20 p-10'>
        <div className='w-fit m-auto text-3xl'>OUR VISION</div>
        <div className='text-6xl w-2/3 m-auto p-6 text-center'>AI for Social Good</div>
        <div className='w-1/2 m-auto text-center text-2xl'>Explainable AI (XAI) is an emerging subject of machine learning research that refers to strategies that try to provide transparency to typically opaque AI models and their predictions.</div>
        {/*//TODO timeline */}
        <div className='timeline relative lg:w-[70%] w-[80%] m-auto'>
                {visionData.map((vision,i)=>(
                    <VisionCard key={i} vision={vision}/>
                ))}
        </div>
    </div>
  )
}

export default Vision