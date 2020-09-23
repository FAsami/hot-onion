import { Box, Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
  image: {
    height: '300px',
    width: '300px',
  },
  description: {
    color: '#586776',
  },
  more: {
    color: '#218F76',
    cursor: 'pointer',
  },
}));

export default function Food(props) {
  const classes = useStyles();
  const { id, name, image, description, price } = props.food;
  return (
    <Grid item xs={12} md={6} lg={4}>
      <Box textAlign='center'>
        <Link to={`/foods/${id}`} key={id}>
          <img src={image} alt={name} className={classes.image} />
        </Link>
        <Typography variant='h6'>{name}</Typography>
        <Typography variant='body1' className={classes.description}>
          {description.slice(0, 25)}
          <span className={classes.more}> Read more..</span>
        </Typography>
        <Typography variant='h5'>${price}</Typography>
      </Box>
    </Grid>
  );
}
