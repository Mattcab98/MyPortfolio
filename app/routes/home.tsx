import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Skills from "./components/skills/Skills";
import { StarFieldScene } from "./components/Galaxy";
import AboutShort from "./components/about/AboutShort";

export default function Home() {
  return (
    <>
      {/* Fondo de estrellas interactivo */}
      <StarFieldScene />

      {/* Contenido principal */}
      <Hero />
      <Skills />
      <AboutShort/>
      <Skills />
    </>
  );
}
