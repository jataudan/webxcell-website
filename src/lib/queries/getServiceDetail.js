"use client";
import qs from 'qs';
import { fetchStrapiData } from "../getStrapiData";

const path = "/api/services-details?";


const query = qs.stringify(
    {
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

export async function getServiceDetail() {

    const response = await fetchStrapiData(path, query);
    return response;
}
