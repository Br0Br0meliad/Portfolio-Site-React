import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from "react-bootstrap/Card";



function Projects() {
 
    return (
        <section id="Projects">
            
        <Container>
          <Row>
            <h1>My projects, past and present</h1>
          </Row>

          <Row>
           <Col>
            <Card className="proj-card">
            <Card.Img src="portfolio-site\assets\pexels-tima-miroshnichenko-7991579.jpg"/>
            <Card.ImgOverlay>
            <Card.Title>Letterboxd Clone</Card.Title>
            <Card.Text>Created using React and React Bootstrap. It uses the OMDB API which allows the user to search and rate films.</Card.Text>
            </Card.ImgOverlay>
            </Card>
           </Col>

           <Col>
            <Card className="proj-card">
            <Card.Img 
            width={180}
            height={190}
            src="portfolio-site\assets\pexels-elviss-railijs-bitāns-1389429.jpg"/>
            <Card.ImgOverlay>
            <Card.Title>Diggr.io</Card.Title>
            <Card.Text>Website and landing page for fictional record store inventory management web app. Created using Bootstrap.</Card.Text>
            </Card.ImgOverlay>
            </Card>
           </Col>

           <Col>
            <Card className="proj-card">
            <Card.Img src="portfolio-site\assets\pexels-luis-quintero-2263816.jpg"/>
            <Card.ImgOverlay>
            <Card.Title>Hopeful videogame</Card.Title>
            <Card.Text>Indie JRPG style videogame currently in development. Uses Unity engine and scripting done in C#. Not yet released.</Card.Text>
            </Card.ImgOverlay>
            </Card>
           </Col>
          </Row>
        </Container>

        </section>
        );
    }


export default Projects;

