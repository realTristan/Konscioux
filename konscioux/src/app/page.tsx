"use client";

import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import StripedBackground from "@/components/StripedBackground";
import { heroOnScroll } from "@/utils/heroOnScroll";
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
  /* Add the onscroll event listener
  useEffect(() => {
    window.addEventListener("scroll", heroOnScroll);
  });*/

  return (
    <>
      <Navbar />
      <StripedBackground />

      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Hero />

        {/* Temporary div */}
        <div className="h-[1500px]"></div>
      </main>
    </>
  );
}
