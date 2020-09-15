import { Button, makeStyles, TextField } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  button: {
    margin: theme.spacing(1),
  },

  link: {
    textDecoration: 'none',
    color: '#EC4849',
  },
}));
export default function CheckoutForm() {
  const classes = useStyles();

  return (
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
      <Button
        variant='contained'
        color='secondary'
        fullWidth
        type='submit'
        className={classes.button}
      >
        Save and continue
      </Button>
    </form>
  );
}
