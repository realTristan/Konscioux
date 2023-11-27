import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed z-50 flex w-screen flex-row items-center justify-between bg-white px-8 py-3">
      <div className="flex flex-row items-center space-x-6">
        <Image
          src="/images/konsioux-logo-nobg-1.png"
          alt="logo"
          width={100}
          height={100}
          className="btn ml-7 scale-150 cursor-pointer"
          priority={true}
        />

        {/*<h1 className="text-4xl font-black text-black">
          Konscioux&nbsp;<span className="text-primary">.</span>
        </h1>*/}
      </div>

      <div className="flex flex-row items-center space-x-3">
        <a
          href="/"
          className="btn cursor-pointer px-5 py-3 text-base hover:bg-slate-50"
        >
          Home
        </a>
        <a
          href="#businesses"
          className="btn cursor-pointer px-5 py-3 text-base hover:bg-slate-50"
        >
          Businesses
        </a>
        <a
          href="#blog"
          className="btn cursor-pointer px-5 py-3 text-base hover:bg-slate-50"
        >
          Our Blog
        </a>
        <a
          href="#contact"
          className="btn cursor-pointer px-5 py-3 text-base hover:bg-slate-50"
        >
          Contact
        </a>
        <a
          href="#about"
          className="btn cursor-pointer px-5 py-3 text-base hover:bg-slate-50"
        >
          About us
        </a>
        <Link
          href="/login"
          className="btn bg-black px-8 py-3 text-base font-medium text-white shadow-xl hover:bg-secondary hover:text-black hover:shadow-none"
        >
          Sign in
        </Link>
      </div>
    </nav>
  );
}
