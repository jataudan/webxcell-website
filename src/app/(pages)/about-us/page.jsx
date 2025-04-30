import AboutHero from "../../(components)/About/HeroSection";
import AboutDigital from "@/app/(components)/About/AboutDigital";
import ChooseUs from "@/app/(components)/About/ChooseUs";
import WorkProcess from "@/app/(components)/About/WorkProcess";
import Testimonials from "@/app/(components)/About/Testimonials";
// import ProfessionalTeam from "@/app/(components)/About/ProfessionalTeam";
import { getAboutUs } from "@/lib/queries/getAboutUs";

export async function generateMetadata() {
  const res = await getAboutUs();
  const seo = res?.data?.seo;

  return {
    title: seo?.metaTitle || "Default Title",
    description: seo?.metaDescription || "Default description.",
    keywords: seo?.metaKeywords || "default, keywords",
  };
}

export default async function About() {
  const response = await getAboutUs();
  const data = response?.data || {};

  const digitalAgency = data?.digitalAgency || {};
  const chooseUs = data?.chooseUs || {};
  const testimonials = data?.testimonials || {};

  return (
    <>
      <AboutHero />
      <AboutDigital data={digitalAgency} />
      <WorkProcess />
      <ChooseUs data={chooseUs} />
      <Testimonials data={testimonials} />
      {/* <ProfessionalTeam /> */}
    </>
  );
}
