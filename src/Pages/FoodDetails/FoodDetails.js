import { Button, ButtonGroup, Grid, Typography } from '@material-ui/core';
import React from 'react';
import { foods } from '../../Components/Food/fakeFoodData';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { fooDetailsStyle } from './FoodDetailsStyls';
import { Link } from 'react-router-dom';

export default function FoodDetails() {
  const classes = fooDetailsStyle();

  const food = foods[0];
  return (
    <Grid container alignItems='center' justify='center'>
      <Grid item md={6}>
        <Typography variant='h3'>{food.name}</Typography>
        <Typography variant='body1'>{food.description}</Typography>
        <Grid container className={classes.grid}>
          <Typography variant='h4'>${food.price}</Typography>

          <ButtonGroup variant='outlined' className={classes.buttonGroup}>
            <Button className={classes.button}>-</Button>
            <Button>5</Button>
            <Button className={classes.button}>+</Button>
          </ButtonGroup>
        </Grid>
        <Link to='/checkout'>
          <Button
            variant='contained'
            color='secondary'
            className={classes.btnAdd}
            startIcon={<ShoppingCartOutlinedIcon />}>
            Add
          </Button>
        </Link>
      </Grid>
      <Grid item md={6}>
        <img src={food.image} alt={food.name} style={{ width: '100%' }} />
      </Grid>
    </Grid>
  );
}
