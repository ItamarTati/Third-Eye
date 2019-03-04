import React, { Component } from 'react';
import OverwatchVideo from './overwatch montage clarity.mp4'

export default class Header extends Component {
    render()
    {
        return (
            <div className='title'>
            <header>
                <span>
                <video id='video-background' autoPlay loop muted>
                <source src={OverwatchVideo} type='video/mp4'/>
                </video>
                    <div className="top">
                        <h1>Third-Eye Esports</h1>
                    </div>
                    <a href = '#roster'> <div class="arrow"></div> </a>  
                </span>
            </header>
            </div>
            
            
        );
    }
}
