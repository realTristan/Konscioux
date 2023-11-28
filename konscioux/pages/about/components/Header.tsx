export default function Header(): JSX.Element {
  return (
    <div className="flex flex-col items-center justify-center gap-7">
      <h1 className="text-center text-8xl font-semibold tracking-wider text-black">
        MEET THE TEAM<span className="text-primary">.</span>
      </h1>
      <span className="mb-7 h-1.5 w-80 rounded-full bg-primary"></span>
    </div>
  );
}
