import React from "react";
import CookiesPolicyHero from "@/app/(components)/About/HeroSection";
import { getCookiePolicyData } from "@/lib/queries/getPoliciesSeo";
import CookiesPolicyComponent from "@/app/(components)/Policies/CookiesPolicy";

export async function generateMetadata() {
  const res = await getCookiePolicyData();
  const seo = res?.data?.seo;
  return {
    title: seo?.metaTitle || "Default Title",
    description: seo?.metaDescription || "Default description.",
    keywords: seo?.metaKeywords || "default, keywords",
  };
}

const CookiesPolicy = () => {
  return (
    <>
      <CookiesPolicyHero />
      <CookiesPolicyComponent />
    </>
  );
};

export default CookiesPolicy;
