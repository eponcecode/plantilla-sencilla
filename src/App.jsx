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
        <Router>
            <NavbarHeader />
            <br />
            <br />
            <br />
            <Switch>
                <Route path="/" exact>
                    <Inicio/>
                </Route>
                <Route path="/inicio">
                    <Inicio />
                </Route>
                <Route path="/quienes-somos">
                    <QuieneSomos />
                </Route>
                <Router path="/historia">
                    <Historia />
                </Router>
                <Router path="/servicios">
                    <Servicios />
                </Router>
                <Router path="/galeria">
                    <Galeria />
                </Router>
                <Router path="/contacto">
                    <Contacto />
                </Router>
            </Switch>
            <br />
            <br />
            <Footer />
        </Router>
    );

}
export default App;