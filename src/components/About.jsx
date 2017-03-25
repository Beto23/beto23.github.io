import React from 'react';

import its from '../assets/images/its.jpg';
import graduation1 from '../assets/images/graduation1.jpg';
import graduation2 from '../assets/images/graduation2.jpg';
import graduation3 from '../assets/images/graduation3.jpg';

import Gallery from './Gallery';

export default class About extends React.Component {

    images = [
        its,
        graduation1,
        graduation2,
        graduation3
    ]

    constructor(props) {
        super(props);
        this.state = {
            title: 'About me',
            text: `My name is Jose Alberto Cordoba Lugo but my friends tell me Beto.
            I'm 22 years old and I am currently living in a beautiful place in Mexico called Saltillo in the state of Coahuila.`,
            text2: `Some days ago I graduated from the Instituto Tecnológico de Saltillo 
                    of engineering in computer systems`
        }
    }

    render() {
        let { title, text, text2 } = this.state;
        return(
            <div className="about">
                <div className="about-container">
                    <div className="slide row middle-xs">
                        <div 
                            className="slide-container row center-xs middle-xs"
                            style={{flexDirection: 'column'}}>
                            <img className="picture" src="https://avatars1.githubusercontent.com/u/14238851?v=3&s=460" alt=""/>
                            <p className="text">{text}</p>
                            {/*<Gallery class="col-xs-6 around-xs" images={this.images}/>*/}
                        </div>
                    </div>

                    <div className="slide row middle-xs">
                        <div className="slide-container row middle-xs around-xs">
                            <p className="text">{text2}</p>
                            <Gallery 
                                style={{width: '41em'}}
                                images={this.images}
                                class="around-xs"/>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}