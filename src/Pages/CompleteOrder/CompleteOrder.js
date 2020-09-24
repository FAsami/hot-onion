import { Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import bike from '../../img/bike.png';
import FiberManualRecordRoundedIcon from '@material-ui/icons/FiberManualRecordRounded';
import rider from '../../img/rider.png';
import GoogleMap from '../../Components/GoogleMap/GoogleMap';

const useStyle = makeStyles({
  container: {
    position: 'relative',
  },
});
export default function CompleteOrder() {
  const classes = useStyle();
  return (
    <Grid container>
      <Grid item sm={12} md={8} className={classes.container}>
        <GoogleMap />
      </Grid>
      <Grid item sm={false} md={1} />
      <Grid item sm={12} md={3}>
        <img
          src={bike}
          alt='rider'
          style={{ height: '100px', width: '120px' }}
        />
        <h3>
          <FiberManualRecordRoundedIcon style={{ color: '#EC4849' }} />
          Your location
        </h3>
        <p>107 Rd No 8</p>
        <h3>
          <FiberManualRecordRoundedIcon style={{ color: '#EC4849' }} />
          Our Address :
        </h3>
        <p>Gulshan, Dhaka</p>
        <h1>9:30</h1>
        <p>Estimated time to deliver</p>
        <img
          src={rider}
          alt='Helmet'
          style={{ height: '100px', width: '100px' }}
        />
      </Grid>
    </Grid>
  );
}
