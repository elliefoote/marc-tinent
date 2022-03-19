import * as React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import './Navbar.css';

const NavBar = () => {
    return (
        <Navbar fixed="top" bg="light" expand="lg">
        <Container>
          <Navbar.Brand id="logo-text">
            <Nav.Link href="#cover">
            <span id="logo-head" className="text-dark">Marc Tinent</span><br />
            <span id="logo-body" className="ps-2 text-dark">Escritor de Cosas</span>
            </Nav.Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#latest-work">LO ÚLTIMO</Nav.Link>
              <Nav.Link href="#writing-advice">CONSEJOS DE ESCRITURA</Nav.Link>
              <Nav.Link href="#contact-me">CONTACTO</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
  }
  
  export default NavBar;
