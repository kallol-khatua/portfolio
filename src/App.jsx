import "./App.css";
import Navbar from "./components/navbar/Navbar.jsx";
import Home from "./components/home/Home.jsx";
import Skill from "./components/skills/Skills.jsx";
import Education from "./components/education/Education.jsx";
import Projects from "./components/projects/Projects.jsx";
import Contact from "./components/contact/Contact.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <a name="skills"></a>
      <Skill />
      <a name="education"></a>
      <Education />
      <a name="projects"></a>
      <Projects />
      <a name="contact"></a>
      <Contact />
    </>
  );
}

export default App;
