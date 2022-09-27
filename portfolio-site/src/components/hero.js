import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

function Hero() {

    return (
        <section id="Hero">

        <Container className="HeroText">
        <Row>
            <Col md="auto"><span className="glow">&lt;Hello&gt;</span></Col>
        </Row>
        <Row>
            <Col sm="1"></Col>
            <Col md="auto"><p className="title">My name is: ARTHUR GODINEZ</p></Col>
        </Row>
        <Row>
            <Col sm="1"></Col>
            <Col md="auto"><p className="title">Full-stack web developer</p></Col>
        </Row>
        <Row>
            <Col sm="1"></Col>
            <Col md="auto"><p className="title">I build responsive, accessible, and functional websites and web apps. </p></Col>
        </Row>
        <Row>
            <Col md="auto"><span className="glow">&lt;/Hello&gt;</span></Col>
        </Row>
        
        </Container>
        </section>
        );
    }


export default Hero;