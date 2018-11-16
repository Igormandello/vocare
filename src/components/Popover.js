import React from 'react';
import { Link } from 'react-router-dom';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    zIndex: 1000,
    marginRight: '5px'
  }
});

class Popover extends React.Component {
  constructor(props) {
    super(props);

    let items = [];
    if (props.items)
      for (let item of props.items)
        if (item.href)
          items.push(<Link key={item.text} to={item.href}><MenuItem onClick={item.onClick || this.handleClose}>{item.text}</MenuItem></Link>);
        else
          items.push(<MenuItem key={item.text} onClick={item.onClick || this.handleClose}>{item.text}</MenuItem>);

    this.state = {
      open: false,
      items: items
    };
  }

  handleToggle = () => {
    this.setState(state => ({ open: !state.open }));
  };

  handleClose = event => {
    if (this.anchorEl.contains(event.target)) {
      return;
    }

    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
    const { classes } = this.props;

    return (
      <div>
        <IconButton
          buttonRef={node => {
            this.anchorEl = node;
          }}
          aria-owns={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          onClick={this.handleToggle}
          color="secondary">
          {this.props.children}
        </IconButton>
        <Popper open={open} anchorEl={this.anchorEl} className={classes.root} transition>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              id="menu-list-grow"
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper>
                <ClickAwayListener onClickAway={this.handleClose}>
                  <MenuList>
                    {this.state.items}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    );
  }
}

export default withStyles(styles)(Popover);