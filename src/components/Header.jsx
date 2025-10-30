import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../contexts/ThemeContext";
import { CartContext } from "../contexts/CartContext";

export default function Header({ search, setSearch }) {
  const { dark, toggle } = useContext(ThemeContext);
  const { cart } = useContext(CartContext);

  return (
    <header className="sticky top-0 z-30 flex items-center justify-between px-6 py-4 bg-white/80 dark:bg-[#1e1f20]/80 backdrop-blur-md shadow-sm border-b border-gray-200 dark:border-gray-800">
      {/* Logo */}
      <Link
        to="/"
        className="text-2xl font-bold text-gray-900 dark:text-gray-100 tracking-tight hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
      >
        NeoMart
        
      </Link>

     
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search products..."
        className="px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-[#121314] text-gray-900 dark:text-gray-100 w-1/2 md:w-1/3 focus:outline-none focus:ring-2 focus:ring-blue-500/50 placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-300"
      />

      
      <div className="flex items-center gap-3">
        
        <button
          onClick={toggle}
          className="text-xl p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition"
          title={dark ? "Switch to Light Mode" : "Switch to Dark Mode"}
        >
          {dark ? "LIGHT-MODE" : "DARK-MODE"}
        </button>

        {/* Cart */}
        <Link
          to="/cart"
          className="relative text-xl p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition"
          title="View Cart"
        >
          🛒
          {cart.length > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-xs font-semibold text-white rounded-full px-1.5 shadow-sm">
              {cart.length}
            </span>
          )}
        </Link>
      </div>
    </header>
  );
}
