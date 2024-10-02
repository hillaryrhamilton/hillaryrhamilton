import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | John Doe",
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
};

export default function Projects() {
  return (
    <Container>
      <span className="text-4xl">⚡</span>
      <Heading className="font-black mb-10">
        {" "}
        What I&apos;ve been working on
      </Heading>
    </Container>
  );
}
