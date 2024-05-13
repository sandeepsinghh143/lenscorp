import { blogData } from '@/data/blogData'
import Link from 'next/link'
import React from 'react'
import BlogCard from './BlogCard'

const Blogs = () => {
  return (
    <div className='xl:max-w-2/3 w-[90%] m-auto py-20 flex flex-col gap-y-4 items-center'>
        <div>OUR BLOGS</div>
        <div className='md:text-7xl text-4xl w-[70%] text-center p-4'>Inhouse Mindscape</div>
        <div>
            <div className='flex flex-col md:flex-row mb-4 justify-between m-auto'>
                <BlogCard blog={blogData[0]}/>
                <BlogCard blog={blogData[1]}/>
            </div>

            <BlogCard blog={blogData[2]}/>
        </div>
        <Link href={"/blogs"} className='py-3 px-9 border border-black w-fit rounded-lg'>Explore More</Link>
    </div>
  )
}

export default Blogs