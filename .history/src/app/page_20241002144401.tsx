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
        ◦	Welcome!
I'm a graduate candidate at the University of Kentucky's College of Communication and Information Science. 
My interests are in small group and team communication and organizational communication. 
I'm originally from Corydon, Iowa (90 minutes south of Des Moines), where I grew up on a farm. 
In addition to scholarship, I enjoy reading fantasy and historical fiction, running, and attending cycling classes.

	◦	Research
My research interests are in small group and team communication and organizational communication. 
Taking a functional approach, I am interested in how groups and organizations achieve their goals. 
Specifically, I examine how people understand, organize, and use information and manage messages when engaging in task and relational focused processes. 
My research is typically quantitative in nature, using surveys to address hypotheses and research question. However, I also have been trained in qualitative methods and use these techniques when appropriate. 

	◦	Teaching
My teaching philosophy can be summed up as being both reciprocal and communal. 
Teachers should walk alongside their students, helping them understand and apply content to real-world situations. Interaction with students should serve as a source of inspiration, helping teachers learn new ways of teaching information, identify new avenues for research, and expand ideas beyond their own field of experience.
Together, teachers and students may build their own individual skills, enabling them to achieve personal goals while also strengthening their learning community. 
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
