import { Grid } from '@material-ui/core';
import React from 'react';
import { foods } from './fakeFoodData';
import Food from './Food';

export default function Foods() {
  return (
    <div style={{ marginTop: '50px' }}>
      <Grid container spacing={3}>
        {foods.map((food) => (
          <Food key={food.id} food={food} />
        ))}
      </Grid>
    </div>
  );
}
