"use client";
import qs from "qs";
import { fetchStrapiData } from "../getStrapiData";

const query = qs.stringify(
    {
        populate: {
            mainImage570x455: true,
            projectInfo: true,
            projectImages1194x543: true,
            tag: true,
            contact: {
                populate: "icon70x70",
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
