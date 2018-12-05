import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import { withStyles } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import '../css/PostCard.css';

const styles = theme => ({
  header: {
    paddingBottom: 0
  },
  purpleAvatar: {
    backgroundColor: purple['A100']
  }
})

function PostCard(props) {
  const { classes } = props;

  let avatar;
  if (props.user.image)
    avatar = <Avatar aria-label="User" src={props.user.image}/>;
  else
    avatar = <Avatar aria-label="User" className={classes.purpleAvatar}>{props.user.name.split(' ')[0][0]}</Avatar>;

  return (
    <Card className="postCard" elevation={2}>
      <CardActionArea component={Link} to={props.link}>
        <CardHeader
          avatar={avatar}
          title={props.user.name}
          subheader={props.data}
          className={classes.header}
        />
        <CardContent>
          <Typography component="p" className="title">
            {props.title}
          </Typography>
          <Typography component="p">
            {props.message}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default withStyles(styles)(PostCard);