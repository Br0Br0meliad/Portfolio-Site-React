import React from "react";
import Container from "react-bootstrap/esm/Container";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navigation() {
  
    return (

      <Navbar>
      <Container>
        <Navbar.Brand href="#home">Arthur Godinez</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
        <Nav.Item>
          <Nav.Link href="/Projects">Projects</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">About</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Reach out</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-3">Fun facts</Nav.Link>
        </Nav.Item>
        </Navbar.Collapse>
      </Container>
    </Navbar>
            
      );
  }



export default Navigation;
