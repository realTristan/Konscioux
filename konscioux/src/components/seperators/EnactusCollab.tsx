import Image from "next/image";
import XSvg from "@/components/svgs/X";

export default function EnactusCollab(): JSX.Element {
  return (
    <div className="stripes-slate-dark-135 flex h-full w-screen flex-col items-center justify-center bg-black px-20 py-2 pb-7">
      <div className="flex flex-row items-center justify-center gap-10">
        <Image
          src="/images/enactus-logo-2.png"
          alt="Enactus"
          width={200}
          height={200}
          className="mb-4 w-72 object-cover"
          priority={true}
        />
        <XSvg />
        <Image
          src="/images/konsioux-logo-nobg-2.png"
          alt="logo"
          width={200}
          height={100}
          className="cursor-pointer pt-14"
          priority={true}
        />
      </div>
    </div>
  );
}
