import {
  Button,
  Grid,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from '@material-ui/core';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CheckoutForm from '../../Components/CheckoutForm/CheckoutForm';
import OrderedItem from '../../Components/OrderedItem/OrderedItem';
import { CartContext } from '../../Context/CartContext';
const useStyle = makeStyles((theme) => ({
  root: {
    marginTop: '50px',
  },
  button: {
    margin: theme.spacing(1),
  },
}));

export default function Checkout() {
  const { cart, total } = useContext(CartContext);
  const classes = useStyle();
  return (
    <Grid container className={classes.root}>
      <Grid item sm={12} md={5}>
        <CheckoutForm />
        <Link to='/'>
          <Button
            variant='contained'
            color='secondary'
            size='large'
            fullWidth
            className={classes.button}>
            Add More fooDs
          </Button>
        </Link>
      </Grid>
      <Grid item sm={false} md={1} />
      <Grid item sm={12} md={6}>
        <Typography variant='h6'>From : Gulshan Restura GPR</Typography>
        <Typography variant='body1'>Arring in 20-30 min </Typography>
        <Typography variant='body2'>107 Road No -8</Typography>
        {cart.length > 0 ? (
          cart.map((item) => <OrderedItem key={item.id} food={item} />)
        ) : (
          <>
            <Typography variant='h6' align='center'>
              No items added
            </Typography>
            <Link to='/'>
              <Button variant='contained' color='secondary'>
                Add food
              </Button>
            </Link>
          </>
        )}

        <TableContainer>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>Subtotal</TableCell>
                <TableCell align='right'>{total}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Tax </TableCell>
                <TableCell align='right'>0.00 </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Typography variant='h6'> Total </Typography>
                </TableCell>
                <TableCell align='right'>
                  <Typography variant='h6'>{total}</Typography>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
}
