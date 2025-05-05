"use client";

import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import BlogHero from "@/app/(components)/About/HeroSection";
import CommentForm from "../CommentForm";
import { getBlogPostByID } from "@/lib/queries/getBlogPostByID";
import { getBlogTags } from "@/lib/queries/getBlogTags";
import { getDateTime, getDay, getMonth } from "@/lib/formatDate";
import { fetchBlogPostWithComments } from "@/lib/queries/getBlogByComment";
import RichText from "@/lib/richText";
import { getBlogPost } from "@/lib/queries/getBlogPosts";

export default function BlogDetail() {
  const [searchQuery, setSearchQuery] = useState("");
  const params = useParams();
  const router = useRouter();
  const { slug } = params;

  const [isLoading, setIsLoading] = useState(true);
  const [isFetch, setIsFetch] = useState(false);

  const [blog, setBlog] = useState({});
  const [tags, setTags] = useState({});
  const [comments, setComments] = useState({});
  const [seo, setSeo] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [latestBlog, setLatestBlog] = useState([]);

  const debouncedSearch = useDebounce(searchQuery);
  const [isBlogFetch, setIsBlogFetch] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    const fetchData = async () => {
      try {
        const blogPost = await getBlogPostByID(slug);
        const blogTags = await getBlogTags();
        const blogComments = await fetchBlogPostWithComments(slug);
        const response = await getBlogPost(currentPage, 3, "");

        const sortedBlogs = response?.data?.sort(
          (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)
        );

        if (sortedBlogs) {
          setLatestBlog(sortedBlogs);
        }

        if (blogPost && blogTags && blogComments) {
          setIsLoading(false);
          setBlog(blogPost?.data[0]);
          setTags(blogTags?.data[0]?.tag);
          setSeo(blogPost?.data[0]?.seo);
          setComments(blogComments);
          setIsFetch(false);
        }
      } catch (error) {
        console.log("error", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [slug, isFetch]);

  function useDebounce(value, delay = 500) {
    const [debounced, setDebounced] = useState(value);

    useEffect(() => {
      const handler = setTimeout(() => {
        setDebounced(value);
      }, delay);

      return () => clearTimeout(handler);
    }, [value, delay]);

    return debounced;
  }

  useEffect(() => {
    const fetchFilteredBlogs = async () => {
      try {
        setIsBlogFetch(true);
        const response = await getBlogPost(currentPage, 3, debouncedSearch);
        const sortedBlogs = response?.data?.sort(
          (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)
        );
        setLatestBlog(sortedBlogs);
      } catch (error) {
        console.error("Search fetch error:", error);
      } finally {
        setIsBlogFetch(false);
      }
    };

    fetchFilteredBlogs();
  }, [debouncedSearch, currentPage]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-12 h-12 border-4 border-gray-300 border-t-[--primary] rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <>
      <head>
        <title name="title">{seo?.metaTitle || "Webxcell"}</title>
        <meta
          name="description"
          content={seo?.metaDescription || "Default description"}
        />
        <meta
          name="keywords"
          content={seo?.metaKeywords || "default, keywords"}
        />
      </head>

      <BlogHero />

      <div className="relative container mx-auto bg-white lg:py-12 md:px-14 2xl-custom:px-48 mb-[100px]">
        <section className="relative container mx-auto flex flex-col lg:flex-row items-center justify-center px-4 py-2 md:py-12 md:px-0 gap-10">
          {/* Header Section */}

          {/* Main Content */}
          <div className="w-full flex flex-col lg:flex-row gap-4 font-montserrat">
            {/* Left Content */}
            <div className="flex-grow">
              <div className="relative mb-4 md:px-0 md:py-0">
                <div
                  style={{
                    backgroundImage: `url(${
                      blog?.coverImage570x582
                        ? blog?.coverImage570x582?.url
                        : "https://placehold.co/600x400.png?text=placeholder"
                    })`,
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    width: "100%",
                    height: "450px",
                    borderRadius: "20px",
                  }}
                />
                <div className="flex flex-col rounded-[6px] absolute top-0 m-2 md:m-5 bg-[var(--light-gray)] w-[80px]  ">
                  <span className="text-center py-1 px-2 text-[--white] bg-[--primary] rounded-[6px]">
                    {getDay(blog?.date)}
                  </span>
                  <span className="text-[--black] bg-[--snow] text-center py-1 px-2 rounded-[6px]">
                    {getMonth(blog?.date)}
                  </span>
                </div>
              </div>
              <div className="mb-12">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-2">
                    <Image
                      src="/assets/blog/user.png"
                      alt="Rectangle"
                      width={12}
                      height={12}
                    />
                    <span className="text-[#000] text-[12px]">
                      by {blog?.author?.name}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Image
                      src="/assets/blog/comment-icon.png"
                      alt="Rectangle"
                      width={12}
                      height={12}
                    />
                    <span className="text-[#000] text-[12px]">
                      {blog?.comment?.length} Comments
                    </span>
                  </div>
                </div>
                <div className="mt-6 text-lg md:text-3xl font-extrabold text-[#101010] font-montserrat mb-6">
                  {blog?.title}
                </div>
                <div className="mb-6 text-[#101010]">
                  <RichText content={blog?.description} />
                </div>

                <div className="flex flex-col flex-wrap max-w-[780px] md:flex-row gap-8 mb-12">
                  {blog?.blogImages?.length > 0 &&
                    blog?.blogImages?.map((image, index) => {
                      return (
                        <Image
                          key={index}
                          className="w-full md:w-[370px] h-[390px] rounded-[20px] object-cover"
                          src={
                            image
                              ? image?.url
                              : "https://placehold.co/600x400.png?text=placeholder"
                          }
                          alt={`Service Image ${index + 1}`}
                          width={370}
                          height={390}
                        />
                      );
                    })}
                </div>

                <hr className="mt-8 mb-7" />
                <div className=" bg-white rounded-lg space-y-6">
                  {/* Categories and Tags */}
                  <div>
                    <div className="flex gap-[20px] md:gap-0 flex-col md:flex-row items-center justify-between space-x-4 mb-4">
                      <div className="flex gap-3 items-center">
                        <span className="font-bold text-[--black]">
                          CATEGORIES:
                        </span>
                        <div className="flex gap-3">
                          {blog?.categories?.map((category, id) => (
                            <span
                              key={id}
                              className="px-3 py-1 bg-blue-50 text-sm text-[--black] rounded-lg"
                            >
                              {category?.name}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <span className="font-bold text-[--black]">TAGS:</span>
                        <div className="flex gap-2">
                          <span className="text-[--black]">{blog?.tag}</span>
                        </div>
                      </div>
                    </div>
                    <hr className="mt-8 mb-8" />
                  </div>

                  {/* Comments Section */}
                  <div>
                    <h2 className="text-[28px] text-[--black] font-bold mb-4">
                      {comments?.blog_comments?.length || 0} Comments
                    </h2>
                    <ul className="space-y-6 list-none p-0">
                      {comments?.blog_comments?.map((comment, index) => (
                        <li
                          key={index}
                          className="border-b pb-6 border-gray-200 flex flex-col items-start"
                        >
                          {/* Loop through each comment inside blog_comments */}
                          {comment?.comments?.map((singleComment, idx) => (
                            <div
                              key={idx}
                              className="w-full flex items-start space-x-4"
                            >
                              {/* Display Comment Image if Available */}
                              <div className="w-[46px] h-[46px] md:w-[56px] md:h-[56px] bg-gray-300 rounded-full overflow-hidden">
                                <Image
                                  src="/assets/user.png"
                                  alt={"Comment Image"}
                                  width={56}
                                  height={56}
                                  className="w-full h-full object-cover"
                                />
                              </div>

                              <div className="flex-1">
                                <div className="flex items-center justify-between">
                                  <div>
                                    {/* Display Commenter's Name */}
                                    <h3 className="font-bold m-0 text-[--black]">
                                      {singleComment?.name || "Anonymous"}
                                    </h3>
                                    {/* Format Date */}
                                    <p className="text-sm text-[--black] m-0">
                                      {getDateTime(singleComment?.dateTime)}
                                    </p>
                                  </div>
                                  <button className="px-4 py-2 bg-[--primary] text-white text-sm rounded-lg">
                                    Reply
                                  </button>
                                </div>
                                {/* Display Comment Message */}
                                <p className="text-sm text-[--black] mt-5">
                                  {singleComment?.message}
                                </p>
                              </div>
                            </div>
                          ))}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                {/* Comment Form Section */}
                <CommentForm blogPostId={blog?.id} setIsFetch={setIsFetch} />
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="flex-col gap-[20px] font-montserrat hidden md:flex">
              <aside className="lg:flex-shrink-0 w-full lg:w-[309px] bg-[--sky-blue] p-6 rounded-[20px]">
                <div className="space-y-2">
                  <h2 className="text-[22px] text-[--black] font-bold">
                    Search
                  </h2>
                  <form className="flex items-center bg-white rounded-lg px-3 py-2">
                    <input
                      type="text"
                      placeholder="Search Here"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="flex-1 outline-none bg-transparent text-gray-700 placeholder-[--black] placeholder:text-[14px]"
                    />
                    <button type="submit">
                      <Image
                        src="/assets/blog/search.png"
                        alt="search"
                        width={20}
                        height={20}
                      />
                    </button>
                  </form>
                </div>
              </aside>
              <aside className="lg:flex-shrink-0 w-full lg:w-[309px] bg-[--sky-blue] p-6 rounded-[20px]">
                <div className="space-y-2">
                  <div>
                    <h2 className="text-[22px] text-[--black] font-bold">
                      Latest Posts
                    </h2>
                    <div className="space-y-4 mt-4">
                      {isBlogFetch ? (
                        <div className="flex justify-center items-center h-[100px]">
                          <div className="w-6 h-6 border-4 border-gray-300 border-t-[var(--primary)] rounded-full animate-spin"></div>
                        </div>
                      ) : (
                        latestBlog &&
                        latestBlog?.map((post, index) => {
                          return (
                            <div
                              key={index}
                              className="flex items-start space-x-3 rounded-lg cursor-pointer"
                              onClick={() => router.push(`/blog/${post?.slug}`)}
                            >
                              <div className="h-[50px] w-[80px] rounded-lg overflow-hidden">
                                {post?.blogImages770x350 && (
                                  <Image
                                    src={post?.blogImages770x350[0]?.url}
                                    alt="Rectangle"
                                    width={180}
                                    height={180}
                                    className="object-cover"
                                  />
                                )}
                              </div>

                              <div className="flex-1">
                                <div className="flex items-center gap-2">
                                  <Image
                                    src="/assets/blog/user.png"
                                    alt="Rectangle"
                                    width={12}
                                    height={12}
                                  />
                                  <span className="text-[#000] text-[12px]">
                                    by {post?.author?.name}
                                  </span>
                                </div>
                                <h3 className="text-[12px] font-semibold text-gray-700 mt-1">
                                  {post?.title}
                                </h3>
                              </div>
                            </div>
                          );
                        })
                      )}
                    </div>
                  </div>
                </div>
              </aside>
              <aside className="lg:flex-shrink-0 w-full lg:w-[309px] bg-[--sky-blue] p-6 rounded-[20px]">
                <div className="bg-blue-50 rounded-lg">
                  <h2 className="text-[22px] text-[--black] font-bold mb-4">
                    Categories
                  </h2>
                  <ul className="space-y-3 list-none p-0">
                    {blog?.categories?.map((category, index) => (
                      <li
                        key={index}
                        className="flex justify-between items-center text-[--black]"
                      >
                        <span>{category?.name}</span>
                        <span className="text-[--black]">
                          ({category?.count})
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </aside>
              <aside className="lg:flex-shrink-0 w-full lg:w-[309px] bg-[--sky-blue] p-6 rounded-[20px]">
                <div className="bg-blue-50 rounded-lg">
                  <h2 className="text-[22px] text-[--black] font-bold mb-4">
                    Tags
                  </h2>
                  <div className="flex flex-wrap gap-2 cursor-none">
                    {tags?.map((tag) => {
                      return (
                        <button
                          key={tag?.id}
                          className="px-3 py-2 rounded-lg text-sm bg-[--white] text-gray-700 shadow cursor-text"
                        >
                          {tag?.name}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
