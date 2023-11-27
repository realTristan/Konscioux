import Image from "next/image";
import { StripedBackgroundWhite45 } from "./StripedBackground";

export default function Businesses(): JSX.Element {
  return (
    <div className="relative h-full w-screen" id="businesses">
      <StripedBackgroundWhite45 />

      <div className="flex h-[600px] flex-wrap items-center justify-center gap-4">
        <Business
          name="Konscioux"
          image="/images/High-end-Trendy-Sunglasses-Women-with-Polarized-Lens-UV400-Protection-Wood-Temples-Luxury-Brand-Designer-Glasses.png"
          description="Konscioux is a student-led organization focused on promoting fashion."
          link="https://konscioux.com/"
        />
        <Business
          name="Gucci"
          image="https://s1.r29static.com/bin/entry/0a0/720x725,85/1776807/image.webp"
          description="Gucci is an Italian luxury brand of fashion and leather goods."
          link="https://www.gucci.com/"
        />
        <Business
          name="Prada"
          image="https://static.arrajol.com/users/user471296/Screenshot%202023-06-27%20at%202.20.02%20AM.jpg"
          description="Prada S.p.A. is an Italian luxury fashion house founded in 1913 in Milan by Mario Prada."
          link="https://www.prada.com/"
        />
      </div>
    </div>
  );
}

interface BusinessProps {
  name: string;
  image: string;
  description: string;
  link: string;
}

function Business(props: BusinessProps): JSX.Element {
  return (
    <div className="flex h-auto w-auto flex-col items-start justify-start gap-2 p-4 text-center hover:bg-slate-100">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={props.image}
        alt="..."
        width={300}
        height={300}
        className="h-[300px] w-[300px] brightness-90"
      />
      <div className="my-2 flex h-full w-full flex-col rounded-lg text-left">
        <h3 className="text-2xl font-semibold uppercase text-black">
          {props.name}
          &nbsp;<span className="text-primary">.</span>
        </h3>
        <p className="mb-2 text-sm font-light text-black">Fashion</p>
        <p className="w-[300px] text-sm font-light text-black">
          {props.description}
        </p>
        <a
          href={props.link}
          className="btn text-xs font-light text-black underline"
        >
          {props.link}
        </a>
      </div>
    </div>
  );
}
