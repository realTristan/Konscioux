import Image from "next/image";
import { useEffect } from "react";

export default function Hero(): JSX.Element {
  useEffect(() => {
    leanToMouse();
  }, []);

  return (
    <div>
      <span className="stripes-slide-down stripes-white-45 absolute -z-10 h-screen w-screen"></span>
      <div className="flex flex-row items-center justify-between px-20 pb-16 pt-14">
        <div className="z-10 w-full">
          <h1 className="black w-11/12 text-7xl font-light">
            Welcome to the Ecosystem
            <span className="font-semibold text-primary">.</span>
          </h1>
          <p className="w-[28rem] pt-5 text-lg font-light text-slate-500">
            Connecting{" "}
            <span className="font-medium text-slate-500">
              conscious consumers
            </span>{" "}
            with{" "}
            <span className="font-medium text-slate-500">
              conscious local brands
            </span>
            .
          </p>
          <button className="btn mt-6 bg-black px-8 py-4 font-normal tracking-wider text-white shadow-xl hover:bg-secondary hover:text-black hover:shadow-none">
            Get Started
          </button>
        </div>
        <Image
          src="/images/High-end-Trendy-Sunglasses-Women-with-Polarized-Lens-UV400-Protection-Wood-Temples-Luxury-Brand-Designer-Glasses.png"
          alt="hero"
          width={900}
          height={900}
          className="image-lean fade-in m-10 h-[32rem] w-[32rem] object-cover brightness-95 duration-100 md:flex"
          priority={true}
        />
      </div>
    </div>
  );
}

// when the mouse hovers over the image, the image will lean towards the mouse
function leanToMouse() {
  document.addEventListener("mousemove", (e) => {
    // get the image
    const image = document.querySelector(".image-lean") as HTMLImageElement;

    // get the x and y coordinates of the mouse
    const x = e.clientX;
    const y = e.clientY;

    // get the width and height of the image
    const width = image.clientWidth;
    const height = image.clientHeight;

    // get the x and y coordinates of the center of the image
    const centerX = image.offsetLeft + width / 2;
    const centerY = image.offsetTop + height / 2;

    // calculate the distance from the mouse to the center of the image
    const distX = x - centerX;
    const distY = y - centerY;

    // move the image
    image.style.transform = `translate(${distX / 20}px, ${distY / 20}px)`;
  });
}
