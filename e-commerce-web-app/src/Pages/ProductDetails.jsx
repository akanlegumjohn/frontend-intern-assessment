import { useParams } from "react-router-dom";
import { useContext, useState } from "react";
import { MdVerified } from "react-icons/md";
import { motion } from "framer-motion";
import { toast } from "react-toastify";

import { productDetailsContainerVariants } from "../utils/animation";
import { ProductCarousel } from "../components/ProductCarousel";
import { CartContext } from "../Layouts/MainLayoutWrapper";
import { getProductData } from "../Hooks/useProducts";
import ratingStar from "../assets/ratingStar.svg";
import { LoadingSpinner } from "./LoadingSpinner";

export const ProductDetails = () => {
  const { productId } = useParams();
  const { data, isLoading } = getProductData(Number(productId));

  const { addToCart, cart } = useContext(CartContext);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  const {
    brand,
    category,
    description,
    title,
    price,
    stock,
    rating,
    discountPercentage,
    id,
  } = data;

  const productExists = cart.find((product) => product.id === id);

  return (
    <motion.section
      className=" flex flex-col md:flex-row gap-10 h-full  "
      variants={productDetailsContainerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className=" w-full h-full">
        <ProductCarousel product={data} />
      </div>
      <div className=" flex flex-col w-full h-full gap-2 ">
        <p className=" font-semibold text-lg md:text-4xl capitalize">{title}</p>
        <p className=" flex items-center text-blue-800 font-semibold text-lg">
          {brand}
          <span className=" pl-1">
            {<MdVerified color="green" size={20} />}
          </span>
        </p>
        <p className=" border-b-2 py-2  md:text-lg shadow-sm  font-semibold">
          Description:
          <span className=" text-gray-500 font-normal"> {description}</span>
        </p>
        <div className=" flex text-lg md:text-2xl gap-4">
          <p className=" text-black font-semibold">
            GH₵ {Math.round((100 * price) / 100 - discountPercentage)}
          </p>
          <p className="text-gray-500 pr-2 line-through decoration-red-600 ">
            GH₵ {price}
          </p>
          <p className=" font-semibold   bg-orange-200  rounded-md px-1 text-orange-500">
            {`-${Math.round(discountPercentage)}%`}
          </p>
        </div>
        <p className=" text-gray-600">{stock} items in stock</p>
        <div className=" flex items-center font-semibold">
          <span className=" text-lg pr-2 ">Average rating: </span>{" "}
          <span className=" pr-1">{rating}</span>
          <img src={ratingStar} alt={` Rating of ${title}`} />
        </div>
        <button
          disabled={productExists}
          onClick={() => {
            addToCart(data);
            toast.success(`You successfully added ${title} to cart`);
          }}
          className={` text-white py-2 rounded-md font-semibold text-lg  hover:bg-orange-600 bg-orange-500 ${
            productExists &&
            " hover:bg-orange-300 bg-orange-300 cursor-not-allowed"
          }`}
        >
          Add to Cart
        </button>
      </div>
    </motion.section>
  );
};
