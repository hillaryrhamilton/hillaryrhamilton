import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import { navlinks } from "@/constants/navlinks";
import { socials } from "@/constants/socials";

export function FloatingDockDemo() {
  const links = [
    ...navlinks,
    ...socials
  ];

  return (
    <div className="mx-auto md:hidden h-24 py-8 items-center justify-center flex">
      <FloatingDock
        mobileClassName="translate-y-4"
        items={links.map(link => ({
          title: link.label,
          icon: React.createElement(link.icon, { className: "h-4 w-4" }),
          href: link.href
        }))}
      />
    </div>
  );
}