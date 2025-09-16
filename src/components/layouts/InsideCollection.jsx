import Container from "../Container";
import Flex from "../Flex";
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
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import HomeProduct from "../HomeProduct";
import TestiPrevArrow from "../TestiPrevArrow";
import TestiNextArrow from "../TestiNextArrow";

const InsideCollection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2500,
    // prevArrow: <TestiPrevArrow />,
    // nextArrow: <TestiNextArrow />,
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
      <div className="bg-[#F8F8F8] py-5 lg:py-15 mb-10  lg:block overflow-hidden">
        <Container>
          <h3 className="text-center text-4xl font-medium">
            The Inside Collection
          </h3>
          <div className="mt-10">
            <Slider className="pb-5" {...settings}>
              <div>
                <HomeProduct
                  imgSrc={ProductOne}
                  imgAlt="Arive One"
                  imgSrcTwo={ProductOneSide}
                  badgeText="New"
                  title="Basic Crew Neck Tee"
                  price="$44.00"
                  productColor="Gray"
                  badgeClassName="bg-white"
                />
              </div>
              <div>
                <HomeProduct
                  imgSrc={ProductTwo}
                  imgAlt="Arive Two"
                  imgSrcTwo={ProductTwoSide}
                  badgeText="10%"
                  title="Basic Crew Neck Tee"
                  price="$44.00"
                  productColor="White"
                  badgeClassName="bg-green-300"
                />
              </div>
              <div>
                <HomeProduct
                  imgSrc={ProductThree}
                  imgAlt="Arive Three"
                  imgSrcTwo={ProductThreeSide}
                  badgeText="New"
                  title="Basic Crew Neck Tee"
                  price="$44.00"
                  productColor="Black"
                  badgeClassName="bg-white"
                />
              </div>
              <div>
                <HomeProduct
                  imgSrc={ProductFour}
                  imgAlt="Arive Four"
                  imgSrcTwo={ProductFourSide}
                  badgeText="10%"
                  title="Basic Crew Neck Tee"
                  price="$44.00"
                  productColor="White"
                  badgeClassName="bg-green-300"
                />
              </div>
              <div>
                <HomeProduct
                  imgSrc={ProductFive}
                  imgAlt="Arive Five"
                  imgSrcTwo={ProductFiveSide}
                  badgeText="New"
                  title="Basic Crew Neck Tee"
                  price="$44.00"
                  productColor="Black"
                  badgeClassName="bg-white"
                />
              </div>
              <div>
                <HomeProduct
                  imgSrc={ProductSix}
                  imgAlt="Arive Six"
                  imgSrcTwo={ProductSixSide}
                  badgeText="10%"
                  title="Basic Crew Neck Tee"
                  price="$44.00"
                  productColor="White"
                  badgeClassName="bg-green-300"
                />
              </div>
              <div>
                <HomeProduct
                  imgSrc={ProductSeven}
                  imgAlt="Arive Seven"
                  imgSrcTwo={ProductSevenSide}
                  badgeText="New"
                  title="Basic Crew Neck Tee"
                  price="$44.00"
                  productColor="White"
                  badgeClassName="bg-white"
                />
              </div>
              <div>
                <HomeProduct
                  imgSrc={ProductEight}
                  imgAlt="Arive Eight"
                  imgSrcTwo={ProductEightSide}
                  badgeText="10%"
                  title="Basic Crew Neck Tee"
                  price="$44.00"
                  productColor="Black"
                  badgeClassName="bg-green-300"
                />
              </div>
            </Slider>
          </div>
        </Container>
      </div>
    </>
  );
};

export default InsideCollection;
