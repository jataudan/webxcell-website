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

  const fontVariables = styles?.fontsFamily
    ?.map((e) => {
      return `--${e?.fontFamily}: ${e?.fontType};`;
    })
    .join("\n");

  return (
    <style jsx global>{`
      :root {
        /* Default color variables */
        --background: ${styles?.background};
        --foreground: ${styles?.foreground};
        --primary: ${styles?.primary};
        --secondary: ${styles?.secondary};
        --white: #fff;
        --black: #000;
        --background: #ffffff;
        --brown: #663300;
        --blog-description: #101010;
        --white: #fff;
        --light-gray: #f2eeea;
        --black: #000;
        --light-sky-blue: #ecf8ff;
        --sky-blue: #ecf8ff;

        ${fontVariables}
      }

      body {
        color: var(--foreground);
        background: var(--background);
        /* font-family: Arial, Helvetica, sans-serif; */
      }

      a,
      p {
        font-family: var(${fontVariables});
      }

      ul {
        list-style: disc;
        padding-left: 33px;
      }

      h1 {
        font-family: var(${fontVariables});
        font-size: clamp(2rem, 5vw, 2.78rem); /* ~32px to 48px */
        font-weight: 700;
        margin: 10px 0px;
      }

      h2 {
        font-family: var(${fontVariables});
        font-size: clamp(1.75rem, 4vw, 2.25rem); /* ~28px to 36px */
        font-weight: 600;
        margin: 10px 0px;
      }

      h3 {
        font-family: var(${fontVariables});
        font-size: clamp(1.5rem, 3.5vw, 1.875rem); /* ~24px to 30px */
        font-weight: 600;
        margin: 10px 0px;
      }

      h4 {
        font-family: var(${fontVariables});
        font-size: clamp(1.25rem, 3vw, 1.5rem); /* ~20px to 24px */
        font-weight: 500;
        margin: 10px 0px;
      }

      h5 {
        font-family: var(${fontVariables});
        font-size: clamp(1.125rem, 2.5vw, 1.25rem); /* ~18px to 20px */
        font-weight: 500;
        margin: 10px 0px;
      }

      h6 {
        font-family: var(${fontVariables});
        font-size: clamp(0.9rem, 2vw, 1rem); /* ~14.4px to 16px */
        font-weight: 500;
        margin: 10px 0px;
      }

      p {
        font-family: var(${fontVariables});
        font-size: clamp(0.9rem, 2vw, 1rem); /* ~14.4px to 16px */
        font-weight: 400;
        line-height: 1.5;
        margin: 0.5rem 0;
      }

      .span-title {
        font-family: var(${fontVariables});
      }

      .title {
        font-family: var(--font-oswald);
        font-size: 16px;
        line-height: 40px;
      }

      .case-studies-title,
      .off-service-title {
        font-family: var(${fontVariables});
        font-weight: bold;
      }

      .off-service-headline {
        font-family: var(${fontVariables});
        font-weight: bold;
        line-height: 55px;
      }

      .case-studies-sub-title {
        font-family: var(${fontVariables});
        font-weight: bold;
      }

      .service-title {
        font-family: var(${fontVariables});
        font-size: 20px;
        font-weight: bold;
      }

      .blog-title {
        font-family: var(${fontVariables});
        font-weight: bold;
      }

      .blog-date-title {
        font-family: var(${fontVariables});
      }

      .trust-title {
        font-family: var(${fontVariables});
        line-height: 58px;
        font-weight: 600;
      }

      .contact-info-title {
        font-family: var(${fontVariables});
        line-height: 36px;
        font-weight: 600;
      }

      .footer-title {
        font-family: var(${fontVariables});
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
         .digital-headline {
        font-family: var(--font-oswald);
        font-size: 29px;
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

      /* ul {
        list-style-image: url("https://webxcell.digital/wp-content/uploads/2021/07/Webxcell-Bullet-02-e1627381223592.png");
      } */

      .slick-current,
      .slick-active {
        margin-right: 25px;
        margin-left: 25px;
        cursor: pointer;
      }
    `}</style>
  );
}
