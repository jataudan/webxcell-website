import FAQHero from "@/app/(components)/About/HeroSection";
import FaqSection from "@/app/(components)/FaqSection";
import { getFAQ } from "@/lib/queries/getFAQ";
import React from "react";

export async function generateMetadata() {
  const res = await getFAQ();
  const seo = res?.data[0]?.seo;
  return {
    title: seo?.metaTitle || "Default Title",
    description: seo?.metaDescription || "Default description.",
    keywords: seo?.metaKeywords || "default, keywords",
  };
}

const faq = () => {
  return (
    <>
      <FAQHero />
      <FaqSection />
    </>
  );
};

export default faq;
