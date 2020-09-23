import { Button, Grid, Typography } from '@material-ui/core';
import React, { useContext } from 'react';
import { foods } from '../../Data/fakeFoodData';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { Link, useParams } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';
const { makeStyles } = require('@material-ui/core');

const useStyle = makeStyles((theme) => ({
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
  const { addToCart } = useContext(CartContext);
  const classes = useStyle();
  const { id } = useParams();
  const food = foods[id];
  return (
    <Grid container alignItems='center' justify='center'>
      <Grid item md={6}>
        <Typography variant='h3'>{food.name}</Typography>
        <Typography variant='body1'>{food.description}</Typography>
        <Grid container className={classes.grid}>
          <Typography variant='h4'>${food.price}</Typography>
        </Grid>
        <Link to='/checkout'>
          <Button
            variant='contained'
            color='secondary'
            className={classes.btnAdd}
            startIcon={<ShoppingCartOutlinedIcon />}
            onClick={() => addToCart(food)}>
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
