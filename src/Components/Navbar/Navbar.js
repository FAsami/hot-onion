import React, { useContext } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { useStyles } from './NavbarStyles';
import { UserContext } from '../../Context/UserContext';
import { Typography } from '@material-ui/core';
import { firebaseApp } from '../../Firebase/firebaseConfig';
import ShoppingCart from './ShoppingCartButton';
import logo from '../../img/logo.png';

export default function Navbar() {
  const { user, setUser } = useContext(UserContext);
  const classes = useStyles();

  const handleSignOut = () => {
    if (user.name) {
      firebaseApp
        .auth()
        .signOut()
        .then(() => {
          setUser({});
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div className={classes.root}>
      <AppBar
        position='static'
        color='transparent'
        style={{ boxShadow: 'none' }}>
        <Toolbar>
          <Link to='/' className={classes.title}>
            <img src={logo} alt='Logo' className={classes.logo} />
          </Link>
          <Link to='/checkout'>
            <ShoppingCart />
          </Link>
          <Link to='/login' className={classes.link}>
            <Button className={classes.label} onClick={handleSignOut}>
              {user.name ? 'Logout' : 'login'}
            </Button>
          </Link>
          <Link to='/signup' className={classes.link}>
            {!user.name && (
              <Button variant='contained' color='secondary' size='small'>
                SignUp
              </Button>
            )}
          </Link>
        </Toolbar>

        <Typography variant='body1' align='right'>
          {user.name}
        </Typography>
      </AppBar>
    </div>
  );
}
