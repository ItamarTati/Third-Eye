import React, { Component } from 'react';
import './App.css';
import Media from '../media/Media'
import Roster from '../roster/Roster'
import Header from '../header/Header'
import teamData from '../teamData'
// src/teamData.js

class App extends Component {
  render() {
    return (
      <div className="App"> 
        <Header teamData={teamData}/>
        <Roster teamData={teamData}/>
        <Media teamData={teamData}/>
      </div>
    );
  }
}

export default App;
