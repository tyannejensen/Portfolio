import { Navbar, Nav, Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import { BrowserRouter as Router } from "react-router-dom";
import React from "react";
import logo from "../../assets/img/boo/logo.png";
import "./navbar.css";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <header className="hidden">
          <h1>Tyanne Jensen</h1>
          <a href="#About-Me">About Me</a>
          <a href="#Portfolio">Portfolio</a>
          <a href="#Contact">Contact</a>
          <a href="#Resume">Resume</a>
        </header>
        <Container>
          <Navbar.Brand href="/">
            <img className="logo" src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle
            className="navbar-hamburger custom-navbar-toggler"
            aria-controls="basic-navbar-nav"
          >
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                href="#about-me"
                className={
                  activeLink === "about-me"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("about-me")}
              >
                About Me
              </Nav.Link>
              <Nav.Link
                href="#skills"
                className={
                  activeLink === "skills" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("skills")}
              >
                Skills
              </Nav.Link>
              <Nav.Link
                href="#portfolio"
                className={
                  activeLink === "portfolio"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("portfolio")}
              >
                Portfolio
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a
                  href="https://www.linkedin.com/in/tyanne-jensen-31206a229/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="white fa-brands fa-linkedin-in"></i>
                </a>
                <a
                  href="https://medium.com/@vibewithme1123"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="white fa-brands fa-medium"></i>
                </a>
                <a
                  href="https://github.com/tyannejensen"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="white fa-brands fa-github-alt"></i>
                </a>
              </div>
              <HashLink to="#connect">
                <button className="">
                  <span>Let's Connect</span>
                </button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
};
