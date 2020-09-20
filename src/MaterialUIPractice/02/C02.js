import React from 'react';
import {
  Menu,
  Toolbar,
  Typography,
  AppBar,
  Grid,
  IconButton,
  makeStyles,
} from '@material-ui/core';
import AcUnitIcon from '@material-ui/icons/AcUnit';
const useStyle = makeStyles({
  title: {
    flexGrow: 1,
  },
});

function C02() {
  const classes = useStyle();
  return (
    <Grid container>
      <AppBar>
        <Toolbar>
          <Typography variant='h5' component='h1' className={classes.title}>
            Material UI
          </Typography>
          <IconButton color='inherit'>
            <AcUnitIcon />
          </IconButton>
          <Menu></Menu>
        </Toolbar>
      </AppBar>
    </Grid>
  );
}

export default C02;
