"use client";
import qs from "qs";
import { fetchStrapiData } from "../getStrapiData";

export async function getTopNavData() {
  const path = "/api/global?";
  const query = qs.stringify(
    {
      populate: [
        "topnav.phoneLink.image",
        "topnav.emailLink.image",
        "topnav.socialLinks.image",
        "mainTopNav.logoLink.logo",
        "mainTopNav.navItems.image",
        "mainTopNav.cta",
      ],
    },
    { encodeValuesOnly: true }
  );

  const response = await fetchStrapiData(path, query);
  return response;
}
