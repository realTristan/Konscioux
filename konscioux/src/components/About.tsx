import Image from "next/image";
import { StripedBackgroundWhite45 } from "./StripedBackground";

export default function Team(): JSX.Element {
  return (
    <div className="relative" id="about">
      <StripedBackgroundWhite45 />

      <div className="z-50 flex h-full w-screen flex-col items-center justify-center gap-14 p-20">
        <div className="flex flex-col items-center justify-center gap-7">
          <h1 className="text-center text-7xl font-extrabold tracking-wide text-black">
            MEET THE TEAM
          </h1>
          <span className="h-1 w-80 bg-primary"></span>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-10">
          <Member
            name="Amy Alfred"
            role="Founder/Project Lead"
            image="/images/members/memberphoto-amy.png"
            contact="alfreda@uoguelph.ca"
          />
          <Member
            name="Nathan Stamenov"
            role="Club President"
            image="/images/members/memberphoto-nathan.png"
            contact="nstameno@uoguelph.ca"
          />
          <Member
            name="Yasha Sadeghi"
            role="Club Internal Vice-President"
            image="/images/members/memberphoto-yasha.png"
            contact="ysadeghi@uoguelph.ca"
          />
        </div>
      </div>
    </div>
  );
}

interface MemberProps {
  name: string;
  role: string;
  image: string;
  contact: string;
}

function Member(props: MemberProps): JSX.Element {
  return (
    <div className="flex flex-col items-center justify-center gap-2 text-center">
      <Image
        src={props.image}
        alt="..."
        width={500}
        height={500}
        className="w-60 rounded-full object-cover"
        priority={true}
      />
      <h3 className="text-2xl font-bold text-black">{props.name}</h3>
      <p className="text-lg font-light text-black">{props.role}</p>
      <p className="text-sm font-light text-black underline">{props.contact}</p>
    </div>
  );
}
