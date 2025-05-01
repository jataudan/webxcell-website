"use client";
import qs from "qs";
import { fetchStrapiData } from "../getStrapiData";

const path = "/api/services-details?";

export async function getServiceByID(slug) {
  const query = qs.stringify(
    {
      filters: {
        slug: {
          $eq: slug, // Dynamically setting slug value
        },
      },
      populate: [
        "contact.icon70x70",
        "questions",
        "openingHours",
        "mainImage770x370",
        "thumbnail300x300",
        "servicesImages",
        "seo",
      ],
    },
    { encodeValuesOnly: true }
  );
  const response = await fetchStrapiData(path, query);
  return response;
}
