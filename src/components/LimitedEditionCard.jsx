import { Link } from "react-router-dom";
import Flex from "./Flex";
import { 
  HiOutlineShoppingBag, 
  HiOutlineEye, 
  HiOutlineHeart,
} from "react-icons/hi2";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/addToCartSlice";
import { setQuickViewItem } from "../features/quickViewSlice";

const LimitedEditionCard = ({
  title,
  price,
  imgSrcFirst,
  imgAlt,
  productColor,
  priceClassName,
}) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        title,
        price,
        img: imgSrcFirst,
        quantity: 1,
        color: productColor,
      })
    );
  };

  const handleQuickView = () => {
    dispatch(
      setQuickViewItem({
        title,
        price,
        img: imgSrcFirst,
        quantity: 1,
      })
    );
  };

  return (
    <div className="mx-3 relative group border-2 border-gray-100 bg-[url(/src/assets/collectionThree.jpg)]">
      <div className="relative h-[420px]">
        {/* Image with Quick View */}
        <div 
          onClick={handleQuickView} 
          className="cursor-pointer w-full h-full"
        >
          <img
            src={imgSrcFirst}
            alt={imgAlt}
            className="w-full h-full object-cover flex justify-center items-center"
          />
        </div>
        
        {/* Product Info */}
        <div className="absolute bottom-0 left-2 pt-10 px-2 z-10">
          <h3 className="text-[#262626] text-base font-bold py-1">{title}</h3>
          <h4
            className={`text-mainColor text-base font-bold ${priceClassName}`}
          >
            {price}
          </h4>
          <h5 className="text-gray-600 text-sm">{productColor}</h5>
        </div>
      </div>

      {/* Hover Effect */}
      <div className="p-7.5 space-y-3 absolute bottom-30 left-0 w-full opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-in-out">
        <Flex className={"justify-center space-x-5"}>
          {/* Add to Cart Button */}
          <button 
            onClick={handleAddToCart}
            className="relative w-[40px] h-[40px] rounded-[50%] hover:cursor-pointer bg-white hover:bg-gray-200 transition-colors duration-200"
          >
            <HiOutlineShoppingBag className="text-2xl text-black absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          </button>
          
          {/* Quick View Button */}
          <button 
            onClick={handleQuickView}
            className="relative w-[40px] h-[40px] rounded-[50%] hover:cursor-pointer bg-white hover:bg-gray-200 transition-colors duration-200"
          >
            <HiOutlineEye className="text-2xl text-black absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          </button>
          
          {/* Wishlist Link */}
          <Link to={"/collect"}>
            <div className="relative w-[40px] h-[40px] rounded-[50%] hover:cursor-pointer bg-white hover:bg-gray-200 transition-colors duration-200">
              <HiOutlineHeart className="text-2xl text-black absolute top-1/1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            </div>
          </Link>
        </Flex>
      </div>
    </div>
  );
};

export default LimitedEditionCard;