import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Product from "../Product";
import ProductOne from "../../assets/productOne.jpg";
import ProductTwo from "../../assets/productTwo.jpg";
import ProductThree from "../../assets/productThree.jpg";
import ProductFour from "../../assets/productFour.jpg";
import ProductFive from "../../assets/productFive.jpg";
import ProductSix from "../../assets/productSix.jpg";
import ProductSeven from "../../assets/productSeven.jpg";
import ProductEight from "../../assets/productEight.jpg";
import { Link } from "react-router-dom";

const Trending = () => {
  return (
    <>
      <div className="py-10">
        <Container>
          <div className="">
            <h3 className="text-[35px] text-center">Trending</h3>
            <ul className="space-x-10 text-center mt-5">
              <li className="inline-block text-base font-medium text-seconderyColor hover:text-mainColor">
                ALL
              </li>
              <li className="inline-block text-base font-medium text-seconderyColor hover:text-mainColor">
                WOMEN
              </li>
              <li className="inline-block text-base font-medium text-seconderyColor hover:text-mainColor">
                MAN
              </li>
              <li className="inline-block text-base font-medium text-seconderyColor hover:text-mainColor">
                KIDS
              </li>
            </ul>
          </div>
          {/* Product Part Start  */}
          <div className="mt-15">
            <Flex className={"justify-between flex-wrap gap-y-10"}>
              <Product
                className={""}
                imgSrc={ProductOne}
                imgAlt={"Arive One"}
                text={"New"}
                title={"Basic Crew Neck Tee"}
                price={"$44.00"}
                productColor={"Black"}
              />
              <Product
                className={""}
                imgSrc={ProductTwo}
                imgAlt={"Arive One"}
                text={"New"}
                title={"Basic Crew Neck Tee"}
                price={"$44.00"}
                productColor={"Black"}
              />
              <Product
                className={""}
                imgSrc={ProductThree}
                imgAlt={"Arive One"}
                text={"New"}
                title={"Basic Crew Neck Tee"}
                price={"$44.00"}
                productColor={"Black"}
              />
              <Product
                className={""}
                imgSrc={ProductFour}
                imgAlt={"Arive One"}
                text={"New"}
                title={"Basic Crew Neck Tee"}
                price={"$44.00"}
                productColor={"Black"}
              />
              <Product
                className={""}
                imgSrc={ProductFive}
                imgAlt={"Arive One"}
                text={"New"}
                title={"Basic Crew Neck Tee"}
                price={"$44.00"}
                productColor={"Black"}
              />
              <Product
                className={""}
                imgSrc={ProductSix}
                imgAlt={"Arive One"}
                text={"New"}
                title={"Basic Crew Neck Tee"}
                price={"$44.00"}
                productColor={"Black"}
              />
              <Product
                className={""}
                imgSrc={ProductSeven}
                imgAlt={"Arive One"}
                text={"New"}
                title={"Basic Crew Neck Tee"}
                price={"$44.00"}
                productColor={"Black"}
              />
              <Product
                className={""}
                imgSrc={ProductEight}
                imgAlt={"Arive One"}
                text={"New"}
                title={"Basic Crew Neck Tee"}
                price={"$44.00"}
                productColor={"Black"}
              />
            </Flex>
          </div>
          {/* Product part End  */}
          {/* See More Btn Satrt  */}
          <div className="flex justify-center items-center">
            <Link to={"/shop"}>
            <button className="relative  px-0 py-2 text-black text-sm font-semibold group hover:cursor-pointer mt-5 ">
              {/* Button text */}
              <span className="group-hover:text-black transition-colors duration-300 text-left">
                See All Products
              </span>
              {/* Bottom border - starts at half width */}
              <span
                className="absolute left-0 bottom-0  h-0.5 bg-black transform  
                      w-1/3 group-hover:w-full group-hover:left-0 group-hover:translate-x-0 
                      transition-all duration-300 ease-in-out"
              ></span>
            </button>
            </Link>
          </div>
          {/* See More Btn End  */}
        </Container>
      </div>
    </>
  );
};

export default Trending;
