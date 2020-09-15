import { Box, Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
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
  const { name, image, description, price } = props.food;
  return (
    <Grid item xs={12} md={6} lg={4}>
      <Box textAlign='center'>
        <img src={image} alt={name} className={classes.image} />
        <Typography variant='h5'>{name}</Typography>
        <Typography variant='p' className={classes.description}>
          {description.slice(0, 25)}{' '}
          <span className={classes.more}>more..</span>
        </Typography>
        <Typography variant='h4'>${price}</Typography>
      </Box>
    </Grid>
  );
}
