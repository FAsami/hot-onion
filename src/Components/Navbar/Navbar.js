import React, { useContext } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import logo from './logo2.png';
import { Link } from 'react-router-dom';
import { useStyles } from './NavbarStyles';
import { UserContext } from '../../Context/UserContext';
import { Typography } from '@material-ui/core';

export default function Navbar() {
  const { user } = useContext(UserContext);
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar
        position='static'
        color='transparent'
        style={{ boxShadow: 'none' }}>
        <Toolbar>
          <Link to='/' className={classes.logoLink}>
            <img src={logo} alt='Logo' className={classes.logo} />
          </Link>
          <Typography variant='h6'>{user ? user.name : null}</Typography>
          <Link to='/checkout'>
            <Button>
              <ShoppingCartOutlinedIcon />
            </Button>
          </Link>

          <Link to='/login' className={classes.link}>
            <Button color='inherit' className={classes.label}>
              Login
            </Button>
          </Link>
          <Link to='/signup' className={classes.link}>
            <Button
              variant='contained'
              color='secondary'
              className={classes.signInBtn}
              size='small'>
              Sign up
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
