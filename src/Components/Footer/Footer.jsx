import React from "react";
import {
  FaFacebookSquare,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="container mx-auto p-4 md:p-24 lg:p-36 bg-rose-400 flex flex-col md:flex-row gap-5 lg:gap-10 text-white justify-between">
      <div className="flex flex-col gap-10 md:w-1/5">
        <div>
          <div className="w-40">
            <img src="/images/logo.png" alt="logo" className="w-full h-full" />
          </div>
          <p className="mt-10">
            Inspired by the timeless beauty of blooming petals to create endless
            eye looks. Looks from natural luxe to effortless glam.
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-2xl">STAY IN TOUCH</h3>
          <form className="flex flex-col lg:flex-row gap-5 mt-5">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-white px-4 py-2 rounded-md outline-none text-black"
            />
            <button className="rounded-md px-4 py-2 bg-rose-300 hover:bg-rose-500">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="flex flex-col gap-5 items-start md:w-1/5">
        <h3 className="font-semibold text-2xl mb-4">ABOUT</h3>
        <button>Meet Us</button>
        <button>Careers</button>
        <button>Affiliates</button>
      </div>
      <div className="flex flex-col gap-5 items-start md:w-1/5">
        <h3 className="font-semibold text-2xl mb-4">HELP</h3>
        <button>Privacy Policy</button>
        <button>Terms & Conditions</button>
        <button>Contact Us</button>
        <button>FAQs</button>
      </div>
      <div className="flex flex-col gap-10 md:w-1/5">
        <div>
          <h3 className="font-semibold text-2xl">OUR MOBILE APP</h3>
          <p className="mt-10">
            Download The Beauty Spot app available on iOS and android.
          </p>
          <div className="flex gap-2 mt-5">
            <div className="w-1/4 md:w-1/2">
              <img
                src="/images/appleStore.png"
                alt="apple store"
                className="w-full h-full rounded-md"
              />
            </div>
            <div className="w-1/4 md:w-1/2">
              <img
                src="/images/playStore.png"
                alt="play store"
                className="w-full h-full rounded-md"
              />
            </div>
          </div>
        </div>
        <div>
          <h3 className="font-semibold text-2xl">FOLLOW US</h3>
          <div className="flex gap-5 mt-5 text-white">
            <FaFacebookSquare size={30} />
            <FaInstagram size={30} />
            <FaTwitter size={30} />
            <FaYoutube size={30} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
