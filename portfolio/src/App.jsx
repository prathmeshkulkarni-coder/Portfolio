import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Project.jsx";
import Contact from "./components/Contact.jsx";
import Skills from "./components/Skills.jsx";

function App() {
  return (
    <div className="bg-(--color-bg) text-white min-h-screen">
      <Hero />
      <About />
      <Projects />
      <Skills/>
      <Contact />
    </div>
  );
}

export default App;
