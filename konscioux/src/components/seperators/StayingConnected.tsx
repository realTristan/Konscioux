export default function StayingConnected(): JSX.Element {
  return (
    <div className="stripes-slate-dark-135 flex h-full w-screen flex-col items-center justify-center bg-black px-20 py-10">
      <h1 className="text-center text-8xl font-semibold tracking-wider text-white">
        Let&rsquo;s Stay Connected<span className="text-primary">!</span>
      </h1>
      <p className="mt-7 text-center text-xl font-normal tracking-widest text-white">
        Be the first to know when we launch.
      </p>
      <button className="btn mt-6 bg-white px-12 py-4 font-medium tracking-wider text-black hover:bg-secondary">
        Subscribe
      </button>
    </div>
  );
}
