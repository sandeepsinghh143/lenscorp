import Link from "next/link";
import React from "react";

const BlogCard = ({blog}) => {
  return (
    <div className="p-8 border border-black rounded-2xl flex flex-col gap-10 m-auto min-h-[500px] dark:bg-[#1a1c1f]">
      <div className="text-2xl">{blog.date}</div>
      <div className="text-4xl">{blog.title}</div>
      <div
        style={{ backgroundColor: blog.color }}
        className="p-10 rounded-3xl text-xl dark:text-black"
      >
        {blog.desc}
      </div>
      <Link href={"/"} className="text-[red] w-fit">
        Read More &gt;&gt;
      </Link>
    </div>
  );
};

export default BlogCard;
