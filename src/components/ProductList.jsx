import React, { useEffect, useRef, useState } from "react";
import ProductCard from "./ProductCard";
import SkeletonCard from "./SkeletonCard";

export default function ProductList({ products, loading }) {
  const [visible, setVisible] = useState(8);
  const loaderRef = useRef(null);

 
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible((prev) => prev + 8);
        }
      },
      { threshold: 1 }
    );
    if (loaderRef.current) observer.observe(loaderRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="transition-colors duration-300">
     
      {loading ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {Array(8)
            .fill(0)
            .map((_, i) => (
              <SkeletonCard key={i} />
            ))}
        </div>
      ) : (
        <>
        
          {products.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
              {products.slice(0, visible).map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          ) : (
            <div className="text-center text-gray-600 dark:text-gray-400 py-16">
              No products found.
            </div>
          )}
        </>
      )}


      {!loading && products.length > visible && (
        <div
          ref={loaderRef}
          className="flex justify-center items-center py-8 text-gray-500 dark:text-gray-400"
        >
          <div className="w-8 h-8 border-3 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  );
}
