import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import { RiArrowDropDownLine } from "react-icons/ri";
import DefaultSorting from "./DefaultSorting";

const ShopProducts = () => {
  return (
    <>
      <div className="py-15">
        <Container>
          <Flex className={"justify-between gap-x-5"}>
            <div className="w-[30%]">
              <div className="">
                <Flex className={"justify-between items-center mb-3"}>
                  <h4 className="text-lg font-semibold text-mainColor">
                    PRODUCT CATEGORIES
                  </h4>
                  <RiArrowDropDownLine className="text-3xl  text-mainColor" />
                </Flex>
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
                  <li className="text-sm text-mainColor">
                    Jumpers & Cardigans
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-[70%]">
              <Flex className={"justify-between items-center"}>
                <h6 className="text-base font-medium text-mainColor">
                  HOME / SHOP
                </h6>
                <DefaultSorting />
              </Flex>
              <div className="">
                    
              </div>
            </div>
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default ShopProducts;
