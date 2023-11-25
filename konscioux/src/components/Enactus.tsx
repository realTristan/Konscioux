import Image from "next/image";

export default function Enactus(): JSX.Element {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-20 lg:px-60 w-screen">
      <Image
        src="/images/enactus-logo-1.png"
        alt="Enactus"
        width={200}
        height={200}
        className="w-[30rem] object-cover mb-4"
        priority={true}
      />
      <p className="mt-4 text-lg font-light text-center text-slate-900 mb-12">
        Enactus is a{" "}
        <span className="font-bold">
          global social entrepreneurship competition
        </span>
        . It encourages andequip students to use business as an avenue to solve{" "}
        <span className="font-bold">
          crucial social andenvironmental challenges
        </span>
        . Koncioux is currently{" "}
        <span className="font-bold">one of three projects</span> of the Enactus
        student club on the University of Guelph’s campus for the Fall
        2023/Winter 2024 year.
      </p>
      <div className="flex flex-wrap gap-10 lg:gap-14 justify-center items-center">
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
    <div className="flex flex-col gap-2 justify-center items-center text-center">
      <Image
        src={props.image}
        alt="..."
        width={500}
        height={500}
        className="w-60 object-cover rounded-full"
        priority={true}
      />
      <h3 className="text-2xl font-bold text-slate-900">{props.name}</h3>
      <p className="text-lg font-light text-slate-900">{props.role}</p>
      <p className="text-sm font-light text-slate-900 underline">
        {props.contact}
      </p>
    </div>
  );
}

/*
import { useEffect } from "react";

const headerItem: ScrollItem = {
  id: "infosection-header",
  direction: Direction.LEFT,
};

const paraItem = {
  id: "infosection-para",
  direction: Direction.RIGHT,
};

useEffect(() => {
  window.addEventListener(
    "scroll",
    () => {
      onScrollSlideFromSides([headerItem, paraItem]);
    },
    { passive: true }
  );
}, []);
*/
