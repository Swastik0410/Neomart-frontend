import React from "react";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <Link
      to={`/product/${product.id}`}
      className="group relative border rounded-2xl p-4 bg-white dark:bg-[#1e1f20] border-gray-200 dark:border-gray-700 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300"
    >
      {/* Image */}
      <div className="w-full h-48 flex justify-center items-center mb-3 overflow-hidden rounded-lg bg-gray-50 dark:bg-gray-500">
        <img
          src={product.image}
          alt={product.title}
          className="w-36 h-36 object-contain group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Title */}
      <h3 className="font-semibold text-sm mb-1 line-clamp-2 text-gray-900 dark:text-gray-100">
        {product.title}
      </h3>

      {/* Category */}
      <p className="text-xs text-gray-500 dark:text-gray-400 mb-2 capitalize">
        {product.category}
      </p>

      {/* Price */}
      <p className="font-bold text-lg text-blue-600 dark:text-blue-400">
        ₹{product.price}
      </p>

      {/* Subtle gradient border on hover */}
      <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-blue-400/50 transition-colors duration-300 pointer-events-none" />
    </Link>
  );
}
