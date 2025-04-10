"use client";
import qs from "qs";
import { fetchStrapiData } from "../getStrapiData";

const path = "/api/global?";

export async function getfooterData() {
  const query = qs.stringify(
    {
      populate: ["footer.bgImage", "footer.logo160x24", "footer.socialLinks.image18x18"],
    },
    { encodeValuesOnly: true }
  );

  const response = await fetchStrapiData(path, query);
  return response;
}
