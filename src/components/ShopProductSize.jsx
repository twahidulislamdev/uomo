import { useState } from "react";
import Flex from "./Flex";
import { IoIosArrowUp } from "react-icons/io";

const ShopProductSize = () => {
  const [isExpand, SetExpand] = useState(true);
  return (
    <div className="mt-5" onClick={() => SetExpand(!isExpand)}>
      <Flex className={"justify-between items-center mb-5"}>
        <h4 className="text-lg font-semibold text-mainColor">
          Size
        </h4>
        <IoIosArrowUp
          className={`text-xl text-mainColor mr-10 cursor-pointer ${
            isExpand ? "rotate-180" : ""
          }`}
        />
      </Flex>
      {isExpand && (
        <ul className="grid grid-cols-4 gap-y-5 ">
          <li className="py-2 w-15 bg-transparent border-2  text-center  border-gray-500">
            XS
          </li>
          <li className="py-2 w-15 bg-transparent border-2  text-center  border-gray-500">
            S
          </li>
          <li className="py-2  w-15 bg-transparent border-2  text-center  border-gray-500">
            M
          </li>
          <li className="py-2 w-15 bg-transparent border-2  text-center  border-gray-500">
            L
          </li>
          <li className="py-2 w-15 bg-transparent border-2  text-center  border-gray-500">
            XL
          </li>
          <li className="py-2 w-15 bg-transparent border-2  text-center  border-gray-500">
            XXL
          </li>
        </ul>
      )}
    </div>
  );
};

export default ShopProductSize;
