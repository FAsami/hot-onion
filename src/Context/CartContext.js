import React, { createContext, useState } from 'react';

const CartContext = createContext();

function CartProvider({ children }) {
  const [cart, setCart] = useState({});
  const [total, setTotal] = useState(0);
  return (
    <CartContext.Provider value={{ cart, setCart, total, setTotal }}>
      {children}
    </CartContext.Provider>
  );
}

export { CartContext, CartProvider };
