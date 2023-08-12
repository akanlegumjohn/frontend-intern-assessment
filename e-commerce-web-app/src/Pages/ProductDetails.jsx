import { useParams } from "react-router-dom";
import { MdVerified } from "react-icons/md";

import { ProductCarousel } from "../components/ProductCarousel";
import { getProductData } from "../Hooks/useProducts";
import ratingStar from "../assets/ratingStar.svg";

export const ProductDetails = () => {
  const { id } = useParams();
  const { data, isLoading } = getProductData(Number(id));

  if (isLoading) {
    return <h1>Loading ....</h1>;
  }
  console.log(data);

  const {
    brand,
    category,
    description,
    title,
    price,
    stock,
    rating,
    discountPercentage,
  } = data;

  return (
    <section className=" flex  gap-10 h-full  ">
      <div className=" w-full h-full">
        <ProductCarousel product={data} />
      </div>
      <div className=" flex flex-col w-full h-full gap-4 ">
        <p className=" font-semibold text-lg md:text-4xl">{title}</p>
        <p className=" flex items-center text-blue-800 font-semibold text-lg">
          {brand}
          <span className=" pl-1">
            {<MdVerified color="green" size={20} />}
          </span>
        </p>
        <desc className=" border-b-2 py-4  md:text-lg shadow-sm  font-semibold">
          Description:
          <span className=" text-gray-500 font-normal"> {description}</span>
        </desc>
        <div className=" flex text-lg md:text-2xl gap-4">
          <p className=" text-black font-semibold">
            GH₵ {Math.round((100 * price) / 100 - discountPercentage)}
          </p>
          <p className="text-gray-500 pr-2 line-through decoration-red-600 ">
            GH₵ {price}
          </p>
          <p className=" font-semibold  text-orange-500">
            {`-${Math.round(discountPercentage)}%`}
          </p>
        </div>
        <p className=" text-gray-600">{stock} items in stock</p>
        <div className=" flex items-center font-semibold">
          <span className=" text-lg pr-2 ">Average rating: </span>{" "}
          <span className=" pr-1">{rating}</span>
          <img src={ratingStar} alt={` Rating of ${title}`} />
        </div>
        <button className=" bg-orange-400 hover:bg-orange-600 text-white py-2 rounded-md font-semibold text-lg">
          Add to Cart
        </button>
      </div>
    </section>
  );
};
