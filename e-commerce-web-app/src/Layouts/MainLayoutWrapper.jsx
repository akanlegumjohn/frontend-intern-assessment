import { useState, createContext } from "react";

import { MainLayout } from "./MainLayout";

export const CartContext = createContext();

export const MainLayoutWrapper = ({ children }) => {
  const [cart, setCart] = useState([]);

  // The addToCart function first checks if the product being added to the cart already exists in the cart. If it does, it increments the quantity property of the existing item by 1 using the map method. If it doesn’t, it adds a new item to the cart with a quantity property set to 1. The quantity property is added to keep track of the overall number of products that should be displayed in the cart.

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, setCart }}>
      <MainLayout>{children}</MainLayout>
    </CartContext.Provider>
  );
};
