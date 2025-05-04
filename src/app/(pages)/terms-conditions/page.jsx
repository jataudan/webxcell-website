import React from "react";
import TermsConditionsHero from "@/app/(components)/About/HeroSection";
import { getTermsConditionData } from "@/lib/queries/getPoliciesSeo";
import TermsConditionComponent from "@/app/(components)/Policies/TermsConditions";

export async function generateMetadata() {
  const res = await getTermsConditionData();
  const seo = res?.data?.seo;
  return {
    title: seo?.metaTitle || "Default Title",
    description: seo?.metaDescription || "Default description.",
    keywords: seo?.metaKeywords || "default, keywords",
  };
}

const TermsConditions = () => {
  return (
    <>
      <TermsConditionsHero />
      <TermsConditionComponent />
    </>
  );
};

export default TermsConditions;
