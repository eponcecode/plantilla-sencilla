import {Component} from 'react' 
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Link} from 'react-router-dom';

class NavbarHeader extends Component {
  render() { 
    return ( <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
    <Container >
     <Navbar.Brand componentclass={Link} to="/plantilla-sencilla/inicio" href="/plantilla-sencilla/inicio">Tu sitio</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
      <BrowserRouter>
        <Nav.Link  componentclass={Link} to="/plantilla-sencilla/quienes-somos" href="/plantilla-sencilla/quienes-somos">¿Quiénes somos?</Nav.Link>
        </BrowserRouter>
        <BrowserRouter>
         <Nav.Link componentclass={Link} to="/plantilla-sencilla/historia" href="/plantilla-sencilla/historia">Historia </Nav.Link>
         </BrowserRouter>
        <BrowserRouter>
         <Nav.Link componentclass={Link} to="/plantilla-sencilla/servicios" href="/plantilla-sencilla/servicios">Servicios </Nav.Link>
         </BrowserRouter>
        <BrowserRouter>
         <Nav.Link componentclass={Link} to="/plantilla-sencilla/galeria" href="/plantilla-sencilla/galeria">Galeria </Nav.Link>
         </BrowserRouter>
        <BrowserRouter>
         <Nav.Link componentclass={Link} to="/plantilla-sencilla/contacto" href="/plantilla-sencilla/contacto">Contacto </Nav.Link>
         </BrowserRouter>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar> );
  }
}

export default NavbarHeader;
