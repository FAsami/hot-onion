import {
  Box,
  Button,
  Container,
  InputBase,
  makeStyles,
  Typography,
} from '@material-ui/core';
import React from 'react';
import bannerImage from './bannerbackground.png';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
    background: '#ffffff',
    borderRadius: '25px',
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
  bannerStyle: {
    height: '40vh',
    width: '100%',
    backgroundImage: `url(${bannerImage})`,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchBtn: {
    borderRadius: '25px',
    paddingLeft: '20px',
    paddingRight: '20px',
    textTransform: 'capitalize',
  },
}));

export default function Banner() {
  const classes = useStyles();
  return (
    <Container className={classes.bannerStyle}>
      <Typography variant='h3' component='h5' m={3}>
        Best food for you belly
      </Typography>
      <Box component='form' className={classes.root}>
        <InputBase
          className={classes.input}
          placeholder='Search best foods'
          inputProps={{ 'aria-label': 'Search' }}
        />
        <Button
          variant='contained'
          color='secondary'
          className={classes.searchBtn}
        >
          Search
        </Button>
      </Box>
    </Container>
  );
}
