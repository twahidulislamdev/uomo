import { useState } from "react";
import Flex from "./Flex";
import { IoIosArrowUp } from "react-icons/io";

const ShopProductCatagories = () => {
  const [isExpand, SetExpand] = useState(true);
  return (
    <div className="">
      <Flex className={"justify-between items-center mb-5"}>
        <h4 className="text-md text-mainColor">
          PRODUCT CATEGORIES
        </h4>
        <IoIosArrowUp
          onClick={() => SetExpand(!isExpand)}
          className={`text-xl text-mainColor mr-10 cursor-pointer ${
            isExpand ? "rotate-180" : ""
          }`}
        />
      </Flex>
      {isExpand && (
        <ul className="space-y-3">
          <li className="text-sm text-mainColor hover:bg-neutral-100 hover:cursor-pointer w-[200px] py-1 px-2 rounded-lg ">
            Sweatshirts
          </li>
          <li className="text-sm text-mainColor hover:bg-neutral-100 hover:cursor-pointer w-[200px] py-1 px-2 rounded-lg ">
            Dresses
          </li>
          <li className="text-sm text-mainColor hover:bg-neutral-100 hover:cursor-pointer w-[200px] py-1 px-2 rounded-lg ">
            Jackets
          </li>
          <li className="text-sm text-mainColor hover:bg-neutral-100 hover:cursor-pointer w-[200px] py-1 px-2 rounded-lg ">
            Jeans
          </li>
          <li className="text-sm text-mainColor hover:bg-neutral-100 hover:cursor-pointer w-[200px] py-1 px-2 rounded-lg ">
            Men
          </li>
          <li className="text-sm text-mainColor hover:bg-neutral-100 hover:cursor-pointer w-[200px] py-1 px-2 rounded-lg ">
            Shorts
          </li>
          <li className="text-sm text-mainColor hover:bg-neutral-100 hover:cursor-pointer w-[200px] py-1 px-2 rounded-lg ">
            Swimwear
          </li>
          <li className="text-sm text-mainColor hover:bg-neutral-100 hover:cursor-pointer w-[200px] py-1 px-2 rounded-lg ">
            Trousers
          </li>
          <li className="text-sm text-mainColor hover:bg-neutral-100 hover:cursor-pointer w-[200px] py-1 px-2 rounded-lg ">
            T-Shirts & Tops
          </li>
          <li className="text-sm text-mainColor hover:bg-neutral-100 hover:cursor-pointer w-[200px] py-1 px-2 rounded-lg ">
            Jumpers & Cardigans
          </li>
        </ul>
      )}
    </div>
  );
};

export default ShopProductCatagories;
