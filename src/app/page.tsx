"use client";

import { Drawer } from "@/components/Drawer/Drawer";
import "../app/global.css";
import { Container } from "@/components/Patterns/patterns";

export default function Home() {
  return (
    <Container>
      <Drawer />
    </Container>
  );
}
