import {Component} from 'react' 
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css'
import {NavLink} from 'react-router-dom';

class NavbarHeader extends Component {
  render() { 
    return ( <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
    <Container >
     <NavLink activeClassName='navbar-brand' to="/plantilla-sencilla/#/inicio">Tu sitio</NavLink>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <NavLink activeClassName='nav-item nav-link' to="/plantilla-sencilla/#/quienes-somos">¿Quiénes somos?</NavLink>
         <NavLink activeClassName='nav-item nav-link' to="/plantilla-sencilla/#/historia">Historia </NavLink>
         <NavLink activeClassName='nav-item nav-link' to="/plantilla-sencilla/#/servicios">Servicios </NavLink>
         <NavLink activeClassName='nav-item nav-link' to="/plantilla-sencilla/#/galeria">Galeria </NavLink>
         <NavLink activeClassName='nav-item nav-link' to="/plantilla-sencilla/#/contacto">Contacto </NavLink>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar> );
  }
}

export default NavbarHeader;
