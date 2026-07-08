import React from "react";
import Navbar from "./components/Navbar";
import CosmicBackground from "./components/CosmicBackground";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen text-slate-100 flex flex-col antialiased selection:bg-cyan-500/30 selection:text-white relative">
      <CosmicBackground />
      <Navbar />

      <main className="flex-grow relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;