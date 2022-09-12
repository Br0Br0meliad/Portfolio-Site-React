import React from "react";
import './App.css';
import About from "./components/about";
import Hero from "./components/hero";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Fun from "./components/fun"



export default function App() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Fun />
    </main>
  );
}
