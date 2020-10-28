import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import ArrowForwardRoundedIcon from '@material-ui/icons/ArrowForwardRounded';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    boxShadow: 'none',
    padding: '20px',
  },
  button: {
    textTransform: 'capitalize',
  },
});

export default function ServiceCard({ icon, image, title, description }) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component='img'
          alt='Contemplative Reptile'
          height='140'
          image={image}
          title='Contemplative Reptile'
        />
        <CardContent>
          <Grid container>
            <Grid item>{icon}</Grid>
            <Grid item>
              <Typography
                gutterBottom
                variant='h6'
                component='h2'
                className={classes.header}>
                {title}
              </Typography>
            </Grid>
          </Grid>

          <Typography variant='body2' color='textSecondary' component='p'>
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          color='primary'
          size='small'
          className={classes.button}
          endIcon={<ArrowForwardRoundedIcon />}>
          See More
        </Button>
      </CardActions>
    </Card>
  );
}
