import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { containerVariants, productImageVariants } from "../utils/animation";
import ratingStar from "../assets/ratingStar.svg";

export const ProductCard = ({
  image,
  title,
  price,
  rating,
  stock,
  discountPercentage,
  id,
}) => {
  return (
    <motion.div
      className=" bg-white full--shadow w-full  p-4 rounded-md "
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
    >
      <motion.div className=" rounded-md" variants={productImageVariants}>
        <motion.img
          className=" min-w-full h-40 object-cover rounded-md "
          src={image}
          alt={`An image of ${title}`}
          variants={productImageVariants}
        />
      </motion.div>
      <div className=" flex flex-col gap-1">
        <p className=" text-black uppercase font-semibold md:text-lg">
          {title}
        </p>
        <div className="flex items-center">
          <span className=" text-gray-500">Rating: {rating}</span>{" "}
          <img className=" " src={ratingStar} alt={`Rating of ${title}`} />
        </div>
        <div className="  py-1  ">
          <span className=" text-gray-700">{stock} items in stock</span>
        </div>
        <p className=" text-black font-semibold">
          GH₵{Math.round((100 * price) / 100 - discountPercentage)}
        </p>
        <div className=" flex">
          <p className="text-gray-500 pr-2 line-through decoration-red-600 ">
            GH₵{price}
          </p>
          <p className=" font-semibold bg-orange-200  rounded-md px-1 text-orange-500">
            {`-${Math.round(discountPercentage)}%`}
          </p>
        </div>
      </div>
      <Link
        className=" mt-2 flex items-center justify-center hover:bg-gray-800 bg-gray-600 text-white font-semibold py-2 rounded-md  w-full"
        to={`/products/${id}`}
      >
        View Details
      </Link>
    </motion.div>
  );
};
