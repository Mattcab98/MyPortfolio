import Hero from "./components/hero/Hero";
import Skills from "./components/skills/Skills";
import { StarFieldScene } from "./components/Galaxy";
import AboutShort from "./components/about/AboutShort";
import ProjectsShort from "./components/projects/ProjectsShort";

export default function Home() {
  return (
    <>
      <StarFieldScene />
      <Hero />
      <AboutShort />
      <Skills />
      <ProjectsShort/>
    </>
  );
}
