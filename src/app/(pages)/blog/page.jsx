import React from "react";
import BlogHero from "@/app/(components)/About/HeroSection";
import AllBlogs from "@/app/(components)/Blog/AllBlogs";
import { getBlogSeo } from "@/lib/queries/getTopNav";

export async function generateMetadata() {
  const res = await getBlogSeo();
  const seo = res?.data?.blogSeo;
  return {
    title: seo?.metaTitle || "Default Title",
    description: seo?.metaDescription || "Default description.",
    keywords: seo?.metaKeywords || "default, keywords",
  };
}

const Blog = () => {
  return (
    <>
      <BlogHero />
      <AllBlogs />
    </>
  );
};

export default Blog;
