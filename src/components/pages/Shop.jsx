// import React, { useState } from "react";
import Flex from "../Flex";
import Container from "../Container";
import BannerBg from "../../assets/bannerBg.png";
import ProductOne from "../../assets/productOne.jpg";
import ProductTwo from "../../assets/productTwo.jpg";
import ProductThree from "../../assets/productThree.jpg";
import ProductFour from "../../assets/productFour.jpg";
import ProductFive from "../../assets/productFive.jpg";
import ProductSix from "../../assets/productSix.jpg";
import ProductSeven from "../../assets/productSeven.jpg";
import ProductEight from "../../assets/productEight.jpg";
import ProductFifteen from "../../assets/productFifteen.jpg";
import ShopProductCatagories from "../ShopProductCatagories";
import ShopProductSize from "../ShopProductSize";
import ShopProductColor from "../ShopProductColor";
import ShopProductBrand from "../ShopProductBrand";
import DefaultSorting from "../layouts/DefaultSorting";
import ShopProducts from "../ShopProducts";

const Shop = () => {

  // const [isFilters, setIsFilters] = useState(true);
  return (
    <>
      {/* Shop Banner Part Start  */}
      <div
        className="py-[100px] w-[95%] lg:w-full m-auto lg:m-0 bg-no-repeat bg-center bg-cover"
        style={{ backgroundImage: `url(${BannerBg})` }}
      >
        <Container>
          <h3 className={"text-7xl font-bold text-center text-mainColor"}>
            THE SHOP
          </h3>
          {/* Shop Manu Start  */}
          <ul className="flex justify-center text-center gap-x-10 m-auto mt-10">
            <li className="text-base font-semibold uppercase text-mainColor relative list-none px-2 py-2 cursor-pointer group hover:text-black hover:cursor-pointer hover:translate-x-0 transition-all ease-in-out ">
              Stay Home
              <span className="absolute left-0 bottom-0  h-0.5 bg-black transform w-0 group-hover:w-full group-hover:left-0 group-hover:translate-x-0 transition-all duration-300 ease-in-out"></span>
            </li>

            <li className="text-base font-semibold uppercase text-mainColor relative list-none px-2 py-2 cursor-pointer group hover:text-black hover:cursor-pointer hover:translate-x-0 transition-all ease-in-out">
              New In
              <span className="absolute left-0 bottom-0  h-0.5 bg-black transform w-0 group-hover:w-full group-hover:left-0 group-hover:translate-x-0 transition-all duration-300 ease-in-out"></span>
            </li>

            <li className="text-base font-semibold uppercase text-mainColor relative list-none px-2 py-2 cursor-pointer group hover:text-black hover:cursor-pointer hover:translate-x-0 transition-all ease-in-out">
              Man
              <span className="absolute left-0 bottom-0  h-0.5 bg-black transform w-0 group-hover:w-full group-hover:left-0 group-hover:translate-x-0 transition-all duration-300 ease-in-out"></span>
            </li>

            <li className="text-base font-semibold uppercase text-mainColor relative list-none px-2 py-2 cursor-pointer group hover:text-black hover:cursor-pointer hover:translate-x-0 transition-all ease-in-out ">
              Women
              <span className="absolute left-0 bottom-0  h-0.5 bg-black transform w-0 group-hover:w-full group-hover:left-0 group-hover:translate-x-0 transition-all duration-300 ease-in-out"></span>
            </li>

            <li className="text-base font-semibold uppercase text-mainColor relative list-none px-2 py-2 cursor-pointer group hover:text-black hover:cursor-pointer hover:translate-x-0 transition-all ease-in-out">
              SHOES
              <span className="absolute left-0 bottom-0  h-0.5 bg-black transform w-0 group-hover:w-full group-hover:left-0 group-hover:translate-x-0 transition-all duration-300 ease-in-out"></span>
            </li>

            <li className="text-base font-semibold uppercase text-mainColor relative list-none px-2 py-2 cursor-pointer group hover:text-black hover:cursor-pointer hover:translate-x-0 transition-all ease-in-out">
              Jackets
              <span className="absolute left-0 bottom-0  h-0.5 bg-black transform w-0 group-hover:w-full group-hover:left-0 group-hover:translate-x-0 transition-all duration-300 ease-in-out"></span>
            </li>

            <li className="text-base font-semibold uppercase text-mainColor relative list-none px-2 py-2 cursor-pointer group hover:text-black hover:cursor-pointer hover:translate-x-0 transition-all ease-in-out">
              Hoodies
              <span className="absolute left-0 bottom-0  h-0.5 bg-black transform w-0 group-hover:w-full group-hover:left-0 group-hover:translate-x-0 transition-all duration-300 ease-in-out"></span>
            </li>

            <li className="text-base font-semibold uppercase text-mainColor relative list-none px-2 py-2 cursor-pointer group hover:text-black hover:cursor-pointer hover:translate-x-0 transition-all ease-in-out">
              TROUSERS
              <span className="absolute left-0 bottom-0  h-0.5 bg-black transform w-0 group-hover:w-full group-hover:left-0 group-hover:translate-x-0 transition-all duration-300 ease-in-out"></span>
            </li>

            <li className="text-base font-semibold uppercase text-mainColor relative list-none px-2 py-2 cursor-pointer group hover:text-black hover:cursor-pointer hover:translate-x-0 transition-all ease-in-out">
              ACCESSORIES
              <span className="absolute left-0 bottom-0  h-0.5 bg-black transform w-0 group-hover:w-full group-hover:left-0 group-hover:translate-x-0 transition-all duration-300 ease-in-out"></span>
            </li>
          </ul>
          {/* Shop Manu Start  */}
        </Container>
      </div>
      {/* Shop Banner Part End  */}

      {/* Shop Products Part Start  */}
      <div className="relative py-[60px]">
        <Container>
          <Flex className={"justify-between gap-x-5"}>
            <div className=" w-0 lg:w-[30%] h-screen lg:h-auto">
              {/* Product Catagaries Start  */}
              <ShopProductCatagories />
              {/* Product Catagaries End  */}

              {/* Color Section start  */}
              <ShopProductColor />
              {/* Color Section End  */}

              {/* Color Section start  */}
              <ShopProductSize />
              {/* Color Section End  */}

              {/* Brand Section start  */}
              <ShopProductBrand />
              {/* Brand Section End  */}
            </div>
            {/* Product Card Section start */}
            <div className="w-[96%] lg:w-[70%] m-auto lg:m-0">
              <Flex className={"justify-between items-center"}>
                <div className="block lg:hidden w-[100px] h-10 bg-black text-white">
                  <h6 className="px-6 py-2">Filters</h6>
                </div>
                {/* Breadcrumb Start */}
                <h6 className="text-base font-medium text-mainColor">
                  HOME / SHOP
                </h6>
                {/* Breadcrumb End */}
                {/* See All Button Start */}
                <div className="hidden  lg:flex gap-x-5">
                  <DefaultSorting />
                  <div className={"flex"}>
                    <h5 className="text-base mr-5 text-menuColor">View</h5>
                    <ul className="flex gap-x-3">
                      {/* First View start  */}
                      <li className="text-base font-semibold uppercase text-mainColor relative list-none  cursor-pointer px-1 group hover:text-black hover:cursor-pointer hover:translate-x-0 transition-all ease-in-out">
                        2
                        <span className="absolute left-0 bottom-0  h-0.5 bg-black transform w-0 group-hover:w-full group-hover:left-0 group-hover:translate-x-0 transition-all duration-300 ease-in-out"></span>
                      </li>
                      {/* First View End  */}
                      {/* Second View start  */}
                      <li className="text-base font-semibold uppercase text-mainColor relative list-none  cursor-pointer px-1 group hover:text-black hover:cursor-pointer hover:translate-x-0 transition-all ease-in-out">
                        3
                        <span className="absolute left-0 bottom-0  h-0.5 bg-black transform w-0 group-hover:w-full group-hover:left-0 group-hover:translate-x-0 transition-all duration-300 ease-in-out"></span>
                      </li>
                      {/* Second View End  */}
                      {/* Third View start  */}
                      <li className="text-base font-semibold uppercase text-mainColor relative list-none  cursor-pointer px-1 group hover:text-black hover:cursor-pointer hover:translate-x-0 transition-all ease-in-out">
                        4
                        <span className="absolute left-0 bottom-0  h-0.5 bg-black transform w-0 group-hover:w-full group-hover:left-0 group-hover:translate-x-0 transition-all duration-300 ease-in-out"></span>
                      </li>
                      {/* Third View End  */}
                    </ul>
                  </div>
                </div>
                {/* See All Button End */}
              </Flex>
              {/* Product Part Start  */}
              <div className="mt-5">
                <Flex className={"justify-between flex-wrap gap-y-10"}>
                  <ShopProducts
                    className={" "}
                    imgSrc={ProductOne}
                    imgAlt={"Arive One"}
                    badgeText={"New"}
                    title={"Basic Crew Neck Tee"}
                    price={"$44.00"}
                    productColor={"Gray"}
                    badgeClassName={"bg-white"}
                  />
                  <ShopProducts
                    className={""}
                    imgSrc={ProductTwo}
                    imgAlt={"Arive Two"}
                    badgeText={"10%"}
                    title={"Basic Crew Neck Tee"}
                    price={"$44.00"}
                    productColor={"White"}
                    badgeClassName={"bg-green-300"}
                  />
                  <ShopProducts
                    className={""}
                    imgSrc={ProductThree}
                    imgAlt={"Arive Three"}
                    badgeText={"New"}
                    title={"Basic Crew Neck Tee"}
                    price={"$44.00"}
                    productColor={"Black"}
                    badgeClassName={"bg-white"}
                  />
                  <ShopProducts
                    className={""}
                    imgSrc={ProductFour}
                    imgAlt={"Arive Four"}
                    badgeText={"10%"}
                    title={"Basic Crew Neck Tee"}
                    price={"$44.00"}
                    productColor={"White"}
                    badgeClassName={"bg-green-300"}
                  />
                  <ShopProducts
                    className={""}
                    imgSrc={ProductFive}
                    imgAlt={"Arive Five"}
                    badgeText={"New"}
                    title={"Basic Crew Neck Tee"}
                    price={"$44.00"}
                    productColor={"Black"}
                    badgeClassName={"bg-white"}
                  />
                  <ShopProducts
                    className={""}
                    imgSrc={ProductSix}
                    imgAlt={"Arive Six"}
                    badgeText={"10%"}
                    title={"Basic Crew Neck Tee"}
                    price={"$44.00"}
                    productColor={"White"}
                    badgeClassName={"bg-green-300"}
                  />
                  <ShopProducts
                    className={""}
                    imgSrc={ProductSeven}
                    imgAlt={"Arive Seven"}
                    badgeText={"New"}
                    title={"Basic Crew Neck Tee"}
                    price={"$44.00"}
                    productColor={"White"}
                    badgeClassName={"bg-white"}
                  />
                  <ShopProducts
                    className={""}
                    imgSrc={ProductEight}
                    imgAlt={"Arive Eight"}
                    badgeText={"10%"}
                    title={"Basic Crew Neck Tee"}
                    price={"$44.00"}
                    productColor={"Black"}
                    badgeClassName={"bg-green-300"}
                  />
                  <ShopProducts
                    className={""}
                    imgSrc={ProductFifteen}
                    imgAlt={"Arive Eight"}
                    badgeText={"10%"}
                    title={"Basic Crew Neck Tee"}
                    price={"$44.00"}
                    productColor={"Black"}
                    badgeClassName={"bg-green-300"}
                  />
                </Flex>
              </div>
              {/* Product part End  */}
              {/* See All Button Start */}
              <div className=" flex justify-center mt-5 ">
                <ul className="flex gap-x-5">
                  <li className="relative  list-none px-2 py-2 text-lg  text-black  font-medium cursor-pointer group  hover:text-black  hover:cursor-pointer hover:translate-x-0 transition-all ease-in-out ">
                    1
                    <span
                      className="absolute left-0 bottom-0  h-0.5 bg-black transform  
                      w-0 group-hover:w-full group-hover:left-0 group-hover:translate-x-0 
                      transition-all duration-300 ease-in-out"
                    ></span>
                  </li>
                  <li className="relative list-none px-2 py-2 text-lg  text-black  font-medium cursor-pointer group  hover:text-black  hover:cursor-pointer hover:translate-x-0 transition-all ease-in-out ">
                    2
                    <span
                      className="absolute left-0 bottom-0  h-0.5 bg-black transform  
                      w-0 group-hover:w-full group-hover:left-0 group-hover:translate-x-0 
                      transition-all duration-300 ease-in-out"
                    ></span>
                  </li>
                  <li className="relative list-none px-2 py-2 text-lg  text-black  font-medium cursor-pointer group  hover:text-black  hover:cursor-pointer hover:translate-x-0 transition-all ease-in-out ">
                    3
                    <span
                      className="absolute left-0 bottom-0  h-0.5 bg-black transform  
                      w-0 group-hover:w-full group-hover:left-0 group-hover:translate-x-0 
                      transition-all duration-300 ease-in-out"
                    ></span>
                  </li>
                  <li className="relative list-none px-2 py-2 text-lg  text-black  font-medium cursor-pointer group  hover:text-black  hover:cursor-pointer hover:translate-x-0 transition-all ease-in-out ">
                    4
                    <span
                      className="absolute left-0 bottom-0  h-0.5 bg-black transform  
                      w-0 group-hover:w-full group-hover:left-0 group-hover:translate-x-0 
                      transition-all duration-300 ease-in-out"
                    ></span>
                  </li>
                  <li className="relative list-none px-2 py-2 text-lg  text-black  font-medium cursor-pointer group  hover:text-black  hover:cursor-pointer hover:translate-x-0 transition-all ease-in-out ">
                    5
                    <span
                      className="absolute left-0 bottom-0  h-0.5 bg-black transform  
                      w-0 group-hover:w-full group-hover:left-0 group-hover:translate-x-0 
                      transition-all duration-300 ease-in-out"
                    ></span>
                  </li>
                </ul>
              </div>
              {/* See All Button End  */}
            </div>
            {/* Product Card Section End */}
          </Flex>
        </Container>
      </div>

      {/* Shop Products Part End  */}
    </>
  );
};

export default Shop;
