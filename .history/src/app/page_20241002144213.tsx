import { Container } from "@/components/Container";
import { FloatingDockDemo } from "@/components/FloatingDock";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { TechStack } from "@/components/TechStack";
import { TimelineDemo } from "@/components/Timeline";
import Image from "next/image";
import TestComponent from '@/components/TestComponent';


export default function Home() {
  return (
    <Container>
      <div className=''>
      <span className="text-4xl">👋</span>
      <div
      className="w-full bg-white dark:bg-neutral-950 font-sans md:px-10">
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl">
          Changelog from my journey
        </h2>
        <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-sm">
          I&apos;ve been working on Aceternity for the past 2 years. Here&apos;s
          a timeline of my journey.
        </p>
      </div>
      </div>



      <Paragraph className="max-w-xl mt-4">

        I&apos;m a full-stack developer that loves

      </Paragraph>

      <Paragraph className="max-w-xl mt-4">

        I&apos;m a senior software engineer with{" "}

        <Highlight>7 years of experience</Highlight>


      </Paragraph>



      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        What I&apos;ve been working on
      </Heading>

      <TimelineDemo />
      </div>
    </Container>
  );
}
