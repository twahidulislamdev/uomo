import Container from "../Container";
import Flex from "../Flex";
import LimitedOne from "../../assets/limitedOne.jpg";

import LimitedTwo from "../../assets/limitedTwo.jpg";

import LimitedThree from "../../assets/limitedThree.jpg";

import LimitedFour from "../../assets/limitedFour.jpg";

import LimitedFive from "../../assets/limitedFive.jpg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import LimitedEditionCard from "../LimitedEditionCard";
import TestiPrevArrow from "../TestiPrevArrow";
import TestiNextArrow from "../TestiNextArrow";

const LimitedEdition = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2500,
    prevArrow: <TestiPrevArrow />,
    nextArrow: <TestiNextArrow />,
    responsive: [
      {
        breakpoint: 1024, // tablets
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
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
    <>
      <div className="bg-black pt-10 lg:pt-15 pb-20 flex lg:block  px-3 lg:px-0">
        <Container>
          <h3 className="text-center text-4xl font-medium text-white">
            Limited Edition
          </h3>
          <div className="mt-10">
            <Slider className="" {...settings}>
              <div className="">
                <LimitedEditionCard
                  className={""}
                  imgSrc={LimitedOne}
                  imgAlt={"Arive One"}
                  badgeText={"New"}
                  title={"Basic Crew Neck Tee"}
                  price={"$44.00"}
                  productColor={"Gray"}
                  badgeClassName={"bg-white"}
                />
              </div>
              <div className="">
                <LimitedEditionCard
                  className={""}
                  imgSrc={LimitedTwo}
                  imgAlt={"Arive One"}
                  badgeText={"New"}
                  title={"Basic Crew Neck Tee"}
                  price={"$44.00"}
                  productColor={"Gray"}
                  badgeClassName={"bg-white"}
                />
              </div>
              <div className="">
                <LimitedEditionCard
                  className={""}
                  imgSrc={LimitedThree}
                  imgAlt={"Arive One"}
                  badgeText={"New"}
                  title={"Basic Crew Neck Tee"}
                  price={"$44.00"}
                  productColor={"Gray"}
                  badgeClassName={"bg-white"}
                />
              </div>
              <div className="">
                <LimitedEditionCard
                  className={""}
                  imgSrc={LimitedFour}
                  imgAlt={"Arive One"}
                  badgeText={"New"}
                  title={"Basic Crew Neck Tee"}
                  price={"$44.00"}
                  productColor={"Gray"}
                  badgeClassName={"bg-white"}
                />
              </div>
              <div className="">
                <LimitedEditionCard
                  className={""}
                  imgSrc={LimitedFive}
                  imgAlt={"Arive One"}
                  badgeText={"New"}
                  title={"Basic Crew Neck Tee"}
                  price={"$44.00"}
                  productColor={"Gray"}
                  badgeClassName={"bg-white"}
                />
              </div>
            </Slider>
          </div>
        </Container>
      </div>
    </>
  );
};

export default LimitedEdition;
