"use client";
import qs from "qs";
import { fetchStrapiData } from "../getStrapiData";

const query = qs.stringify(
  {
    populate: {
      tag: true,
    },
  },
  {
    encodeValuesOnly: true, // Recommended for cleaner URLs
  }
);

const path = "/api/blog-tags?";

export async function getBlogTags() {
  const response = await fetchStrapiData(path, query);
  return response;
}
