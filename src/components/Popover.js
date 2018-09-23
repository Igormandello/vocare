import React from 'react';
import '../css/Popover.css';

class Popover extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hidden: true
    };

    this.style = {
      top: 0,
      left: 0
    };
  }

  componentDidMount() {
    document.body.appendChild(this.refs[this.props.id]);
  }

  openPopover() {
    let width = this.refs[this.props.id].clientWidth;

    if (this.props.target) {
      let targetBounds = this.props.target.getBoundingClientRect();

      let offsetX = targetBounds.width / 2;
      if (this.props.position == 'center')
        offsetX -= width / 2;
      else if (this.props.position == 'right')
        offsetX -= width - 14;

      console.log(offsetX);
      if (Number.isNaN(offsetX))
        offsetX = 0;

      this.style = {
        top: targetBounds.y + targetBounds.height,
        left: targetBounds.x + offsetX
      };
    }

    this.setState(() => {
      return {
        hidden: false
      }
    })
  }

  closePopover() {
    this.setState(() => {
      return {
        hidden: true
      }
    })
  }

  render() {
    let pos = this.props.position;

    if (!this.props.position)
      pos = 'right';

    return (
      <div ref={this.props.id} style={this.style} className={'popover' + (this.state.hidden ? ' hidden' : '')}>
        <div className={'arrowShadow ' + pos} />
        <div className={'arrow ' + pos} />
        <div className="body">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Popover;