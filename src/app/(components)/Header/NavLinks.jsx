"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLinks = ({ navigationItems }) => {
  const pathname = usePathname();

  const isActive = (path) => pathname === path;

  return (
    <nav className="hidden lg:flex gap-8 font-medium">
      {navigationItems?.map((nav) => {
        if (!nav.href || !nav.text) {
          return null;
        }

        return (
          <Link
            key={nav?.id}
            href={nav?.href}
            className={`hover:text-[--primary] font-semibold font-montserrat ${
              isActive(nav?.href) ? "text-[--primary]" : ""
            }`}
          >
            {nav?.text}
          </Link>
        );
      })}
      {/* <div className="flex items-center">
        <Image
          src="/assets/header/search.png"
          alt="search"
          width={16}
          height={16}
        />
      </div> */}
    </nav>
  );
};

export default NavLinks;
