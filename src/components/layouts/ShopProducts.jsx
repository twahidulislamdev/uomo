import Container from "../Container";
import Flex from "../Flex";
import DefaultSorting from "./DefaultSorting";
import ProductOne from "../../assets/productOne.jpg";
import ProductTwo from "../../assets/productTwo.jpg";
import ProductThree from "../../assets/productThree.jpg";
import ProductFour from "../../assets/productFour.jpg";
import ProductFive from "../../assets/productFive.jpg";
import ProductSix from "../../assets/productSix.jpg";
import ProductSeven from "../../assets/productSeven.jpg";
import ProductEight from "../../assets/productEight.jpg";
import ProductFifteen from "../../assets/productFifteen.jpg";
import ShopCard from "../ShopCard";
import ShopProductCatagories from "../ShopProductCatagories";
import ShopProductSize from "../ShopProductSize";
import ShopProductColor from "../ShopProductColor";
import ShopProductBrand from "../ShopProductBrand";

const ShopProducts = () => {
  return (
    <>
      <div className="py-[60px]">
        <Container>
          <Flex className={"justify-between gap-x-5"}>
            <div className="w-[30%]">
              {/* Product Catagaries Start  */}
              <ShopProductCatagories />
              {/* Product Catagaries End  */}

              {/* Color Section start  */}
              <ShopProductColor />
              {/* Color Section End  */}

              {/* Color Section start  */}
              <ShopProductSize />
              {/* Color Section End  */}

              {/* Color Section start  */}
              {/* <ShopProductBrand /> */}
              {/* Color Section End  */}

            </div>
            {/* Product Card Section start */}
            <div className="w-[70%]">
              <Flex className={"justify-between items-center"}>
                <h6 className="text-base font-medium text-mainColor">
                  HOME / SHOP
                </h6>
                <DefaultSorting />
              </Flex>
              {/* Product Part Start  */}
              <div className="mt-5">
                <Flex className={"justify-between flex-wrap gap-y-10"}>
                  <ShopCard
                    className={"w-[48%]"}
                    imgSrc={ProductOne}
                    imgAlt={"Arive One"}
                    badgeText={"New"}
                    title={"Basic Crew Neck Tee"}
                    price={"$44.00"}
                    productColor={"Gray"}
                    badgeClassName={"bg-white"}
                  />
                  <ShopCard
                    className={"w-[48%]"}
                    imgSrc={ProductTwo}
                    imgAlt={"Arive Two"}
                    badgeText={"10%"}
                    title={"Basic Crew Neck Tee"}
                    price={"$44.00"}
                    productColor={"White"}
                    badgeClassName={"bg-green-300"}
                  />
                  <ShopCard
                    className={"w-[48%]"}
                    imgSrc={ProductThree}
                    imgAlt={"Arive Three"}
                    badgeText={"New"}
                    title={"Basic Crew Neck Tee"}
                    price={"$44.00"}
                    productColor={"Black"}
                    badgeClassName={"bg-white"}
                  />
                  <ShopCard
                    className={"w-[48%]"}
                    imgSrc={ProductFour}
                    imgAlt={"Arive Four"}
                    badgeText={"10%"}
                    title={"Basic Crew Neck Tee"}
                    price={"$44.00"}
                    productColor={"White"}
                    badgeClassName={"bg-green-300"}
                  />
                  <ShopCard
                    className={"w-[48%]"}
                    imgSrc={ProductFive}
                    imgAlt={"Arive Five"}
                    badgeText={"New"}
                    title={"Basic Crew Neck Tee"}
                    price={"$44.00"}
                    productColor={"Black"}
                    badgeClassName={"bg-white"}
                  />
                  <ShopCard
                    className={"w-[48%]"}
                    imgSrc={ProductSix}
                    imgAlt={"Arive Six"}
                    badgeText={"10%"}
                    title={"Basic Crew Neck Tee"}
                    price={"$44.00"}
                    productColor={"White"}
                    badgeClassName={"bg-green-300"}
                  />
                  <ShopCard
                    className={"w-[48%]"}
                    imgSrc={ProductSeven}
                    imgAlt={"Arive Seven"}
                    badgeText={"New"}
                    title={"Basic Crew Neck Tee"}
                    price={"$44.00"}
                    productColor={"White"}
                    badgeClassName={"bg-white"}
                  />
                  <ShopCard
                    className={"w-[48%]"}
                    imgSrc={ProductEight}
                    imgAlt={"Arive Eight"}
                    badgeText={"10%"}
                    title={"Basic Crew Neck Tee"}
                    price={"$44.00"}
                    productColor={"Black"}
                    badgeClassName={"bg-green-300"}
                  />
                  <ShopCard
                    className={"w-[48%]"}
                    imgSrc={ProductFifteen}
                    imgAlt={"Arive Eight"}
                    badgeText={"10%"}
                    title={"Basic Crew Neck Tee"}
                    price={"$44.00"}
                    productColor={"Black"}
                    badgeClassName={"bg-green-300"}
                  />
                </Flex>
              </div>
              {/* Product part End  */}
            </div>
            {/* Product Card Section End */}
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default ShopProducts;
