
import React, { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchProductById } from "../api";
import { CartContext } from "../contexts/CartContext";

export default function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [alert, setAlert] = useState("");

  useEffect(() => {
    async function load() {
      setLoading(true);
      try {
        const data = await fetchProductById(id);
        setProduct(data);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [id]);

  const handleAddToCart = () => {
    addToCart(product);
    setAlert(`${product.title} added to cart!`);
    setTimeout(() => setAlert(""), 2000);
  };


  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100 dark:bg-[#1e1f20]">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="p-6 text-center bg-gray-100 dark:bg-[#1e1f20] text-gray-900 dark:text-gray-100 min-h-screen">
        <p>Product not found.</p>
        <Link to="/" className="text-blue-500 underline">
          Back to home
        </Link>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-gray-100 dark:bg-[#1e1f20] text-gray-900 dark:text-gray-100">
      <div className="max-w-5xl mx-auto p-4 md:p-8">
        <Link to="/" className="text-blue-500 underline">
          ← Back
        </Link>

       
        {alert && (
          <div className="fixed top-5 right-5 bg-green-600 text-white px-4 py-2 rounded-md shadow-lg transition-all duration-300">
            {alert}
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-8 mt-6">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-80 object-contain bg-white dark:bg-[#2a2b2d] p-4 rounded-lg shadow-md"
          />

          <div>
            <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
            <p className="capitalize text-gray-600 dark:text-gray-400 mb-2">
              {product.category}
            </p>
            <p className="text-3xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
              ₹{product.price}
            </p>
            <p className="mb-4 text-gray-700 dark:text-gray-300">
              {product.description}
            </p>

            {product.rating && (
              <p className="mb-4 text-yellow-400">
                ⭐ {product.rating.rate} / 5{" "}
                <span className="text-gray-600 dark:text-gray-400">
                  ({product.rating.count} reviews)
                </span>
              </p>
            )}

            <button
              onClick={handleAddToCart}
              className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-200 shadow-md"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
