import React, { useContext } from 'react';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { CartContext } from '../../Context/CartContext';

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}))(Badge);

export default function ShoppingCart() {
  const { cart } = useContext(CartContext);
  return (
    <IconButton aria-label='cart'>
      <StyledBadge badgeContent={cart.length} color='secondary'>
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>
  );
}
