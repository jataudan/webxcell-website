"use client";
import { getThemeSettings } from "@/lib/queries/getSettings";
import { useEffect, useState } from "react";

export default function RootStyles() {
  const [styles, setStyles] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getThemeSettings();
      if (response) {
        setStyles(response?.data);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-12 h-12 border-4 border-gray-300 border-t-[--primary] rounded-full animate-spin"></div>
      </div>
    );
  }

  console.log("Fetched styles:", styles);

  // Extracting colors into CSS variables
  const colorVariables = styles?.colorScheme
    ?.flatMap((scheme) =>
      scheme.colorList.map(
        (color) =>
          `--${color.colorName.toLowerCase().replace(/ /g, "-")}: ${color.color
          };`
      )
    )
    .join("\n");

  const fontVariables = styles?.fontsFamily
    ?.map((e) => {
      return `--${e?.fontFamily}: ${e?.fontType};`;
    })
    .join("\n");


  return (
    <style jsx global>{`
      :root {
        
        /* Default color variables */
        --background: ${styles?.background || "#ffffff"};
        --foreground: ${styles?.foreground || "#171717"};
        --primary: ${styles?.primary || "#ff6700"};
        --white: #fff;
        --black: #000;
        --blog-description: ${styles?.blogDescription || "#101010"};
       
        ${colorVariables}

        ${fontVariables}
      
      }

      body {
        color: var(--foreground);
        background: var(--background);
        /* font-family: Arial, Helvetica, sans-serif; */
      }

      a,
      p {
        font-family: var(--font-poppins);
      }

      h1 {
        font-family: var(--font-oswald);
      }

      h2,
      h5 {
        font-family: var(--font-plus-jakarta-sans);
      }

      .span-title {
        font-family: var(--font-plus-jakarta-sans);
      }

      .title {
        font-family: var(--font-oswald);
        font-size: 16px;
        line-height: 40px;
      }

      .case-studies-title,
      .off-service-title {
        font-family: var(--font-plus-jakarta-sans);
        font-weight: bold;
      }

      .off-service-headline {
        font-family: var(--font-plus-jakarta-sans);
        font-weight: bold;
        line-height: 55px;
      }

      .case-studies-sub-title {
        font-family: var(--font-plus-jakarta-sans);
        font-weight: bold;
      }

      .service-title {
        font-family: var(--font-plus-jakarta-sans);
        font-size: 20px;
        font-weight: bold;
      }

      .blog-title {
        font-family: var(--font-plus-jakarta-sans);
        font-weight: bold;
      }

      .blog-date-title {
        font-family: var(--font-plus-jakarta-sans);
      }

      .trust-title {
        font-family: var(--font-plus-jakarta-sans);
        line-height: 58px;
        font-weight: 600;
      }

      .contact-info-title {
        font-family: var(--font-plus-jakarta-sans);
        line-height: 36px;
        font-weight: 600;
      }

      .footer-title {
        font-family: var(--font-plus-jakarta-sans);
      }

      .stylish-gradient-text {
        font-family: var(--font-oswald);
      }

      .stylish-text {
        font-size: 48px;
        font-weight: 900;
        font-family: var(--font-oswald);
        color: white;
        text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
          1px 1px 0 #000;
      }

      .service-stylish-text {
        font-size: 48px;
        font-weight: 900;
        font-family: var(--font-oswald);
        color: #fff;
        text-shadow: -1px -1px 0 #cfcfcf, 1px -1px 0 #cfcfcf, -1px 1px 0 #cfcfcf,
          1px 1px 0 #cfcfcf;
      }

      .headline {
        font-family: var(--font-oswald);
        font-size: 36px;
        font-weight: 700;
        line-height: 1.2;
      }

      .highlight.brown {
        color: var(--brown);
      }

      .highlight.orange {
        color: var(--primary);
      }

      .hexagon {
        position: relative;
        width: 500px;
        height: 288.68px;
        background: linear-gradient(180deg, #ff6700 0%, #32cd32 100%);
        margin: 144px auto;
        border-radius: 12px;
      }

      .hexagon::before,
      .hexagon::after {
        content: "";
        position: absolute;
        border-left: 250px solid transparent;
        border-right: 250px solid transparent;
        border-radius: 12px;
      }

      .hexagon::before {
        bottom: 100%;
        border-bottom: 144.34px solid #cd5c5c;
        border-radius: 12px;
      }

      .hexagon::after {
        top: 100%;
        border-top: 144.34px solid #cd5c5c;
        border-radius: 12px;
      }

      .bg-dotted {
        background-image: repeating-linear-gradient(
          90deg,
          transparent,
          transparent 4px,
          #3b82f6 4px,
          #3b82f6 8px
        );
      }

      .slick-current,
      .slick-active {
        margin-right: 5px;
      }

      .slick-initialized,
      .slick-slide {
        margin-right: 5px;
      }
    `}</style>
  );
}
