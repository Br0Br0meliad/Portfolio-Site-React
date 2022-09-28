import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Figure from 'react-bootstrap/Figure';
import hopeful from '/Users/artie/OneDrive/Documents/GitHub/Portfolio-Site-React/portfolio-site/src/assets/Untitled design (2).png';
import diggr from '/Users/artie/OneDrive/Documents/GitHub/Portfolio-Site-React/portfolio-site/src/assets/Untitled design.png';
import cinema from '/Users/artie/OneDrive/Documents/GitHub/Portfolio-Site-React/portfolio-site/src/assets/Untitled design (1).png';


function Projects() {
 
    return (
  <section id="Projects">
            
  <Container>
  <Row>
      <h1>Projects, past and present</h1>
  </Row>

  <Row>
  <Col>
  <Figure>
    <Figure.Image
    width={412}
    height={275}
    alt="171x180"
    src={hopeful}
    />
  </Figure>
  </Col>
  <Col>
  <Figure>
    <Figure.Image
    width={412}
    height={275}
    alt="171x180"
    src={diggr}
    />
  </Figure>
  </Col>
  <Col>
  <Figure>
    <Figure.Image
    width={412}
    height={275}
    alt="171x180"
    src={cinema}
    />
  </Figure>
  </Col>
  </Row>
  </Container>

        </section>
        );
    }


export default Projects;


