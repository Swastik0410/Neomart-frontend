
import React, { useContext } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import { CartContext } from "./contexts/CartContext";

function CartPage() {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);

  const totalItems = cart.reduce((a, b) => a + b.qty, 0);
  const totalPrice = cart.reduce((a, b) => a + b.price * b.qty, 0).toFixed(2);

  return (
    <div className="min-h-screen w-full bg-gray-100 dark:bg-[#1e1f20] text-gray-900 dark:text-gray-100 p-6">
      <div className="max-w-4xl mx-auto">
        <Link
          to="/"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          ← Back to store
        </Link>

        <h1 className="text-3xl font-bold mb-6 mt-3">Your Cart</h1>

        {cart.length === 0 ? (
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Your cart is empty.
          </p>
        ) : (
          <>
            <ul className="divide-y divide-gray-300 dark:divide-gray-700 bg-white dark:bg-[#2a2b2d] rounded-xl shadow-md overflow-hidden">
              {cart.map((item) => (
                <li
                  key={item.id}
                  className="flex justify-between items-center p-4 hover:bg-gray-50 dark:hover:bg-[#343536] transition-all"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-16 h-16 object-contain bg-gray-100 dark:bg-[#1e1f20] p-2 rounded-md"
                    />
                    <div>
                      <p className="font-semibold">{item.title}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        ₹{item.price} × {item.qty}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:underline font-medium"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>

            <div className="flex justify-between mt-6 font-semibold text-lg border-t border-gray-300 dark:border-gray-700 pt-4">
              <span>Total Items: {totalItems}</span>
              <span>Total: ₹{totalPrice}</span>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                onClick={clearCart}
                className="px-5 py-2 bg-red-600 hover:cursor-pointer hover:bg-red-700 text-white rounded-lg shadow-md transition-all"
              >
                Clear Cart
              </button>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                
                className="px-5 py-2 bg-emerald-600 hover:cursor-pointer hover:bg-emerald-900 text-white rounded-lg shadow-md transition-all"
              >
                Check Out
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/cart" element={<CartPage />} />
    </Routes>
  );
}
