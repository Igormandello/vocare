import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AuthRoute from './components/AuthRoute';
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
          <AuthRoute exact path="/vocare/" component={Home}/>
          <AuthRoute path="/vocare/about" component={About}/>
          <AuthRoute path="/vocare/login" component={Login}/>
          <AuthRoute path="/vocare/signup" component={Signup}/>
          <AuthRoute path="/vocare/contact" component={Contact}/>
          <AuthRoute path="/vocare/dashboard" component={Dashboard} requireAuth/>
          <AuthRoute path="/vocare/settings" component={Settings} requireAuth/>
          <AuthRoute path="/vocare/discover" component={Discover} requireAuth/>
          <AuthRoute path="/vocare/aboutCourse" component={AboutCourse} requireAuth/>
          <AuthRoute path="/vocare/discussion" component={Discussion} requireAuth/>
          <AuthRoute path="/vocare/post" component={Post} requireAuth/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;