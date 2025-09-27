import { Link } from "react-router-dom";
import Flex from "./Flex";
import {
  HiOutlineShoppingBag,
  HiOutlineEye,
  HiOutlineHeart,
} from "react-icons/hi2";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { addToCart } from "../features/addToCartSlice";

const HomeProduct = ({
  imgSrc,
  imgAlt,
  badgeText,
  title,
  price,
  productColor,
  size,
  imgSrcTwo,
  badgeClassName,
  priceClassName,
  productClassName,
  sizeClassName,
}) => {
  const [isWishColor, setIsWishColor] = useState(false);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        title: title,
        price: price,
        img: imgSrc,
        quantity: 1,
        color: productColor,
      })
    );
  };

  return (
    <>
      <div
        className={`relative w-[330px] lg:w-[310px] h-130 group border-2 border-gray-200 m-auto lg:m-0 ${productClassName}`}
      >
        <div>
          <Link to={"/quickview"}>
            <div className="relative w-[330px] lg:w-[310px] h-100 overflow-hidden">
              {/* Default Image */}
              <img
                src={imgSrc}
                alt={imgAlt}
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
              />

              {/* Hover Image */}
              <img
                src={imgSrcTwo}
                alt={imgAlt}
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 opacity-0 group-hover:opacity-100"
              />
            </div>
          </Link>

          {/* Badge part Start */}
          <div
            className={`absolute top-2 left-2 py-2 px-5 text-black font-bold text-center text-sm ${badgeClassName}`}
          >
            {badgeText}
          </div>
          {/* Badge part End */}

          {/* Group Hover Part Start */}
          <div className="lg:p-0 space-y-3 absolute bottom-32 left-0 w-full lg:opacity-0 lg:translate-y-4 lg:group-hover:opacity-100 lg:group-hover:translate-y-0 sm:opacity-100 sm:translate-y-0 transition-all duration-300 ease-in-out">
            {/* AddToCart button start */}
            <div
              onClick={handleAddToCart}
              className="w-[97%] h-[50px] rounded-lg relative flex justify-center m-auto hover:cursor-pointer bg-white hover:bg-gray-200 transition-all duration-300"
            >
              <p className="py-3 text-lg font-medium text-black">ADD TO CART</p>
            </div>
            {/* AddToCart button end */}
          </div>
          {/* Group Hover Part End */}

          <div className="pb-10 px-3 mt-5">
            {/* ====================================================== */}
            <div className="flex justify-between items-center">
              {/* Product Color start */}
              <p className="text-[#767676] text-base font-semibold ">
                {productColor}
              </p>
              {/* Product Color end */}
              {/*  Product Wish List Start */}
              <div
                className="hover:cursor-pointer"
                onClick={() => setIsWishColor(!isWishColor)}
              >
                <HiOutlineHeart
                  className={`text-2xl font-xl transition-colors duration-300 ${isWishColor ? "fill-red-500" : "text-[#767676]"
                    }`}
                />
              </div>
              {/* Product Wish List End */}
            </div>
            {/* ============================================================= */}
            {/* Title part start */}
            <h3 className="text-[#262626] text-lg font-bold py-1">{title}</h3>
            {/* Title part end */}

            {/* Size and Price part start */}
            <div className="flex justify-between items-center">
              <h4
                className={`text-mainColor text-base font-bold ${sizeClassName}`}
              >
                Size: {size}
              </h4>
              <h4
                className={`text-mainColor text-lg font-bold ${priceClassName}`}
              >
                ${price.toFixed(2)}
              </h4>
            </div>
            {/* Size and Price part end */}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeProduct;
