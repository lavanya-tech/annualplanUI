import React from "react";
import { Button,Container,Navbar,Nav } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import NavDropdown from 'react-bootstrap/NavDropdown';
const Header = () => {
    return (
      <Navbar className="mb-3" expand="lg" bg="dark" variant="dark" fixed="top" style={{width:'100%'}}>
        <Container>
        <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://www.upay.org.in/wp-content/uploads/2020/03/cropped-logo-1.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Upay
          </Navbar.Brand>
          <Nav className="ms-auto">
          <NavDropdown title="Annual Plan">
              <NavDropdown.Item as={Link} to="/viewplan">View</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/addplan">Add</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/importplan">Import</NavDropdown.Item>
            </NavDropdown>
            <NavLink className="nav-link" to="/budget">Budget Plan</NavLink>
            <NavLink className="nav-link" to="/viewcalendar">Calendar</NavLink>
          </Nav>
        </Container>
      </Navbar>
    );
}

export default Header;