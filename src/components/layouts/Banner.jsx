import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Heading from "../Heading";
import Image from "../Image";
import SliderOne from "../../assets/sliderOne.png";
import SliderTwo from "../../assets/sliderTwo.png";
import SliderThree from "../../assets/sliderThree.png";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Banner = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
  };
  return (
    <>
      <div className="mx-10">
        <Slider className="" {...settings}>
          {/* Slider One Start */}
            <div className="mb-5">
              <Container >
              <Flex className={"justify-around items-center"}>
                <div className="w-[60%]">
                  <Heading
                    className={"text-[70px] font-medium"}
                    txt={"The Classics"}
                    as={"h1"}
                  />
                  <p className="text-base text-mainColor">
                    An exclusive selection of this season's trends.
                  </p>
                  <Link to={"/shop"}>
                    <button className="relative px-0 py-2 text-black text-sm font-medium group hover:cursor-pointer mt-5 ">
                      <span className="group-hover:text-black transition-colors duration-300 text-left">
                        DISCOVER NOW
                      </span>
                      <span
                        className="absolute left-0 bottom-0  h-0.5 bg-black transform  
                      w-1/3 group-hover:w-full group-hover:left-0 group-hover:translate-x-0 
                      transition-all duration-300 ease-in-out"
                      ></span>
                    </button>
                  </Link>
                </div>
                <div className="w-[40%]">
                  <Image
                    className={""}
                    imgSrc={SliderOne}
                    imgAlt={"Fashion item"}
                  />
                </div>
              </Flex>
            </Container>
            </div>
          {/* Slider one End */}
          {/* Slider Two Start */}
          <div className="mb-5">
              <Container className={""}>
              <Flex className={"justify-center items-center"}>
                <div className="w-[60%]">
                  <Heading
                    className={"text-[70px] font-medium"}
                    txt={"The Classics"}
                    as={"h1"}
                  />
                  <p className="text-base text-mainColor">
                    An exclusive selection of this season's trends.
                  </p>
                  <Link to={"/shop"}>
                    <button className="relative px-0 py-2 text-black text-sm font-medium group hover:cursor-pointer mt-5 ">
                      <span className="group-hover:text-black transition-colors duration-300 text-left">
                        DISCOVER NOW
                      </span>
                      <span
                        className="absolute left-0 bottom-0  h-0.5 bg-black transform  
                      w-1/3 group-hover:w-full group-hover:left-0 group-hover:translate-x-0 
                      transition-all duration-300 ease-in-out"
                      ></span>
                    </button>
                  </Link>
                </div>
                <div className="w-[40%]">
                  <Image
                    className={""}
                    imgSrc={SliderTwo}
                    imgAlt={"Fashion item"}
                  />
                </div>
              </Flex>
            </Container>
            </div>
          {/* Slider Two End */}
          {/* Slider Three Start */}
          {/* <div className="">
              <Container className={""}>
              <Flex className={"justify-between items-center"}>
                <div className="w-[60%]">
                  <Heading
                    className={"text-[70px] font-medium"}
                    txt={"The Classics"}
                    as={"h1"}
                  />
                  <p className="text-base text-mainColor">
                    An exclusive selection of this season's trends.
                  </p>
                  <Link to={"/shop"}>
                    <button className="relative px-0 py-2 text-black text-sm font-medium group hover:cursor-pointer mt-5 ">
                      <span className="group-hover:text-black transition-colors duration-300 text-left">
                        DISCOVER NOW
                      </span>
                      <span
                        className="absolute left-0 bottom-0  h-0.5 bg-black transform  
                      w-1/3 group-hover:w-full group-hover:left-0 group-hover:translate-x-0 
                      transition-all duration-300 ease-in-out"
                      ></span>
                    </button>
                  </Link>
                </div>
                <div className="w-[40%]">
                  <Image
                    className={"h-full w-full"}
                    imgSrc={SliderThree}
                    imgAlt={"Fashion item"}
                  />
                </div>
              </Flex>
            </Container>
            </div> */}
          {/* Slider Three End */}
        </Slider>
      </div>
    </>
  );
};

export default Banner;
