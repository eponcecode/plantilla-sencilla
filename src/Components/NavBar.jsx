import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css'
import Link from 'react-router-dom/Link';

function NavbarHeader() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
    <Container >
     <Nav.Link> activeClassName='navbar-brand active' to="/plantilla-sencilla/inicio" >Tu sitio </Nav.Link>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link componentClass={Link} href="/plantilla-sencilla/quienes-somos" to="/plantilla-sencilla/quienes-somos">¿Quiénes somos?</Nav.Link>
         <Nav.Link componentClass={Link} href="/plantilla-sencilla/historia" to="/plantilla-sencilla/historia">Historia </Nav.Link>
         <Nav.Link componentClass={Link} href="/plantilla-sencilla/servicios" to="/plantilla-sencilla/servicios">Servicios </Nav.Link>
         <Nav.Link componentClass={Link} href="/plantilla-sencilla/galeria" to="/plantilla-sencilla/galeria">Galeria </Nav.Link>
         <Nav.Link componentClass={Link} href="/plantilla-sencilla/contacto" to="/plantilla-sencilla/contacto">Contacto </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>);
}

export default NavbarHeader;
