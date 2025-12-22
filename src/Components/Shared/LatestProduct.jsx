import React from "react";
import ProductCard from "./ProductCard";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import LoadingSpinner from "./LoadingSpinner";

const LatestProduct = () => {
  const { data: products = [], isLoading } = useQuery({
    queryKey: ["latest-products"],
    queryFn: async () => {
      const result = await axios(
        `${import.meta.env.VITE_API_URL}/latest-products`
      );
      return result.data;
    },
  });

  if (isLoading) return <LoadingSpinner />;
  return (
    <div className="max-w-7xl mx-auto bg-[#0b2b43] px-4 md:px-15 py-10">
      {/* Title */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-white">New Arrivals</h1>
        <p className=" mt-2 text-white">
          Fresh styles and trending garments just for you
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>

      {/* Empty State */}
      {products.length === 0 && (
        <p className="text-center text-gray-500 mt-10">No products available</p>
      )}
    </div>
  );
};

export default LatestProduct;
