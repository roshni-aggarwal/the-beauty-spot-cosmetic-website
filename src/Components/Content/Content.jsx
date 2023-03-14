import React from "react";
import StarRatings from "react-star-ratings";
import { BiLeaf } from "react-icons/bi";
import { AiOutlineHeart, AiOutlineSafetyCertificate } from "react-icons/ai";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

// components
import ProductCard from "../ProductCard/ProductCard";

const Content = () => {
  const bestSeller = [
    {
      name: "Makeup ForEver Ultra HD",
      url: "makeup-forever-ultra-hd",
      category: "Lip Gloss",
      price: "₹ 250",
      image: "lip-gloss.jpg",
    },
    {
      name: "Chaoba Professional",
      url: "chaoba-professional",
      category: "Eyeshadow",
      price: "₹ 150",
      image: "eyeshadow-product.jpg",
    },
    {
      name: "Huda Beauty",
      url: "huda-beauty",
      category: "Foundation Stick",
      price: "₹ 450",
      image: "huda-beauty.jpg",
    },
    {
      name: "Mars Matte Lipcolor",
      url: "mars-matte-lipstick",
      category: "Lipstick",
      price: "₹ 250",
      image: "lipstick-product.jpg",
    },
  ];

  const reviews = [
    {
      name: "Megha",
      review:
        "The lip tint product that bought is very good, it keeps my lips moisturized all day long, it doesn't darken my lips, and the color is beautiful, make my face look bright.",
      ratings: 4,
      image: "woman-1.png",
    },
    {
      name: "Naina",
      review:
        "The blush on that I bought, has a pretty color. Makes my face bright and very vibrant. Hold from morning to evening when I get home from work.",
      ratings: 5,
      image: "woman-2.png",
    },
    {
      name: "Megha",
      review:
        "The lip tint product that bought is very good, it keeps my lips moisturized all day long, it doesn't darken my lips, and the color is beautiful, make my face look bright.",
      ratings: 4,
      image: "woman-1.png",
    },
    {
      name: "Naina",
      review:
        "The blush on that I bought, has a pretty color. Makes my face bright and very vibrant. Hold from morning to evening when I get home from work.",
      ratings: 5,
      image: "woman-2.png",
    },
  ];

  const settings = {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
      clickable: true,
    },
    breakpoints: {
      1024: {
        slidesPerView: 2,
        spaceBetween: 50,
      },
    },
  };
  return (
    <>
      <div className="my-16 px-4 container mx-auto md:px-24">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center tracking-wider">
          Mazimize Your Beauty
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10 gap-5">
          <div className="flex flex-col items-center justify-center gap-2">
            <div className="h-60 w-52 rounded-t-full p-2 border-4 border-red-300">
              <img
                src="images/lipsticks.jpg"
                alt="lip products"
                className="w-full h-full rounded-t-full"
              />
            </div>
            <h3 className="text-gray-700 font-medium tracking-widest text-lg mt-2">
              Lip Product
            </h3>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <div className="h-60 w-52 rounded-t-full p-2 border-4 border-red-300">
              <img
                src="images/eyeshadow.jpg"
                alt="eyeshadow"
                className="w-full h-full rounded-t-full"
              />
            </div>
            <h3 className="text-gray-700 font-medium tracking-widest text-lg mt-2">
              Eyeshadow
            </h3>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <div className="h-60 w-52 rounded-t-full p-2 border-4 border-red-300">
              <img
                src="images/eyebrow.jpg"
                alt="eyebrow product"
                className="w-full h-full rounded-t-full"
              />
            </div>
            <h3 className="text-gray-700 font-medium tracking-widest text-lg mt-2">
              Eyebrow Product
            </h3>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <div className="h-60 w-52 rounded-t-full p-2 border-4 border-red-300">
              <img
                src="images/foundation.jpg"
                alt="foundation"
                className="w-full h-full rounded-t-full"
              />
            </div>
            <h3 className="text-gray-700 font-medium tracking-widest text-lg mt-2">
              Foundation
            </h3>
          </div>
        </div>
      </div>
      <div className="relative bg-flower flex flex-col-reverse md:flex-row items-center justify-between gap-4 bg-cover my-16 px-4 md:px-24 lg:px-36 pt-4">
        <div className="absolute left-0 top-0 bg-white bg-opacity-80 w-full h-full" />
        <div className="md:w-1/2 z-10">
          <img
            src="/images/flower.png"
            alt="flower"
            className="w-full h-full"
          />
        </div>
        <div className="flex flex-col gap-5 md:w-1/2 z-10">
          <h1 className="text-4xl tracking-wider">
            Let your timeless <br />
            beauty bloom.
          </h1>
          <p className="text-gray-500 text-lg w-4/5 mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam unde
            quod officiis, ipsam quia labore, necessitatibus modi eligendi illum
            dolor praesentium et itaque reiciendis error iste doloribus
            repellat, dolore quis!
          </p>
        </div>
      </div>
      <div className="my-16 px-4 container mx-auto md:px-24">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center tracking-wider">
          Best Seller
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10 gap-5">
          {bestSeller.map((item, index) => (
            <ProductCard item={item} key={index} />
          ))}
        </div>
      </div>
      <div className="my-40 px-4 container mx-auto lg:px-24">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center tracking-wider">
          This Is What They Say
        </h1>
        <Swiper
          {...settings}
          pagination={true}
          modules={[Pagination]}
          className="mySwiper mt-10"
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div
                className="flex items-center justify-center gap-4 p-8 rounded-lg bg-rose-50 drop-shadow-xl"
              >
                <div className="w-1/3 rounded-full bg-rose-300">
                  <img
                    src={`/images/${review.image}`}
                    alt="user"
                    className="w-full h-full object-center rounded-full"
                  />
                </div>
                <div className="w-2/3 flex flex-col gap-2 lg:gap-5">
                  <h1 className="text-lg md:text-2xl font-bold">
                    {review.name}
                  </h1>
                  <StarRatings
                    rating={review.ratings}
                    starDimension="25px"
                    starSpacing="2px"
                    starRatedColor="rgb(251 113 133)"
                  />
                  <p className="text-sm md:text-base">{review.review}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="my-16 px-4 container mx-auto md:px-24">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center tracking-wider">
          The Beauty Spot's Value
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 mt-10 gap-5 lg:w-4/5 container mx-auto">
          <div className="flex flex-col gap-5 items-center justify-center">
            <BiLeaf
              className="rounded-full bg-rose-50 text-rose-500 p-4"
              size={120}
            />
            <p className="text-center font-medium text-lg text-gray-700 w-1/2 md:w-full">
              We only add natural and technological ingredients that have been
              certified by laboratory.
            </p>
          </div>
          <div className="flex flex-col gap-5 items-center justify-center">
            <AiOutlineSafetyCertificate
              className="rounded-full bg-rose-50 text-rose-500 p-4"
              size={120}
            />
            <p className="text-center font-medium text-lg text-gray-700 w-1/2 md:w-full">
              Based on the stringent global cosmetics standards and EWG safety
              ingredient certification.
            </p>
          </div>
          <div className="flex flex-col gap-5 items-center justify-center">
            <AiOutlineHeart
              className="rounded-full bg-rose-50 text-rose-500 p-4"
              size={120}
            />
            <p className="text-center font-medium text-lg text-gray-700 w-1/2 md:w-full">
              Magic beauty experience comes from constant innovation and
              satisfaction from the inside out.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
