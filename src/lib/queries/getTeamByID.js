"use client";
import qs from 'qs';
import { fetchStrapiData } from "../getStrapiData";

const path = "/api/teams?";

export async function getTeamByID(slug) {
    const query = qs.stringify(
        {
            filters: {
                slug: {
                    $eq: slug, // Dynamically setting slug value
                },
            },
            populate: [
                'image',
                'contactDetails',
                'socials.icon',
                'socials.hoverIcon',
                'skills'
            ]
        },
        { encodeValuesOnly: true }
    );
    const response = await fetchStrapiData(path, query);
    return response;
}
