import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: '10px',
  },
  button1: {
    borderRadius: '25px 0px 0px 25px',
    padding: '6px 0px',
    borderRight: 'none',
  },
  button2: {
    borderRadius: '0px 25px 25px 0px',
    padding: '6px 0px',
    borderLeft: 'none',
  },
  middle: {
    borderRadius: '0px 0px 0px 0px',
    padding: '5px 0px 9px 0px',
    borderLeft: 'none',
    borderRight: 'none',
    fontWeight: '900',
    fontSize: '18px',
    borderTop: '1px solid rgba(0,0,0,0.23)',
    borderBottom: '1px solid rgba(0,0,0,0.23)',
  },
}));

export default function RoundedButtonGroup(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button
        variant='outlined'
        className={classes.button1}
        onClick={props.handleLeftButton}>
        +
      </Button>
      <Typography variant='button' className={classes.middle}>
        0
      </Typography>
      <Button
        variant='outlined'
        className={classes.button2}
        onClick={props.handleRightButton}>
        -
      </Button>
    </div>
  );
}
