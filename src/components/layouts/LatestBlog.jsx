import React from "react";
import LatestBlogCard from "../LatestBlogCard";
import Container from "../Container";
import Flex from "../Flex";
import BlogOne from "../../assets/blogOne.png";
import BlogTwo from "../../assets/blogTwo.png";
import BlogThree from "../../assets/blogThree.png";
import BlogFour from "../../assets/blogFour.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const LatestBlog = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: false,
  };
  return (
    <>
      <div className="py-15 bg-[#F3EDDF]  ">
        <Container>
          <h3 className="text-center text-3xl mb-10">Latest in Blog</h3>
            <Slider {...settings}>
              <div className="">
                <LatestBlogCard
                  imgSrc={BlogOne}
                  imgAlt={"Blog One"}
                  adminTxt={"BY ADMIN"}
                  dateTxt={"APRIL 05, 2025"}
                  pTxt={`Woman with good shoes is never be ugly place`}
                />
              </div>
              <div className="">
                <LatestBlogCard
                  imgSrc={BlogTwo}
                  imgAlt={"Blog One"}
                  adminTxt={"BY ADMIN"}
                  dateTxt={"APRIL 05, 2025"}
                  pTxt={`Woman with good shoes is never be ugly place`}
                />
              </div>
              <div className="">
                <LatestBlogCard
                  imgSrc={BlogThree}
                  imgAlt={"Blog One"}
                  adminTxt={"BY ADMIN"}
                  dateTxt={"APRIL 05, 2025"}
                  pTxt={`Woman with good shoes is never be ugly place`}
                />
              </div>
              <div className="">
                <LatestBlogCard
                  imgSrc={BlogFour}
                  imgAlt={"Blog One"}
                  adminTxt={"BY ADMIN"}
                  dateTxt={"APRIL 05, 2025"}
                  pTxt={`Woman with good shoes is never be ugly place`}
                />
              </div>
            </Slider>
        </Container>
      </div>
    </>
  );
};

export default LatestBlog;
