import React, { useContext } from 'react';
import { Button, makeStyles } from '@material-ui/core';
import { FcGoogle } from 'react-icons/fc';
import { handleGoogleSignIn } from './GoogleSignInManager';
import { UserContext } from '../../Context/UserContext';

const useStyle = makeStyles({
  button: {
    boxShadow: 'none',
    borderRadius: '23px',
    textTransform: 'capitalize',
    marginBottom: '10px',
    marginTop: '10px',
  },
  icon: {
    marginRight: '10px',
    paddingTop: '-5px',
  },
});

function GoogleSignInButton() {
  const { setUser } = useContext(UserContext);
  const classes = useStyle();
  return (
    <Button
      fullWidth
      variant='outlined'
      className={classes.button}
      onClick={() => handleGoogleSignIn(setUser)}>
      <FcGoogle className={classes.icon} /> SignIn with Google
    </Button>
  );
}

export default GoogleSignInButton;
