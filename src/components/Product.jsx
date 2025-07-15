import Badge from "./Badge";
import Flex from "./Flex";
import {
  HiOutlineShoppingBag,
  HiOutlineEye,
  HiOutlineHeart,
} from "react-icons/hi2";
const Product = ({ imgSrc, imgAlt, text, title, price, productColor }) => {
  return (
    <>
      <div className="w-[23%] relative group border-2 border-gray-100">
        <img src={imgSrc} alt={imgAlt} />
        <Badge className={"absolute top-5 left-5"} badgeText={text} />
        <div className=" p-7.5 space-y-3 absolute bottom-22 left-0 w-full opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-in-out">
          <Flex className={"justify-center space-x-5"}>
            <div className="relative w-[40px] h-[40px] rounded-[50%] hover:cursor-pointer bg-white hover:bg-red-500 ">
              <HiOutlineShoppingBag className="text-2xl text-black hover:text-white  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            </div>
            <div className="relative w-[40px] h-[40px] rounded-[50%] hover:cursor-pointer bg-white hover:bg-red-500 ">
              <HiOutlineEye className="text-2xl text-black hover:text-white  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            </div>
            <div className="relative w-[40px] h-[40px] rounded-[50%] hover:cursor-pointer bg-white hover:bg-red-500 ">
              <HiOutlineHeart className="text-2xl text-black hover:text-white  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            </div>
          </Flex>
        </div>
        <div className="pb-3 px-2 mt-5 ">
          <p className="text-[#767676] text-base font-bold pt-2">
            {productColor}
          </p>
          <Flex className={"justify-between"}>
            <h3 className="text-[#262626] text-base font-bold">{title}</h3>
            <h4 className="text-[#767676] text-base font-bold">{price}</h4>
          </Flex>
        </div>
      </div>
    </>
  );
};

export default Product;
