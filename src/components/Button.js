import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import MaterialButton from '@material-ui/core/Button';
import classNames from 'classnames';

function Button(props) {
  const { classes, children, className, text, newTab, href, variant, color, noShadow, thickBorder, onClick } = props;

  let linkProps = {};
  if (href) {
    if (!newTab) {
      linkProps['component'] = Link;
      linkProps['to'] = href;
    } else {
      linkProps['target'] = '_blank';
      linkProps['rel'] = 'noopener noreferrer';
      linkProps['href'] = href;
    }
  }

  return (
    <MaterialButton 
      variant={variant || 'outlined'}
      color={color || 'primary'}
      className={classNames(classes.root, className, noShadow ? classes.noShadow : {}, thickBorder ? classes.thick : {})}
      onClick={onClick}
      {...linkProps}
      >
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
  },
  thick: {
    borderWidth: '2px',
    '&:hover': {
      borderWidth: '2px'
    }
  }
})(Button);