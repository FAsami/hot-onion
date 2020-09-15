import { Grid } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import { useStyles } from './MenuStyles';

export default function Menu() {
  const classes = useStyles();
  return (
    <Grid container alignItems='center' justify='center'>
      <Link className={classes.link}>Breakfast</Link>
      <Link className={classes.link}>Lunch</Link>
      <Link className={classes.link}>Dinner</Link>
    </Grid>
  );
}
