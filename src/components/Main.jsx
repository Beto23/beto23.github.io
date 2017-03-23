import React from 'react';

import Navigation from './Navigation';

export default class Main extends React.Component {
    render() {
        return(
            <div className="">
                <Navigation/>
                <div className="wrapper">
                    {this.props.children}
                </div>
            </div>
        );
    };
}