import { FiShoppingCart } from "react-icons/fi";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className=" flex full--shadow justify-between items-center h-14 px-6 bg-black fixed w-full z-50 text-white">
      <NavLink to="/">Johnny Express</NavLink>
      <NavLink to="/cart">
        <FiShoppingCart size={20} />
      </NavLink>
    </nav>
  );
};
