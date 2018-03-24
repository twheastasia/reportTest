import React, { Component } from 'react';
import logo from './svg/logo.svg';
import './App.css';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <Link to="/report">Report</Link>
        <br />
        <Link to="/exam">Exam</Link>
      </div>
    );
  }
}

export default App;
