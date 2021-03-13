import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Parrot from '../Thumbnails/parrot.jpg';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={Parrot}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Parrots are popular birds, but it's not good for them.
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" style={{ textAlign: 'justify' }} >
            Parrots are the one of the most popular species among birds.
            One of the main reason they are famous is that they mimic what you speak.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to="/parrot-popularity" style={{ textDecoration: 'none' }}>
          <Button size="small" color="primary">
            Read More
        </Button>
        </Link>
      </CardActions>
    </Card >
  );
}

