import { Link } from "react-router-dom";
import Flex from "./Flex";
import {
  HiOutlineShoppingBag,
  HiOutlineEye,
  HiOutlineHeart,
} from "react-icons/hi2";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/addToCartSlice";
import { useState } from "react";

const ShopProducts = ({
  imgSrc,
  imgAlt,
  badgeText,
  title,
  price,
  productColor,
  badgeClassName,
  priceClassName,
  sizeClassName,
  size,
}) => {
  const [isWishColor, setIsWishColor] = useState(false);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        title,
        price,
        img: imgSrc,
        quantity: 1,
        color: productColor,
      })
    );
  };

  return (
    <div className="w-[48%] lg:w-[32%] h-[430px] lg:h-[480px] m-auto lg:m-0 relative group border-2 border-gray-100  rounded-xl">
      {/* Product Image */}
      <div className="w-full h-[300px] lg:h-[350px] relative ">
        <img
          src={imgSrc}
          alt={imgAlt}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 "
        />
      </div>

      {/* Badge start */}
      {badgeText && (
        <div
          className={`absolute top-2 left-2 py-1 px-4 text-black font-bold text-center text-xs lg:text-sm ${badgeClassName}`}
        >
          {badgeText}
        </div>
      )}
      {/* Badge End */}

      {/* Group Hover Part Start */}
      <div className="lg:p-0 space-y-3 absolute bottom-30 lg:bottom-31  left-0 w-full lg:opacity-0 lg:translate-y-4 lg:group-hover:opacity-100 lg:group-hover:translate-y-0 sm:opacity-100 sm:translate-y-0 transition-all duration-300 ease-in-out">
        {/* AddToCart button start */}
        <div
          onClick={handleAddToCart}
          className="w-[100%] h-[50px]  relative flex justify-center m-auto hover:cursor-pointer bg-black hover:bg-mainColor transition-all duration-300"
        >
          <p className="py-4 lg:py-3 text-base lg:text-lg font-medium  text-white">ADD TO CART</p>
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
        <h3 className="text-[#262626] text-sm lg:text-lg font-bold py-1">{title}</h3>
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
  );
};

export default ShopProducts;
