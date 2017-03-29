import React from 'react';

export default class Card extends React.Component {

    render () {
        var {subImage, name, imgGeneral} = this.props
        return(
            <div className={"card " +  this.props.class}>
                <div className="card-about row around-xs middle-xs">
                    <img src={subImage} alt=""/>
                    <h3>{name}</h3>
                </div>
                <img className="card-img-general" src={imgGeneral} alt=""/>
            </div>
        )
    }
}