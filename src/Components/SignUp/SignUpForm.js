import { Button, TextField, Typography } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { signUpformStyle } from './SignUpFormStyle';
import useForms from './useForms';
import { firebaseApp } from '../../Firebase/firebaseConfig';
import { UserContext } from '../../Context/UserContext';

function SignUpForm() {
  const [isNewUser, setIsNewUser] = useState(false);
  const { user, setUser } = useContext(UserContext);
  const { pathname, state } = useLocation();

  const { from } = state || { from: { pathname: '/' } };

  const classes = signUpformStyle();
  const history = useHistory();

  const { values, errors, isFormValid, handleChange, handleSubmit } = useForms(
    isNewUser
  );

  useEffect(() => {
    if (pathname === '/signup') setIsNewUser(true);
    else setIsNewUser(false);
  }, [pathname]);

  const createNewUser = () => {
    const user = {};
    firebaseApp
      .auth()
      .createUserWithEmailAndPassword(values.email, values.password)
      .then((result) => {
        const currentUser = firebaseApp.auth().currentUser;
        currentUser
          .updateProfile({
            displayName: values.username,
          })
          .then(() => {
            user.name = result.user.displayName;
          })
          .catch((error) => {
            user.errorMessage = error.message;
          });
        user.email = result.user.email;
        setUser(user);
      })
      .catch((error) => {
        user.errorMessage = error.message;
        setUser(user);
      });
  };

  const signInUser = () => {
    firebaseApp
      .auth()
      .signInWithEmailAndPassword(values.email, values.password)
      .then((res) => {
        const user = {};
        user.email = res.user.email;
        user.name = res.user.displayName;
        setUser(user);
        history.replace(from);
      })
      .catch((error) => {
        const user = {};
        user.errorMessage = error.message;
        setUser(user);
      });
  };

  useEffect(() => {
    if (isFormValid) {
      if (isNewUser) {
        createNewUser();
      } else {
        signInUser();
      }
    }
  }, [isFormValid, isNewUser]);

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
        className={classes.button}>
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
