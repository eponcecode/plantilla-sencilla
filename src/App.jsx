import React from "react";
import NavbarHeader from './Components/NavBar';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Inicio from "./Components/Inicio";
import QuienesSomos from "./Components/Quienes_somos";
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
                <Route exact path="/plantilla-sencilla/" component={Inicio}/>
                <Route exact path="/inicio" component={Inicio}/>
                <Route exact path="/quienes-somos" component={QuienesSomos}/>
                <Router exact path="/historia" component={Historia}/>
                <Router exact path="/servicios" component={Servicios}/>
                <Router exact path="/galeria" component={Galeria}/>
                <Router exact path="/contacto" component={Contacto}/>
            </Switch>
            <br />
            <br />
            <Footer />
        </Router>
        </>
    );

}
export default App;