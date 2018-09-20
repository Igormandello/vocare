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
          <Route exact path="/vocare/" component={Home}/>
          <Route path="/vocare/about" component={About}/>
          <Route path="/vocare/login" component={Login}/>
          <Route path="/vocare/signup" component={Signup}/>
          <Route path="/vocare/contact" component={Contact}/>
          <Route path="/vocare/dashboard" component={Dashboard}/>
          <Route path="/vocare/settings" component={Settings}/>
          <Route path="/vocare/discover" component={Discover}/>
          <Route path="/vocare/aboutCourse" component={AboutCourse}/>
          <Route path="/vocare/discussion" component={Discussion}/>
          <Route path="/vocare/post" component={Post}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;