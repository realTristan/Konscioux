"use client";

import Hero from "@/components/Hero";
import Enactus from "@/components/Enactus";
import Navbar from "@/components/Navbar";
import Team from "@/components/Team";
import Bottom from "@/components/Bottom";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="flex min-h-screen w-screen flex-col items-center justify-between pt-24">
        <Hero />
        <Enactus />
        <Team />

        <Bottom />
      </main>
    </>
  );
}
