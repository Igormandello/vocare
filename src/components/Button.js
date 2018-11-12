import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MaterialButton from '@material-ui/core/Button';
import classNames from 'classnames';

function Button(props) {
  const { classes, children, className, text, newTab, href, variant, color, noShadow, onClick } = props;

  return (
    <MaterialButton 
      variant={variant || 'contained'}
      color={color || 'primary'}
      className={classNames(classes.root, className, noShadow ? classes.noShadow : {})}
      onClick={onClick}
      href={href}
      target={newTab ? '_blank' : '_self'}
      rel={newTab ? 'noopener noreferrer' : ''}>
      {text}
      {children}
    </MaterialButton>
  );
}

export default withStyles({
  root: {
    height: 50,
    fontFamily: 'RobotoMedium',
    letterSpacing: '.75px',
    borderRadius: 25,
    padding: '0 25px',
    margin: '0 auto',
    transitionDuration: '.4s'
  },
  noShadow: {
    boxShadow: 'none'
  }
})(Button);