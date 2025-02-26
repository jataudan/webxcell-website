"use client";
import qs from "qs";
import { fetchStrapiData } from "../getStrapiData";

const query = qs.stringify(
    {
        populate: {
            questions: true,
            mainImage: true,
        },
    },
    {
        encodeValuesOnly: true, // Recommended for cleaner URLs
    }
);

const path = "/api/faqs?";

export async function getFAQ() {
    const response = await fetchStrapiData(path, query);
    return response;
}
