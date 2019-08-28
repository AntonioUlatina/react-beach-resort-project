import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaAlignRight } from "react-icons/fa";
import logo from "../images/logo.svg";
import NavBar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";
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
          {/* <NavBar.Brand href="#home">
            <Image
              src={require("../images/logomep.png")}
              fluid
              style={{ height: 70, width: 70 }}
            />
          </NavBar.Brand> */}
          <NavBar.Toggle aria-controls="basic-navbar-nav" />
          <NavBar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <div className="nav-center">
                {/* Use the button below to make images change icon and same for accordion options?*/}

                {/* <div className="nav-header">
              <Link to="/">
                <img src={logo} alt="Beach Resort" />
              </Link>
              <button
                type="button"
                className="nav-btn"
                onClick={this.handleToggle}
              >
                <FaAlignRight className="nav-icon" />
              </button>
            </div> */}
                <ul
                  className={
                    this.state.isOpen ? "nav-links show-nav" : "nav-links"
                  }
                >
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
