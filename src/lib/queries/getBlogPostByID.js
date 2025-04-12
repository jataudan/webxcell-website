"use client";
import { fetchStrapiData } from "../getStrapiData";
import qs from "qs";

const path = "/api/blog-posts?";

export async function getBlogPostByID(slug) {
  const query = qs.stringify(
    {
      filters: {
        slug: {
          $eq: slug, // Dynamically setting slug value
        },
      },
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
      },
    },
    {
      encodeValuesOnly: true, // Recommended for cleaner URLs
    }
  );

  const response = await fetchStrapiData(path, query);
  return response;
}
