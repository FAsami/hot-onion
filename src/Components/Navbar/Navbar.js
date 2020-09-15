import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import logo from './logo2.png';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },

  title: {
    flexGrow: 1,
  },
  logo: {
    marginRight: 'auto',
    height: '30px',
    width: '120px',
  },
  label: {
    textTransform: 'capitalize',
  },
  signInBtn: {
    borderRadius: '25px',
    paddingLeft: '20px',
    paddingRight: '20px',
    textTransform: 'capitalize',
  },
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar
        position='static'
        color='transparent'
        style={{ boxShadow: 'none' }}
      >
        <Toolbar>
          <img src={logo} alt='Logo' className={classes.logo} />
          <Button>
            <ShoppingCartOutlinedIcon />
          </Button>
          <Button color='inherit' className={classes.label}>
            Login
          </Button>
          <Button
            variant='contained'
            color='secondary'
            className={classes.signInBtn}
            size='small'
          >
            Sign up
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
