import qs from "qs";
import { fetchStrapiData } from "../getStrapiData";

const privacyPath = "/api/privacy-policy?";

export async function getPrivacyPolicyData() {
  const query = qs.stringify(
    {
      populate: ["seo", "image500x500"],
    },
    { encodeValuesOnly: true }
  );
  const response = await fetchStrapiData(privacyPath, query);
  return response;
}

const cookiePath = "/api/cookies-policy?";

export async function getCookiePolicyData() {
  const query = qs.stringify(
    {
      populate: ["seo", "image500x500"],
    },
    { encodeValuesOnly: true }
  );
  const response = await fetchStrapiData(cookiePath, query);
  return response;
}

const termsConditionPath = "/api/terms-and-condition?";

export async function getTermsConditionData() {
  const query = qs.stringify(
    {
      populate: ["seo", "image500x500"],
    },
    { encodeValuesOnly: true }
  );
  const response = await fetchStrapiData(termsConditionPath, query);
  return response;
}
