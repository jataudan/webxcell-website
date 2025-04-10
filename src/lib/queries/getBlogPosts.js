"use client";
import qs from "qs";
import { fetchStrapiData } from "../getStrapiData";

const path = "/api/blog-posts?";

export async function getBlogPost(page = 1, pageSize = 6) {
  const query = qs.stringify(
    {
      populate: {
        author: {
          populate: "avatar56x56",
        },
        coverImage570x582: true,
        blogImages770x350: true,
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
