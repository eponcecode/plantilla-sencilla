import React from 'react';
import NavbarHeader from './Components/NavBar';
import {
    BrowserRouter,
    HashRouter,
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
        <HashRouter basename='/plantilla-sencilla'>
            <NavbarHeader />
            <br />
            <br />
            <br />
            <Switch>
                <Route exact path='/quienes-somos' component={QuienesSomos}  />
                <Route exact path='/historia' component={Historia}/>
                <Route exact path='/servicios' component={Servicios} />
                <Route exact path='/galeria' component={Galeria}/>
                <Route exact path='/contacto' component={Contacto} />
                <Route exact path='/' component={Inicio} />
                <Route exact path='/inicio' component={Inicio} />
            </Switch>
            <br />
            <br />
            <Footer />
        </HashRouter>
        </>
    );

}
export default App;