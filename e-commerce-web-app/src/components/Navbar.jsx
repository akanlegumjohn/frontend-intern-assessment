import { FiShoppingCart } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { useContext } from "react";

import { CartContext } from "../Layouts/MainLayoutWrapper";

export const Navbar = () => {
  const { cart } = useContext(CartContext);

  const itemCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  console.log(cart);

  return (
    <nav className=" flex full--shadow justify-between items-center h-14 px-6 bg-black fixed w-full z-50 text-white">
      <NavLink to="/">Nita Express</NavLink>
      <NavLink to="/cart">
        <span className=" relative">
          <FiShoppingCart className=" hover:text-orange-400" />
          {itemCount > 0 && (
            <span className=" absolute bg-orange-400 text-xs text-white rounded-full -top-3 px-1 py-0 -right-2">
              {itemCount}
            </span>
          )}
        </span>
      </NavLink>
    </nav>
  );
};
