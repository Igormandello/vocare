import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
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
      <BrowserRouter>
        <div className="app">
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/login" component={Login}/>
          <Route path="/signup" component={Signup}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/dashboard" component={Dashboard}/>
          <Route path="/settings" component={Settings}/>
          <Route path="/discover" component={Discover}/>
          <Route path="/aboutCourse" component={AboutCourse}/>
          <Route path="/discussion" component={Discussion}/>
          <Route path="/post" component={Post}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;