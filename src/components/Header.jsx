import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../contexts/ThemeContext";
import { CartContext } from "../contexts/CartContext";
import logo from "../assets/logo.png";

export default function Header({ search, setSearch }) {
  const { dark, toggle } = useContext(ThemeContext);
  const { cart } = useContext(CartContext);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 flex flex-wrap md:flex-nowrap items-center justify-between px-4 md:px-6 py-3 bg-white/80 dark:bg-[#1e1f20]/80 backdrop-blur-md shadow-sm border-b border-gray-200 dark:border-gray-800 transition-all">
      {/* Left section — Logo */}
      <Link
        to="/"
        className="flex items-center gap-2 text-2xl font-bold text-gray-900 dark:text-gray-100 tracking-tight hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
      >
        <img
          src={logo}
          alt="NeoMart Logo"
          className="w-15 h-15 object-contain"
        />
        <div className="flex flex-col leading-tight">
          <span>NeoMart</span>
          <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
            Shop Smart. Live Better.
          </span>
        </div>
      </Link>

      {/* Mobile menu toggle */}
      <button
        className="md:hidden text-gray-700 dark:text-gray-300 text-2xl ml-auto"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      {/* Center section — Search Bar */}
      <div
        className={`${
          menuOpen ? "flex" : "hidden"
        } md:flex w-full md:w-auto flex-col md:flex-row items-center gap-3 mt-3 md:mt-0`}
      >
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search products..."
          className="px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-[#121314] text-gray-900 dark:text-gray-100 w-full md:w-72 focus:outline-none focus:ring-2 focus:ring-blue-500/50 placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-300"
        />

        {/* Right section — Buttons */}
        <div className="flex items-center gap-3">
          {/* Theme toggle */}
          <button
            onClick={toggle}
            className="text-sm md:text-base px-3 py-2 rounded-lg font-medium bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-100 transition"
            title={dark ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {dark ? "☀️ Light" : "🌙 Dark"}
          </button>

          {/* Cart */}
          <Link
            to="/cart"
            className="relative text-2xl p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition"
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
      </div>
    </header>
  );
}
