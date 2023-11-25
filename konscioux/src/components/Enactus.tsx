import Image from "next/image";

export default function Enactus(): JSX.Element {
  return (
    <div className="stripes-slate-dark-135 flex h-full w-screen flex-col items-center justify-center bg-slate-900 px-20 py-14 pb-24">
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
        <h1 className="mt-14 text-5xl font-bold text-white">
          Konscioux&nbsp;<span className="text-primary">.</span>
        </h1>
      </div>
    </div>
  );
}

/*
<p className="mt-4 w-auto text-center text-base font-light text-white lg:w-[50rem]">
        Enactus is a{" "}
        <span className="font-medium">
          global social entrepreneurship competition
        </span>
        . It encourages andequip students to use business as an avenue to solve{" "}
        <span className="font-medium">
          crucial social andenvironmental challenges
        </span>
        . Koncioux is currently{" "}
        <span className="font-medium">one of three projects</span> of the
        Enactus student club on the University of Guelph’s campus for the Fall
        2023/Winter 2024 year.
      </p>
      */

function XSvg(): JSX.Element {
  return (
    <svg
      width="40px"
      height="40px"
      className="mt-14 fill-white"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1024 1024"
    >
      <path d="M393.29 525.61 6.38 4.12a.39.39 0 0 1 .31-.62h249.64a.39.39 0 0 1 .32.16l310.12 422.29a.39.39 0 0 1-.01.47L94.73 1020.1a.39.39 0 0 1-.31.15H6.84a.39.39 0 0 1-.31-.63l386.76-493.54a.39.39 0 0 0 0-.47ZM1015.96 1020.25h-248.2q-.41 0-.66-.33L455.3 601.94a1.33 1.32-44 0 1 .03-1.62L926.57 4.07a1.5 1.49-71 0 1 1.18-.58l89.23.02q1.1 0 .41.86L630.94 493.24a1.15 1.14 46 0 0-.02 1.38l386.51 524.91a.57.57 0 0 1 .1.49q-.23.84-.92.42-.3-.19-.65-.19Z" />
    </svg>
  );
}
