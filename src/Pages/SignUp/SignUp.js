import { Grid, Typography } from '@material-ui/core';
import React, { useContext } from 'react';
import SignUpForm from '../../Components/SignUp/SignUpForm';
import logo from '../../img/logo.png';
import GoogleSignInButton from '../../Components/GoogleSIgnInButton';
import FacebookSignInButton from '../../Components/FacebookSignInButton';
import { UserContext } from '../../Context/UserContext';

export default function SignUp() {
  const { user } = useContext(UserContext);

  return (
    <>
      <Grid container direction='row' justify='center' alignItems='center'>
        <img
          src={logo}
          alt='Hot Onion'
          style={{
            height: '60px',
            width: '200px',
            marginBottom: '20px',
            marginTop: '20px',
          }}
        />
      </Grid>
      <Grid container>
        <Grid item sm={false} md={3}></Grid>
        <Grid item sm={12} md={6}>
          <Typography variant='body2' color='error' align='center'>
            {user.errorMessage}
          </Typography>
          <SignUpForm />
          <GoogleSignInButton />
          <FacebookSignInButton />
        </Grid>
        <Grid item sm={false} md={3}></Grid>
      </Grid>
    </>
  );
}
