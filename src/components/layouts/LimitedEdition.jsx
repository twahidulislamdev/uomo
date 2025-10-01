import Container from "../Container";
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
    pauseOnHover: true,
    prevArrow: <TestiPrevArrow />,
    nextArrow: <TestiNextArrow />,
    responsive: [
      {
        breakpoint: 1024, // tablets
        settings: { 
          slidesToShow: 3, 
          slidesToScroll: 3, 
          infinite: true 
        },
      },
      {
        breakpoint: 768, // large phones
        settings: { 
          slidesToShow: 2, 
          slidesToScroll: 2, 
          initialSlide: 2 
        },
      },
      {
        breakpoint: 640, // small phones
        settings: { 
          slidesToShow: 1, 
          slidesToScroll: 1 
        },
      },
    ],
  };

  const products = [
    { 
      img: LimitedOne, 
      title: "Basic Crew Neck Tee", 
      price: "$44.00", 
      color: "Gray" 
    },
    { 
      imgSrcFirst: LimitedTwo, 
      title: "Urban Street Hoodie", 
      price: "$59.00", 
      color: "Black" 
    },
    { 
      img: LimitedThree, 
      title: "Classic Cotton Tee", 
      price: "$39.00", 
      color: "White" 
    },
    { 
      img: LimitedFour, 
      title: "Premium Sweatpants", 
      price: "$65.00", 
      color: "Navy Blue" 
    },
    { 
      img: LimitedFive, 
      title: "Designer Jacket", 
      price: "$89.00", 
      color: "Olive Green" 
    },
  ];

  return (
    <section className="bg-black pt-10 lg:pt-16 pb-20 px-3 lg:px-0 overflow-hidden">
      <Container>
        <h2 className="text-center text-4xl font-medium text-white mb-10 lg:mb-16">
          Limited Edition
        </h2>
        <div className="mt-10">
          <Slider {...settings}>
            {products.map((product, idx) => (
              <div key={`limited-edition-${idx}`} className="px-2">
                <LimitedEditionCard
                  imgSrcFirst={product.img}
                  imgAlt={product.title}
                  title={product.title}
                  price={product.price}
                  productColor={product.color}
                />
              </div>
            ))}
          </Slider>
        </div>
      </Container>
    </section>
  );
};

export default LimitedEdition;