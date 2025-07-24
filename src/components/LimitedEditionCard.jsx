import Flex from "./Flex";
import {
  HiOutlineShoppingBag,
  HiOutlineEye,
  HiOutlineHeart,
} from "react-icons/hi2";

const LimitedEditionCard = ({
  imgSrc,
  imgAlt,
  title,
  price,
  priceClassName,
}) => {
  return (
    <>
      <div className="mx-3 relative group border-2 border-gray-100 bg-[url(/src/assets/collectionThree.jpg)]">
        <div className="relative h-[420px] ">
          {/* Default Image */}
          <img src={imgSrc} alt={imgAlt} className="w-full h-full flex justify-center items-center  " />
          <div className="absolute bottom-3 left-2 pt-10 px-2  z-10 ">
            
            <h3 className="text-[#262626] text-base font-bold py-1">{title}</h3>
            <h4
              className={`text-mainColor text-base font-bold ${priceClassName}`}
            >
              {price}
            </h4>
          </div>
        </div>
        {/* <Badge className={"absolute top-5 left-5"} badgeText={text} /> */}
        {/* Hover Effect Start  */}
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
      </div>
    </>
  );
};

export default LimitedEditionCard;
