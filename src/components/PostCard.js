import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import { withStyles } from '@material-ui/core/styles';
import '../css/PostCard.css';

const styles = theme => ({
  header: {
    paddingBottom: 0
  }
})

function PostCard(props) {
  const { classes } = props;

  return (
    <Card className="postCard" elevation={2}>
      <CardActionArea component={Link} to={props.link}>
        <CardHeader
          avatar={
            <Avatar aria-label="User" src={require('./assets/' + props.user.image)}/>
          }
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