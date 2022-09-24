import React from "react";
import Container from "react-bootstrap/esm/Container";
import Navbar from "./navbar";

function Hero() {

    return (
        <section id="Hero">
        <Navbar />

        <Container className="intro">

        <h1 className="glow">&lt;Hello&gt;</h1>
        <h2>My name is</h2>
        <h2 className="name">ARTHUR GODINEZ</h2>
        <h3 className="title">Full-stack</h3>
        <h3>web developer</h3>

        </Container>
        </section>
        );
    }


export default Hero;