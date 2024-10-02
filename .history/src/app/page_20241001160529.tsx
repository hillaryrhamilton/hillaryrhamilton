import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { TechStack } from "@/components/TechStack";
import { TimelineDemo } from "@/components/Timeline";
import { FloatingDock } from "@/components/ui/floating-dock";
import Image from "next/image";
import React, { useRef, useState } from "react";

export default function Home() {
  return (
    <Container>
      <FloatingDock
      desktopClassName="fixed bottom-4 right-4"
      mobileClassName="fixed bottom-4 right-4"
        items={[
          {
            title: "Home",
            icon: <Image src="/home.svg" alt="Home" width={20} height={20} />,
            href: "/",
          },
          {
            title: "About",
            icon: (
              <Image src="/about.svg" alt="About" width={20} height={20} />
            ),
            href: "/about",
          },
          {
            title: "Projects",
            icon: (
              <Image src="/projects.svg" alt="Projects" width={20} height={20} />
            ),
            href: "/projects",
          },
          {
            title: "Contact",
            icon: (
              <Image src="/contact.svg" alt="Contact" width={20} height={20} />
            ),
            href: "/contact",
          },
        ]}
       />
      <span className="text-4xl">👋</span>
      <Heading className="font-black">Hello there! I&apos;m John</Heading>
      <Paragraph className="max-w-xl mt-4">
        I&apos;m a full-stack developer that loves{" "}
        <Highlight>building products</Highlight> and web apps that can impact
        millions of lives
      </Paragraph>
      <Paragraph className="max-w-xl mt-4">
        I&apos;m a senior software engineer with{" "}
        <Highlight>7 years of experience</Highlight> building scalable web apps
        that are performance optimized and good looking.
      </Paragraph>
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        What I&apos;ve been working on
      </Heading>
      <Products />
      <TimelineDemo />
      <TechStack />
    </Container>
  );
}
