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
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Trending = () => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      />
    );
  }
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2500,

    responsive: [
      // {
      //   breakpoint: 1024,
      //   settings: {
      //     slidesToShow: 3,
      //     slidesToScroll: 3,
      //     infinite: true,
      //     dots: true,
      //   },
      // },
      {
        breakpoint: 786,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <>
      <div className="py-10 lg:py-15">
        <Container>
          <div className="">
            <h3 className="text-[25px] lg:text-[35px] text-center">Trending</h3>
            <ul className="space-x-5 lg:space-x-10 text-center mt-5">
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

          <div className={" flex-wrap mt-10 ml-5 md:ml-0 lg:ml-0 "}>
            <Slider className="pb-5" {...settings}>
              <div>
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
              </div>
              <div className="">
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
              </div>
              <div className="">
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
              </div>
              <div className="">
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
              </div>
              <div className="">
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
              </div>
              <div className="">
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
              </div>
              <div className="">
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
              </div>
              <div className="">
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
            </Slider>
          </div>

          {/* Product part End  */}
          {/* See More Btn Satrt  */}
          <div className="mt-5">
            <Flex className={"justify-center"}>
              <Link to={"/shop"}>
                <button className="relative px-0 py-2 text-black text-xs lg:text-sm font-medium group hover:cursor-pointer mt-5 ">
                  <span className="group-hover:text-black transition-colors duration-300 text-left">
                    SEE MORE
                  </span>
                  <span
                    className="absolute left-0 bottom-0  h-0.5 bg-black transform  
                      w-1/3 group-hover:w-full group-hover:left-0 group-hover:translate-x-0 
                      transition-all duration-300 ease-in-out"
                  ></span>
                </button>
              </Link>
            </Flex>
          </div>
          {/* See More Btn End  */}
        </Container>
      </div>
    </>
  );
};

export default Trending;
