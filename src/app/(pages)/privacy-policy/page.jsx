import React from "react";
import PrivacyPolicyHero from "@/app/(components)/About/HeroSection";
import { getPrivacyPolicyData } from "@/lib/queries/getPoliciesSeo";
import PrivacyPolicyComponent from "@/app/(components)/Policies/PrivacyPolicy";

export async function generateMetadata() {
  const res = await getPrivacyPolicyData();
  const seo = res?.data?.seo;
  return {
    title: seo?.metaTitle || "Default Title",
    description: seo?.metaDescription || "Default description.",
    keywords: seo?.metaKeywords || "default, keywords",
  };
}

const PrivacyPolicy = () => {
  return (
    <>
      <PrivacyPolicyHero />
      <PrivacyPolicyComponent />
    </>
  );
};

export default PrivacyPolicy;
