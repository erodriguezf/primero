import React, { Component } from 'react';
import fire from '../firebase';
import './Home.scss'

class Signin extends Component {

    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }
    logout() {
        fire.auth().signOut();
        window.location.reload();
    }
    render() {

        return (
            <div id="parent">
                <header className="navbar">
                    <nav>
                        <div className="nav-wrapper blue">
                            <a href="#" className="brand-logo"><img src={require("./Images/logo_transparent.png")} class="picture1" /></a>
                            <ul id="nav-mobile" className="right hide-on-med-and-down">
                                <li><a className="waves-effect waves-light btn" onClick={() => this.props.handler(false, false, false, true, false, false)}>Buscar hospedajes</a></li>
                                <li><a className="waves-effect waves-light btn" onClick={() => this.props.handler(false, false, true, false, false, false)}>Ver mi perfil</a></li>
                                <li><a className="waves-effect waves-light btn " onClick={() => this.props.handler(false, false, false, false, true, false)} >Anfitriòn</a></li>
                                <li><a className="waves-effect waves-light btn " onClick={() => this.props.handler(false, true, false, false, false, false)} >Sobre nosotros</a></li>
                                <li><a className="waves-effect waves-light btn " onClick={this.logout} >Cerrar sesión</a></li>
                            </ul>
                        </div>
                    </nav>
                </header>
            </div>
        );

    }
}
export default Signin;


