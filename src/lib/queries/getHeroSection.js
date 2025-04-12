"use client";
import qs from "qs";
import { fetchStrapiData } from "../getStrapiData";

export async function getHomeHeroData() {
  const path = "/api/landing?";
  const query = qs.stringify(
    {
      populate: ["hero.image1920x1000", "hero.socialLinks.image17x17"],
    },
    { encodeValuesOnly: true }
  );

  const response = await fetchStrapiData(path, query);
  return response;
}
export async function getOtherHeroData() {
  const path = "/api/hero-sections/?";
  const query = qs.stringify(
    {
      populate: {
        heroSectionImage1920x537: true,
      },
    },
    {
      encodeValuesOnly: true,
    }
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
