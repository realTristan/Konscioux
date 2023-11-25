import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed z-50 flex w-screen flex-row items-center justify-between bg-white px-8 py-3">
      <div className="flex flex-row items-center space-x-6">
        <Image
          src="/images/enactus-logo-solo.png"
          alt="logo"
          width={100}
          height={100}
          className="cursor-pointer"
          priority={true}
        />

        <h1 className="text-4xl font-black slate-900">
          Konscioux&nbsp;<span className="text-primary">.</span>
        </h1>
      </div>

      <div className="flex flex-row items-center space-x-3">
        <Link
          href="/"
          className="cursor-pointer px-5 py-3 text-base hover:bg-slate-50"
        >
          Home
        </Link>
        <Link
          href="/contact"
          className="cursor-pointer px-5 py-3 text-base hover:bg-slate-50"
        >
          Contact
        </Link>
        <Link
          href="/login"
          className="text-base font-medium bg-slate-900 px-8 py-3 text-white shadow-xl hover:bg-primary hover:shadow-none"
        >
          Sign in
        </Link>
      </div>
    </nav>
  );
}
