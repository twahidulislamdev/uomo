import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import HomeProduct from "../HomeProduct";
import ProductOne from "../../assets/productOne.jpg";
import ProductOneSide from "../../assets/productOneSide.jpg";
import ProductTwo from "../../assets/productTwo.jpg";
import ProductTwoSide from "../../assets/productTwoSide.jpg";
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
      <div className="py-10 lg:py-15">
        <Container>
           <div className="">
            <h3 className="text-[25px] lg:text-[35px] text-center">Trending</h3>
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

          <div className={"flex justify-center lg:justify-between items-center flex-wrap mt-10 gap-y-10 "}>
            <HomeProduct
              className={""}
              imgSrc={ProductOne}
              imgAlt={"Arive One"}
              imgSrcTwo={ProductOneSide}
              badgeText={"New"}
              title={"Basic Crew Neck Tee"}
              price={"$44.00"}
              productColor={"Gray"}
              badgeClassName={"bg-white"}
            />
            <HomeProduct
              className={""}
              imgSrc={ProductTwo}
              imgAlt={"Arive Two"}
              imgSrcTwo={ProductTwoSide}
              badgeText={"10%"}
              title={"Basic Crew Neck Tee"}
              price={"$44.00"}
              productColor={"White"}
              badgeClassName={"bg-green-300"}
            />
            <HomeProduct
              className={""}
              imgSrc={ProductThree}
              imgAlt={"Arive Three"}
              badgeText={"New"}
              imgSrcTwo={ProductThreeSide}
              title={"Basic Crew Neck Tee"}
              price={"$44.00"}
              productColor={"Black"}
              badgeClassName={"bg-white"}
            />
            <HomeProduct
              className={""}
              imgSrc={ProductFour}
              imgAlt={"Arive Four"}
              imgSrcTwo={ProductFourSide}
              badgeText={"10%"}
              title={"Basic Crew Neck Tee"}
              price={"$44.00"}
              productColor={"White"}
              badgeClassName={"bg-green-300"}
            />
            <HomeProduct
              className={""}
              imgSrc={ProductFive}
              imgAlt={"Arive Five"}
              imgSrcTwo={ProductFiveSide}
              badgeText={"New"}
              title={"Basic Crew Neck Tee"}
              price={"$44.00"}
              productColor={"Black"}
              badgeClassName={"bg-white"}
            />
            <HomeProduct
              className={""}
              imgSrc={ProductSix}
              imgAlt={"Arive Six"}
              imgSrcTwo={ProductSixSide}
              badgeText={"10%"}
              title={"Basic Crew Neck Tee"}
              price={"$44.00"}
              productColor={"White"}
              badgeClassName={"bg-green-300"}
            />
            <HomeProduct
              className={""}
              imgSrc={ProductSeven}
              imgAlt={"Arive Seven"}
              imgSrcTwo={ProductSevenSide}
              badgeText={"New"}
              title={"Basic Crew Neck Tee"}
              price={"$44.00"}
              productColor={"White"}
              badgeClassName={"bg-white"}
            />
            <HomeProduct
              className={""}
              imgSrc={ProductEight}
              imgAlt={"Arive Eight"}
              imgSrcTwo={ProductEightSide}
              badgeText={"10%"}
              title={"Basic Crew Neck Tee"}
              price={"$44.00"}
              productColor={"Black"}
              badgeClassName={"bg-green-300"}
            />
          </div>

          {/* Product part End  */}
          {/* See More Btn Satrt  */}
          
          {/* See More Btn End  */}
        </Container>
      </div>
    </>
  );
};

export default Trending;
