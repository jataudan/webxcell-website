"use client";
import qs from "qs";
import { fetchStrapiData } from "../getStrapiData";

const query = qs.stringify(
    {
        populate: {
            mainImage: true,
            projectInfo: true,
            projectImages: true,
            tag: true,
            contact: {
                populate: "icon",
            },
        },
    },
    {
        encodeValuesOnly: true, // Recommended for cleaner URLs
    }
);

const path = "/api/project-details?";

export async function getProjectDetail() {
    const response = await fetchStrapiData(path, query);
    return response;
}
