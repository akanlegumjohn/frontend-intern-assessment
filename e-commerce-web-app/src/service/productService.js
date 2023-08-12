import axios from "axios";

const API_URI = "https://dummyjson.com/products";

export const getAllProducts = async () => {
  try {
    const res = await axios.get(API_URI);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const getProduct = async (id) => {
  try {
    const res = await axios.get(`${API_URI}/${id}`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};
