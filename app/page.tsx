import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Skills from "@/components/skills/Skills";
import Professors from "@/components/professors/Professors";

const Home = () => {
  return (
    <main className="main">
      <Hero />
      <About />
      <Skills />
      <Professors />
    </main>
  );
};

export default Home;
