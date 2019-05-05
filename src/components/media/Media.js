import React, { Component } from 'react';
import './Media.css'
export default class Media extends Component {
    render()
    {
        return (
            <div className = 'media'>
                <h1>Media</h1> 
                <div className = 'container'>
                    <div>
                        <a class="twitter-timeline" data-height="400" data-dnt="true" data-theme="light" 
                        data-link-color="#2B7BB9" href="https://twitter.com/Third_EyeEsport?ref_src=twsrc%5Etfw">
                        Tweets by Third_EyeEsport</a> <script async src="https://platform.twitter.com/widgets.js" 
                        charset="utf-8"></script>
                    </div>
                    <div> 
                        <iframe width="100%" height="400" src="https://www.youtube.com/embed/8WVPtPtDzz0" 
                        frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen title = 'Clarity'></iframe>                 
                    </div>
                </div>
            </div>
            
        );
    }
}
