import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css'
import Link from 'react-router-dom/Link'
function NavbarHeader() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
    <Container>
    <Link to="/plantilla-sencilla/inicio"><Navbar.Brand>Tu sitio</Navbar.Brand></Link>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
      <Link to="plantilla-sencilla/quienes-somos">¿Quiénes somos?</Link>
        <Link to="plantilla-sencilla/historia">Historia</Link>
        <Link to="plantilla-sencilla/servicios">Servicios</Link>
        <Link to="plantilla-sencilla/galeria">Galeria</Link>
        <Link to="plantilla-sencilla/contacto">Contacto</Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>);
}

export default NavbarHeader;
