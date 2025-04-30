import { getLandingData } from "@/lib/queries/getLandingPage";
import Landing from "./(pages)/landing-page/page";

export async function generateMetadata() {
  const res = await getLandingData();
  const seo = res?.data?.seo;

  return {
    title: seo?.metaTitle || "Default Title",
    description: seo?.metaDescription || "Default description.",
    keywords: seo?.metaKeywords || "default, keywords",
  };
}

export default function Home() {
  return (
    <>
      <Landing />
    </>
  );
}
