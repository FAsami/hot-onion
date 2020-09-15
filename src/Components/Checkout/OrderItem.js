import {
  Button,
  ButtonGroup,
  Divider,
  Grid,
  makeStyles,
} from '@material-ui/core';
import React from 'react';
import { foods } from '../Food/fakeFoodData.js';
const useStyle = makeStyles({
  root: {
    backgroundColor: '#EAF0F1',
    marginBottom: '10px',
    borderRadius: '15px',
    padding: '5px 10px',
  },
  item: {
    marginLeft: '20px',
  },

  buttonGroup: {
    marginLeft: 'auto',
    border: '1px solid gray',
    boxShadow: 'none',
    borderRadius: '30px',
  },
  button: {
    border: 'none',
    boxShadow: 'none',
  },
});
export default function OrderItem() {
  const classes = useStyle();
  const food = foods[0];
  return (
    <Grid container alignItems='center' className={classes.root}>
      <img
        src={food.image}
        alt={food.name}
        style={{ height: '70px', width: '70px' }}
      />
      <Grid item className={classes.item}>
        <h4>{food.name.slice(0, 30)}</h4>
        <h3>${food.price}</h3>
      </Grid>
      <Grid item className={classes.buttonGroup}>
        <ButtonGroup variant='outlined' className={classes.buttonGroup}>
          <Button className={classes.button}>-</Button>
          <Button>5</Button>
          <Button className={classes.button}>+</Button>
        </ButtonGroup>
      </Grid>
    </Grid>
  );
}
