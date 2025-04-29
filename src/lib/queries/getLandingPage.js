"use client";
import qs from "qs";
import { fetchStrapiData } from "../getStrapiData";

const path = "/api/landing?";

export async function getLandingData() {
  const query = qs.stringify(
    {
      populate: [
        "about.leftImage553x534",
        "services.testimonials.clientImages50x50.image50x50",
        "digital.detail.image60x60",
        "digital.image553x534",
        "offer.parent",
        "offer.image733x608",
        "strategicPartnersImages.partners.partnerImage113x44",
        "studies",
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
        "expert.clientImages80x80",
        "expert.testimonials.quoteImage40x40",
        "expert.testimonials.client.image70x70",
      ],
    },
    { encodeValuesOnly: true }
  );

  const response = await fetchStrapiData(path, query);
  return response;
}
