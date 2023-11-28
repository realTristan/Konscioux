import { Poppins } from "next/font/google";
import Header from "./components/Header";
import MemberList from "./components/MemberList";
import Head from "next/head";

import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import CustomCursor from "@/components/dynamic/CustomCursor";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  subsets: ["latin"],
});

export default function Team(): JSX.Element {
  return (
    <div className={poppins.className}>
      <Head>
        <title>Konscioux | Team</title>
      </Head>

      <Navbar />
      <CustomCursor />

      <main className="stripes-slide-down stripes-white-45 relative flex h-screen w-screen flex-col items-center justify-center pt-32">
        <Header />
        <MemberList />
      </main>
    </div>
  );
}
