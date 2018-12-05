import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import '../css/Message.css';

const styles = theme => ({
  purpleAvatar: {
    backgroundColor: purple['A100'],
    fontSize: '2rem'
  },
  avatar: {
    width: '120px',
    height: '120px'
  }
})

function Message(props) {
  const { classes } = props;

  let avatar;
  if (props.user.image)
    avatar = <Avatar aria-label="User" className={classes.avatar} src={props.user.image}/>;
  else
    avatar = <Avatar aria-label="User" className={[classes.purpleAvatar, classes.avatar].join(' ')}>
      {props.user.name.split(' ')[0][0]}
    </Avatar>;

  return (
    <div className="message">
      <div className="userProfile">
        <Badge color="secondary" className='badge' badgeContent={props.user.level}>
          {avatar}
        </Badge>
        <p className="username">{props.user.name}</p>
        <p>{props.user.messages} mensagens</p>
      </div>
      <div className="messageData">
        {props.title && <h1>{props.title}</h1>}
        <label>{props.date} - {props.time}</label>
        <p>{props.message}</p>
        {props.children}
      </div>
    </div>
  );
}

export default withStyles(styles)(Message);