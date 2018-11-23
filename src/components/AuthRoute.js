import React from 'react';
import { Redirect, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import '../css/FormPages.css';

function AuthRoute(props) {
  if (props.requireAuth)
    return (<Route
      path={props.path}
      exact={props.exact}
      render={(routeProps) => {
        if (props.auth.logged)
          return <props.component {...routeProps} />
        else
          return <Redirect to='/vocare/login'/>
      }}
    />)
  else
    return (<Route
      path={props.path}
      exact={props.exact}
      render={(routeProps) => {
        if (!props.auth.logged)
          return <props.component {...routeProps} />
        else
          return <Redirect to='/vocare/dashboard/'/>
      }}
    />)
}

export default withRouter(connect(
  (state) => ({ auth: state.auth })
)(AuthRoute));