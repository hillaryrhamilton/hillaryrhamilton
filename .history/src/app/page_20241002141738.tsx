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
