import axios from "axios";

const API_URL_PRODUCTS = "https://dummyjson.com/products";

export const getCategories = ({ setCategories }) => {
  axios
    .get(API_URL_PRODUCTS + "/categories")
    .then(({ data }) => setCategories(data));
};
