import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import About from "./components/about";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Fun from "./components/fun"
import './App.css'



export default function App() {
  return (
    
  <>
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Contact />
      <Fun />
</>
   
  );
}
