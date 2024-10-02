import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";

export default function Home() {
  return (
    <Container>
      <span className="text-4xl">💼</span>
      <Heading className="font-black">Work History</Heading>
      <Paragraph className="max-w-xl mt-4">
        consequat occaecat eu aliquip labore{" "}
        <Highlight>exercitation voluptate mollit</Highlight> in est incididunt
        ad ullamco amet commodo veniam do incididunt in reprehenderit tempor
        excepteur proident sit anim elit
      </Paragraph>
      {/*
      <WorkHistory /> */}
    </Container>
  );
}
