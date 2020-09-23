import { Grid } from '@material-ui/core';
import React from 'react';
import mapImage from '../../img/map.png';
import bike from '../../img/bike.png';
import FiberManualRecordRoundedIcon from '@material-ui/icons/FiberManualRecordRounded';
import rider from '../../img/rider.png';
export default function CompleteOrder() {
  return (
    <Grid container>
      <Grid item sm={12} md={8}>
        <img src={mapImage} alt='Map' style={{ width: '100%' }} />
      </Grid>
      <Grid item sm={false} md={1} />
      <Grid item sm={12} md={3}>
        <img
          src={bike}
          alt='rider'
          style={{ height: '100px', width: '120px' }}
        />

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
          }}>
          <span>
            <FiberManualRecordRoundedIcon style={{ color: '#EC4849' }} />
          </span>
          <h3>Your location</h3>
        </div>
        <p>107 Rd No 8</p>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
          }}>
          <span>
            <FiberManualRecordRoundedIcon style={{ color: '#EC4849' }} />
          </span>
          <h3>Our Address : </h3>
        </div>
        <p>Gulshan, Dhaka</p>
        <h1>9:30</h1>
        <p>Estimated time to deliver</p>
        <img src={rider} alt='Helmet' />
      </Grid>
    </Grid>
  );
}
