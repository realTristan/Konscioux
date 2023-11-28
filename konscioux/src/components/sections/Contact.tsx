import Image from "next/image";

export default function Contact(): JSX.Element {
  return (
    <div
      id="contact"
      className="stripes-slate-dark-135 flex h-full w-screen flex-col items-center justify-center gap-4 bg-black px-20 py-14"
    >
      <h1 className="mb-3 text-center text-9xl font-semibold tracking-wider text-white">
        GET IN TOUCH<span className="text-primary">.</span>
      </h1>
      <div className="flex w-full flex-row gap-4">
        <input
          type="text"
          placeholder="Name"
          className="w-full border-b-2 border-b-black bg-white p-4 focus:outline-none"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full border-b-2 border-b-black bg-white p-4 focus:outline-none"
        />
      </div>
      <textarea
        name=""
        id=""
        cols={30}
        rows={10}
        placeholder="Message"
        className="w-full bg-white p-4 focus:outline-none"
      ></textarea>
      <button className="btn w-full bg-primary px-8 py-3 text-base font-medium tracking-wide text-white shadow-xl hover:bg-secondary hover:text-black hover:shadow-none">
        Submit
      </button>
    </div>
  );
}
