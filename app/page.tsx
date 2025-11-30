import { ExperiencePage } from "@/components/ExperiencePage";
import { FooterPage } from "@/components/FooterPage";
import { HeroParallaxPage } from "@/components/HeroParallaxPage";
import { TechStack } from "@/components/TechStack";
import { NavbarPage } from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-zinc-50 font-sans dark:bg-black flex flex-col min-h-screen">
      <NavbarPage />
      <div className="flex-1 flex flex-col items-center overflow-x-hidden">
        <HeroParallaxPage />
      </div>
      <TechStack />
      <ExperiencePage />
      <FooterPage />
    </div>
  );
}
