import React, { Component } from 'react';
import './Roster.css'
export default class Roster extends Component {
    render(){
        let teamData = this.props.teamData;
        return (
        <div className = 'roster'>   
        <div>
        <h2>{teamData.teamName}</h2>
        
        <div className='container'>
        {teamData.players.map((item)=>{
        return (
        <div className='players'>
                <img src = {(`${item.imgurl}`)} alt = {item.playerName}/> 
                <div className='players-overlay'>
                <h1>{item.playerName}</h1>
                <p>{item.playerWiki}</p>
                </div>
        </div>
        )})}
        </div>
        </div>
        </div> 
        )          
}

}
