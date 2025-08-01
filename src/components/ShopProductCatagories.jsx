import { useState } from "react";
import Flex from "./Flex";
import { IoIosArrowUp } from "react-icons/io";

const ShopProductCatagories = () => {
  const [isExpand, SetExpand] = useState(true);
  return (
    <div className="" onClick={() => SetExpand(!isExpand)}>
      <Flex className={"justify-between items-center mb-5"}>
        <h4 className="text-lg font-semibold text-mainColor">
          PRODUCT CATEGORIES
        </h4>
        <IoIosArrowUp
          className={`text-xl text-mainColor mr-10 cursor-pointer ${
            isExpand ? "rotate-180" : ""
          }`}
        />
      </Flex>
      {isExpand && (
        <ul className="space-y-3">
          <li className="text-sm text-mainColor">Sweatshirts</li>
          <li className="text-sm text-mainColor">Dresses</li>
          <li className="text-sm text-mainColor">Jackets</li>
          <li className="text-sm text-mainColor">Jeans</li>
          <li className="text-sm text-mainColor">Men</li>
          <li className="text-sm text-mainColor">Shorts</li>
          <li className="text-sm text-mainColor">Swimwear</li>
          <li className="text-sm text-mainColor">Trousers</li>
          <li className="text-sm text-mainColor">T-Shirts & Tops</li>
          <li className="text-sm text-mainColor">Jumpers & Cardigans</li>
        </ul>
      )}
    </div>
  );
};

export default ShopProductCatagories;
