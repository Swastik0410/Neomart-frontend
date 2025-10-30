
import axios from "axios";

const BASE_URL = "https://fakestoreapi.com";


export async function fetchProducts() {
  try {
    const { data } = await axios.get(`${BASE_URL}/products`);
    return data;
  } catch (err) {
    console.error("Error fetching products:", err.message);
    return [];
  }
}


export async function fetchProductById(id) {
  try {
    const { data } = await axios.get(`${BASE_URL}/products/${id}`);
    return data;
  } catch (err) {
    console.error("Error fetching product:", err.message);
    return null;
  }
}


export async function fetchCategories() {
  try {
    const { data } = await axios.get(`${BASE_URL}/products/categories`);
    return data;
  } catch (err) {
    console.error("Error fetching categories:", err.message);
    return [];
  }
}
