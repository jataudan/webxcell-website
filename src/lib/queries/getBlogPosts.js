"use client";
import qs from "qs";
import { fetchStrapiData } from "../getStrapiData";

const query = qs.stringify(
  {
    populate: {
      author: {
        populate: "avatar",
      },
      coverImage: true,
      blogImages: true,
      comments: {
        populate: "image",
      },
      categories: true,
      blog_comments: true,
    },
  },
  {
    encodeValuesOnly: true, // Recommended for cleaner URLs
  }
);

const path = "/api/blog-posts?";

export async function getBlogPost() {
  const response = await fetchStrapiData(path, query);
  return response;
}
