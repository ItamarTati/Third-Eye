import OverwatchVideo from './Overwatch Animated Short  “Dragons”.mp4'
import React, { PureComponent } from 'react';




class Header extends PureComponent {
    /**
     * Creates the HomeHero component.
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
            </header>
        );
    }
}

export default Header;
