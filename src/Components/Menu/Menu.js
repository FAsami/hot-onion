import { Grid } from '@material-ui/core';
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useStyles } from './MenuStyles';

export default function Menu() {
  const classes = useStyles();
  const { time } = useParams();

  return (
    <Grid container alignItems='center' justify='center'>
      <Link
        to='/breakfast'
        className={time === 'breakfast' ? classes.activeLink : classes.link}
      >
        Breakfast
      </Link>
      <Link
        to='/lunch'
        className={time === 'lunch' ? classes.activeLink : classes.link}
      >
        Lunch
      </Link>
      <Link
        to='/dinner'
        className={time === 'dinner' ? classes.activeLink : classes.link}
      >
        Dinner
      </Link>
    </Grid>
  );
}
