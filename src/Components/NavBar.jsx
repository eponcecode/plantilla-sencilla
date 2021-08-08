import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavLink from 'react-router-dom/NavLink'
function NavbarHeader() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
    <Container>
    <NavLink to="/inicio">Tu sitio</NavLink>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
      <NavLink to="/quienes-somos">¿Quiénes somos?</NavLink>
        <NavLink to="/historia">Historia</NavLink>
        <NavLink to="/servicios">Servicios</NavLink>
        <NavLink to="/galeria">Galeria</NavLink>
        <NavLink to="/contacto">Contacto</NavLink>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>);
}

export default NavbarHeader;
