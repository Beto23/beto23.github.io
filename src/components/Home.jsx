import React from 'react';

export default class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            messaje: `Hi, my name is Jose Albero and I'm a Front-End web developer
                        based in Saltillo Coahuila, Mexico.
                      . I like to work with the lastes tools and methodologies by keeping 
                        to date with current trends.`
        }
    }

    render() {
        return(
            <div>
                {this.state.messaje}
            </div>
        );
    }
}