import React from 'react';

export default class Gallery extends React.Component {

    constructor(props){
        super(props);
    }

    render() {
        let imgs = this.props.images;
        let img = imgs.map( src => {
                    return(
                        <div className="gallery-container row">
                            <img src={src} alt=""/>
                        </div>
                    )
                })
        return(
            <div className={"gallery row " + this.props.class} style={this.props.style}>
                {img}
            </div>
        );
    }
}