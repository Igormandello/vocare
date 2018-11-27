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
  },
  icon: {
    width: '60px',
    height: '60px'
  },
  item: {
    fontSize: '.9rem',
    whiteSpace: 'normal',
    height: 'auto'
  },
  list: {
    maxHeight: '80vh',
    overflowY: 'auto'
  }
});

class Popover extends React.Component {
  state = {
    open: false
  };

  handleToggle = () => {
    if (this.props.onOpen && !this.state.open)
      this.props.onOpen();

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

    let items = [];
    if (this.props.items)
      for (let item of this.props.items)
        if (item.href)
          items.push(<Link key={item.key} to={item.href}><MenuItem className={classes.item} onClick={item.onClick || this.handleClose}>{item.text}</MenuItem></Link>);
        else
          items.push(<MenuItem key={item.key} className={classes.item} onClick={item.onClick || this.handleClose}>{item.text}</MenuItem>);

    let width = 'auto';
    if (this.props.width)
      width = this.props.width;

    return (
      <div>
        <IconButton
          buttonRef={node => {
            this.anchorEl = node;
          }}
          aria-owns={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          onClick={this.handleToggle}
          color="secondary"
          className={classes.icon}>
          {this.props.children}
        </IconButton>
        <Popper open={open} anchorEl={this.anchorEl} style={{ width }} className={classes.root} transition>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              id="menu-list-grow"
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper>
                <ClickAwayListener onClickAway={this.handleClose}>
                  <MenuList className={classes.list}>
                    {items}
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