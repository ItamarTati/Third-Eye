import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js'
import Content from './components/Content.js'
import Events from './components/Events.js'
import Players from './components/Players.js'
import Footer from './components/Footer.js'


class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
      <Players />
      <Content />
      <Events />
      <Footer />
      </div>
    );
  }
}

export default App;
