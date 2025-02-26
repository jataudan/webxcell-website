"use client";
import qs from "qs";
import { fetchStrapiData } from "../getStrapiData";

const path = "/api/project-details?";

export async function getProjectByID(slug) {

    const query = qs.stringify(
        {
            filters: {
                slug: {
                    $eq: slug, // Dynamically setting slug value
                },
            },
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

    const response = await fetchStrapiData(path, query);
    return response;
}
