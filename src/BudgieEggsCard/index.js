import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Budgie from '../Thumbnails/budgie.jpg';
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
          image={Budgie}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            When budgie lays the first egg, Hatching time, Growing budgie chicks.
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" style={{ textAlign: 'justify' }} >
            After meating budgie lay first egg with in 10 to 12 day's. After that she continuely lay eggs every next day  or alternet day.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to="/budgie-eggs" style={{ textDecoration: 'none' }}>
          <Button size="small" color="primary" style={{ float: 'right' }}>
            Read More
        </Button>
        </Link>
      </CardActions>
    </Card >
  );
}

