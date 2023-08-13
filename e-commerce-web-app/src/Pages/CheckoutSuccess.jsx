import { MdCheckCircle } from "react-icons/md";
import { useContext } from "react";

import { CartContext } from "../Layouts/MainLayoutWrapper";

export const CheckoutSuccess = () => {
  const { checkoutData } = useContext(CartContext);
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <MdCheckCircle className="text-green-500 text-9xl mb-4" />
      <h1 className="text-4xl font-bold text-center mb-2">
        Checkout Successful!
      </h1>
      <div className="text-lg text-gray-700 text-center">
        <p>Thank you for your purchase.</p>
        <p>Your order will be processed shortly.</p>
        <p>
          You will be contacted on your phone number {checkoutData.phoneNumber}
        </p>
      </div>
    </div>
  );
};
