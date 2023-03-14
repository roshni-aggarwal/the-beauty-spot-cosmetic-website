import React from "react";
import { Link } from "react-router-dom";

// components
import Navbar from "../Navbar/Navbar";

const HeroSection = () => {
  return (
    <div className="bg-rose-300 text-white">
      <Navbar />
      <div className="mx-auto px-4 md:px-24 lg:px-48 flex md:items-center md:justify-between flex-col md:flex-row w-full">
        <div className="md:w-1/2 flex flex-col gap-4">
          <h1 className="font-bold text-3xl md:text-3xl lg:text-5xl">
            More Than Makeups,
            <br /> We Create Beauty in Joy & Give The Best Magic Beauty
          </h1>
          <p>Everything is There For Your Beauty Needs</p>
          <Link
            to={"/products"}
            className="px-4 py-1 bg-white rounded-md text-gray-500 w-1/2
           lg:w-1/3 text-center"
            target={"_top"}
          >
            Shop Now
          </Link>
        </div>
        <div className="md:w-1/2">
          <img
            src="images/hero-section.png"
            alt="hero section"
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
