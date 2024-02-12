// Estos componentes de la aplicación tampoco estan creados aun, pero para allá vamos.

import HeroSection from "@/components/hero-section";
import Content from "@/components/content";
import Feature from "@/components/feature";
import Contact from "@/components/contact";

// Este es el componente principal de la aplicación, al ser un landing page todo se renderiza aquí.
export default function Home() {
  return (
    <main>
      <HeroSection />
      <Content />
      <Feature />
      <Contact />
    </main>
  );
}