import React, { Component } from 'react';
import './App.css';
import GridRows from './GridRows';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar position="static">
          <Toolbar>
            <Typography variant="title" color="inherit">
              Mock Netflix App
            </Typography>
          </Toolbar>
        </AppBar>
        <GridRows />
      </div>
    );
  }
}

export default App;
