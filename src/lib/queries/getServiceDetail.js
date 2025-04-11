"use client";
import qs from "qs";
import { fetchStrapiData } from "../getStrapiData";

const path = "/api/services-details?";

const query = qs.stringify(
  {
    populate: [
      "contact.icon70x70",
      "questions",
      "openingHours",
      "mainImage770x370",
      "thumbnail300x300",
      "servicesImages",
    ],
  },
  { encodeValuesOnly: true }
);

export async function getServiceDetail() {
  const response = await fetchStrapiData(path, query);
  return response;
}
