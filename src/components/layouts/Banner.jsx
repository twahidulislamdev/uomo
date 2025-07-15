import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Heading from "../Heading";
import Image from "../Image";
import SliderOne from "../../assets/sliderOne.png";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <>
      <div className="bg-[url(./assets/bannerBg.png)] bg-no-repeat bg-center bg-cover">
        <Container className={" "}>
          <Flex className={"justify-between  items-center"}>
            <div className="">
              <Heading
                className={"text-[70px] font-medium"}
                txt={"The Classics"}
                as={"h1"}
              />
              <p className="text-base text-[#222222]">
                An exclusive selection of this season's trends.
              </p>
              <Link to={"/shop"}>
              <button className="relative px-0 py-2 text-black text-sm font-medium group hover:cursor-pointer mt-5 ">
                {/* Button text */}
                <span className="group-hover:text-black transition-colors duration-300 text-left">
                  DISCOVER NOW
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

            <div className="mr-15 w-[550px]">
              <Image className={"w-full "} imgSrc={SliderOne} imgAlt={""} />
            </div>
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default Banner;
