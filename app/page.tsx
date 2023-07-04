import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Skills from "@/components/skills/Skills";
import Professors from "@/components/professors/Professors";
import Kit from "@/components/kit/Kit";
import Results from "@/components/results/Results";
import Enrol from "@/components/enrol/Enrol";

const Home = () => {
  return (
    <main className="main">
      <Hero />
      <About />
      <Skills />
      <Professors />
      <Kit />
      <Results />
      <Enrol />
    </main>
  );
};

export default Home;
