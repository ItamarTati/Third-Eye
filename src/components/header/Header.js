import OverwatchVideo from './overwatchVideo.mp4'
import React, { PureComponent } from 'react';
import './Header.scss'

class Header extends PureComponent {
    
    constructor(props) {
        super(props);

        this.state = {
            isVideoVisible: false,
        };

        this.toggleVideoVisibility = this.toggleVideoVisibility.bind(this);
    }

options
    toggleVideoVisibility() {
        const {
            isVideoVisible,
        } = this.state;

        this.setState({ isVideoVisible: !isVideoVisible });
    }
    render() {
        const {
            isVideoVisible,
        } = this.state;

        return (
            <div>
            <header id = 'home' className = 'header'>        
                        {     
                        (
                            <video
                                poster= {OverwatchVideo}
                                preload="true"
                                autoPlay
                                muted
                                loop="loop"
                            >
                                <source
                                    src= {OverwatchVideo}
                                    type="video/webm"
                                />
                                <source
                                    src={OverwatchVideo}
                                    type="video/mp4"
                                />
                            </video>
                        ) }     
                { isVideoVisible && this.renderVideoModal() }
            </header>
            </div>
        );
    }
}

export default Header;
