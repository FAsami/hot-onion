import {
  Button,
  ButtonGroup,
  Grid,
  makeStyles,
  Typography,
} from '@material-ui/core';
import React from 'react';
import { foods } from './fakeFoodData';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
const useStyles = makeStyles((theme) => ({
  grid: {
    marginTop: '20px',
  },

  buttonGroup: {
    marginLeft: '20px',
    border: '1px solid black',
    boxShadow: 'none',
    borderRadius: '30px',
  },
  button: {
    border: 'none',
    boxShadow: 'none',
  },
  btnAdd: {
    marginTop: '20px',
    borderRadius: '30px',
    padding: '10px 30px',
  },
}));

export default function FoodDetails() {
  const classes = useStyles();

  const food = foods[0];
  return (
    <Grid container alignItems='center' justify='center'>
      <Grid item md={6}>
        <Typography variant='h3'>{food.name}</Typography>
        <Typography variant='p'>{food.description}</Typography>
        <Grid container className={classes.grid}>
          <Typography variant='h4'>${food.price}</Typography>

          <ButtonGroup variant='outlined' className={classes.buttonGroup}>
            <Button className={classes.button}>-</Button>
            <Button>5</Button>
            <Button className={classes.button}>+</Button>
          </ButtonGroup>
        </Grid>

        <Button
          variant='contained'
          color='secondary'
          className={classes.btnAdd}
          startIcon={<ShoppingCartOutlinedIcon />}
        >
          Add
        </Button>
      </Grid>
      <Grid item md={6}>
        <img src={food.image} alt={food.name} style={{ width: '100%' }} />
      </Grid>
    </Grid>
  );
}
