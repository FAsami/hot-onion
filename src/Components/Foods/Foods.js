import { Grid } from '@material-ui/core';
import React from 'react';
import { useParams } from 'react-router-dom';
import { foods } from '../../Data/fakeFoodData';
import Food from '../Food/Food';

export default function Foods() {
  let { time } = useParams();
  if (!time) time = 'breakfast';
  const foodItems = foods.filter((food) => food.category === time);
  return (
    <div style={{ margin: '50px 0px 50px 0px' }}>
      <Grid container spacing={3}>
        {foodItems.map((food) => (
          <Food key={food.id} food={food} />
        ))}
      </Grid>
    </div>
  );
}
