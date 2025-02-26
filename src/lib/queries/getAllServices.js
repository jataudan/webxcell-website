"use client";
import qs from 'qs';
import { fetchStrapiData } from "../getStrapiData";

const path = "/api/all-services?";


const query = qs.stringify(
    {
        populate: {
            serviceList: true
        },
    },
    { encodeValuesOnly: true }
);

export async function getAllServices() {

    const response = await fetchStrapiData(path, query);
    return response;
}
