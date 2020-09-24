import { Button, Divider, TextField, Typography } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { chackOutFormStyle } from './ChackoutFormStyle';

export default function CheckoutForm() {
  const history = useHistory();
  const classes = chackOutFormStyle();

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push('/CompleteOrder');
  };

  return (
    <>
      <Typography variant='h5'>Edit Delivery Details</Typography>
      <Divider />
      <form className={classes.root} onSubmit={(e) => handleSubmit(e)}>
        <TextField
          label='Delivery type'
          size='small'
          variant='outlined'
          fullWidth
          required
        />
        <TextField
          label='Address'
          size='small'
          variant='outlined'
          required
          fullWidth
        />
        <TextField
          label='Flat suit or floor'
          size='small'
          variant='outlined'
          fullWidth
          required
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

        <Button
          variant='contained'
          color='secondary'
          fullWidth
          type='submit'
          className={classes.button}>
          Save and continue
        </Button>
      </form>
    </>
  );
}
