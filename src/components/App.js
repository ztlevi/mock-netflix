import React, { Component } from 'react';
import './App.css';
import GridRows from './GridRows';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Netflix App</h1>
        </header>
        <GridRows />
      </div>
    );
  }
}

export default App;
