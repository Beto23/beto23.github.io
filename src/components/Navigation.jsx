import React from 'react';
import { Link, IndexLink } from 'react-router'

import NavPicture from './NavPicture';
import NavFooter from './NavFooter';

export default class Navigation extends React.Component {

    constructor(props) {
        super(props)
        console.log(props, 'props')
        this.state = {
            name: 'José Alberto Cordoba Lugo',
            job: 'Front-End Web Developer'
        }
    }

    isActiveFunc = (match, location) => {
        console.log(match, location)
        return match
    }
    render() {
        return(
            <header>
                <div className="navigation row center-xs">
                    <div className="navigation-container">
                        <div className="navigation-info">
                            <NavPicture/>
                            <h3>{this.state.name}</h3>
                            <p>{this.state.job}</p>
                        </div>
                        <ul className="menu">
                            <li className="menu-text">
                                <IndexLink to="/" activeClassName="active">Home</IndexLink>
                            </li>
                            <li className="menu-text">
                                <Link activeClassName="active" to='/contact'>Contact</Link>
                            </li>
                        </ul>
                        <NavFooter/>
                    </div>
                </div>
            </header>
        )
    }
}