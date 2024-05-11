import React from 'react'

const NumberCard = ({number}) => {
  return (
    <div className='flex flex-col justify-center items-center gap-4 w-[50%]'>
        <div className='lg:text-5xl text-3xl font-semibold'>{number.num}+</div>
        <div className='lg:text-3xl text-xl w-[50%] text-center'>{number.title}</div>
    </div>
  )
}

export default NumberCard