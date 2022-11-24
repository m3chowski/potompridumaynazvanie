import axios from "axios";

const API_URL_PRODUCTS = "https://dummyjson.com";

export const getCategories = ({ setCategories }) => {
  axios
    .get(API_URL_PRODUCTS + "/products/categories")
    .then(({ data }) => setCategories(data));
};

export const getProduct = (pathname, setItem) => {
  axios.get(API_URL_PRODUCTS + pathname).then(({ data }) => setItem(data));
};
