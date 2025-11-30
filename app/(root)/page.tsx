import { ExperiencePage } from "@/components/sections/ExperiencePage";
import { FooterPage } from "@/components/layout/FooterPage";
import { HeroParallaxPage } from "@/components/sections/HeroParallaxPage";
import { TechStack } from "@/components/sections/TechStack";
import { NavbarPage } from "@/components/layout/Navbar";
import UsersPage from "../users/page";

export default function Home() {
  return (
    <div className="bg-zinc-50 font-sans dark:bg-black flex flex-col min-h-screen">
      <NavbarPage />
      <div className="flex-1 flex flex-col items-center overflow-x-hidden">
        <HeroParallaxPage />
      </div>
      <TechStack />
      <ExperiencePage />
      <UsersPage />
      <FooterPage />
    </div>
  );
}
