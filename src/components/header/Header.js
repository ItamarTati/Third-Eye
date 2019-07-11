import OverwatchVideo from './overwatchVideo.mp4'
import React, { PureComponent } from 'react';
import './Header.css'


class Header extends PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            isVideoVisible: false,
        };

        this.toggleVideoVisibility = this.toggleVideoVisibility.bind(this);
    }

    
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
            <header id = 'home'>
                <div >
                    <div >
                        {  (
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
                    </div>
                </div>
                { isVideoVisible && this.renderVideoModal() }
                <div><h1>The Love</h1></div>
            </header>
        );
    }
}

export default Header;
