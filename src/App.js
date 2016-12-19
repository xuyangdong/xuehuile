import React, { Component } from 'react';
import logo from './logo.svg';
import styles from './App.scss'
import Routes from './routes'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
        </p>
        <div>
          {Routes}
        </div>
      </div>
    );
  }
}

export default App;
