import React, { useContext } from 'react';
import { Button, makeStyles } from '@material-ui/core';
import { FaFacebook } from 'react-icons/fa';
import { handleFacebookSignIn } from './facebookSignInManager';
import { UserContext } from '../../Context/UserContext';

const useStyle = makeStyles({
  button: {
    boxShadow: 'none',
    borderRadius: '23px',
    textTransform: 'capitalize',
  },
  icon: {
    marginRight: '10px',
    paddingTop: '-5px',
    color: '#3b5998 ',
  },
});

function FacebookSignInButton() {
  const { setUser } = useContext(UserContext);
  const classes = useStyle();
  return (
    <Button
      variant='outlined'
      fullWidth
      className={classes.button}
      onClick={() => handleFacebookSignIn(setUser)}>
      <FaFacebook className={classes.icon} /> SignIn with Facebook
    </Button>
  );
}

export default FacebookSignInButton;
