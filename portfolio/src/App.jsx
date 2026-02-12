import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Project.jsx";
import Contact from "./components/Contact.jsx";

function App() {
  return (
    <div className="bg-(--color-bg) text-white min-h-screen">
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
