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
    <div className="min-h-screen text-[#F8F8F8] flex flex-col antialiased selection:bg-[#D4AF37] selection:text-[#0B0B0B] relative">
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