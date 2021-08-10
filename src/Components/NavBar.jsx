import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter,NavLink} from 'react-router-dom';

function NavbarHeader() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
    <Container >
    <BrowserRouter>
     <NavLink activeClassName='' to="/plantilla-sencilla/inicio">Tu sitio</NavLink>
     </BrowserRouter>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <NavLink activeclassName='' to="/plantilla-sencilla/quienes-somos">¿Quiénes somos?</NavLink>
         <NavLink activeclassName='' to="/plantilla-sencilla/historia">Historia </NavLink>
         <NavLink activeclassName='' to="/plantilla-sencilla/servicios">Servicios </NavLink>
         <NavLink activeclassName='' to="/plantilla-sencilla/galeria">Galeria </NavLink>
         <NavLink activeclassName='' to="/plantilla-sencilla/contacto">Contacto </NavLink>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>);
}

export default NavbarHeader;
