import { getAllProductsData } from "../Hooks/useProducts";
import { ProductCard } from "../components/ProductCard";
import { LoadingSpinner } from "./LoadingSpinner";

export const ProductListings = () => {
  const { data, isLoading } = getAllProductsData();

  if (isLoading) {
    return <LoadingSpinner />;
  }
  return (
    <section className=" flex flex-col items-center justify-center ">
      <div className=" lg:grid-cols-4  grid md:grid-cols-3 justify-center items-center gap-10">
        {data.products.map((product) => {
          const {
            id,
            price,
            rating,
            title,
            images,
            stock,
            discountPercentage,
          } = product;
          return (
            <ProductCard
              discountPercentage={discountPercentage}
              image={images[0]}
              rating={rating}
              price={price}
              title={title}
              stock={stock}
              key={id}
              id={id}
            />
          );
        })}
      </div>
    </section>
  );
};
