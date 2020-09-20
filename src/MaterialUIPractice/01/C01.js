import React from 'react';
import { Button, makeStyles, ThemeProvider } from '@material-ui/core';
import { theme } from './theme';
const useStyle = makeStyles({
  button: {
    textTransform: 'lowercase',
  },
});

function C01() {
  const classes = useStyle();
  return (
    <ThemeProvider theme={theme}>
      <Button className={classes.button} color='primary'>
        material ui button
      </Button>
    </ThemeProvider>
  );
}

export default C01;
