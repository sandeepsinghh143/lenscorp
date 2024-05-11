"use client"
import React, { useState } from 'react'

const Freq = ({ques}) => {
    const [showDes,setShowDes] = useState(false);
  return (
    <div className='md:w-[48%] w-[90%] rounded-xl'>
        <div className='flex justify-between items-center p-4 border border-black dark:border-white rounded-xl' onClick={()=>setShowDes(!showDes)}>{ques.title}<span>🔽</span></div>
        {showDes && <div>{ques.description}</div>}
    </div>
  )
}

export default Freq