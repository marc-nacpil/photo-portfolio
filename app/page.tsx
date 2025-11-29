import { Footer2 } from "@/components/footer2";
import Hero from "@/components/Hero";
import { HeroParallaxDemo } from "@/components/HeroParallax2";
import { NavbarDemo } from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-zinc-50 font-sans dark:bg-black flex flex-col min-h-screen">
      <NavbarDemo />
      <div className="flex-1 flex flex-col items-center overflow-x-hidden">
        <HeroParallaxDemo />
      </div>
      <Footer2 />
    </div>
  );
}
