import React from 'react';
import NavbarHeader from './Components/NavBar';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import Inicio from './Components/Inicio';
import QuienesSomos from './Components/Quienes_somos';
import Historia from './Components/Historia';
import Servicios from './Components/Servicios';
import Contacto from './Components/Contacto';
import Footer from './Components/Footer';
import Galeria from './Components/Galeria';
function App() {
    return (
        <>
        <Router>
            <NavbarHeader />
            <br />
            <br />
            <br />
            <Switch>
                <Route exact path='/plantilla-sencilla/quienes-somos' component={QuienesSomos}/>
                <Route exact path='/plantilla-sencilla/historia' component={Historia}/>
                <Route exact path='/plantilla-sencilla/servicios' component={Servicios}/>
                <Route exact path='/plantilla-sencilla/galeria' component={Galeria}/>
                <Route exact path='/plantilla-sencilla/contacto' component={Contacto}/>
                <Route exact path='/plantilla-sencilla/' component={Inicio}/>
                <Route exact path='/plantilla-sencilla/inicio' component={Inicio}/>
            </Switch>
            <br />
            <br />
            <Footer />
        </Router>
        </>
    );

}
export default App;