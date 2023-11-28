"use client";

import Hero from "@/components/sections/Hero";
import Navbar from "@/components/Navbar";
import Bottom from "@/components/sections/Bottom";
import CustomCursor from "@/components/dynamic/CustomCursor";
import Businesses from "@/components/sections/Businesses";
import Blog from "@/components/sections/Blog";
import Contact from "@/components/sections/Contact";
import StayingConnected from "@/components/seperators/StayingConnected";
import EnactusCollab from "@/components/seperators/EnactusCollab";

export default function Home() {
  return (
    <>
      <Navbar />
      <CustomCursor />

      <main className="flex min-h-screen w-screen flex-col items-center justify-between pt-24">
        <Hero />
        <StayingConnected />
        <Businesses />
        <EnactusCollab />
        <Blog />
        <Contact />

        <Bottom />
      </main>
    </>
  );
}
