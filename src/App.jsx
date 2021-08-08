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
                <Route exact path="/inicio">
                    <Inicio />
                </Route>
                <Router exact path="/historia">
                    <Historia />
                </Router>
                <Router exact path="/servicios">
                    <Servicios />
                </Router>
                <Router exact path="/galeria">
                    <Galeria />
                </Router>
                <Router exact path="/contacto">
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