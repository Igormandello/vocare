import React from 'react';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';

class Popover extends React.Component {
  constructor(props) {
    super(props);

    let items = [];
    if (props.items)
      for (let item of props.items)
        items.push(<MenuItem onClick={item.onClick || (() => this.closePopover())}>{item.text}</MenuItem>);

    this.state = {
      hidden: true,
      items: items
    };
  }

  togglePopover() {
    this.setState((prev) => {
      return {
        hidden: !prev.hidden
      }
    });
  }

  openPopover() {
    this.setState(() => {
      return {
        hidden: false
      }
    });
  }

  closePopover() {
    this.setState(() => {
      return {
        hidden: true
      }
    });
  }

  render() {
    return (
      <Popper open={!this.state.hidden} anchorEl={this.props.target} transition disablePortal>
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            id="menu-list-grow"
            style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
          >
            <Paper>
              <ClickAwayListener onClickAway={() => this.closePopover()}>
                <MenuList>
                  <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                  <MenuItem onClick={this.handleClose}>My account</MenuItem>
                  <MenuItem onClick={this.handleClose}>Logout</MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    );
  }
}

export default Popover;