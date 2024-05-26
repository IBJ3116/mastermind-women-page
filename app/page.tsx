import Navbar from "./components/Navbar";
import { herobg } from "@/public/assets";
import Image from "next/image";
import Hero from "./components/Hero";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Holistic from "./components/Holistic";
import Sponsor from "./components/Sponsor";

export default function Home() {
  return (
    <main>
      <div className="w-screen">
        <Image
          className="absolute h-screen w-screen object-cover"
          width={1024}
          src={herobg}
          alt="background of mother and child hugging"
        />
        <Navbar />
        <Hero />
      </div>

      <div>
        <Section2 />
      </div>

      <div>
        <Section3 />
      </div>

      <div>
        <Section4 />
      </div>

      {/* <div>
      <footer className="bg-gray-800 py-16"></footer>
     </div> */}

      <div>
        <Holistic />
      </div>

      <div>
        <Sponsor />
      </div>
    </main>
  );
}
