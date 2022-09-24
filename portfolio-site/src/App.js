import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import About from "./components/about";
import Hero from "./components/hero";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Fun from "./components/fun"
import './App.css'
import Container from "react-bootstrap/esm/Container";


export default function App() {
  return (
    
    <Container className="parallax">
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Fun />
    </Container>
   
  );
}
