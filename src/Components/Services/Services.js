import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';
import TrainIcon from '@material-ui/icons/Train';
import fastDeliveryImage from '../../img/services/fastDelivery.png';
import autoResponder from '../../img/services/chef.png';
import homeDelivery from '../../img/services/homeDelivery.png';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { LocalShipping } from '@material-ui/icons';

function Services() {
  return (
    <Grid container direction='column'>
      <Grid item sm={12}>
        <Typography variant='h4' align='center' spacing={5}>
          Why you should choose us ?
        </Typography>
        {/* <Typography variant='body1'>
          porem ipsum dolor sit amet consectetur adipisicing elit. Atque tempore
          ducimus esse velit amet fuga, eos minus nesciunt voluptates, molestias
          animi. Aliquam totam neque eligendi a molestias voluptas eveniet,
        </Typography> */}
      </Grid>
      <Grid container item>
        <Grid item md={4}>
          <ServiceCard
            image={fastDeliveryImage}
            title='Fast Delivery'
            description=' sit amet consectetur adipisicing elit. Atque tempore
            ducimus esse velit amet fuga, '
            icon={<TrainIcon color='secondary' fontSize='large' />}
          />
        </Grid>
        <Grid item md={4}>
          <ServiceCard
            image={autoResponder}
            title='Good auto response'
            description='amet consectetur adipisicing elit. Atque tempore
            ducimus esse velit amet fuga, eos '
            icon={<NotificationsIcon color='secondary' fontSize='large' />}
          />
        </Grid>
        <Grid item md={4}>
          <ServiceCard
            image={homeDelivery}
            title='Home Delivery'
            description=' Atque temp luptates, molestias animi. Aliquam totam neque eligendi a molestias voluptas eveniet,'
            icon={<LocalShipping color='secondary' fontSize='large' />}
          />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Services;
