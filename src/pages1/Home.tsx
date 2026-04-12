import Hero from "../components/Hero";
import Services from "../components/Services";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Resume from "../components/Resume";
import Contact from "../components/Contact";
import { Helmet } from "react-helmet-async";

<Helmet>
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Anisha Birla",
      "url": "https://anishabirla-portfolio.vercel.app/",
      "sameAs": [
  "https://www.linkedin.com/in/anishabirla",
  "https://github.com/Anisha2123",
  "https://leetcode.com/u/Anishatycon/"
],
      "jobTitle": "Full Stack Developer",
      "knowsAbout": ["React", "Node.js", "MongoDB", "Data Structures"]
    })}
  </script>
</Helmet>

const Home = () => {
  return (
    <>
    <Helmet>
        <title>Anisha Birla | MERN Stack Developer</title>

        <meta
          name="description"
          content="Anisha Birla - MERN Stack Developer with 2+ years experience. Built scalable platforms, AI systems, and production-grade applications."
        />

        <meta name="keywords" content="Anisha Birla, MERN Developer, React Developer, Full Stack Developer India" />

        {/* Open Graph (for LinkedIn/WhatsApp preview) */}
        <meta property="og:title" content="Anisha Birla Portfolio" />
        <meta
  name="description"
  content="Anisha Birla is a Full Stack MERN Developer with 2+ years experience, 500+ LeetCode problems solved (Top 15%), and expertise in building scalable AI-powered web applications and production-grade platforms."
/>
        <meta property="og:image" content="/pic6.png" />
        <meta property="og:url" content="https://anishabirla-portfolio.vercel.app/" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      {/* Your page content */}
      <Hero />
      {/* <Services /> */}
      <Projects />
      <Experience />
      <Skills />
      
      {/* <Resume /> */}
      <Contact />
    </>
  );
};

export default Home;
