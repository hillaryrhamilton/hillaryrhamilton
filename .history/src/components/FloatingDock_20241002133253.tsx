import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import { navlinks } from "@/constants/navlinks";
import { socials } from "@/constants/socials";
import { Profile } from "./Proifile";

export function FloatingDockDemo() {
  const links = [
    ...navlinks,
    ...socials
  ];

  return (
    <div className="mx-auto md:hidden h-24">
      <div className='pt-8 pb-12 items-center justify-center flex w-screen'>
      <Profile />
      </div>
      <FloatingDock
      className="translate-y-4"
        items={links.map(link => ({
          title: link.label,
          icon: React.createElement(link.icon, { className: "h-4 w-4" }),
          href: link.href
        }))}
      />
    </div>
  );
}