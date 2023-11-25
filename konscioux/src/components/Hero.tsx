import Image from "next/image";
import StripedBackground from "./StripedBackground";

export default function Hero(): JSX.Element {
  return (
    <div className="flex flex-row items-center justify-between mt-4">
      <div className="pt-8 z-10 backdrop-blur-lg w-full">
        <h1 className="text-7xl font-extrabold slate-800">
          The <span className="font-black text-primary">innovative</span>{" "}
          solution to design
          <span className="font-black text-primary">.</span>
        </h1>
        <p className="w-[28rem] pt-5 text-lg font-light text-slate-400">
          Our solution entails a{" "}
          <span className="font-semibold text-slate-500">comprehensive</span>{" "}
          database, and an{" "}
          <span className="font-semibold text-slate-500">intuitive</span> app
          that harmoniously connects consumers with local{" "}
          <span className="font-semibold text-slate-500">ethical</span> and{" "}
          <span className="font-semibold text-slate-500">sustainable</span>{" "}
          brands.
        </p>
        <button className="mt-6 bg-slate-800 px-8 py-4 font-semibold tracking-wider text-white shadow-xl hover:bg-slate-900">
          Get Started
        </button>
      </div>
      <div id="hero-image" className="relative flex flex-col gap-4 w-full">
        {/*
        <span
          id="hero-image-box-1"
          className="bg-slate-800 h-20 w-72 ml-28"
        ></span>
        <span
          id="hero-image-box-2"
          className="ml-52 mt-20 bg-slate-800 h-20 w-96"
        ></span>
        */}

        <Image
          src="/images/hero_image.png"
          alt="hero"
          width={1200}
          height={1200}
          className="w-[40rem] h-[40rem] object-cover"
          priority={true}
        />
      </div>
    </div>
  );
}
