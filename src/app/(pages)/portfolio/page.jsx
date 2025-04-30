import React from "react";
import PortfolioHero from "@/app/(components)/About/HeroSection";
import PortfolioCards from "@/app/(components)/Portfolio/PortfolioCards/PortfolioCards";
import { getProtfolioSeo } from "@/lib/queries/getTopNav";

export async function generateMetadata() {
  const res = await getProtfolioSeo();
  const seo = res?.data?.protfolioSeo;
  return {
    title: seo?.metaTitle || "Default Title",
    description: seo?.metaDescription || "Default description.",
    keywords: seo?.metaKeywords || "default, keywords",
  };
}

const Portfolio = () => {
  return (
    <>
      <PortfolioHero />
      <PortfolioCards />
    </>
  );
};

export default Portfolio;
