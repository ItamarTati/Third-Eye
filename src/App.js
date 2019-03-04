import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js'
import Media from './components/Media.js'
import Roster from './components/Roster.js'


class App extends Component {
  render() {
    return (
      <div className="App"> 
        <Header />
        <Roster />
        <Media />
      </div>
    );
  }
}

export default App;
