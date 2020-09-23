import { Box, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import bannerImage from '../../img/bannerbackground.png';
import SearchBar from './SearchBar';

const useStyles = makeStyles((theme) => ({
  bannerStyle: {
    backgroundImage: `url(${bannerImage})`,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '40px 0px 40px 0px',
  },
  input: {
    border: '1px solid gray',
  },
  textIntro: {
    fontWeight: '900',
  },
}));

export default function Banner() {
  const classes = useStyles();
  return (
    <Box className={classes.bannerStyle}>
      <Typography variant='h3' align='center' className={classes.textIntro}>
        BEST FOOD FOR YOU BELLY
      </Typography>
      <SearchBar />
    </Box>
  );
}
