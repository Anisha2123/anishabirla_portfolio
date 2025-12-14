import Hero from "../components/Hero";
import Services from "../components/Services";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Resume from "../components/Resume";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <Experience />
      <Skills />
      <Projects />
      {/* <Resume /> */}
      <Contact />
    </>
  );
};

export default Home;
