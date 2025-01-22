
import React from 'react';

import NavBar from './components/NavBar.jsx'
import HeroBanner from './components/HeroBanner.jsx';
import About from './components/About.jsx';
import Experience from './components/Experience.jsx';
import Projects from './components/Projects.jsx';
import Contact from "./components/Contact.jsx";
import Skills from "./components/Skills";
import Footer from './components/Footer.jsx';
// import NavBar from './components/NavBar.jsx';


function App() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
    <NavBar />
    <HeroBanner />
    <About />
    <Experience />
    <Projects />
    <Contact />
    <Skills />
    <Footer />
    </>
  );
}

export default App;
