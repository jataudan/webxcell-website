"use client";
import qs from "qs";
import { fetchStrapiData } from "../getStrapiData";

export async function getHomeHeroData() {
  const path = "/api/landing?";
  const query = qs.stringify(
    {
      populate: ["hero.image", "hero.socialLinks.image"],
    },
    { encodeValuesOnly: true }
  );

  const response = await fetchStrapiData(path, query);
  return response;
}

export async function getAboutHeroData() {
  const path = "/api/about-us?";

  const query = qs.stringify(
    {
      populate: ["hero.image", "hero.socialLinks.image"],
    },
    { encodeValuesOnly: true }
  );

  const response = await fetchStrapiData(path, query);
  return response;
}
