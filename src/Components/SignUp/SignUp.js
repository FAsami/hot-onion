import { Grid } from '@material-ui/core';
import React from 'react';
import SignUpForm from './SignUpForm';
import logo from '../Navbar/logo2.png';
export default function SignUp() {
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
        <Grid item sm={0} md={3}></Grid>
        <Grid item sm={12} md={6}>
          <SignUpForm />
        </Grid>
        <Grid item sm={0} md={3}></Grid>
      </Grid>
    </>
  );
}
