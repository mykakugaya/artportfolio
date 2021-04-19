import React from "react";
import "./style.css";
import { Navbar, Nav } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";
import logo from "../../images/ceramix-logo";

export default function Navigation () {
  return (
    <div>
<Navbar expand="lg" id="navi">
  <Navbar.Toggle className="navbar-light" aria-controls="basic-navbar-nav" id="toggle-icon" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
    <Link className="inactive" activeClassName="active" exact={true} to="/">HOME
    </Link>
    <Link className="inactive" activeClassName="active" exact={true} to="/mission">MISSION
    </Link>
    <Link className="inactive" activeClassName="active" exact={true}  to="/contact">CONTACT
    </Link>
    <div className="right logoDiv">
        <p className="logoText">CERAMIX</p><Image src={logo} className="logo"/>
    </div>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    </div>
  );
}
