"use client";
import qs from "qs";
import { fetchStrapiData } from "../getStrapiData";

const query = qs.stringify(
    {
        populate: {
            image: true,
            video: true,
            contactCard: true,
        },
    },
    {
        encodeValuesOnly: true, // Recommended for cleaner URLs
    }
);

const path = "/api/contact-us?";

export async function getContactUs() {
    const response = await fetchStrapiData(path, query);
    return response;
}
