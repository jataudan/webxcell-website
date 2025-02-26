"use client";
import qs from 'qs';
import { fetchStrapiData } from "../getStrapiData";

const path = "/api/about-us?";


const query = qs.stringify(
    {
        populate: [
            'digitalAgency.detail',
            'digitalAgency.image',
            'digitalAgency.detail.image',
            'workingProcess.milestones.image',
            'chooseUs.benefits.icon',
            'chooseUs.contactInfo.icon',
            'testimonials.card.quoteImage',
            'testimonials.card.clientImage',
            'testimonials.sideImage',
            'testimonials.backgroundImage',
            'chooseUs.mainImage'
        ],
    },
    { encodeValuesOnly: true }
);

export async function getAboutUs() {

    const response = await fetchStrapiData(path, query);
    return response;
}
