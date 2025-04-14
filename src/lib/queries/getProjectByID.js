"use client";
import qs from "qs";
import { fetchStrapiData } from "../getStrapiData";

const path = "/api/project-details?";

export async function getProjectByID(slug) {
  const query = qs.stringify(
    {
      filters: {
        slug: {
          $eq: slug, // Dynamically setting slug value
        },
      },
      populate: {
        mainImage570x455: true,
        projectInfo: true,
        projectImages1194x543: true,
        tag: true,
        contact: {
          populate: "icon70x70",
        },
      },
    },
    {
      encodeValuesOnly: true, // Recommended for cleaner URLs
    }
  );

  const response = await fetchStrapiData(path, query);
  return response;
}
