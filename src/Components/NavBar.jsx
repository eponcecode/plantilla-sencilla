import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css'
import Link from 'react-router-dom/Link'
function NavbarHeader() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
    <Container>
    <Link to="/"><Navbar.Brand>Tu sitio</Navbar.Brand></Link>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="quienes-somos">¿Quiénes somos?</Nav.Link>
        <Nav.Link href="historia">Historia</Nav.Link>
        <Nav.Link href="servicios">Servicios</Nav.Link>
        <Nav.Link href="galeria">Galeria</Nav.Link>
        <Nav.Link href="contacto">Contacto</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>);
}

export default NavbarHeader;
