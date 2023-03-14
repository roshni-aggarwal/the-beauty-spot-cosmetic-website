import React, { useState, Fragment } from "react";
import Layout from "../HOC/Layout";
import { FiFilter } from "react-icons/fi";
import { Dialog, Transition } from "@headlessui/react";
import products from "../products";

// components
import ProductCard from "../Components/ProductCard/ProductCard";

const Products = () => {
  const [category, setCategory] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const filteredProducts = products.filter((product) => {
    if (category && product.category !== category) return false;
    return true;
  });

  const clickHandler = (e) => {
    setIsOpen((prev) => !prev);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="md:flex gap-10 px-4 lg:px-24 py-16 bg-gray-50">
        <aside className="w-1/5 bg-white h-max drop-shadow-xl sticky top-44 p-4 rounded-lg hidden md:block">
          <h3 className="font-medium text-lg ">Filters</h3>
          <hr className="my-5" />
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="outline-none text-lg font-medium w-full"
          >
            <option value="">All categories</option>
            <option value="Lip Gloss">Lip Gloss</option>
            <option value="Eyeshadow">Eyeshadow</option>
            <option value="Foundation Stick">Foundation</option>
            <option value="Lipstick">Lipstick</option>
          </select>
        </aside>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10 gap-4">
          {filteredProducts.map((item, index) => (
            <ProductCard item={item} key={index} />
          ))}
        </div>
      </div>

      <button
        className="fixed bottom-0 md:hidden bg-rose-400 z-10 flex items-center justify-center gap-4 px-4 py-2 w-full text-white"
        onClick={clickHandler}
      >
        <FiFilter size={30} />
        <span className="font-bold text-lg">Filter</span>
      </button>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <select
                    id="category"
                    value={category}
                    onChange={(e) => {
                      setCategory(e.target.value);
                      closeModal();
                    }}
                    className="outline-none text-lg font-medium w-full"
                  >
                    <option value="">All categories</option>
                    <option value="Lip Gloss">Lip Gloss</option>
                    <option value="Eyeshadow">Eyeshadow</option>
                    <option value="Foundation Stick">Foundation</option>
                    <option value="Lipstick">Lipstick</option>
                  </select>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Layout(Products);
