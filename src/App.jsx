import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Achievements from "./components/Achievements/Achievements";
import Certifications from "./components/Certifications/Certifications";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import FloatingIcons from "./components/FloatingIcons";

function App() {
  return (
    <>
      <FloatingIcons />
      
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Achievements />
      <Certifications />
      <Contact />
      <Footer />
    </>
  );
}

export default App;