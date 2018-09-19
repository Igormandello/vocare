import React, { Component } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';
import Settings from './pages/Settings';
import Post from './pages/Post';
import Discussion from './pages/Discussion';
import Discover from './pages/Discover';
import AboutCourse from './pages/AboutCourse';
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