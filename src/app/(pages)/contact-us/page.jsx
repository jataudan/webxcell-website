import ContactUsMap from "@/app/(components)/ContactUs/ContactUsMap/ContactUsMap";
import ContactUsHero from "@/app/(components)/About/HeroSection";
import ContactUsForm from "@/app/(components)/ContactUs/ContactUsForm/ContactUsForm";
import { getContactUs } from "@/lib/queries/getContactUs";

export async function generateMetadata() {
  const res = await getContactUs();
  const seo = res?.data?.seo;
  return {
    title: seo?.metaTitle || "Default Title",
    description: seo?.metaDescription || "Default description.",
    keywords: seo?.metaKeywords || "default, keywords",
  };
}

const ContactUs = async () => {
  const response = await getContactUs();
  const contact = response?.data || {};

  return (
    <>
      <ContactUsHero />
      <ContactUsForm contact={contact} />
      <ContactUsMap contact={contact?.contactCard} />
    </>
  );
};

export default ContactUs;
