import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { verifyUser } from './actions/authActions';
import AuthRoute from './components/AuthRoute';
import ScrollToTop from './components/ScrollToTop';
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
    let user;
    try {
      user = JSON.parse(localStorage.getItem('user'));
    } catch (e) {
      user = null;
    }

    if (user) {
      const { id, access_token } = user;
      if (!this.props.user || (this.props.user.access_token !== access_token && this.props.user.id !== id))
        this.props.verifyUser(id, access_token);
    }

    return (
      <BrowserRouter>
        <div className="app">
          <ScrollToTop>
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
            <AuthRoute path="/vocare/post/:id" component={Post} requireAuth/>
          </ScrollToTop>
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(
  state => ({ user: state.auth.user }),
  { verifyUser }
)(App);