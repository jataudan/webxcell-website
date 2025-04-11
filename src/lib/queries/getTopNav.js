"use client";
import qs from "qs";
import { fetchStrapiData } from "../getStrapiData";

export async function getTopNavData() {
  const path = "/api/global?";
  const query = qs.stringify(
    {
      populate: [
        "topnav.phoneLink.image18x18",
        "topnav.emailLink.image17x17",
        "topnav.socialLinks.image18x18",
        "mainTopNav.logoLink.logo187x38",
        "mainTopNav.navItems.image",
        "mainTopNav.cta",
      ],
    },
    { encodeValuesOnly: true }
  );

  const response = await fetchStrapiData(path, query);
  return response;
}

export async function getServiceClient() {
  const path = "/api/global?";
  const query = qs.stringify(
    {
      populate: [
        "serviceTestimonials.clientImage585x609",
        "serviceTestimonials.clientDetails.image70x70",
      ],
    },
    { encodeValuesOnly: true }
  );

  const response = await fetchStrapiData(path, query);
  return response;
}
