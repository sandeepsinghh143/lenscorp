import React from 'react'
import { services } from '@/data/services'
import ServiceCard from './ServiceCard'

const Services = () => {
  
  return (
    <div className='bg-gradient-to-r from-emerald-50 to-orange-50 dark:bg-black dark:from-black dark:to-black xl:p-20 p-8'>
        <div className='text-center text-3xl'>SERVICES</div>
        <div className='text-7xl text-center my-20'>We provide Artificial Intelligence Services</div>
        <div className='flex flex-wrap lg:w-[1000px] w-full m-auto justify-evenly gap-10'>
            {services.map((service)=>(
                <ServiceCard service={service}/>
            ))}
        </div>
    </div>
  )
}

export default Services