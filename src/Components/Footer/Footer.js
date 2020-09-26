import React from 'react';
import { Grid, Typography, makeStyles } from '@material-ui/core';
import logo from '../../img/logo.png';

const useStyle = makeStyles({
  root: {
    backgroundColor: '#333945',
    color: '#fff',
    padding: '50px 20px',
  },
});
export default function NotFound() {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item sm={12} md={6}>
          <img src={logo} alt='Red Onion' style={{ height: '50px' }} />
          <Typography variant='body2'>
            Copyright &copy; 2020 Red Onion
          </Typography>
        </Grid>
        <Grid item container sm={12} md={6}>
          <Grid item sm={12} md={6} spacing={5}>
            <Typography variant='body2'>About online food</Typography>
            <Typography variant='body2'>Read our blog</Typography>
            <Typography variant='body2'>Sign up to deliver</Typography>
            <Typography variant='body2'>Add your restaurant </Typography>
          </Grid>
          <Grid item sm={12} md={6}>
            <Typography variant='body2'>Get help</Typography>
            <Typography variant='body2'>View FAQS</Typography>
            <Typography variant='body2'>View cities</Typography>
            <Typography variant='body2'>Restaurant near me</Typography>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
