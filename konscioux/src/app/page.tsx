"use client";

import Hero from "@/components/Hero";
import Enactus from "@/components/Enactus";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Bottom from "@/components/Bottom";
import CustomCusor, { activateCustomCursor } from "@/components/CustomCursor";
import Businesses from "@/components/Businesses";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import SaveTheDate from "@/components/SaveTheDate";

export default function Home() {
  return (
    <>
      <Navbar />
      <CustomCusor />

      <main className="flex min-h-screen w-screen flex-col items-center justify-between pt-24">
        <Hero />
        <SaveTheDate />
        <Businesses />
        <Enactus />
        <Blog />
        <Contact />
        <About />

        <Bottom />
      </main>
    </>
  );
}
