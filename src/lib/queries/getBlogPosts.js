"use client";
import qs from "qs";
import { fetchStrapiData } from "../getStrapiData";

const path = "/api/blog-posts?";

export async function getBlogPost(page = 1, pageSize = 6) {
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
      pagination: {
        page: page,
        pageSize: pageSize,
      },
    },
    {
      encodeValuesOnly: true,
    }
  );

  const response = await fetchStrapiData(path, query);
  return response;
}
