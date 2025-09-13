import Container from "../Container";
import Flex from "../Flex";
import InsideCollectionCard from "../InsideCollectionCard";
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
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const InsideCollection = () => {
  const settings = {
    dots: true,
    infinite: true,

    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 4000,
  };
  return (
    <>
      <div className="bg-[#F8F8F8] py-15 mb-10 hidden lg:block">
        <Container>
          <h3 className="text-[35px] text-center">The Inside Collection</h3>
          <div className="mt-15 ">
              <Slider className="" {...settings}>
                <div className="">
                  <InsideCollectionCard
                    className={""}
                    imgSrc={ProductOne}
                    imgAlt={"Arive One"}
                    imgSrcTwo={ProductOneSide}
                    badgeText={"New"}
                    title={"Basic Crew Neck Tee"}
                    price={"$44.00"}
                    productColor={"Gray"}
                    badgeClassName={"bg-white"}
                  />
                </div>
                <div className="">
                  <InsideCollectionCard
                    className={""}
                    imgSrc={ProductTwo}
                    imgAlt={"Arive One"}
                    imgSrcTwo={ProductTwoSide}
                    badgeText={"New"}
                    title={"Basic Crew Neck Tee"}
                    price={"$44.00"}
                    productColor={"Gray"}
                    badgeClassName={"bg-white"}
                  />
                </div>
                <div className="">
                  <InsideCollectionCard
                    className={""}
                    imgSrc={ProductThree}
                    imgAlt={"Arive One"}
                    imgSrcTwo={ProductThreeSide}
                    badgeText={"New"}
                    title={"Basic Crew Neck Tee"}
                    price={"$44.00"}
                    productColor={"Gray"}
                    badgeClassName={"bg-white"}
                  />
                </div>
                <div className="">
                  <InsideCollectionCard
                    className={""}
                    imgSrc={ProductFour}
                    imgAlt={"Arive One"}
                    imgSrcTwo={ProductFourSide}
                    badgeText={"New"}
                    title={"Basic Crew Neck Tee"}
                    price={"$44.00"}
                    productColor={"Gray"}
                    badgeClassName={"bg-white"}
                  />
                </div>
                <div className="">
                  <InsideCollectionCard
                    className={""}
                    imgSrc={ProductFive}
                    imgAlt={"Arive One"}
                    imgSrcTwo={ProductFiveSide}
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

export default InsideCollection;
