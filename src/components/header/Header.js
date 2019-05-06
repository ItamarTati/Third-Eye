import OverwatchVideo from './overwatchVideo.mp4'
import React, { PureComponent } from 'react';
import './Header.css'
import Navbar from '../navbar/Navbar.js'



//Users/itamartati/Documents/Itamar's Work/third-eye/src/Video


class Header extends PureComponent {
    /**
     * Creates the Header component.
     *
     * @param {Object} props
     * @return {void}
     */
    constructor(props) {
        super(props);

        this.state = {
            isVideoVisible: false,
        };

        this.toggleVideoVisibility = this.toggleVideoVisibility.bind(this);
    }

    /**
     * Toggles the video visibility.
     *
     * @return {void}
     */
    toggleVideoVisibility() {
        const {
            isVideoVisible,
        } = this.state;

        this.setState({ isVideoVisible: !isVideoVisible });
    }

    /**
     * Renders video modal component.
     *
     * @return {ReactNode}
     */


    /**
     * Renders component.
     *
     * @return {ReactNode}
     */
    render() {
        const {
            isVideoVisible,
        } = this.state;

        return (
            <header >
                <Navbar />
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
