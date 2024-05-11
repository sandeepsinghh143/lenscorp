import React from 'react'
import {freqData} from "@/data/freqData.js"
import Freq from './Freq'

const FrequentQues = () => {
  return (
    <div className='bg-[#fcfaf6] dark:bg-black flex flex-col gap-8 justify-center items-center p-12'>
        <div className='text-center w-fit text-2xl'>GET TO KNOW US</div>
        <div className='text-center text-7xl w-fit lg:px-60 px-20 py-4'>Frequently Asked Questions</div>
        <div className='m-auto 2xl:w-[60%] xl:w-[80%] w-[90%] md:flex-row flex-col flex flex-wrap justify-between gap-4 p-4'>
            {freqData && freqData.map((ques)=>{
                return <Freq key={ques.id} ques={ques}/>
            })}
        </div>
    </div>
  )
}

export default FrequentQues