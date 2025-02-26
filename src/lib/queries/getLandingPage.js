"use client";
import qs from "qs";
import { fetchStrapiData } from "../getStrapiData";

const path = "/api/landing?";

export async function getLandingData() {
  const query = qs.stringify(
    {
      populate: [
        "about.leftImage",
        "services.testimonials.clientImages",
        "digital.detail.image",
        "digital.image",
        "offer.parent",
        "offer.image"
      ],
    },
    { encodeValuesOnly: true }
  );

  const response = await fetchStrapiData(path, query);
  return response;
}


export async function getLandingExpertTestimonials() {
  const query = qs.stringify(
    {
      populate: [
        "expert.testimonials",
        "expert.clientImages",
        "expert.testimonials.quoteImage",
        "expert.testimonials.client.image"
      ],
    },
    { encodeValuesOnly: true }
  );

  const response = await fetchStrapiData(path, query);
  return response;
}