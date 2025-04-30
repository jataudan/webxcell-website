import qs from "qs";
import { fetchStrapiData } from "../getStrapiData";

const path = "/api/about-us?";

const landingPath = "/api/landing?";

const query = qs.stringify(
  {
    populate: [
      "digitalAgency.detail",
      "digitalAgency.image553x534",
      "digitalAgency.detail.image60x60",
      "workingProcess.milestones.image100x100",
      "workingProcess.backgroundImage2074x602",
      "chooseUs.benefits.icon64x62",
      "chooseUs.contactInfo.icon56x54",
      "testimonials.card.quoteImage45x45",
      "testimonials.card.clientImage60x60",
      "testimonials.sideImage528x686",
      "testimonials.backgroundImage1920x782",
      "chooseUs.mainImage588x583",
      "seo",
    ],
  },
  { encodeValuesOnly: true }
);

export async function getAboutUs() {
  const response = await fetchStrapiData(path, query);
  return response;
}

export async function getHappyClients() {
  const query = qs.stringify(
    {
      populate: ["services.testimonials.clientImages50x50.image50x50"],
    },
    { encodeValuesOnly: true }
  );

  const response = await fetchStrapiData(landingPath, query);
  return response;
}
