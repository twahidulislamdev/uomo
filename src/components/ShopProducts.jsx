import { Link } from "react-router-dom";
import {
  HiOutlineHeart,
} from "react-icons/hi2";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/addToCartSlice";
import { useState } from "react";
import { setQuickViewItem } from "../features/quickViewSlice";
import { toast } from "react-toastify";

const ShopProducts = ({
  imgSrcFirst,
  imgAlt,
  badgeText,
  title,
  price,
  productColor,
  badgeClassName,
  priceClassName,
  sizeClassName,
  size,
  customSize, // Added customSize prop
}) => {
  const [isWishColor, setIsWishColor] = useState(false);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        title,
        price,
        img: imgSrcFirst,
        quantity: 1,
        color: productColor,
        size: size,
        customSize: customSize, // Include custom size in cart
      }),
    );

    toast.success(`${title} added to cart!`, {
      position: "top-right",
      autoClose: 1500,
    });
  };

  const handleWishlist = () => {
    setIsWishColor(!isWishColor);

    if (!isWishColor) {
      toast.success("Added to Wishlist ", {
        position: "top-right",
        autoClose: 1500,
      });
    } else {
      toast.info("Removed from Wishlist", {
        position: "top-center",
        autoClose: 1500,
      });
    }
  };

  const handleQuickView = () => {
    dispatch(
      setQuickViewItem({
        title,
        price,
        img: imgSrcFirst,
        quantity: 1,
        size: size,
        customSize: customSize, // Include custom size in quick view
      }),
    );

    toast.info("Opening Quick View…", {
      position: "top-center",
      autoClose: 1200,
    });
  };

  // Determine size display text
  const getSizeDisplay = () => {
    if (customSize) {
      return customSize;
    }
    return size;
  };

  // Determine if this is a custom size product
  const isCustomSize = size === "Custom" || customSize;

  return (
    <div className="w-[48%] lg:w-[32%] h-[430px] lg:h-[500px] m-auto lg:m-0 relative group border-2 border-gray-100 rounded-xl">
      <Link to={"/quickview"} onClick={handleQuickView}>
        <div className="w-full h-[300px] lg:h-[350px] relative">
          <img
            src={imgSrcFirst}
            alt={imgAlt}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-300"
          />
        </div>
      </Link>

      {badgeText && (
        <div
          className={`absolute top-2 left-2 py-1 px-4 text-black font-bold text-center text-xs lg:text-sm ${badgeClassName} ${
            isCustomSize ? "border-l-4 border-purple-500" : ""
          }`}
        >
          {badgeText}
          {isCustomSize && " ✂️"}
        </div>
      )}

      <div className="lg:p-0 space-y-3 absolute bottom-30 lg:bottom-36 left-0 w-full lg:opacity-0 lg:translate-y-4 lg:group-hover:opacity-100 lg:group-hover:translate-y-0 sm:opacity-100 sm:translate-y-0 transition-all duration-300 ease-in-out">
        <div
          onClick={handleAddToCart}
          className="w-[100%] h-[50px] flex justify-center m-auto hover:cursor-pointer bg-black hover:bg-mainColor transition-all duration-300 delay-200"
        >
          <p className="py-4 lg:py-3 text-base lg:text-lg font-medium text-white">
            {isCustomSize ? "CUSTOM ORDER" : "ADD TO CART"}
          </p>
        </div>
      </div>

      <div className="pb-10 px-3 mt-5">
        <div className="flex justify-between items-center">
          <p className="text-[#767676] text-base font-semibold">
            {productColor}
          </p>

          <div className="hover:cursor-pointer" onClick={handleWishlist}>
            <HiOutlineHeart
              className={`text-2xl transition-colors duration-300 ${
                isWishColor ? "fill-red-500" : "text-[#767676]"
              }`}
            />
          </div>
        </div>

        <h3 className="text-[#262626] text-sm lg:text-lg font-bold py-1">
          {title}
        </h3>

        <div className="flex justify-between items-center">
          <h4
            className={`text-mainColor text-base font-bold ${sizeClassName} ${
              isCustomSize ? "text-purple-600" : ""
            }`}
          >
            {isCustomSize ? "Custom: " : "Size: "}
            {getSizeDisplay()}
            {isCustomSize && " 📏"}
          </h4>
          <h4
            className={`text-mainColor text-lg font-bold ${priceClassName} ${
              isCustomSize ? "text-purple-600" : ""
            }`}
          >
            ${price.toFixed(2)}
            {isCustomSize && " *"}
          </h4>
        </div>

        {/* Custom size note */}
        {isCustomSize && (
          <p className="text-xs text-purple-500 mt-1 font-medium">
            * Custom sizing available
          </p>
        )}
      </div>
    </div>
  );
};

export default ShopProducts;
