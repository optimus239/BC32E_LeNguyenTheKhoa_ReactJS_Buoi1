import React, { Component } from "react";
import { Button, Navbar, Container, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default class Header extends Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark" className="">
          <Container className="px-lg-5">
            <Navbar.Brand href="#home">Start Bootstrap</Navbar.Brand>
            <Nav className="ms-auto me-0">
              <Nav.Link href="#home" className="active">
                Home
              </Nav.Link>
              <Nav.Link href="#features">About</Nav.Link>
              <Nav.Link href="#pricing">Contact</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
    );
  }
}
