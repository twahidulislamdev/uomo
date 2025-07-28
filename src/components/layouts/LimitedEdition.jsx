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
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 4000,
    prevArrow: <TestiPrevArrow />,
    nextArrow: <TestiNextArrow />,
  };
  return (
    <>
      <div className="bg-black pt-15 pb-20 mb-10">
        <Container>
          <h3 className="text-[35px] text-white text-center">Limited Edition</h3>
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
