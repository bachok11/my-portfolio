import "./index.css";
import Particles from "./components/Particles";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Passions from "./components/Passions";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div
      className="scanlines"
      style={{ background: "var(--dark-bg)", minHeight: "100vh" }}
    >
      <Particles />
      <Navbar />
      <main style={{ position: "relative", zIndex: 1 }}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Passions />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
