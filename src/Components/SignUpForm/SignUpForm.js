import { Button, TextField, Typography } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { signUpformStyle } from './SignUpFormStyle';
import useForms from '../../Hooks/useForms';
import { UserContext } from '../../Context/UserContext';

function SignUpForm() {
  const [isNewUser, setIsNewUser] = useState(false);
  const { user } = useContext(UserContext);
  const { pathname } = useLocation();
  const classes = signUpformStyle();
  const history = useHistory();
  const { values, loading, errors, handleChange, handleSubmit } = useForms(
    isNewUser
  );

  useEffect(() => {
    if (pathname === '/signup') setIsNewUser(true);
    else setIsNewUser(false);
  }, [pathname]);

  return (
    <form className={classes.root} onSubmit={(e) => handleSubmit(e)}>
      <h1>{user.username}</h1>
      {isNewUser && (
        <>
          <TextField
            label='Name'
            type='text'
            value={values.username}
            name='username'
            variant='outlined'
            onChange={handleChange}
            fullWidth
            required
          />
          {errors.username && (
            <Typography color='error' variant='body2'>
              {errors.username}
            </Typography>
          )}
        </>
      )}

      <TextField
        label='Email'
        name='email'
        value={values.email}
        onChange={handleChange}
        type='email'
        variant='outlined'
        fullWidth
        required
      />
      {errors.email && (
        <Typography color='error' variant='body2'>
          {errors.email}
        </Typography>
      )}

      <TextField
        label='Password'
        type='password'
        name='password'
        value={values.password}
        variant='outlined'
        onChange={handleChange}
        fullWidth
        required
      />
      {errors.password && (
        <Typography color='error' variant='body2'>
          {errors.password}
        </Typography>
      )}

      {isNewUser && (
        <>
          <TextField
            label='Confirm Password'
            type='password'
            name='password2'
            values={values.password2}
            variant='outlined'
            onChange={handleChange}
            fullWidth
            required
          />
          {errors.password2 && (
            <Typography color='error' variant='body2'>
              {errors.password2}
            </Typography>
          )}
        </>
      )}
      <Button
        variant='contained'
        color='secondary'
        fullWidth
        type='submit '
        className={classes.button}
        disabled={loading}>
        Sign in
      </Button>
      <Typography
        align='center'
        color='secondary'
        className={classes.link}
        onClick={() => {
          if (pathname === '/signup') history.replace('/login');
          if (pathname === '/login') history.replace('/signup');
        }}>
        {isNewUser ? `Don't have an account ?` : `Already have an account ?`}
        {isNewUser ? 'Sign up ' : 'Log In '}
      </Typography>
    </form>
  );
}
export default SignUpForm;
