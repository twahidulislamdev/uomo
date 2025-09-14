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
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
  };

  // Slides data (avoids repeating code)
  const slides = [
    { id: 1, img: SliderOne, title: "The Classics" },
    { id: 2, img: SliderTwo, title: "New Arrivals" },
    // { id: 3, img: SliderThree, title: "Trending Now" },
  ];

  return (
    <div className="w-[95%] m-auto  lg:px-10">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="mb-5">
            <Container>
              <Flex className="flex-col-reverse lg:flex-row items-center justify-between gap-6">
                {/* Text Section */}
                <div className="w-full lg:w-1/2 text-center lg:text-left">
                  <Heading
                    className="text-3xl sm:text-5xl lg:text-7xl font-medium"
                    txt={slide.title}
                    as="h1"
                  />
                  <p className="mt-2 text-sm sm:text-base text-mainColor">
                    An exclusive selection of this season's trends.
                  </p>
                  <Link to="/shop">
                    <button className="relative mt-5 text-sm sm:text-base font-medium pb-2 group">
                      <span className="group-hover:text-black transition-colors duration-300">
                        DISCOVER NOW
                      </span>
                      <span className="absolute left-0 bottom-0 h-0.5 bg-black w-1/3 group-hover:w-full transition-all duration-300 ease-in-out"></span>
                    </button>
                  </Link>
                </div>

                {/* Image Section */}
                <div className="w-[70%] lg:w-1/2 flex justify-center">
                  <Image
                    className="w-3/4  lg:w-full max-w-[400px]"
                    imgSrc={slide.img}
                    imgAlt="Fashion item"
                  />
                </div>
              </Flex>
            </Container>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
