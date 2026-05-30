/*
  GRUPO TECH TUNQUÉN — Home
  Corporate Tech "Onda Tech" · Navy #0B1D3D + Cyan #38A8E0
*/
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import Pillars from "@/components/sections/Pillars";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Companies from "@/components/sections/Companies";
import Contact from "@/components/sections/Contact";
import { useReveal } from "@/hooks/useReveal";

export default function Home() {
  useReveal();

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <Pillars />
        <About />
        <Services />
        <Companies />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
