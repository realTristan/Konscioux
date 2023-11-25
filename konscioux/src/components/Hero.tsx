import Image from "next/image";

export default function Hero(): JSX.Element {
  return (
    <div className="group flex flex-row items-center justify-between mt-20 mb-24">
      <div className="pt-8 z-10 w-full">
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
        <button className="mt-6 bg-slate-800 px-8 py-4 font-semibold tracking-wider text-white shadow-xl hover:bg-primary hover:shadow-none">
          Get Started
        </button>
      </div>
      <Image
        src="/images/hero-image-yellow-1.png"
        alt="hero"
        width={1000}
        height={1000}
        className="w-[32rem] hidden md:flex rounded-full brightness-110 h-[32rem] object-cover group-hover:scale-105 duration-500 ease-in-out"
        priority={true}
      />
    </div>
  );
}
