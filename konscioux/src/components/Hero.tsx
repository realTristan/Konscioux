import Image from "next/image";
import { useEffect } from "react";
import { StripedBackgroundWhite45Animated } from "./StripedBackground";

export default function Hero(): JSX.Element {
  return (
    <div className="relative">
      <StripedBackgroundWhite45Animated />

      <div className="group mb-24 mt-20 flex flex-row items-center justify-between px-20">
        <div className="z-10 w-full pt-8">
          <h1 className="slate-800 text-7xl font-extrabold">
            The <span className="font-black text-primary">innovative</span>{" "}
            solution to design
            <span className="font-black text-primary">.</span>
          </h1>
          <p className="w-[28rem] pt-5 text-lg font-light text-slate-500">
            Our solution entails a{" "}
            <span className="font-semibold text-slate-500">comprehensive</span>{" "}
            database, and an{" "}
            <span className="font-semibold text-slate-500">intuitive</span> app
            that harmoniously connects consumers with local{" "}
            <span className="font-semibold text-slate-500">ethical</span> and{" "}
            <span className="font-semibold text-slate-500">sustainable</span>{" "}
            brands.
          </p>
          <button className="mt-6 bg-slate-800 px-8 py-4 font-semibold tracking-wider text-white shadow-xl hover:bg-primary hover:shadow-none">
            Get Started
          </button>
        </div>
        <Image
          src="/images/hero-image-yellow-1.png"
          alt="hero"
          width={1000}
          height={1000}
          className="h-[32rem] w-[32rem] rounded-full object-cover brightness-[1.15] md:flex"
          priority={true}
        />
      </div>
    </div>
  );
}
