import React, { Component } from 'react';
import '../css/SlideMenu.css';

class SlideMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };
  }

  openMenu = () => {
    this.setState(() => {
      return {
        open: true
      };
    });
  }

  closeMenu = () => {
    this.setState(() => {
      return {
        open: false
      };
    });
  }

  render() {
    return (
      <div className={'slideMenu' + (this.state.open ? ' open' : '')}>
        <div className="menu-overlay" onClick={this.closeMenu}/>
        <div className="menu">
          {this.props.children}
        </div>
        <div className="menu-button" onClick={this.openMenu}>
          <span/>
          <span/>
          <span/>
        </div>
      </div>
    );
  }
}

export default SlideMenu;