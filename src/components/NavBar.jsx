import { useEffect, useRef, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollPosition = useRef(0);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  useEffect(() => {
    if (!isMenuOpen) {
      return undefined;
    }

    scrollPosition.current = window.scrollY;

    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollPosition.current}px`;
    document.body.style.width = "100%";

    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";

      window.scrollTo(0, scrollPosition.current);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const desktopView = window.matchMedia("(min-width: 992px)");

    function handleDesktopView(event) {
      if (event.matches) {
        setIsMenuOpen(false);
      }
    }

    desktopView.addEventListener("change", handleDesktopView);

    return () => {
      desktopView.removeEventListener("change", handleDesktopView);
    };
  }, []);

  return (
    <Navbar
      className="site-navbar"
      fixed="top"
      expand="lg"
      expanded={isMenuOpen}
      onToggle={setIsMenuOpen}
    >
      <Container fluid className="site-navbar-inner">
        <Navbar.Brand
          className="site-navbar-logo"
          href="#home"
          aria-label="András Tóth — Home"
          onClick={closeMenu}
        >
          AT
        </Navbar.Brand>

        <Navbar.Toggle
          className="site-navbar-toggle"
          aria-controls="primary-navigation"
          aria-label={
            isMenuOpen ? "Close navigation menu" : "Open navigation menu"
          }
        >
          <span className="site-navbar-toggle-line" aria-hidden="true" />
          <span className="site-navbar-toggle-line" aria-hidden="true" />
          <span className="site-navbar-toggle-line" aria-hidden="true" />
        </Navbar.Toggle>

        <Navbar.Collapse id="primary-navigation">
          <Nav className="ms-auto" onSelect={closeMenu}>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#experience">Experience</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#creative">Creative</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;