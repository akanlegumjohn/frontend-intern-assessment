import { Link, useNavigate } from "react-router-dom";
import { MdOutlineDelete } from "react-icons/md";
import { useContext, useState } from "react";
import { toast } from "react-toastify";

import { CartContext } from "../Layouts/MainLayoutWrapper";

export const CheckoutPage = () => {
  const { cart, setCart, setCheckoutData } = useContext(CartContext);
  const [phoneNumber, setPhoneNumber] = useState("");
  const navigate = useNavigate();

  const updateQuantity = (id, delta) => {
    setCart((prevCart) =>
      // Map over the previous cart state to create a new cart state
      prevCart.map((item) => {
        // Check if the current item is the one we want to update
        if (item.id === id) {
          // Calculate the new quantity by adding delta to the current quantity
          const newQuantity = item.quantity + delta;
          // Check if the new quantity is within the valid range (between 1 and item.stock)
          if (newQuantity >= 1 && newQuantity <= item.stock) {
            // If it is, update the quantity of the item
            return { ...item, quantity: newQuantity };
          }
        }
        // If the current item is not the one we want to update, or if the new quantity is not within the valid range, return the item unchanged
        return item;
      })
    );
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const itemCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  const handleSubmit = (event) => {
    event.preventDefault();
    setCheckoutData({ phoneNumber });
    setCart([]);
    navigate("/checkout-successful");
  };
  if (cart.length === 0) {
    return (
      <div className=" flex flex-col items-center justify-center h-screen text-3xl gap-4">
        <h2 className="  font-semibold">Cart is Empty!</h2>
        <Link
          to="/"
          className=" text- text-lg bg-orange-400 text-white px-2 py-1 rounded-md"
        >
          Explore
        </Link>
      </div>
    );
  }
  return (
    <section className="flex lg:flex-row flex-col gap-4">
      <div className=" bg-white pt-2 px-6 rounded-md w-full shadow-lg ">
        <div className=" py-1 text-lg font-semibold">Cart ({itemCount})</div>
        <hr className=" w-full border border-gray-300" />
        {cart.map((item) => {
          const {
            id,
            images,
            title,
            quantity,
            price,
            description,
            discountPercentage,
          } = item;
          return (
            <div key={id} className="">
              <div className=" flex justify-between md:flex-row flex-col py-4 gap-10 md:gap-0">
                <div className="flex flex-col-reverse md:items-start items-center gap-2">
                  <div className=" flex items-center  flex-col md:flex-row gap-4">
                    <Link to={`/products/${id}`}>
                      <img
                        src={images[0]}
                        className=" w-40 h-40 md:w-20 md:h-20 rounded-md cursor-pointer"
                        alt={`An Image of ${title}`}
                      />
                    </Link>
                    <div>
                      <h2 className="text-lg font-semibold capitalize">
                        {title}
                      </h2>{" "}
                      <p className=" text-gray-500">{description}</p>
                    </div>
                  </div>
                  <button
                    className=" px-2 py-1 text-red-500 w-28 hover:bg-red-400 font-semibold hover:text-white rounded-full flex items-center gap-1 text-lg"
                    onClick={() => {
                      removeFromCart(id);
                      toast.warn(`${title} product removed from cart`);
                    }}
                  >
                    <span>
                      <MdOutlineDelete />
                    </span>
                    <span> Remove</span>
                  </button>
                </div>

                <div className="flex items-center flex-col justify-between text-lg gap-3 md:gap-0">
                  <p className=" text-black font-semibold">
                    GH₵{Math.round((100 * price) / 100 - discountPercentage)}
                  </p>
                  <div className=" flex">
                    <p className="text-gray-500 pr-2 line-through decoration-red-600 ">
                      GH₵{price}
                    </p>
                    <p className=" font-semibold  bg-orange-200  rounded-md px-1  text-orange-500">
                      {`-${Math.round(discountPercentage)}%`}
                    </p>
                  </div>
                  <div className=" flex gap-2 items-center font-semibold ">
                    <button
                      className="px-3 py-1 bg-gray-200  hover:bg-gray-300 rounded-md shadow-md"
                      onClick={() => {
                        updateQuantity(id, -1);
                        toast.success(`Removed one ${title} from the cart`);
                      }}
                      disabled={quantity === 1}
                    >
                      -
                    </button>
                    <span className="mx-2">{quantity}</span>
                    <button
                      className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded-md shadow-md"
                      onClick={() => {
                        updateQuantity(id, 1);
                        toast.success(`Added another ${title} to the cart`);
                      }}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
              <hr className=" w-full border border-gray-300" />
            </div>
          );
        })}
      </div>
      <div>
        <div className=" bg-white h-auto shadow-lg rounded-t-md flex flex-col px-4 py-2 w-full gap-4">
          <div className=" py-1 text-lg text-gray-600 uppercase font-semibold ">
            Cart Summary{" "}
          </div>
          <hr className=" w-full border border-gray-300" />
          <div className=" flex justify-between items-center">
            <h3 className="text-lg font-semibold">Subtotal</h3>
            <p className="text-lg font-semibold">GH₵{subtotal.toFixed(2)}</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className=" w-full bg-white py-4 flex-col flex gap-4 px-4 rounded-b-md"
        >
          <h4 className=" text-gray-600">
            Enter your valid phone number and proceed to checkout to complete
            your purchase
          </h4>
          <div className=" flex flex-col gap-2">
            <label htmlFor="phoneNumber" className="  font-semibold text-black">
              Phone Number:
            </label>
            <input
              type="tel"
              required
              placeholder="Enter your Phone Number"
              value={phoneNumber}
              onChange={(event) => setPhoneNumber(event.target.value)}
              id="phoneNumber"
              className=" w-full py-1 px-2 font-semibold border-2 border-orange-500 rounded-md outline-orange-500 focus:text-orange-400 placeholder:text-orange-400"
            />
          </div>
          <p className=" text-gray-600 ">
            Delivery fee is <span className=" text-black">GH₵ 0.00</span>
          </p>
          <button
            type="submit"
            className=" bg-orange-500 hover:bg-orange-600 text-white py-2 font-semibold rounded-md justify-center items-center flex "
          >
            Checkout(GH₵{subtotal.toFixed(2)})
          </button>
        </form>
      </div>
    </section>
  );
};
