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
// import TestiPrevArrow from "../TestiPrevArrow";
// import TestiNextArrow from "../TestiNextArrow";

const Trending = () => {
  // function SampleNextArrow(props) {
  //   const { className, style, onClick } = props;
  //   return (
  //     <div
  //       className={className}
  //       style={{ ...style, display: "block" }}
  //       onClick={onClick}
  //     />
  //   );
  // }

  // function SamplePrevArrow(props) {
  //   const { className, style, onClick } = props;
  //   return (
  //     <div
  //       className={className}
  //       style={{ ...style, display: "block" }}
  //       onClick={onClick}
  //     />
  //   );
  // }
  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    // prevArrow: <TestiPrevArrow />,
    // nextArrow: <TestiNextArrow />,
    responsive: [
      {
        breakpoint: 1024, // tablets
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true,
        },
      },
      {
        breakpoint: 768, // large phones
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640, // small phones
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-[96%] m-auto flex justify-center  px-0 lg:px-0 mt-5 lg:mt-0  py-10 lg:py-16 overflow-hidden">
      <Container>
        {/* Heading */}
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
            Trending
          </h3>
          <ul className="flex flex-wrap justify-center gap-4 md:gap-8 mt-5">
            {["ALL", "WOMEN", "MAN", "KIDS"].map((item, idx) => (
              <li
                key={idx}
                className="relative group px-2 py-1 text-sm md:text-base font-medium text-seconderyColor hover:text-mainColor cursor-pointer"
              >
                {item}
                <span
                  className="absolute left-0 bottom-0 h-0.5 bg-black w-0 
                  group-hover:w-full transition-all duration-300 ease-in-out"
                ></span>
              </li>
            ))}
          </ul>
        </div>

        {/* Products Slider */}
        <div className="mt-10">
          <Slider className="pb-5" {...settings}>
            <div>
              <HomeProduct
                imgSrcFirst={ProductOne}
                imgAlt={"Arive One"}
                imgSrcSide={ProductOneSide}
                badgeText={"New"}
                title={"Cropped Faux Leather Jacket"}
                price={29.00}
                productColor={"Gray"}
                badgeClassName={"bg-white"}
              />
            </div>
            <div>
              <HomeProduct
                imgSrcFirst={ProductTwo}
                imgAlt="Arive Two"
                imgSrcSide={ProductTwoSide}
                badgeText={"10%"}
                title={"Calvin Shorts"}
                price={49.00}
                productColor={"White"}
                badgeClassName={"bg-green-300"}
              />
            </div>
            <div>
              <HomeProduct
                imgSrcFirst={ProductThree}
                imgAlt="Arive Three"
                imgSrcSide={ProductThreeSide}
                badgeText={"New"}
                title={"Kirby T-Shirt"}
                price={17.00}
                productColor={"Black"}
                badgeClassName={"bg-white"}
              />
            </div>
            <div>
              <HomeProduct
                imgSrcFirst={ProductFour}
                imgAlt="Arive Four"
                imgSrcSide={ProductFourSide}
                badgeText={"10%"}
                title={"Cableknit Shawl"}
                price={99.00}
                productColor={"White"}
                badgeClassName={"bg-green-300"}
              />
            </div>
            <div>
              <HomeProduct
                imgSrcFirst={ProductFive}
                imgAlt="Arive Five"
                imgSrcSide={ProductFiveSide}
                badgeText={"New"}
                title={"Colorful Jacket"}
                price={29.00}
                productColor={"Black"}
                badgeClassName={"bg-white"}
              />
            </div>
            <div>
              <HomeProduct
                imgSrcFirst={ProductSix}
                imgAlt="Arive Six"
                imgSrcSide={ProductSixSide}
                badgeText={"10%"}
                title={"Shirt In Botanical Cheetah Print"}
                price={52.00}
                productColor={"White"}
                badgeClassName={"bg-green-300"}
              />
            </div>
            <div>
              <HomeProduct
                imgSrcFirst={ProductSeven}
                imgAlt="Arive Seven"
                imgSrcSide={ProductSevenSide}
                badgeText={"New"}
                title={"Cotton Jersey T-Shirt"}
                price={17.00}
                productColor={"White"}
                badgeClassName={"bg-white"}
              />
            </div>
            <div>
              <HomeProduct
                imgSrcFirst={ProductEight}
                imgAlt="Arive Eight"
                imgSrcSide={ProductEightSide}
                badgeText={"10%"}
                title={"Zessi Dresses"}
                price={49.00}
                productColor={"Black"}
                badgeClassName={"bg-green-300"}
              />
            </div>
          </Slider>
        </div>

        {/* See More Button */}
        <div className="flex justify-center mt-6">
          <Link to="/shop">
            <button className="relative px-0 py-2 text-black text-sm md:text-base font-medium group cursor-pointer">
              <span className="group-hover:text-black transition-colors duration-300">
                SEE MORE
              </span>
              <span
                className="absolute left-0 bottom-0 h-0.5 bg-black 
                w-1/3 group-hover:w-full transition-all duration-300 ease-in-out"
              ></span>
            </button>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Trending;
