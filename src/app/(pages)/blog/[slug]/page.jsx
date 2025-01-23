"use client";

import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import BlogHero from "@/app/(components)/About/HeroSection";
import BlogCardImage from "../../../../../public/assets/blog/card-image.png";
import CommentForm from "../CommentForm";

// Blog data
export const blogs = [
  {
    id: 1,
    image: BlogCardImage,
    tag: "Business",
    date: "March 24, 2024",
    title: "Business Strategy For Marketing System",
    slug: "business-strategy-for-marketing-system",
    author: "Dan Jatsu",
    designation: "Managing Consultant",
  },
  {
    id: 2,
    image: BlogCardImage,
    tag: "Corporate",
    date: "April 16, 2024",
    title: "Why Is Supply Chain Visibility So Important?",
    slug: "why-is-supply-chain-visibility-important",
    author: "Dan Jatsu",
    designation: "Managing Consultant",
  },
  {
    id: 3,
    image: BlogCardImage,
    tag: "Marketing",
    date: "March 22, 2024",
    title: "Discover A Better Way Of Redefining Company Goals",
    slug: "discover-a-better-way-of-redefining-goals",
    author: "Dan Jatsu",
    designation: "Managing Consultant",
  },
  {
    id: 4,
    image: BlogCardImage,
    tag: "Business",
    date: "March 24, 2024",
    title: "Another Business Strategy Example",
    slug: "another-business-strategy-example",
    author: "Dan Jatsu",
    designation: "Managing Consultant",
  },
  {
    id: 5,
    image: BlogCardImage,
    tag: "Corporate",
    date: "April 16, 2024",
    title: "Understanding Corporate Growth Strategies",
    slug: "understanding-corporate-growth-strategies",
    author: "Dan Jatsu",
    designation: "Managing Consultant",
  },
  {
    id: 6,
    image: BlogCardImage,
    tag: "Marketing",
    date: "March 22, 2024",
    title: "Effective Marketing Techniques for 2024",
    slug: "effective-marketing-techniques-2024",
    author: "Dan Jatsu",
    designation: "Managing Consultant",
  },
  {
    id: 7,
    image: BlogCardImage,
    tag: "Business",
    date: "March 24, 2024",
    title: "Innovative Ideas for Business in 2024",
    slug: "innovative-ideas-for-business-2024",
    author: "Dan Jatsu",
    designation: "Managing Consultant",
  },
];

const latestPosts = [
  { title: "How To Grow A Sustainable Business", author: "Dan Jatau" },
  { title: "How To Grow A Sustainable Business", author: "Dan Jatau" },
  { title: "How To Grow A Sustainable Business", author: "Dan Jatau" },
];

const categories = [
  { name: "Pay-Per-Click (PPC)", count: 6 },
  { name: "Social Media Marketing", count: 6 },
  { name: "Email Marketing", count: 6 },
  { name: "Electrotherapy", count: 6 },
  { name: "Affiliate Marketing", count: 6 },
];

const tags = [
  { name: "Marketing", active: false },
  { name: "Agency", active: true },
  { name: "Search Engine", active: false },
  { name: "Influencer", active: false },
  { name: "Advertising", active: false },
  { name: "Branding", active: false },
];

const comments = [
  { text: "Neque Porro Est Qui Dolorem Ipsum Quia Quaed Inventor" },
  { text: "Neque Porro Est Qui Dolorem Ipsum Quia Quaed Inventor" },
  { text: "Neque Porro Est Qui Dolorem Ipsum Quia Quaed Inventor" },
];

const subCategories = ["Digital", "SEO"];
const blogTags = ["Digital", "SEO"];
const userComments = [
  {
    author: "Layerdrops",
    date: "March 20, 2024",
    time: "2:37 PM",
    text: "Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Aelletes port lacus quis enim var",
  },
  {
    author: "Layerdrops",
    date: "March 20, 2024",
    time: "2:37 PM",
    text: "Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Aelletes port lacus quis enim var",
  },
];

export default function BlogDetail() {
  const [searchQuery, setSearchQuery] = useState("");
  const params = useParams();
  const router = useRouter();
  const { slug } = params;

  const blog = blogs.find((blog) => blog.slug === slug);

  if (!blog) {
    return (
      <div className="text-center py-20">
        <h1 className="text-2xl font-bold text-[#000] mt-[90px]">
          Blog Not Found
        </h1>
      </div>
    );
  }
  const [activeBlog, setActiveBlog] = useState(slug);

  useEffect(() => {
    setActiveBlog(slug);
  }, [slug]);

  const handleClick = (item) => {
    setActiveBlog(item.id);
    router.push(`/blog/${item.id}`);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Search Query:", searchQuery);
    // Add search functionality here if needed
  };

  return (
    <>
      <BlogHero />

      <div className="relative container mx-auto bg-white lg:py-12 md:px-14 2xl-custom:px-48 mb-[100px]">
        <section className="relative container mx-auto flex flex-col lg:flex-row items-center justify-center px-4 py-2 md:py-12 md:px-0 gap-10">
          {/* Header Section */}

          {/* Main Content */}
          <div className="w-full flex flex-col lg:flex-row gap-4 font-plus-jakarta">
            {/* Left Content */}
            <div className="flex-grow">
              <div className="relative mb-4 md:px-0 md:py-0">
                <Image
                  src="/assets/Service/Rectangle.png"
                  alt="Rectangle"
                  width={1170}
                  height={550}
                />
                <div className="flex flex-col rounded-[6px] absolute top-0 m-2 md:m-5 bg-[var(--light-gray)] w-[55px]  ">
                  <span className="text-center py-1 px-2 text-[var(--white)] bg-[var(--primary)] rounded-[6px]">
                    20
                  </span>
                  <span className="text-[var(--black)] text-center py-1 px-2">
                    JUNE
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
                    />{" "}
                    <span className="text-[#000] text-[12px]">
                      by {blog.author}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Image
                      src="/assets/blog/comment-icon.png"
                      alt="Rectangle"
                      width={12}
                      height={12}
                    />{" "}
                    <span className="text-[#000] text-[12px]">2 Comments</span>
                  </div>
                </div>
                <div className="mt-6 text-lg md:text-3xl font-extrabold text-[#101010] font-plus-jakarta mb-6">
                  {blog.title}
                </div>
                <p className="mb-6 text-[#101010]">
                  At tempus aenean sapien torquent sed diam class efficitur mus
                  morbi eros dictum quam augue ac laor eet ligula libero mi
                  commodo nibh hac fermentum orci ad pharetra consequat justo
                  duis turpis lorem elit dui consectetur magnis lacinia odio per
                  placerat vestibulum volutpat mauris mollis primis imperdiet
                  posu ere ex enim gravida cras congue
                </p>
                <p className="mb-6 text-[#101010]">
                  pellentesque vulputate malesuada dictumst fames interdum
                  cursus an te tellus porta ullamcorper accumsan non eu
                  adipiscing integer venenatis sagittis arcu curae finibus ridi
                  culus aliquam velit lobortis senectus vitae sollicitudin sit
                  consectetuer ultricies rutrum parturient pede nisi nascetur
                  habitant netus quisque elementum inceptos nam felis penatibus
                  feugiat
                </p>
                <div className=" flex flex-col md:flex-row gap-8 mb-12">
                  <div className="flex flex-col items-center text-center bg-[#C4C4C4] w-full md:w-[370px] h-[390px] rounded-[20px] p-8 gap-8"></div>
                  <div className="flex flex-col items-center text-center bg-[#C4C4C4] w-full md:w-[370px] h-[390px] rounded-[20px] p-8 gap-12"></div>
                </div>
                <p className="mb-6 text-[#101010]">
                  Neque porro est qui dolorem ipsum quia quaed inventor
                  veritatis et quasi architecto beatae vitae dicta sunt
                  explicabo. Aelltes port lacus quis enim var sed efficitur
                  turpis gilla sed sit amet finibus eros. Lorem Ipsum is simply
                  dummy text of the printing and typesetting industry.
                </p>
                <ul className="list-disc ml-9 font-plus-jakarta text-[var(--black)]">
                  <li>
                    Another area of AI that holds great promise is robotics,
                    which involves developing machines.
                  </li>
                  <li>
                    AI also has the potential to improve healthcare, by enabling
                    more accurate diagnosis and trea
                  </li>
                  <li>
                    However, there are also challenges associated with the
                    development and deployment of AI.
                  </li>
                </ul>
                <hr className="mt-8 mb-7" />
                <div className=" bg-white rounded-lg space-y-6">
                  {/* Categories and Tags */}
                  <div>
                    <div className="flex gap-[20px] md:gap-0 flex-col md:flex-row items-center justify-between space-x-4 mb-4">
                      <div className="flex gap-3 items-center">
                        <span className="font-bold text-[var(--black)]">
                          CATEGORIES:
                        </span>
                        <div className="flex gap-3">
                          {subCategories.map((category, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-blue-50 text-sm text-[var(--black)] rounded-lg"
                            >
                              {category}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <span className="font-bold text-[var(--black)]">
                          TAGS:
                        </span>
                        <span className="text-[var(--black)]">
                          {blogTags.join(", ")}
                        </span>
                      </div>
                    </div>

                    <hr className="mt-8 mb-8" />
                  </div>

                  {/* Comments Section */}
                  <div>
                    <h2 className="text-[28px] text-[var(--black)] font-bold mb-4">
                      {comments.length} Comments
                    </h2>
                    <ul className="space-y-6">
                      {userComments.map((comment, index) => (
                        <li
                          key={index}
                          className="border-b pb-6 border-gray-200 flex items-start"
                        >
                          <div className="w-[46px] h-[46px] md:w-[96px] md:h-[96px] bg-gray-300 rounded-full"></div>
                          <div className="ml-4 flex-1">
                            <div className="flex items-center justify-between">
                              <div>
                                <h3 className="font-bold text-[var(--black)]">
                                  {comment.author}
                                </h3>
                                <p className="text-sm text-[var(--black)]">
                                  {comment.date} At {comment.time}
                                </p>
                              </div>
                              <button className="px-4 py-2 bg-[var(--primary)] text-white text-sm rounded-lg">
                                Reply
                              </button>
                            </div>
                            <p className="text-sm text-[var(--black)] mt-5">
                              {comment.text}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <CommentForm />
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="flex-col gap-[20px] font-plus-jakarta hidden md:flex">
              <aside className="lg:flex-shrink-0 w-full lg:w-[309px] bg-[var(--light-sky-blue)] p-6 rounded-[20px]">
                <div className="space-y-2">
                  <h2 className="text-[22px] text-[var(--black)] font-bold">
                    Search
                  </h2>
                  <form
                    onSubmit={handleSearch}
                    className="flex items-center bg-white rounded-lg px-3 py-2"
                  >
                    <input
                      type="text"
                      placeholder="Search Here"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="flex-1 outline-none bg-transparent text-gray-700 placeholder-[var(--black)] placeholder:text-[14px]"
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
              <aside className="lg:flex-shrink-0 w-full lg:w-[309px] bg-[var(--light-sky-blue)] p-6 rounded-[20px]">
                <div className="space-y-2">
                  <div>
                    <h2 className="text-[22px] text-[var(--black)] font-bold">
                      Latest Posts
                    </h2>
                    <div className="space-y-4 mt-4">
                      {latestPosts.map((post, index) => (
                        <div
                          key={index}
                          className="flex items-start space-x-3 rounded-lg"
                        >
                          <div className="h-12 w-12 bg-gray-300 rounded-lg"></div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <Image
                                src="/assets/blog/user.png"
                                alt="Rectangle"
                                width={12}
                                height={12}
                              />{" "}
                              <span className="text-[#000] text-[12px]">
                                by {post.author}
                              </span>
                            </div>
                            <h3 className="text-sm font-semibold text-gray-700 mt-1">
                              {post.title}
                            </h3>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </aside>
              <aside className="lg:flex-shrink-0 w-full lg:w-[309px] bg-[var(--light-sky-blue)] p-6 rounded-[20px]">
                <div className="bg-blue-50 rounded-lg">
                  <h2 className="text-[22px] text-[var(--black)] font-bold mb-4">
                    Categories
                  </h2>
                  <ul className="space-y-3">
                    {categories.map((category, index) => (
                      <li
                        key={index}
                        className="flex justify-between items-center text-[var(--black)]"
                      >
                        <span>{category.name}</span>
                        <span className="text-[var(--black)]">
                          ({category.count})
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </aside>
              <aside className="lg:flex-shrink-0 w-full lg:w-[309px] bg-[var(--light-sky-blue)] p-6 rounded-[20px]">
                <div className="bg-blue-50 rounded-lg">
                  <h2 className="text-[22px] text-[var(--black)] font-bold mb-4">
                    Tags
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag, index) => (
                      <button
                        key={index}
                        className={`px-3 py-2 rounded-lg text-sm ${
                          tag.active
                            ? "bg-[var(--primary)] text-white"
                            : "bg-[var(--white)] text-gray-700 shadow"
                        }`}
                      >
                        {tag.name}
                      </button>
                    ))}
                  </div>
                </div>
              </aside>
              <aside className="lg:flex-shrink-0 w-full lg:w-[309px] bg-[var(--light-sky-blue)] p-6 rounded-[20px]">
                <div className=" bg-blue-50 rounded-lg">
                  <h2 className="text-[22px] text-[var(--black)] font-bold mb-4">
                    Comments
                  </h2>
                  <ul className="space-y-4">
                    {comments.map((comment, index) => (
                      <li key={index} className="flex items-start space-x-4">
                        <Image
                          src="/assets/blog/message-icon.png"
                          alt="Rectangle"
                          width={44}
                          height={44}
                        />
                        <p className="text-[var(--black)] text-[14px]">
                          {comment.text}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
