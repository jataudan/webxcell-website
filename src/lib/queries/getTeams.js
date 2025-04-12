"use client";
import qs from "qs";
import { fetchStrapiData } from "../getStrapiData";

const query = qs.stringify(
  {
    populate: [
      "teamImage294x294",
      "contactDetails",
      "socials.icon",
      "socials.hoverIcon",
      "skills",
    ],
  },
  {
    encodeValuesOnly: true, // Recommended for cleaner URLs
  }
);

const path = "/api/teams?";

export async function getTeams() {
  const response = await fetchStrapiData(path, query);
  return response;
}
