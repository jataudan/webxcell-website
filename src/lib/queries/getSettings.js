"use client";
import qs from "qs";
import { fetchStrapiData } from "../getStrapiData";

const path = "/api/global-setting?";

export async function getThemeSettings() {
  const query = qs.stringify(
    {
      populate: [
       
        'fontsFamily',
      ],
    },
    { encodeValuesOnly: true }
  );
  const response = await fetchStrapiData(path, query);
  return response;
}
