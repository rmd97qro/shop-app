import React, { createContext, useState } from "react";
import { getAddToCart } from '../services/ShopService';

export const CartContext = createContext();

export const CartProvider = (props) => {
  const [cart, setCart] = useState([]);

  const addToCart = async (product) => {

    await getAddToCart(product).then((res) => {
        console.log('added to cart');
    });
    const productExist = cart.some((item) => item.code === product.code);

    if (productExist) {
      setCart(
        cart.map((item) => {
          if (item.code === product.code) {
            item.count += 1;
            item.totalPrice += product.price;
          }

          return item;
        })
      );
    } else {
      setCart([
        ...cart,
        {
          code: product.code,
          name: product.name,
          price: product.price,
          totalPrice: product.price,
          count: 1,
        },
      ]);
    }
  };

  const removeToCart = (product) => {
    setCart(
      cart
        .map((item) => {
          if (item.code === product.code) {
            item.count -= 1;
            item.totalPrice -= product.price;
          }
          return item;
        })
        .filter((item) => item.count > 0)
    );
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeToCart }}>
      {props.children}
    </CartContext.Provider>
  );
};
