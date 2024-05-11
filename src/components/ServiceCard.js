"use client"
import React, { useState } from 'react'

const ServiceCard = ({service}) => {
  const [hovered, setHovered] = useState(false);
  const [myColor,setMyColor] = useState("transparent")
  
  return (
    <div style={{borderColor:myColor,backgroundImage:`linear-gradient(to right, ${myColor},white,white)`}} className='border md:w-[48%] w-full bg-white rounded-xl lg:p-12 p-6 dark:bg-gradient-to-r dark:from-[#585858] dark:to-[#585858]' onMouseEnter={()=>{setHovered(!hovered)
      setMyColor(service.color)}
    } onMouseLeave={()=>{setHovered(!hovered) 
      setMyColor("transparent")
    }}>
        <div className='flex'>
            <span className='text-8xl text-[#e2e2e2] font-semibold'>0{service.num}</span>
            <span style={{color:service.color}} className={`text-4xl mt-6 font-bold ${hovered ? "translate-x-0" : "-translate-x-7"}`}>{service.title}</span>
        </div>
        <div className='mt-16 text-xl text-[#8b8a8b] font-semibold'>{service.desc}</div>
    </div>
  )
}

export default ServiceCard