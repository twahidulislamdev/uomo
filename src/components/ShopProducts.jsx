import { Link } from "react-router-dom";
import Flex from "./Flex";
import {
  HiOutlineShoppingBag,
  HiOutlineEye,
  HiOutlineHeart,
} from "react-icons/hi2";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/addToCartSlice";

const ShopProducts = ({
  imgSrc,
  imgAlt,
  badgeText,
  title,
  price,
  productColor,
  badgeClassName,
  priceClassName,
}) => {
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
    <div className="w-[48%] lg:w-[32%] m-auto lg:m-0 relative group border-2 border-gray-100  rounded-xl">
      {/* Product Image */}
      <div className="w-full h-[300px] lg:h-[400px] relative ">
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

      {/* Action Icons (Cart, Quick View, Wishlist) start */}
      <div
        className="absolute bottom-40 left-0 w-full opacity-100 translate-y-0 lg:opacity-0 lg:translate-y-4 lg:group-hover:opacity-100 lg:group-hover:translate-y-0 transition-all duration-300 ease-in-out"
      >
        <Flex className="justify-center space-x-5 z-22">
          {/* Add to Cart */}
          <div className="relative w-[40px] h-[40px] rounded-full bg-white hover:bg-gray-200 cursor-pointer shadow-md z-10">
            <HiOutlineShoppingBag
              onClick={handleAddToCart}
              className="text-2xl text-black absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />
          </div>
          {/* Quick View */}
          <div className="relative w-[40px] h-[40px] rounded-full bg-white hover:bg-gray-200 cursor-pointer shadow-md z-10">
            <HiOutlineEye className="text-2xl text-black absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          </div>

          {/* Wishlist */}
          <div className="relative w-[40px] h-[40px] rounded-full bg-white hover:bg-gray-200 cursor-pointer shadow-md z-10">
            <HiOutlineHeart className="text-2xl text-black absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          </div>
        </Flex>
      </div>
      {/* Action Icons (Cart, Quick View, Wishlist) End */}

      {/* Product Info */}
      <div className="pb-5 px-2 mt-5">
        <p className="text-[#767676] text-sm lg:text-base font-bold">{productColor}</p>
        <h3 className="text-[#262626] text-xs lg:text-lg font-bold py-1">{title}</h3>
        <h4 className={`text-mainColor text-sm lg:text-base font-bold ${priceClassName}`}>
          {price}
        </h4>
      </div>
    </div>
  );
};

export default ShopProducts;
