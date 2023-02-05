import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/layoutIndex';
import Home from './components/Home/homeIndex';
import About from './components/About/aboutIndex';
import Contact from './components/Contact/contactIndex';
import Projects from './components/Projects/projectsIndex';
import Skills from './components/Skills/skillsIndex';

function App() {
  return (
  <>
  <Routes>
    <Route path="/" element={<Layout />} >
    <Route index element={<Home />} />
    <Route path="about" element={<About />} />
    <Route path="contact" element={<Contact />} />
    <Route path="projects" element={<Projects />} />
    <Route path="skills" element={<Skills />} />
    </Route>
  </Routes>
  </>  
  )
}

export default App
