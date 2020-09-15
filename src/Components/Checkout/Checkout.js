import { Divider, Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import CheckoutForm from './CheckoutForm';
import OrderItem from './OrderItem';

const useStyle = makeStyles({
  root: {
    marginTop: '50px',
  },
});

export default function Checkout() {
  const classes = useStyle();
  return (
    <Grid container className={classes.root}>
      <Grid sm={12} md={5}>
        <Typography variant='h5'>Edit Delivery Details</Typography>
        <Divider />
        <CheckoutForm />
      </Grid>
      <Grid sm={0} md={1}></Grid>
      <Grid sm={12} md={6}>
        <Typography variant='h6'>From : Gulshan Restura GPR</Typography>
        <Typography variant='p'>Arring in 20-30 min </Typography> <br />
        <Typography variant='p'>107 Road No -8</Typography>
        <OrderItem />
        <OrderItem />
        <OrderItem />
        <h4>Subtotal : 12.00</h4>
        <p>Tax : 2.00</p>
        <Divider />
        <h3>Total : 1200.20</h3>
      </Grid>
    </Grid>
  );
}
