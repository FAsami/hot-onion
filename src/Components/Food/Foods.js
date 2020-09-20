import { Grid } from '@material-ui/core';
import React from 'react';
import { useParams } from 'react-router-dom';
import { foods } from './fakeFoodData';
import Food from './Food';

export default function Foods() {
  let { time } = useParams();
  if (!time) time = 'breakfast';
  const foodItems = foods.filter((food) => food.category === time);
  return (
    <div style={{ marginTop: '50px' }}>
      <Grid container spacing={3}>
        {foodItems.map((food) => (
          <Food key={food.id} food={food} />
        ))}
      </Grid>
    </div>
  );
}
