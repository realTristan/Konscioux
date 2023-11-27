"use client";

import Hero from "@/components/Hero";
import Enactus from "@/components/Enactus";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Bottom from "@/components/Bottom";
import CustomCusor, { activateCustomCursor } from "@/components/CustomCursor";
import Businesses from "@/components/Businesses";

export default function Home() {
  return (
    <>
      <Navbar />
      <CustomCusor />

      <main className="flex min-h-screen w-screen flex-col items-center justify-between pt-24">
        <Hero />
        <Enactus />
        <Businesses />
        <div className="stripes-slate-dark-135 flex h-full w-screen flex-col items-center justify-center gap-2 bg-black px-20 py-10">
          <h1 className="text-center text-9xl font-semibold tracking-wider text-white">
            SAVE THE DATE<span className="text-primary">.</span>
          </h1>
          <p className="text-center text-xl font-normal tracking-widest text-white">
            LAUNCHING 2024
          </p>
        </div>
        <About />

        <Bottom />
      </main>
    </>
  );
}
