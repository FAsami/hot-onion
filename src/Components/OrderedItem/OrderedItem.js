import { Button, ButtonGroup, Grid } from '@material-ui/core';
import React, { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';

function OrderedItem(props) {
  const food = props.food;
  const { increaseAmount, decreaseAmount } = useContext(CartContext);
  return (
    <Grid container alignItems='center'>
      <Grid item xs={3}>
        <img
          src={food.image}
          alt={food.name}
          style={{ height: '70px', width: '70px' }}
        />
      </Grid>
      <Grid item xs={6}>
        <h4>{food.name.slice(0, 30)}</h4>
        <h3>${food.price}</h3>
      </Grid>
      <Grid item xs={3}>
        <ButtonGroup
          color='secondary'
          aria-label='outlined primary button group'>
          <Button onClick={() => increaseAmount(food.id)}> +</Button>
          <Button>{food.amount}</Button>
          <Button onClick={() => decreaseAmount(food.id, food.amount)}>
            {food.amount === 1 ? 'X' : '-'}
          </Button>
        </ButtonGroup>
      </Grid>
    </Grid>
  );
}
export default OrderedItem;
