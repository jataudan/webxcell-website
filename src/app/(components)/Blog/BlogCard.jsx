"use client";

import Image from "next/image";
import ArrowImage from "../../../../public/assets/blog/arrow.png";
import { useRouter } from "next/navigation";

const BlogCard = ({ blog }) => {
  const router = useRouter();

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden max-w-[370px] h-[428px] md:max-w-sm">
      <Image src={blog.image} alt="image" width={370} height={227} />
      <div className="p-4">
        <div className="flex items-center gap-3 font-plus-jakarta">
          <span className="text-[14px] text-[#635AD9] font-medium px-4 py-1 border border-[#EAF3F8] rounded-full">
            {blog.tag}
          </span>
          <span className="text-[16px] block text-[#445375]">{blog.date}</span>
        </div>
        <h3 className="text-[20px] font-semibold mt-2 text-[#17012C]">
          {blog.title}
        </h3>
        <hr className="mt-4 mb-4" />
        <div className="flex justify-between items-center mt-4 cursor-pointer">
          <div className="flex items-center">
            <div className="h-8 w-8 rounded-full bg-gray-400"></div>
            <div className="ml-3">
              <p className="text-sm font-medium">{blog.author}</p>
              <p className="text-xs text-gray-500">{blog.designation}</p>
            </div>
          </div>
          <Image
            src={ArrowImage}
            alt=""
            width={44}
            height={44}
            onClick={() => router.push(`/blog/${blog.slug}`)}
          />
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
