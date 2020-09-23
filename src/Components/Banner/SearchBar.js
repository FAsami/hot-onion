import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 2px',
    display: 'flex',
    backgroundColor: '#fff',
    width: '80vw',
    maxWidth: '500px',
    boxShadow: 'none',
    borderRadius: '25px',
    marginTop: '20px',
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
}));

export default function SearchBar() {
  const classes = useStyles();

  return (
    <Paper component='form' className={classes.root}>
      <InputBase className={classes.input} placeholder='Search Best  Food' />
      <IconButton
        type='submit'
        className={classes.iconButton}
        aria-label='search'>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
