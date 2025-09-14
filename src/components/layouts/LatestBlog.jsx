import LatestBlogCard from "../LatestBlogCard";
import Container from "../Container";

import BlogTwo from "../../assets/blogTwo.png";
import BlogThree from "../../assets/blogThree.png";
import BlogFour from "../../assets/blogFour.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const LatestBlog = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2500,
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
    <div className="py-[60px] bg-[#F3EDDF] px-3 lg:px-0 lg:block">
      <Container>
        <h3 className="text-center text-4xl font-medium mb-10">Latest in Blog</h3>
        <Slider {...settings}>
          <div>
            <LatestBlogCard
              imgSrc={BlogThree}
              imgAlt="Blog One"
              adminTxt="BY ADMIN"
              dateTxt="APRIL 05, 2025"
              pTxt="Woman with good shoes is never be ugly place"
            />
          </div>
          <div>
            <LatestBlogCard
              imgSrc={BlogTwo}
              imgAlt="Blog Two"
              adminTxt="BY ADMIN"
              dateTxt="APRIL 05, 2025"
              pTxt="Woman with good shoes is never be ugly place"
            />
          </div>
          <div>
            <LatestBlogCard
              imgSrc={BlogThree}
              imgAlt="Blog Three"
              adminTxt="BY ADMIN"
              dateTxt="APRIL 05, 2025"
              pTxt="Woman with good shoes is never be ugly place"
            />
          </div>
          <div>
            <LatestBlogCard
              imgSrc={BlogFour}
              imgAlt="Blog Four"
              adminTxt="BY ADMIN"
              dateTxt="APRIL 05, 2025"
              pTxt="Woman with good shoes is never be ugly place"
            />
          </div>
        </Slider>
      </Container>
    </div>
  );
};

export default LatestBlog;