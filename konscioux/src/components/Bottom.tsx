import Image from "next/image";

export default function Bottom(): JSX.Element {
  return (
    <div className="h-full w-screen bg-black px-10 py-10">
      <div className="flex flex-col items-center justify-center gap-4">
        <Image
          src="/images/konsioux-logo-nobg-2.png"
          alt="logo"
          width={100}
          height={100}
          className="scale-[2.5] cursor-pointer"
          priority={true}
        />
        <p className="text-lg font-light text-white">
          © 2023 Konscioux. All rights reserved.
        </p>
      </div>
    </div>
  );
}
