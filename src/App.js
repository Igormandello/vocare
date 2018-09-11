import React, { Component } from 'react';
import Home from './pages/Home';
import './css/App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Home/>
      </div>
    );
  }
}

export default App;