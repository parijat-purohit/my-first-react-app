import './App.css';
import About from "./components/About";
import Experience from "./components/Experience";
import Intro from "./components/Intro";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="App">
      <section id="intro">
        <Intro />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;
