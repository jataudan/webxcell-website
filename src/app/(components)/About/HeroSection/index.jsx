"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useParams } from "next/navigation";
import { getOtherHeroData } from "@/lib/queries/getHeroSection";

export default function AboutHero() {
  const pathname = usePathname();
  const { category, title, slug, role } = useParams();

  const [getHero, setGetHero] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      const response = await getOtherHeroData();
      if (response) {
        setIsLoading(false);
        setGetHero(response?.data);
      }
    };
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-12 h-12 border-4 border-gray-300 border-t-[#F26B01] rounded-full animate-spin"></div>
      </div>
    );
  }

  const filterHero = getHero?.filter((hero) => hero.sectionName === pathname);

  const capitalizeFirstLetterOfEachWord = (str) => {
    return str
      .split(" ")
      .map((word) =>
        word
          .split("-")
          .map(
            (subWord) =>
              subWord.charAt(0).toUpperCase() + subWord.slice(1).toLowerCase()
          )
          .join(" ")
      )
      .join(" ");
  };

  const getHeading = () => {
    switch (pathname) {
      case "/about-us":
        return "About Us";
      case "/services":
        return "Our Services";
      case "/portfolio":
        return "Our Portfolio";
      case "/blog":
        return "Our Blog";
      case "/contact-us":
        return "Contact Us";
      case "/faq":
        return "FAQ";
      case "/our-team":
        return "Our Team";

      default:
        if (category) {
          return capitalizeFirstLetterOfEachWord(category.replace("-", " "));
        }
        if (title) {
          return capitalizeFirstLetterOfEachWord(title.replace("-", " "));
        }
        if (slug) {
          return capitalizeFirstLetterOfEachWord(slug.replace("-", " "));
        }
        if (role) {
          return capitalizeFirstLetterOfEachWord(role.replace("-", " "));
        }
        return "Welcome";
    }
  };

  const getBreadcrumb = () => {
    const baseBreadcrumb = [{ label: "Home", link: "/" }];

    switch (pathname) {
      case "/about-us":
        baseBreadcrumb.push({ label: "About Us", link: "/about-us" });
        break;
      case "/services":
        baseBreadcrumb.push({ label: "Our Services", link: "/services" });
        break;
      case "/portfolio":
        baseBreadcrumb.push({ label: "Our Portfolio", link: "/portfolio" });
        break;
      case "/blog":
        baseBreadcrumb.push({ label: "Our Blog", link: "/blog" });
        break;
      case "/contact-us":
        baseBreadcrumb.push({ label: "Contact Us", link: "/contact-us" });
        break;
      case "/faq":
        baseBreadcrumb.push({ label: "FAQ", link: "/faq" });
        break;
      case "/our-team":
        baseBreadcrumb.push({ label: "Our Team", link: "/our-team" });
        break;
      default:
        if (category) {
          baseBreadcrumb.push(
            { label: "Our Services", link: "/services" },
            {
              label: capitalizeFirstLetterOfEachWord(
                category.replace("-", " ")
              ),
              link: `/services/${category}`,
            }
          );
        }
        if (title) {
          baseBreadcrumb.push(
            { label: "Portfolio", link: "/portfolio" },
            {
              label: capitalizeFirstLetterOfEachWord(title.replace("-", " ")),
              link: `/portfolio/${title}`,
            }
          );
        }
        if (slug) {
          baseBreadcrumb.push(
            { label: "Blog", link: "/blog" },
            {
              label: capitalizeFirstLetterOfEachWord(slug.replace("-", " ")),
              link: `/blog/${slug}`,
            }
          );
        }
        if (role) {
          baseBreadcrumb.push(
            { label: "Our Team", link: "/our-team" },
            {
              label: capitalizeFirstLetterOfEachWord(role.replace("-", " ")),
              link: `/our-team/${role}`,
            }
          );
        }
        break;
    }

    return baseBreadcrumb;
  };

  return (
    <section
      className={`relative w-full h-[400px] md:h-[537px] ${
        filterHero[0]?.bgColor || "bg-custom-gray"
      } bg-center flex flex-col items-center px-6 md:px-20 lg:px-40`}
      style={
        filterHero[0]?.bgImage && {
          backgroundImage: `url(${filterHero[0]?.bgImage?.url})`,
        }
      }
    >
      <div className="relative mt-[120px] flex flex-col items-center justify-center text-white px-4 text-center h-screen">
        {/* Heading */}
        <p className="sm:text-3xl md:text-4xl lg:text-6xl font-extrabold mb-4">
          {getHeading()}
        </p>

        {/* Breadcrumb */}
        <div className="mt-0 sm:mt-2 flex items-center justify-center rounded-full bg-gradient-to-r from-[#BF20FC] to-[#077EEC] p-[2px]">
          <div
            className={`flex gap-[4px] md:gap-0 flex-wrap md:flex-nowrap items-center justify-center p-2 font-bold rounded-full ${
              filterHero[0]?.bgColor || "bg-custom-gray"
            } text-[10px] md:text-[18px] font-plus-jakarta`}
          >
            {getBreadcrumb().map((item, index) => {
              return (
                <React.Fragment key={index}>
                  {index > 0 && (
                    <div className="px-2">
                      <Image
                        src="/assets/about/right-arrow.png"
                        alt="right arrow"
                        width={10}
                        height={10}
                      />
                    </div>
                  )}
                  <a href={item.link} className="text-white">
                    {item.label}
                  </a>
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
