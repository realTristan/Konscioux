import Image from "next/image";

interface MemberProps {
  name: string;
  role: string;
  image: string;
  contact: string;
}

export default function Member(props: MemberProps): JSX.Element {
  return (
    <div className="flex flex-col items-center justify-center gap-2 p-4 text-center">
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
