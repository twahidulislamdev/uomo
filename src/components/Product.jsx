import { Link } from "react-router-dom";
import Flex from "./Flex";
import {
  HiOutlineShoppingBag,
  HiOutlineEye,
  HiOutlineHeart,
} from "react-icons/hi2";
const Product = ({
  imgSrc,
  imgAlt,
  badgeText,
  title,
  price,
  productColor,
  imgSrcTwo,
  badgeClassName,
  priceClassName
}) => {
  return (
    <>
      <div className="w-[24%] relative group border-2 border-gray-100">
        <Link to={"/shop"}>
        <div className="relative h-100 overflow-hidden">
          {/* Default Image */}
          <img
            src={imgSrc}
            alt={imgAlt}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
          />

          {/* Hover Image */}
          <img
            src={imgSrcTwo}
            alt="Zessi Dress - Alternate View"
            className=" absolute inset-0 w-full h-full object-cover transition-opacity duration-300 opacity-0 group-hover:opacity-100"
          />
        </div>
        </Link>
        <div
          className={`absolute top-2 left-2 py-2 px-5 text-black font-bold text-center text-sm ${badgeClassName}`}
        >
          {badgeText}
        </div>
        {/* <Badge className={"absolute top-5 left-5"} badgeText={text} /> */}
        <div className=" p-7.5 space-y-3 absolute bottom-30 left-0 w-full opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-in-out">
          <Flex className={"justify-center space-x-5"}>
            <div className="relative w-[40px] h-[40px] rounded-[50%] hover:cursor-pointer bg-white hover:bg-gray-200 ">
              <HiOutlineShoppingBag className="text-2xl text-black absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            </div>
            <div className="relative w-[40px] h-[40px] rounded-[50%] hover:cursor-pointer bg-white hover:bg-gray-200">
              <HiOutlineEye className="text-2xl text-black absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            </div>
            <div className="relative w-[40px] h-[40px] rounded-[50%] hover:cursor-pointer bg-white hover:bg-gray-200 ">
              <HiOutlineHeart className="text-2xl text-black absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            </div>
          </Flex>
        </div>
        <div className="pb-5 px-2 mt-5 ">
          <p className="text-[#767676] text-base font-bold pt-2">
            {productColor}
          </p>
          <h3 className="text-[#262626] text-base font-bold py-1">{title}</h3>
            <h4 className={`text-mainColor text-base font-bold ${priceClassName}`}>{price}</h4>
        </div>
      </div>
    </>
  );
};

export default Product;
