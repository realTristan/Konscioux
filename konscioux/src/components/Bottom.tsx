export default function Bottom(): JSX.Element {
  return (
    <div className="h-full w-screen bg-slate-900 px-10 py-10">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-6xl font-bold text-white">
          Konscioux&nbsp;<span className="text-primary">.</span>
        </h1>
        <p className="text-lg font-light text-white">
          © 2023 Konscioux. All rights reserved.
        </p>
      </div>
    </div>
  );
}
