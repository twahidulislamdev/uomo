import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Product from "../Product";
import ProductOne from "../../assets/productOne.jpg";
import ProductOneSide from "../../assets/productOneSide.jpg";
import ProductTwoSide from "../../assets/productTwoSide.jpg";
import ProductTwo from "../../assets/productTwo.jpg";
import ProductThree from "../../assets/productThree.jpg";
import ProductThreeSide from "../../assets/productThreeSide.jpg";
import ProductFour from "../../assets/productFour.jpg";
import ProductFourSide from "../../assets/productFourSide.jpg";
import ProductFive from "../../assets/productFive.jpg";
import ProductFiveSide from "../../assets/productFiveSide.jpg";
import ProductSix from "../../assets/productSix.jpg";
import ProductSixSide from "../../assets/productSixSide.jpg";
import ProductSeven from "../../assets/productSeven.jpg";
import ProductSevenSide from "../../assets/productSevenSide.jpg";
import ProductEight from "../../assets/productEight.jpg";
import ProductEightSide from "../../assets/productEightSide.jpg";
import { Link } from "react-router-dom";

const Trending = () => {
  return (
    <>
      <div className="py-15">
        <Container>
          <div className="">
            <h3 className="text-[35px] text-center">Trending</h3>
            <ul className="space-x-10 text-center mt-5">
              <li className="relative group px-2 py-2 inline-block text-base font-medium text-seconderyColor hover:text-mainColor hover:cursor-pointer">
                ALL
                <span
                  className="absolute left-0 bottom-0  h-0.5 bg-black transform  
                      w-0 group-hover:w-full group-hover:left-0 group-hover:translate-x-0 
                      transition-all duration-300 ease-in-out"
                ></span>
              </li>
              <li className="relative px-2 py-2 group inline-block text-base font-medium text-seconderyColor hover:text-mainColor hover:cursor-pointer">
                WOMEN
                <span
                  className="absolute left-0 bottom-0  h-0.5 bg-black transform  
                      w-0 group-hover:w-full group-hover:left-0 group-hover:translate-x-0 
                      transition-all duration-300 ease-in-out"
                ></span>
              </li>
              <li className="relative group px-2 py-2 inline-block text-base font-medium text-seconderyColor hover:text-mainColor hover:cursor-pointer">
                MAN
                <span
                  className="absolute left-0 bottom-0  h-0.5 bg-black transform  
                      w-0 group-hover:w-full group-hover:left-0 group-hover:translate-x-0 
                      transition-all duration-300 ease-in-out"
                ></span>
              </li>
              <li className="relative group px-2 py-2 inline-block text-base font-medium text-seconderyColor hover:text-mainColor hover:cursor-pointer">
                KIDS
                <span
                  className="absolute left-0 bottom-0  h-0.5 bg-black transform  
                      w-0 group-hover:w-full group-hover:left-0 group-hover:translate-x-0 
                      transition-all duration-300 ease-in-out"
                ></span>
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
                imgSrcTwo={ProductOneSide}
                text={"New"}
                title={"Basic Crew Neck Tee"}
                price={"$44.00"}
                productColor={"Black"}
              />
              <Product
                className={""}
                imgSrc={ProductTwo}
                imgAlt={"Arive One"}
                imgSrcTwo={ProductTwoSide}
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
                imgSrcTwo={ProductThreeSide}
                title={"Basic Crew Neck Tee"}
                price={"$44.00"}
                productColor={"Black"}
              />
              <Product
                className={""}
                imgSrc={ProductFour}
                imgAlt={"Arive One"}
                imgSrcTwo={ProductFourSide}
                text={"New"}
                title={"Basic Crew Neck Tee"}
                price={"$44.00"}
                productColor={"Black"}
              />
              <Product
                className={""}
                imgSrc={ProductFive}
                imgAlt={"Arive One"}
                imgSrcTwo={ProductFiveSide}
                text={"New"}
                title={"Basic Crew Neck Tee"}
                price={"$44.00"}
                productColor={"Black"}
              />
              <Product
                className={""}
                imgSrc={ProductSix}
                imgAlt={"Arive One"}
                imgSrcTwo={ProductSixSide}
                text={"New"}
                title={"Basic Crew Neck Tee"}
                price={"$44.00"}
                productColor={"Black"}
              />
              <Product
                className={""}
                imgSrc={ProductSeven}
                imgAlt={"Arive One"}
                imgSrcTwo={ProductSevenSide}
                text={"New"}
                title={"Basic Crew Neck Tee"}
                price={"$44.00"}
                productColor={"Black"}
              />
              <Product
                className={""}
                imgSrc={ProductEight}
                imgAlt={"Arive One"}
                imgSrcTwo={ProductEightSide}
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
