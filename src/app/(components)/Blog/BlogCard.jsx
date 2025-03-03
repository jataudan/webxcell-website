"use client";

import Image from "next/image";
import ArrowImage from "../../../../public/assets/blog/arrow.png";
import { useRouter } from "next/navigation";
import { formatDate } from "@/lib/formatDate";

const BlogCard = ({ blog }) => {
  const router = useRouter();
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden max-w-[370px] h-[470px] md:max-w-sm">
      <div className="w-full h-[235px] flex items-center justify-center overflow-hidden bg-gray-200">
        <Image
          src={
            blog?.coverImage
              ? blog?.coverImage?.url
              : "https://placehold.co/600x400.png?text=placeholder"
          }
          alt="image"
          width={370}
          height={227}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-4">
        <div className="flex items-center gap-3 --font-plus-jakarta-sans">
          <span className="text-[14px] text-[#635AD9] font-medium px-4 py-1 border border-[#EAF3F8] rounded-full">
            {blog?.tag}
          </span>
          <span className="text-[16px] block text-[#445375]">
            {formatDate(blog?.date)}
          </span>
        </div>
        <h3 className="text-[20px] h-[75px] font-semibold mt-2 text-[#17012C]">
          {blog?.title}
        </h3>
        <hr className="mt-4 mb-4" />
        <div className="flex justify-between items-center mt-4 cursor-pointer">
          <div className="flex items-center">
            <div className="h-8 w-8 rounded-full bg-gray-400">
              <Image
                src={
                  blog?.author?.avatar
                    ? blog?.author?.avatar?.url
                    : "https://placehold.co/600x400.png?text=placeholder"
                }
                alt=""
                width={44}
                height={44}
              />
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-[#000]">
                {blog?.author?.name}
              </p>
              <p className="text-xs text-gray-500">
                {blog?.author?.designation}
              </p>
            </div>
          </div>
          <Image
            src={ArrowImage}
            alt=""
            width={44}
            height={44}
            onClick={() => router.push(`/blog/${blog?.slug}`)}
          />
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
