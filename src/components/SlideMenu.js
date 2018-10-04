import React from 'react';
import '../css/SlideMenu.css';

function SlideMenu(props) {
  return (
    <div className="slideMenu">
      <div className="menu-overlay"/>
      <div className="menu">
        {props.children}
      </div>
      <div className="menu-button">
        <span/>
        <span/>
        <span/>
      </div>
    </div>
  );
}

export default SlideMenu;