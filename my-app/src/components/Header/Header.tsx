import React from "react";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

import "./Header.scss";
import { useHistory } from "react-router";

export const Header = () => {
  const history = useHistory();
  const handleLogout = (e: any) => {
    e.preventDefault();
    sessionStorage.removeItem("token");
    history.push("/");
    window.location.reload();
  };
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="/dashboard">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        <Nav>
          <NavDropdown
            title={<FontAwesomeIcon icon={faUser} />}
            id="collasible-nav-dropdown"
            alignRight={true}
          >
            <NavDropdown.Item href="/settings">Settings</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Activity Log</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
