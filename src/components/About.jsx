import React from 'react';

import its from '../assets/images/its.jpg';
import saltillo1 from '../assets/images/catedral1.jpg';
import saltillo2 from '../assets/images/catedral2.JPG';
import saltillo from '../assets/images/saltillo.png';

import Gallery from './Gallery';

export default class About extends React.Component {

    images = [
        its,
        saltillo1,
        saltillo2
    ]

    constructor(props) {
        super(props);
        this.state = {
            title: 'About me',
            text: `My name is Jose Alberto Cordoba Lugo but my friends tell me Beto,
            I am currently living in a beautiful place in Mexico called Saltillo in the state of Coahuila.`
        }
    }

    render() {
        let { title, text } = this.state;
        return(
            <div className="about">
                <div className="about-container">
                    <div className="slide row middle-xs">
                        <div className="row middle-xs around-xs">
                            <p className=" text col-xs-4">{text}</p>
                            {/*<Gallery class="col-xs-6 around-xs" images={this.images}/>*/}
                            <div className="map col-xs-6">
                                <img className="map-img" src={saltillo} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}