import React from 'react';
import { Link, IndexLink } from 'react-router'

export default class Navigation extends React.Component {
    isActiveFunc = (match, location) => {
        console.log(match, location)
        return match
    }
    render() {
        return(
            <div className="navigation">
                <ul>
                    <li>
                        <IndexLink to="/" activeClassName="active">Home</IndexLink>
                    </li>
                    <li>
                        <Link activeClassName="active" to='/contact'>Contact</Link>
                    </li>
                </ul>
            </div>
        );
    }
}