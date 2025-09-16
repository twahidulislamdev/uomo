import React, { useState, useEffect } from "react";
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
import { Link } from "react-router-dom";
import { GrClose } from "react-icons/gr";

const Shop = () => {
  const [isFilters, setIsFilters] = useState(false);

  // Freeze background when filter sidebar is open
  useEffect(() => {
    if (isFilters) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => (document.body.style.overflow = "auto");
  }, [isFilters]);

  return (
    <>
      {/* Shop Banner Part Start */}
      <div
        className="py-[30px] lg:py-[100px] w-full m-auto lg:m-0 px-3 bg-no-repeat bg-center bg-cover"
        style={{ backgroundImage: `url(${BannerBg})` }}
      >
        <Container>
          <h3 className="text-2xl lg:text-7xl font-bold text-center text-mainColor">
            THE SHOP
          </h3>
          <ul className="flex justify-center  gap-x lg:gap-x-15 text-center py-3 space-y-2 ">
            {["MAN", "WOMEN", "JACKRTS", "HOODIES", "TROUSERS", "SHOSE"].map(
              (item, idx) => (
                <Link to={item === "SHOP" ? "/shop" : "/"} key={idx}>
                  <li className="relative list-none px-2 py-2 text-sm font-medium text-black group cursor-pointer">
                    {item}
                    {/* <span className="absolute left-0 bottom-0  h-0.5 bg-black w-0 group-hover:w-full transition-all duration-300"></span> */}
                  </li>
                </Link>
              )
            )}
          </ul>
        </Container>
      </div>
      {/* Shop Banner Part End */}

      {/* Shop Products Part Start */}
      <div className="relative py-[60px]">
        <Container>
          <Flex className="justify-between gap-x-5">
            {/* Sidebar (Categories + Filters) */}
            <div
              className={`fixed top-0 left-0 h-full w-[80%] p-5 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50
              ${isFilters ? "translate-x-0" : "-translate-x-full"}
              lg:static lg:translate-x-0 lg:w-[30%] lg:h-auto overflow-y-auto`}
            >
              {/* Close Button for Mobile */}
              <div className="flex justify-between items-center lg:hidden mb-5 lg:mb-0 ">
                <h5 className="text-xl font-semibold">FILTER BY</h5>
                <button
                  onClick={() => setIsFilters(false)}
                  className="text-xl font-bold text-black"
                >
                  <GrClose/>
                </button>
              </div>

              {/* Categories */}
              <ShopProductCatagories />
              <ShopProductColor />
              <ShopProductSize />
              <ShopProductBrand />
            </div>
            {/* Sidebar End */}

            {/* Overlay (Mobile Only) */}
            {isFilters && (
              <div
                className="fixed inset-0 bg-gray-50 bg-opacity-100 z-40 lg:hidden"
                onClick={() => setIsFilters(false)}
              ></div>
            )}

            {/* Products Section */}
            <div className="w-full lg:w-[70%] m-auto lg:m-0">
              <Flex className="justify-between items-center">
                {/* Filter Button (Mobile Only) */}
                <div
                  className="block lg:hidden ml-4  px-6 py-2 border-1 border-neutral-400 text-center text-white cursor-pointer"
                  onClick={() => setIsFilters(true)}
                >
                  <h6 className="text-lg font-medium text-black text-center">
                    Filters
                  </h6>
                </div>

                {/* Breadcrumb start */}
                <h6 className="hidden lg:block text-lg font-medium text-mainColor">
                  HOME / SHOP
                </h6>
                {/* Breadcrumb End */}

                {/* Sorting + View (Desktop Only) */}
                <div className="flex justify-between items-center items gap-x-5">
                  <DefaultSorting />
                  {/* Product Views Sixe start  */}
                  <div className="hidden lg:flex ">
                    <h5 className="text-base mr-5 text-menuColor">View</h5>
                    <ul className="flex gap-x-3">
                      <li className="text-base font-semibold uppercase text-mainColor relative list-none cursor-pointer px-1 group hover:text-black transition-all ease-in-out">
                        2
                        <span className="absolute left-0 bottom-0 h-0.5 bg-black transform w-0 group-hover:w-full transition-all duration-300"></span>
                      </li>
                      <li className="text-base font-semibold uppercase text-mainColor relative list-none cursor-pointer px-1 group hover:text-black transition-all ease-in-out">
                        3
                        <span className="absolute left-0 bottom-0 h-0.5 bg-black transform w-0 group-hover:w-full transition-all duration-300"></span>
                      </li>
                      <li className="text-base font-semibold uppercase text-mainColor relative list-none cursor-pointer px-1 group hover:text-black transition-all ease-in-out">
                        4
                        <span className="absolute left-0 bottom-0 h-0.5 bg-black transform w-0 group-hover:w-full transition-all duration-300"></span>
                      </li>
                    </ul>
                  </div>
                  {/* Product Views Sixe End  */}
                </div>
              </Flex>

              {/* Products Grid */}
              <div className="mt-5">
                <Flex className="justify-between flex-wrap gap-y-10">
                  <ShopProducts
                    imgSrc={ProductOne}
                    imgAlt="Arive One"
                    badgeText="New"
                    title="Basic Crew Neck Tee"
                    price="$44.00"
                    productColor="Gray"
                    badgeClassName="bg-white"
                  />
                  <ShopProducts
                    imgSrc={ProductTwo}
                    imgAlt="Arive Two"
                    badgeText="10%"
                    title="Basic Crew Neck Tee"
                    price="$44.00"
                    productColor="White"
                    badgeClassName="bg-green-300"
                  />
                  <ShopProducts
                    imgSrc={ProductThree}
                    imgAlt="Arive Three"
                    badgeText="New"
                    title="Basic Crew Neck Tee"
                    price="$44.00"
                    productColor="Black"
                    badgeClassName="bg-white"
                  />
                  <ShopProducts
                    imgSrc={ProductFour}
                    imgAlt="Arive Four"
                    badgeText="10%"
                    title="Basic Crew Neck Tee"
                    price="$44.00"
                    productColor="White"
                    badgeClassName="bg-green-300"
                  />
                  <ShopProducts
                    imgSrc={ProductFive}
                    imgAlt="Arive Five"
                    badgeText="New"
                    title="Basic Crew Neck Tee"
                    price="$44.00"
                    productColor="Black"
                    badgeClassName="bg-white"
                  />
                  <ShopProducts
                    imgSrc={ProductSix}
                    imgAlt="Arive Six"
                    badgeText="10%"
                    title="Basic Crew Neck Tee"
                    price="$44.00"
                    productColor="White"
                    badgeClassName="bg-green-300"
                  />
                  <ShopProducts
                    imgSrc={ProductSeven}
                    imgAlt="Arive Seven"
                    badgeText="New"
                    title="Basic Crew Neck Tee"
                    price="$44.00"
                    productColor="White"
                    badgeClassName="bg-white"
                  />
                  <ShopProducts
                    imgSrc={ProductEight}
                    imgAlt="Arive Eight"
                    badgeText="10%"
                    title="Basic Crew Neck Tee"
                    price="$44.00"
                    productColor="Black"
                    badgeClassName="bg-green-300"
                  />
                  <ShopProducts
                    imgSrc={ProductFifteen}
                    imgAlt="Arive Eight"
                    badgeText="10%"
                    title="Basic Crew Neck Tee"
                    price="$44.00"
                    productColor="Black"
                    badgeClassName="bg-green-300"
                  />
                </Flex>
              </div>

              {/* Pagination */}
              <div className="flex justify-center mt-5">
                <ul className="flex gap-x-5">
                  {[1, 2, 3, 4, 5].map((num) => (
                    <li
                      key={num}
                      className="relative list-none px-2 py-2 text-lg text-black font-medium cursor-pointer group hover:text-black transition-all ease-in-out"
                    >
                      {num}
                      <span className="absolute left-0 bottom-0 h-0.5 bg-black transform w-0 group-hover:w-full transition-all duration-300"></span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* Products Section End */}
          </Flex>
        </Container>
      </div>
      {/* Shop Products Part End */}
    </>
  );
};

export default Shop;
