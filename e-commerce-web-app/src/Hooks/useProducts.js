import { useQuery } from "@tanstack/react-query";

import { getAllProducts, getProduct } from "../service/productService";

export const getAllProductsData = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: getAllProducts,
  });
};

// Whenever the Id changes, there should be a refetch of the product
export const getProductData = (id) => {
  return useQuery({
    queryKey: ["product", id],
    queryFn: () => getProduct(id),
  });
};
