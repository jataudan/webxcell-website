"use client"; // Client-side component directive for Next.js

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Footer = () => {
  const pathname = usePathname();
  return (
    <div className="relative">
      {/* Floating Newsletter Section */}
      <div className="flex absolute -top-[114px] z-30 left-1/2 transform -translate-x-1/2 justify-between bg-[#00BFFF] w-[90%] lg:w-[1170px] h-[226px] rounded-lg shadow-lg items-center px-8 lg:px-16">
        {/* Decorative Left-side Graphics */}
        <div className="relative hidden lg:block w-1/2 h-[327px]">
          {/* Background Elements */}
          <div className="absolute bottom-[53px] left-[-33px]">
            <Image
              src="/assets/contact-info/elements_2.png"
              alt="decorative shape"
              width={80}
              height={80}
            />
          </div>
          {/* Main Character Image */}
          <div className="absolute hidden lg:block top-[10px] left-[63px]">
            <Image
              src="/assets/contact-info/person.png"
              alt="Support person illustration"
              width={226}
              height={266}
            />
          </div>
          {/* Direction Indicator */}
          <div className="absolute hidden lg:block top-[90px] left-[428px]">
            <Image
              src="/assets/contact-info/Direction.png"
              alt="direction indicator"
              width={38}
              height={18}
            />
          </div>
          {/* Chat Bubble Graphic */}
          <div className="absolute hidden lg:block top-[113px] left-[328px]">
            <Image
              src="/assets/contact-info/Frame.png"
              alt="chat bubble graphic"
              width={116}
              height={116}
            />
          </div>
        </div>

        {/* Newsletter Subscription Form */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center text-white">
          <h3 className="text-[18px] md:text-[22px] leading-[1.5] font-semibold mb-2 font-plus-jakarta">
            Stay Abreast of The Latest In Digital with Our Curated Content Every
            Week In Your Inbox
          </h3>
          <div className="flex items-center mt-4 bg-white rounded-full px-1 py-1">
            <input
              type="email"
              placeholder="Enter Email Address"
              className="flex-grow px-4 rounded-l-md bg-transparent text-gray-700 outline-none"
              aria-label="Subscribe to newsletter"
            />
            <button aria-label="Submit subscription">
              <Image
                src="/assets/contact-info/button.png"
                alt="submit button"
                width={48}
                height={48}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative w-full bg-[#000] h-auto md:h-[596px] overflow-hidden">
        <div className="container mx-auto relative z-20 px-5">
          <div className="flex flex-col justify-center">
            {/* Footer Columns Container */}
            <div className="flex flex-wrap justify-start md:justify-around py-10 px-10 md:pt-40 md:pb-28 gap-10">
              {/* Company Info Column */}
              <div className="flex flex-col gap-5 justify-end items-start mt-[96px] md:mt-0">
                <h1 className="font-plus-jakarta text-[#fff] text-[30px]">
                  Webxcell
                </h1>
                <span className="text-[#D9D9D9] max-w-[300px]">
                  Nullam interdum libero vitae pretium aliquam donec nibh purus
                  laoreet in ullamcorper vel malesuada sit amet enim.{" "}
                </span>
                <button
                  className="uppercase bg-gradient-to-r from-[#ff6700] to-[#00bfff] text-white font-semibold px-6 py-2 rounded-full hover:opacity-90 transition-opacity"
                  aria-label="Contact us"
                >
                  contact us
                </button>
                {/* Social Media Links */}
                <div className="flex gap-5 flex-col md:flex-row items-center md:items-start">
                  <span className="text-[#fff] footer-title relative">
                    <span className="absolute bottom-[11px] left-[-35px] w-6 h-[1px] bg-white hidden md:block" />
                    Follow on
                  </span>
                  <div className="flex items-center gap-4 text-xl">
                    {/* Social Media Icons */}
                    <a href="#" aria-label="Facebook profile">
                      <Image
                        src="/assets/portfolio/facebook.png"
                        alt="Facebook icon"
                        width={10}
                        height={16}
                      />
                    </a>
                    <a href="#" aria-label="Twitter profile">
                      <Image
                        src="/assets/portfolio/twitter.png"
                        alt="Twitter icon"
                        width={16}
                        height={16}
                      />
                    </a>
                    <a href="#" aria-label="LinkedIn profile">
                      <Image
                        src="/assets/portfolio/linkedin.png"
                        alt="LinkedIn icon"
                        width={14}
                        height={14}
                      />
                    </a>
                    <a href="#" aria-label="YouTube channel">
                      <Image
                        src="/assets/portfolio/youtube.png"
                        alt="YouTube icon"
                        width={18}
                        height={16}
                      />
                    </a>
                  </div>
                </div>
              </div>

              {/* Quick Links Column */}
              <div className="flex flex-col gap-5">
                <h3 className="text-lg font-semibold mb-4 footer-title relative">
                  <span className="text-white">Quick Links</span>
                  <span className="absolute bottom-[-8px] left-0 w-5 h-[1px] bg-[#219BE4]" />
                  <span className="absolute bottom-[-8px] left-7 w-16 h-[1px] bg-white" />
                </h3>
                <ul className="space-y-4 text-center md:text-left">
                  {[
                    { path: "/about-us", label: "About" },
                    { path: "/contact-us", label: "Contact Us" },
                    { path: "/blog", label: "Blog & News" },
                    { path: "/faq", label: "FAQ's" },
                    { path: "#", label: "Login / Register" },
                  ].map((link, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-2 justify-start"
                    >
                      <Image
                        src="/assets/footer/___icon.png"
                        alt=""
                        width={18}
                        height={18}
                        aria-hidden="true"
                      />
                      <Link
                        href={link.path}
                        className="text-[#D9D9D9] hover:text-[#635AD9] transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Services Column */}
              <div className="flex flex-col gap-5">
                <h3 className="text-lg font-semibold mb-4 footer-title relative">
                  <span className="text-white">Our Services</span>
                  <span className="absolute bottom-[-8px] left-0 w-5 h-[1px] bg-[#219BE4]" />
                  <span className="absolute bottom-[-8px] left-7 w-16 h-[1px] bg-white" />
                </h3>
                <ul className="space-y-4 text-center md:text-left">
                  {[
                    "Digital Marketing",
                    "Web Development",
                    "SEO Optimized",
                    "App Development",
                    "Email Marketing",
                  ].map((service, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-2 justify-start"
                    >
                      <Image
                        src="/assets/footer/___icon.png"
                        alt=""
                        width={18}
                        height={18}
                        aria-hidden="true"
                      />
                      <a
                        href="#"
                        className="text-[#D9D9D9] hover:text-[#635AD9] transition-colors"
                      >
                        {service}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Info Column */}
              <div className="flex flex-col gap-5 items-start">
                <h3 className="text-lg font-semibold mb-4 footer-title max-w-[235px] relative">
                  <span className="text-white">Contact Us</span>
                  <span className="absolute bottom-[-8px] left-0 w-5 h-[1px] bg-[#219BE4]" />
                  <span className="absolute bottom-[-8px] left-7 w-16 h-[1px] bg-white" />
                </h3>
                <ul className="space-y-4 text-center md:text-left">
                  <li className="flex items-start gap-2 justify-start">
                    <Image
                      src="/assets/footer/location.png"
                      alt=""
                      width={18}
                      height={18}
                      className="translate-y-[5px]"
                      aria-hidden="true"
                    />
                    <a
                      href="#"
                      className="text-[#D9D9D9] text-left hover:text-[#635AD9] max-w-[290px] transition-colors"
                    >
                      Courtyard Business Ctr, Southwold Dr, Nottingham NG8 1PA.
                      UK
                    </a>
                  </li>
                  <li className="flex items-start gap-2 justify-start">
                    <Image
                      src="/assets/footer/call.png"
                      alt=""
                      width={18}
                      height={18}
                      aria-hidden="true"
                    />
                    <a
                      href="tel:+448001957512"
                      className="text-[#D9D9D9] hover:text-[#635AD9] transition-colors"
                    >
                      +44 800 195 7512
                    </a>
                  </li>
                  <li className="flex items-center gap-2 justify-start">
                    <Image
                      src="/assets/footer/message-icon.png"
                      alt=""
                      width={18}
                      height={18}
                      aria-hidden="true"
                    />
                    <a
                      href="mailto:team@webxcell.com"
                      className="text-[#D9D9D9] hover:text-[#635AD9] transition-colors"
                    >
                      team@webxcell.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Footer Bottom Legal Section */}
            <hr className="border-[#c4c4c4]" />
            <div className="flex flex-col md:flex-row justify-between items-center mt-5 mb-5 space-y-4 md:space-y-0">
              <span className="text-[#D9D9D9] footer-title text-center">
                © All Copyright 2024 by Webxcell Digital
              </span>
              <span className="footer-title text-center">
                <a
                  href="/terms"
                  className="text-[#D9D9D9] mr-7 hover:text-[#635AD9] transition-colors"
                >
                  Terms & Conditions
                </a>
                <a
                  href="/cookies"
                  className="text-[#D9D9D9] hover:text-[#635AD9] transition-colors"
                >
                  Cookies Policy
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
