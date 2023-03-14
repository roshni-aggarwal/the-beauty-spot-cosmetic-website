import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../HOC/Layout";
import { AiFillStar, AiOutlineHeart } from "react-icons/ai";
import { Disclosure } from "@headlessui/react";
import { FiChevronDown } from "react-icons/fi";

import products from "../products";

// components
import ProductCard from "../Components/ProductCard/ProductCard";

const ProductDisplay = () => {
  const { url } = useParams();

  const [quantity, setQuantity] = useState(1);

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increment = () => {
    setQuantity(quantity + 1);
  };

  const product = products.find((p) => p.url === url);
  return (
    <div className="bg-gray-50 container mx-auto px-4 md:px-24 py-8">
      <div className="bg-white rounded-lg flex flex-col md:flex-row container mx-auto p-4 gap-10 lg:w-4/5 drop-shadow-lg">
        <div className="md:w-1/2 md:h-1/2 md:sticky top-32">
          <img
            src={`/images/${product.image}`}
            alt={product.name}
            className="w-full h-full object-center"
          />
        </div>
        <div className="flex flex-col items-start gap-10 md:w-1/2">
          <div>
            <h1 className="text-xl lg:text-3xl font-semibold uppercase">
              {product.name}{" "}
            </h1>
            <small>{product.category} </small>
            <span className="flex items-center text-gray-500 text-sm font-medium">
              <AiFillStar color="#E9C46A" size={24} /> 4.9 Ratings • 2.3k
              Reviews
            </span>
          </div>
          <h1 className="text-xl font-semibold">{product.price} </h1>
          <div>
            <h3>Choose shade</h3>
            <div className="flex gap-2 mt-2">
              {product.shades.map((shade, index) => (
                <div
                  className="w-8 h-8 hover:outline hover:outline-1"
                  style={{ background: shade }}
                  title={`shade ${index + 1}`}
                />
              ))}
            </div>
          </div>
          <div className="">
            <h3>Quantity</h3>
            <div className="flex gap-5 mt-2 justify-between">
              <div className="border px-2 flex gap-5 lg:w-1/3 items-center justify-between rounded-md text-gray-700 text-xl lg:text-2xl">
                <button className="outline-none" onClick={decrement}>
                  -
                </button>
                <span>{quantity} </span>
                <button className="outline-none" onClick={increment}>
                  +
                </button>
              </div>
              <button className="uppercase lg:text-xl bg-black text-white font-bold p-4 py-2 rounded-md w-2/3">
                Add to Cart
              </button>
            </div>
            <button className="flex justify-center items-center px-4 py-2 lg:text-lg bg-white w-full gap-2 outline outline-1 mt-2 rounded-md outline-gray-200 uppercase">
              <AiOutlineHeart color="red" /> Add to wishlist
            </button>
          </div>
          <div className="w-full ">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between outline-none text-left text-sm font-medium px-2 py-4 border-t border-dashed border-gray-400 ">
                    <span className="uppercase font-bold ">Description</span>
                    <FiChevronDown
                      className={`${
                        open ? "rotate-180 transform" : ""
                      } h-5 w-5 text-gray-700`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-2 text-sm text-gray-500">
                    <div className="flex flex-col gap-2">
                      {product.description.map((detail, index) => (
                        <p key={index}>{detail}</p>
                      ))}
                    </div>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        </div>
      </div>
      <div className="my-10">
        <h1 className="text-2xl font-bold text-center tracking-wider">
          You may also like
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-5 gap-5">
          {products.slice(0, 4).map((item, index) => (
            <ProductCard item={item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Layout(ProductDisplay);
