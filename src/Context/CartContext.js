import React, { createContext, useEffect, useState } from 'react';
const CartContext = createContext();

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const addToCart = (product) => {
    const newProduct = { ...product, amount: 1 };
    const item = [...cart].find((item) => item.id === product.id);
    if (item) {
      increaseAmount(product);
      return;
    } else {
      setCart([...cart, newProduct]);
    }
  };
  const increaseAmount = (id) => {
    const newCart = [...cart].map((item) => {
      return item.id === id
        ? { ...item, amount: item.amount + 1 }
        : { ...item, amount: 1 };
    });

    setCart(newCart);
  };
  const decreaseAmount = (id, amount) => {
    if (amount === 1) {
      const newCart = cart.filter((item) => item.id !== id);
      setCart(newCart);
      return;
    }
    const newCart = [...cart].map((item) => {
      return item.id === id
        ? { ...item, amount: item.amount - 1 }
        : { ...item };
    });
    setCart(newCart);
  };

  useEffect(() => {
    let total = cart.reduce((total, cart) => {
      return (total += cart.price * cart.amount);
    }, 0);
    setTotal(Math.round(total));
  }, [cart]);

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        total,
        setTotal,
        addToCart,
        clearCart,
        increaseAmount,
        decreaseAmount,
      }}>
      {children}
    </CartContext.Provider>
  );
}

export { CartContext, CartProvider };
