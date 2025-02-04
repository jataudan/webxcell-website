"use client";
import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useParams } from "next/navigation";

export default function AboutHero() {
  // Routing hooks to access current path and parameters
  const pathname = usePathname();
  const { category, title, slug, role } = useParams();

  /**
   * Formats strings from URL parameters into proper title case
   * Handles hyphenated words and multiple word segments
   * Example: "our-services" becomes "Our Services"
   * @param {string} str - The input string from URL parameters
   * @returns {string} Formatted title-case string
   */
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

  /**
   * Determines the main heading based on current route
   * Priority order:
   * 1. Static routes (exact path matches)
   * 2. Dynamic parameters (category > title > slug > role)
   * @returns {string} Appropriate heading for the current page
   */
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

      // Handle dynamic routes using URL parameters
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

  /**
   * Generates breadcrumb trail hierarchy based on current route
   * Always starts with Home, then adds context-specific links
   * Handles both static and parameterized dynamic routes
   * @returns {Array} Breadcrumb items with labels and links
   */
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
        // Handle parameterized routes
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
            { label: "Portfolio", link: "/blog" },
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
    // Hero section container with responsive height
    <section className="relative w-full h-[400px] md:h-[537px] bg-custom-gray bg-center flex flex-col items-center px-6 md:px-20 lg:px-40">
      {/* Centered content container with vertical spacing */}
      <div className="relative mt-[120px] flex flex-col items-center justify-center text-white px-4 text-center h-screen">
        {/* Dynamic page heading with responsive typography */}
        <p className="sm:text-3xl md:text-4xl lg:text-6xl font-extrabold mb-4">
          {getHeading()}
        </p>

        {/* Gradient-styled breadcrumb navigation */}
        <div className="mt-0 sm:mt-2 flex items-center justify-center rounded-full bg-gradient-to-r from-[#BF20FC] to-[#077EEC] p-[2px]">
          {/* Breadcrumb inner container with responsive layout */}
          <div className="flex gap-[4px] md:gap-0 flex-wrap md:flex-nowrap items-center justify-center p-2 font-bold rounded-full bg-custom-gray text-[10px] md:text-[18px] font-plus-jakarta">
            {getBreadcrumb().map((item, index) => {
              return (
                <React.Fragment key={index}>
                  {/* Separator arrow between breadcrumb items */}
                  {index > 0 && (
                    <div className="px-2">
                      <Image
                        src="/assets/about/right-arrow.png"
                        alt="Breadcrumb separator arrow"
                        width={10}
                        height={10}
                      />
                    </div>
                  )}
                  {/* Breadcrumb link item */}
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
