import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ item }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-1 p-8 rounded-lg bg-rose-50">
      <div className="w-full h-60">
        <img
          src={`/images/${item.image}`}
          alt="product"
          className="w-full h-full object-center"
        />
      </div>
      <h3 className="text-lg font-medium">{item.name} </h3>
      <h5 className="text-sm text-gray-400 ">{item.category} </h5>
      <h2 className="text-xl text-red-400 font-medium">{item.price} </h2>
      <Link
        to={`/products/${item.url}`}
        className="rounded-lg px-2 py-1 w-1/2 md:w-full text-center text-white text-lg bg-red-400 font-medium"
        item={item}
        target={"_top"}
      >
        Shop Now{" "}
      </Link>
    </div>
  );
};

export default ProductCard;
