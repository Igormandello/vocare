import React, { Component } from 'react';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import Drawer from '@material-ui/core/Drawer';
import { withStyles } from '@material-ui/core/styles';

const style = theme => ({
  root: {
    position: 'absolute',
    '@media only screen and (min-width: 993px)': {
      display: 'none'
    }
  }
});

class SlideMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };
  }

  handleOpen = () => {
    this.setState(() => {
      return {
        open: true
      };
    });
  }

  handleClose = () => {
    this.setState(() => {
      return {
        open: false
      };
    });
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Drawer
          open={this.state.open}
          onClose={this.handleClose}
        >
          {this.props.children}
        </Drawer>
        <IconButton onClick={this.handleOpen} color="secondary" aria-label="menu">
          <Icon>menu</Icon>
        </IconButton>
      </div>
    );
  }
}

export default withStyles(style)(SlideMenu);