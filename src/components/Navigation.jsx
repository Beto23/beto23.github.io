import React from 'react';
import { Link, IndexLink } from 'react-router'

import NavPicture from './NavPicture';
import NavFooter from './NavFooter';

import beto from '../assets/images/alberto.png';

const logo = document.createElement('img');
logo.src = beto;


export default class Navigation extends React.Component {

    constructor(props) {
        super(props)
        console.log(props, 'props')
        this.state = {
            name: 'José Alberto Cordoba Lugo',
            job: 'Front-End Web Developer'
        }
        console.log(logo);
    }

    render() {
        return(
            <header className="row around-xs middle-xs">
                <div className="logo">
                    <IndexLink to="/">
                        <img src={logo.src} alt=""/>
                    </IndexLink>
                </div>
                <div className="navigation col-xs-6">
                    <ul className="row around-xs menu">
                        <li className="menu-text">
                            <Link activeClassName="active" to="/about">About me</Link>
                        </li>
                        <li className="menu-text">
                            <Link>Skills</Link>
                        </li>
                        <li className="menu-text">
                            <Link>Portafolio</Link>
                        </li>
                        <li className="menu-text">
                            <Link activeClassName="active" to="23">Certificaciones</Link>
                        </li>
                        <li className="menu-text">
                            <Link activeClassName="active" to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </header>
        )
    }
}