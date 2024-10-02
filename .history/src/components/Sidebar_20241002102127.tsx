"use client";
import { navlinks } from "@/constants/navlinks";
import { Navlink } from "@/types/navlink";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import { Heading } from "./Heading";
import { socials } from "@/constants/socials";
import { Badge } from "./Badge";
import { AnimatePresence, motion } from "framer-motion";
import { IconLayoutSidebarRightCollapse } from "@tabler/icons-react";
import { isMobile } from "../lib/utils";



export const Sidebar = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <>
      <div
        className={`${
          isVisible ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out fixed top-0 left-0 h-screen bg-neutral-100 w-64 z-10 overflow-y-auto`}
      >
        <div className="flex flex-col h-full justify-between p-6">
          <div>
            <SidebarHeader />
            <Navigation />
          </div>
          <Badge href="/resume" text="Read Resume" />
        </div>
      </div>
      <button
        className="fixed top-4 left-4 z-20 p-2 bg-white rounded-full shadow-md"
        onClick={() => setIsVisible(!isVisible)}
      >
        <IconLayoutSidebarRightCollapse className="h-6 w-6 text-secondary" />
      </button>
    </>
  );
};

export const Navigation = () => {

  return (
    <div className="flex flex-col space-y-1 my-10 relative z-[100]">
      {navlinks.map((link: Navlink) => (
        <Link
          key={link.href}
          href={link.href}
          onClick={() => isMobile() && setOpen(false)}
          className={twMerge(
            "text-secondary hover:text-primary transition duration-200 flex items-center space-x-2 py-2 px-2 rounded-md text-sm",
            isActive(link.href) && "bg-white shadow-lg text-primary"
          )}
        >
          <link.icon
            className={twMerge(
              "h-4 w-4 flex-shrink-0",
              isActive(link.href) && "text-sky-500"
            )}
          />
          <span>{link.label}</span>
        </Link>
      ))}

      <Heading as="p" className="text-sm md:text-sm lg:text-sm pt-10 px-2">
        Socials
      </Heading>
      {socials.map((link: Navlink) => (
  <Link
    key={link.href}
    href={link.href}
    className={twMerge(
      "text-secondary hover:text-primary transition duration-200 flex items-center space-x-2 py-2 px-2 rounded-md text-sm"
    )}
  >
    {React.createElement(link.icon, {
      className: twMerge(
        "h-4 w-4 flex-shrink-0",
        isActive(link.href) && "text-sky-500"
      )
    })}
    <span>{link.label}</span>
  </Link>
))}
    </div>
  );
};

const SidebarHeader = () => {
  return (
    <div className="flex space-x-2">
      <Image
        src='https://atsport.s3.us-east-2.amazonaws.com/Hillary.webp'
        alt="Avatar"
        height="40"
        width="40"
        className="object-cover object-top rounded-full flex-shrink-0"
      />
      <div className="flex text-sm flex-col">
        <p className="font-bold text-primary">Hillary Hamilton</p>
        <p className="font-light text-secondary">Professional Title?</p>
      </div>
    </div>
  );
};
