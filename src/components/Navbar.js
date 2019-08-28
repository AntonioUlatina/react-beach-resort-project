import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavBar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "../TopNav.css";

export default class Navbar extends Component {
  state = {
    isOpen: false
  };
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <>
        <NavBar bg="light" expand="lg">
          <NavBar.Toggle aria-controls="basic-navbar-nav" />
          <NavBar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <div className="nav-center">
                <ul className={"nav-links show-nav"}>
                  <li>
                    <Link to="/">Home </Link>
                  </li>
                  <li>
                    <Link to="/games">Juegos</Link>
                  </li>
                </ul>
              </div>
            </Nav>
          </NavBar.Collapse>
        </NavBar>
        <nav className="navbar"></nav>
      </>
    );
  }
}
