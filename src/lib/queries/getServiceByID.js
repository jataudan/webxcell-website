"use client";
import qs from 'qs';
import { fetchStrapiData } from "../getStrapiData";

const path = "/api/services-details?";

export async function getServiceByID(slug) {
    const query = qs.stringify(
        {
            filters: {
                slug: {
                    $eq: slug, // Dynamically setting slug value
                },
            },
            populate: [
                'contact.icon',
                'questions',
                'openingHours',
                'mainImage',
                'servicesImages',
            ],
        },
        { encodeValuesOnly: true }
    );
    const response = await fetchStrapiData(path, query);
    return response;
}
