import React, { useState } from "react";
import Heading from "./Heading";
import Flex from "./Flex";
import { IoIosArrowUp } from "react-icons/io";

const ShopProductBrand = () => {
  const [isExpand, SetExpand] = useState(true);
  return (
    <>
      <div className="mt-10 mr-10">
        <Flex className={"justify-between items-center"}>
          <Heading
            className={
              "text-lg font-semibold text-gray-900 tracking-wide uppercase"
            }
            txt={"Brand"}
            as={"h3"}
          />
          <IoIosArrowUp
            onClick={() => SetExpand(!isExpand)}
            className={`text-xl text-mainColor cursor-pointer ${
              isExpand ? "rotate-180" : ""
            } `}
          />
        </Flex>
        {/* Brand checkbox srart  */}
        {isExpand && (
          <div className="mt-5 space-y-5">
            {/* First Brand start  */}
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-blue-600"
              />
              <span className="text-gray-700">Adidas</span>
              <span className="ml-auto text-gray-500">2</span>
            </label>
            {/* First Brand End  */}
            {/* Second Brand Start  */}
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-blue-600"
              />
              <span className="text-gray-700">Nike</span>
              <span className="ml-auto text-gray-500">2</span>
            </label>
            {/* Second Brand End  */}
            {/* Third Brand Start  */}
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-blue-600"
              />
              <span className="text-gray-700">Puma</span>
              <span className="ml-auto text-gray-500">2</span>
            </label>
            {/* Third Brand End  */}
            {/* Fourth Brand Start  */}
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-blue-600"
              />
              <span className="text-gray-700">Zara</span>
              <span className="ml-auto text-gray-500">2</span>
            </label>
            {/* Fourth Brand End  */}
            {/* Fifth Brand Start  */}
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-blue-600"
              />
              <span className="text-gray-700">Chanel</span>
              <span className="ml-auto text-gray-500">2</span>
            </label>
            {/* Fifth Brand End  */}
          </div>
        )}
        {/* Brand checkbox srart  */}
      </div>
    </>
  );
};

export default ShopProductBrand;
