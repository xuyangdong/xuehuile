import React, { Component } from 'react';
import logo from './logo.svg';
import styles from './App.scss'
import Routes from './routes'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div style={{height:'100vh'}}>
          {Routes}
        </div>
      </div>
    );
  }
}

export default App;
