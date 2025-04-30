import ServicesHero from "@/app/(components)/About/HeroSection";
import WorkProcess from "@/app/(components)/About/WorkProcess";
import ServicesSection from "@/app/(components)/Services/ServicesSection";
import ServiceTestimonial from "@/app/(components)/Services/ServiceTestimonial";
import { getServiceClient } from "@/lib/queries/getTopNav";

export async function generateMetadata() {
  const res = await getServiceClient();
  const seo = res?.data?.serviceSeo;
  return {
    title: seo?.metaTitle || "Default Title",
    description: seo?.metaDescription || "Default description.",
    keywords: seo?.metaKeywords || "default, keywords",
  };
}

const Services = () => {
  return (
    <>
      <ServicesHero />
      <ServicesSection />
      <WorkProcess />
      <ServiceTestimonial />
    </>
  );
};

export default Services;
