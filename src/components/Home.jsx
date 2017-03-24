import React from 'react';

import welcome from './../assets/images/welcome.png';
import NavPicture from './NavPicture';

export default class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            message: `I'm a Front-End web developer
                        based in Saltillo Coahuila, Mexico.
                      I like to work with the latest tools and methodologies by keeping up
                        to date with current trends.`
        }
    }


    render() {
        return(
            <div className="home row center-xs middle-xs">
                <div className="home-container">
                    <img  className="home-container-img" src={welcome} alt=""/>
                    {/*<NavPicture></NavPicture>*/}
                    <p className="home-container-text">{this.state.message}</p>
                </div>
            </div>
        );
    }
}