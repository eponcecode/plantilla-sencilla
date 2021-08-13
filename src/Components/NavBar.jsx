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
     <NavLink className='navbar-brand' to="/#/inicio">Tu sitio</NavLink>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <NavLink className='nav-item nav-link' to="/#/quienes-somos">¿Quiénes somos?</NavLink>
         <NavLink className='nav-item nav-link' to="/#/historia">Historia </NavLink>
         <NavLink className='nav-item nav-link' to="/#/servicios">Servicios </NavLink>
         <NavLink className='nav-item nav-link' to="/#/galeria">Galeria </NavLink>
         <NavLink className='nav-item nav-link' to="/#/contacto">Contacto </NavLink>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar> );
  }
}

export default NavbarHeader;
