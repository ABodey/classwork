import React, { Component } from 'react';
import Crews from './crews/Crews';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Pirates</h1>
        </header>
        <Crews/>
      </div>
    );
  }
}

export default App;
