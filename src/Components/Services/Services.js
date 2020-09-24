import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';
import TrainIcon from '@material-ui/icons/Train';
import fastDeliveryImage from '../../img/services/fastDelivery.png';
import autoResponder from '../../img/services/chef.png';
import homeDelivery from '../../img/services/homeDelivery.png';
import NotificationsIcon from '@material-ui/icons/Notifications';

function Services() {
  return (
    <Grid container direction='column'>
      <Grid item md={8} sm={12}>
        <Typography variant='h5'>Why you choose us ?</Typography>
        <Typography variant='body1'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque tempore
          ducimus esse velit amet fuga, eos minus nesciunt voluptates, molestias
          animi. Aliquam totam neque eligendi a molestias voluptas eveniet,
        </Typography>
      </Grid>
      <Grid container item>
        <Grid item md={4}>
          <ServiceCard
            image={fastDeliveryImage}
            title='Fast Delivery'
            description='Lizards are a widespread group of squamate reptiles, with over 6,000species, ranging across all continents except Antarctica'
            icon={<TrainIcon color='secondary' fontSize='large' />}
          />
        </Grid>
        <Grid item md={4}>
          <ServiceCard
            image={autoResponder}
            title='Good auto response'
            description='Lizards are a widespread group of squamate reptiles, with over 6,000species, ranging across all continents except Antarctica'
            icon={<NotificationsIcon color='secondary' fontSize='large' />}
          />
        </Grid>
        <Grid item md={4}>
          <ServiceCard
            image={homeDelivery}
            title='Good auto response'
            description='Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica'
            icon={<NotificationsIcon color='secondary' fontSize='large' />}
          />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Services;
