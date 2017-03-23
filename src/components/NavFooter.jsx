import React from 'react';
import { Link } from 'react-router';

export default class NavFooter extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            facebook: 'https://www.facebook.com/beto.cordobalugo',
            linkedin: 'https://www.linkedin.com/in/jose-alberto-cordoba-lugo-4031a911a/',
            github: 'https://github.com/Beto23',
            twitter: 'https://twitter.com/BetoCL23',
            isActive: false
        }
    }
    render() {
        let {facebook, linkedin, github, twitter, isActive} = this.state;
        return(
            <div className="row around-xs navFooter">
                {/*className={"row around-xs navFooter " + (isActive ? 'show': 'hidden')}*/}
                <a href={facebook} target="_blank">
                    <i className="social-networks icon-facebook-square"></i>
                </a>
                <a href={github} target="_blank">
                    <i className="social-networks icon-github"></i>
                </a>
                <a href={twitter} target="_blank">
                    <i className="social-networks icon-twitter"></i>
                </a>
                <a href={linkedin} target="_blank">
                    <i className="social-networks icon-linkedin"></i>
                </a>
            </div>
        )
    }
}