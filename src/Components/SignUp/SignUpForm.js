import { Button, makeStyles, TextField, Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

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
export default function SignUpForm() {
  const classes = useStyles();

  return (
    <form className={classes.root}>
      <TextField label='Name' variant='outlined' fullWidth />
      <TextField label='Email' type='email' variant='outlined' fullWidth />
      <TextField
        label='Password'
        type='password'
        variant='outlined'
        fullWidth
      />
      <TextField
        label='Confirm Password'
        type='password'
        variant='outlined'
        fullWidth
      />
      <Button
        variant='contained'
        color='secondary'
        fullWidth
        type='submit '
        className={classes.button}
      >
        Sign in
      </Button>
      <Typography align='center' color='secondary'>
        Already have an account ?<Link className={classes.link}> Log in </Link>
      </Typography>
    </form>
  );
}
