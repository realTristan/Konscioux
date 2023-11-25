"use client";

import Hero from "@/components/Hero";
import Enactus from "@/components/Enactus";
import Navbar from "@/components/Navbar";
import { StripedBackgroundWhite45 } from "@/components/StripedBackground";

export default function Home() {
  return (
    <>
      <Navbar />
      <StripedBackgroundWhite45 />

      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Hero />
        {/*<span className="h-24 bg-slate-900 stripes-slate-dark-135 w-screen"></span>*/}
        <Enactus />

        {/* Temporary div */}
        <div className="h-[1500px]"></div>
      </main>
    </>
  );
}
