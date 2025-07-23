import React from "react";
import TestimoniCard from "../TestimoniCard";
import Image from "../Image";
import TestimoniOne from "../../assets/testimoniOne.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import TestiPrevArrow from "../TestiPrevArrow";
import TestiNextArrow from "../TestiNextArrow";

const Testimonials = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    prevArrow: <TestiPrevArrow />,
    nextArrow: <TestiNextArrow />,
  };
  return (
    <div className="pt-15 pb-20">
      <h3 className={`text-center text-4xl font-medium`}>Testimonials</h3>

      <Slider {...settings}>
        <div className="">
          <TestimoniCard
            TestiHeading={"Testimonials"}
            TestiParagraph={
              "“ Ipsum dolor sit amet, consectetur adipiscing elit. Fringilla vel tincidunt ipsum ac. Nam at et id leo pulvinar egestas mi lorem. Adipiscing felis, vel faucibus in. Hendrerit viverra elementum venenatis pellentesque pellentesque ornare “"
            }
            TestiDetails={"Helena Gibbson, 06 April 2020"}
            imgSrc={TestimoniOne}
            imgAlt={"Testimoni clint Image"}
          />
        </div>
        <div className="">
          <TestimoniCard
            TestiHeading={"Testimonials"}
            TestiParagraph={
              "“ Ipsum dolor sit amet, consectetur adipiscing elit. Fringilla vel tincidunt ipsum ac. Nam at et id leo pulvinar egestas mi lorem. Adipiscing felis, vel faucibus in. Hendrerit viverra elementum venenatis pellentesque pellentesque ornare “"
            }
            TestiDetails={"Helena Gibbson, 06 April 2020"}
            imgSrc={TestimoniOne}
            imgAlt={"Testimoni clint Image"}
          />
        </div>
        <div className="">
          <TestimoniCard
            TestiHeading={"Testimonials"}
            TestiParagraph={
              "“ Ipsum dolor sit amet, consectetur adipiscing elit. Fringilla vel tincidunt ipsum ac. Nam at et id leo pulvinar egestas mi lorem. Adipiscing felis, vel faucibus in. Hendrerit viverra elementum venenatis pellentesque pellentesque ornare “"
            }
            TestiDetails={"Helena Gibbson, 06 April 2020"}
            imgSrc={TestimoniOne}
            imgAlt={"Testimoni clint Image"}
          />
        </div>
      </Slider>
    </div>
  );
};

export default Testimonials;
