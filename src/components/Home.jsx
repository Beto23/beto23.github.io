import React from 'react';

export default class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            slide: false
        }
        this.handleSlide = this.slide.bind(this);
    }

    slide() {
        if (this.state.slide) {
            $(this.refs.slide).slideDown();
            this.setState({
                slide: false
            });
        } else {
            $(this.refs.slide).slideUp();
            this.setState({
                slide: true
            });
            setTimeout(()=> {
                window.location.hash = '/contact';
            }, 1000)
        }
    }

    render() {
        return(
            <div>
                <input type = "button" value = "clickme" onClick = {this.handleSlide}/> 
                <br />
                <br />
                <div className= "sliddde" ref="slide" >Hola</div>
            </div>
        );
    }
}