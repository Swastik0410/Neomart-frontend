import React from "react";

export default function SearchSortBar({ sort, setSort }) {
  return (
    <div className="flex flex-wrap justify-end items-center gap-3 my-6">
      <label
        htmlFor="sort"
        className="text-sm font-medium text-gray-700 dark:text-gray-300"
      >
        Sort by:
      </label>

      <select
        id="sort"
        value={sort}
        onChange={(e) => setSort(e.target.value)}
        className="
          border border-gray-300 dark:border-gray-700
          rounded-lg px-3 py-2 text-sm
          bg-white dark:bg-[#1e1f20]
          text-gray-800 dark:text-gray-200
          focus:outline-none focus:ring-2 focus:ring-blue-500
          transition-all duration-200
          hover:border-blue-400
        "
      >
        <option value="">Default</option>
        <option value="priceLow">Price: Low → High</option>
        <option value="priceHigh">Price: High → Low</option>
        <option value="az">Alphabetical (A → Z)</option>
      </select>
    </div>
  );
}
