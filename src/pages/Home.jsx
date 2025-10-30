import React, { useEffect, useState } from "react";
import { fetchProducts } from "../api";
import Header from "../components/Header";
import SearchSortBar from "../components/SearchSortBar";
import ProductList from "../components/ProductList";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");

  useEffect(() => {
    async function load() {
      setLoading(true);
      try {
        const data = await fetchProducts();
        setProducts(data);
        setFiltered(data);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  useEffect(() => {
    let temp = [...products];

    
    if (search.trim() !== "") {
      const q = search.toLowerCase();
      temp = temp.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      );
    }

    
    if (sort === "priceLow") temp.sort((a, b) => a.price - b.price);
    else if (sort === "priceHigh") temp.sort((a, b) => b.price - a.price);
    else if (sort === "az") temp.sort((a, b) => a.title.localeCompare(b.title));

    setFiltered(temp);
  }, [search, sort, products]);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-[#1e1f20] text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Header search={search} setSearch={setSearch} />

      <div className="max-w-7xl mx-auto px-4 py-6">
        <SearchSortBar sort={sort} setSort={setSort} />

        {loading ? (
          <div className="flex justify-center items-center py-24">
            
            <div className="w-12 h-12 border-4 border-gray-300 dark:border-gray-600 border-t-blue-500 dark:border-t-blue-400 rounded-full animate-spin"></div>
          </div>
        ) : (
          <ProductList products={filtered} loading={loading} />
        )}
      </div>
    </div>
  );
}
