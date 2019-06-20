import React, { Component } from 'react';
import './App.css';
import Media from '../media/Media'
import Roster from '../roster/Roster'
import Header from '../header/Header'
import About from '../about/About'
import teamData from '../teamData'
import Navbar from '../navbar/Navbar.js'

class App extends Component {
  render() {
    return (
      <div className="App"> 
        <Navbar />
        <Header teamData={teamData} />
        <About teamData={teamData} />
        <Roster teamData={teamData} />
        <Media teamData={teamData} />
      </div>
    );
  }
}

export default App;
