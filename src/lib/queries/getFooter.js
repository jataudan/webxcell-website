"use client";
import qs from "qs";
import { fetchStrapiData } from "../getStrapiData";

const path = "/api/global?";

export async function getfooterData() {
  const query = qs.stringify(
    {
      populate: ["footer.bgImage", "footer.logo", "footer.socialLinks.image"],
    },
    { encodeValuesOnly: true }
  );

  const response = await fetchStrapiData(path, query);
  return response;
}
