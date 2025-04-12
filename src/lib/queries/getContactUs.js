"use client";
import qs from "qs";
import { fetchStrapiData } from "../getStrapiData";

const query = qs.stringify(
  {
    populate: {
      image453x349: true,
      video: true,
      contactCard: true,
    },
  },
  {
    encodeValuesOnly: true,
  }
);

const path = "/api/contact-us?";

export async function getContactUs() {
  const response = await fetchStrapiData(path, query);
  return response;
}
