import { Button, Divider, TextField, Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import { chackOutFormStyle } from './ChackoutFormStyle';

export default function CheckoutForm() {
  const classes = chackOutFormStyle();
  return (
    <>
      <Typography variant='h5'>Edit Delivery Details</Typography>
      <Divider />
      <form className={classes.root}>
        <TextField
          label='Delivery type'
          size='small'
          variant='outlined'
          fullWidth
        />
        <TextField label='Address' size='small' variant='outlined' fullWidth />
        <TextField
          label='Flat suit or floor'
          size='small'
          variant='outlined'
          fullWidth
        />
        <TextField
          label='Business name'
          size='small'
          variant='outlined'
          fullWidth
        />
        <TextField
          label='Add delivery instructions'
          variant='outlined'
          multiline
          fullWidth
        />
        <Link to='/completeOrder'>
          <Button
            variant='contained'
            color='secondary'
            fullWidth
            type='submit'
            className={classes.button}>
            Save and continue
          </Button>
        </Link>
      </form>
    </>
  );
}
