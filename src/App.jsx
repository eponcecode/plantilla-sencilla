import React from "react";
import NavbarHeader from './Components/NavBar';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Inicio from "./Components/Inicio";
import QuieneSomos from "./Components/Quienes_somos";
import Historia from "./Components/Historia";
import Servicios from "./Components/Servicios";
import Contacto from "./Components/Contacto";
import Footer from "./Components/Footer";
import Galeria from "./Components/Galeria";
function App() {
    return (
        <>
        <Router>
            <NavbarHeader />
            <br />
            <br />
            <br />
            <Switch>
                <Route exact path="/plantilla-sencilla">
                    <Inicio/>
                </Route>
                <Route exact path="/plantilla-sencilla/inicio">
                    <Inicio />
                </Route>
                <Route exact path="/plantilla-sencilla/quienes-somos">
                    <QuieneSomos />
                </Route>
                <Router exact path="/plantilla-sencilla/historia">
                    <Historia />
                </Router>
                <Router exact path="/plantilla-sencilla/servicios">
                    <Servicios />
                </Router>
                <Router exact path="/plantilla-sencilla/galeria">
                    <Galeria />
                </Router>
                <Router exact path="/plantilla-sencilla/contacto">
                    <Contacto />
                </Router>
            </Switch>
            <br />
            <br />
            <Footer />
        </Router>
        </>
    );

}
export default App;