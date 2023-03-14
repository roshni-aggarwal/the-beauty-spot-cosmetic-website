import React from "react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { CiUser } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi";

const NavSm = () => {
  return (
    <nav className="flex justify-between items-center py-4 mx-auto px-4 md:px-24 lg:px-48 lg:hidden text-white bg-rose-300 sticky top-0 z-10" >
      <Link to={"/"} target={"_top"}>
        <div className="w-40">
          <img src="/images/logo.png" alt="logo" className="w-full h-full" />
        </div>
      </Link>
      {/* <div className="flex gap-4 text-lg font-medium">
      <Link to={"/"}>Home</Link>
      <Link to={"/products"} className="">
        Shop
      </Link>
      <button className="text-rose-100 hover:text-white">Newsfeed</button>
      <button className="text-rose-100 hover:text-white">Experience</button>
    </div> */}
      <div className="flex justify-between items-center gap-2">
        <AiOutlineSearch size={24} />
        <CiUser size={24} />
        <HiOutlineShoppingBag size={24} />
      </div>
    </nav>
  );
};

const Navlg = () => {
  const location = useLocation();
  const isShopPage = location.pathname.includes("products");

  return (
    <nav className="justify-between items-center py-4 mx-auto px-4 md:px-24 lg:px-48 hidden lg:flex text-white bg-rose-300 sticky top-0 z-10">
      <Link to={"/"} target={"_top"}>
        <div className="w-40">
          <img src="/images/logo.png" alt="logo" className="w-full h-full" />
        </div>
      </Link>
      <div className="flex gap-4 text-lg font-medium">
        <Link
          to={"/"}
          className={
            isShopPage ? "text-rose-100 hover:text-white" : "text-white"
          } target={"_top"}
        >
          Home
        </Link>
        <Link
          to={"/products"}
          className={
            isShopPage ? "text-white" : "text-rose-100 hover:text-white"
          } target={"_top"}
        >
          Shop
        </Link>
        <button className="text-rose-100 hover:text-white">Newsfeed</button>
        <button className="text-rose-100 hover:text-white">Experience</button>
      </div>
      <div className="flex justify-between items-center gap-2">
        <AiOutlineSearch size={24} />
        <CiUser size={24} />
        <HiOutlineShoppingBag size={24} />
      </div>
    </nav>
  );
};

const Navbar = () => {
  return (
    <>
      <NavSm />
      <Navlg />
    </>
  );
};

export default Navbar;
