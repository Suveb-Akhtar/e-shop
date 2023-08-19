import React from "react";
import ProductsCard from "./ProductsCard";

const Products = ({ products }) => {
  return (
    <div className="py-10">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-2xl bg-black text-white py-2 w-80 text-center">
          Shopping Everyday
        </h1>
        <span className="w-20 h-[3px] bg-black"></span>
        <p className="max-w-[700px] text-gray-600 text-center">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum nemo
          rerum optio ratione porro quibusdam repudiandae dolore delectus
          tempora possimus? Minus unde modi ipsum ea incidunt possimus aliquid
          tempora quibusdam!
        </p>
      </div>
      <div className="max-w-screen-xl mx-auto grid grid-cols-4 gap-10 py-10">
        {products.map((item) => (
          <ProductsCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
};

export default Products;
