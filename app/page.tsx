import Hero from "@/components/Hero";
import { HeroParallaxDemo } from "@/components/HeroParallax2";
import { NavbarDemo } from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <NavbarDemo />
      <HeroParallaxDemo />
    </div>
  );
}
