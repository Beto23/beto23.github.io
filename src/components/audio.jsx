import React from 'react';

export default class Audio extends React.Component {

    constructor(props){
        super(props);
        this.handleVolumen = this.handleVolumen.bind(this);
        this.state = {
            isMuted: false,
            iconSound: 'icon-volume-high'
        }
    }

    handleVolumen() {
        this.setState({
            isMuted: !this.state.isMuted
        });
        this.handleIcon();
    }

    handleIcon() {
        let { isMuted } = this.state;
        if(isMuted) {
            this.setState({iconSound:'icon-volume-high'})
        } else {
            this.setState({iconSound:'icon-volume-mute'})
        }
    }

    componentDidMount() {
        let v = document.getElementsByTagName('audio')[0];
        v.volume = this.props.volume;
    }

    render() {
        let {isAutoPlay, WControls, audio} = this.props;
        let {iconSound} = this.state;
        return(
            <div>
                <audio
                    src={audio}
                    autoPlay={isAutoPlay}
                    controls={WControls}
                    muted={this.state.isMuted}>
                </audio>
                <i className={ "icon-sound " + iconSound } onClick={this.handleVolumen}></i>
            </div>
        )
    }
}

Audio.defaultProps = [
    {
        isAutoPlay: false,
        WControls: false,
        volume: 1
    }
]