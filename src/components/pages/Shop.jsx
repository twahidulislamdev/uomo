import { useState, useEffect } from "react";
import Flex from "../Flex";
import Container from "../Container";
import BannerBg from "../../assets/bannerBg.png";
import ProductOne from "../../assets/productOne.jpg";
import ProductTwo from "../../assets/productTwo.jpg";
import ProductThree from "../../assets/productThree.jpg";
import ProductFour from "../../assets/productFour.jpg";
import ProductFive from "../../assets/productFive.jpg";
import ProductSix from "../../assets/productSix.jpg";
import ProductSeven from "../../assets/productSeven.jpg";
import ProductEight from "../../assets/productEight.jpg";
import ProductFifteen from "../../assets/productFifteen.jpg";
import DefaultSorting from "../layouts/DefaultSorting";
import ShopProducts from "../ShopProducts";
import { Link } from "react-router-dom";
import { GrClose } from "react-icons/gr";
import { IoFilter } from "react-icons/io5";
import { IoIosArrowUp } from "react-icons/io";
import Heading from "../Heading";
import { ToastContainer } from "react-toastify";

const Shop = () => {
  const [isFilters, setIsFilters] = useState(false);

  // Freeze background when filter sidebar is open
  useEffect(() => {
    if (isFilters) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => (document.body.style.overflow = "auto");
  }, [isFilters]);

  // ----------------------##-----------------------
  // Category state
  const [isCategoryExpand, setCategoryExpand] = useState(true);
  const [selectedCategories, setSelectedCategories] = useState([]);

  // Color state
  const [isColorExpand, setColorExpand] = useState(true);
  const [selectedColor, setSelectedColor] = useState(null);

  // Brand state
  const [isBrandExpand, setBrandExpand] = useState(true);
  const [selectedBrands, setSelectedBrands] = useState([]);

  // Size state
  const [isSizeExpand, setSizeExpand] = useState(true);
  const [selectedSizes, setSelectedSizes] = useState([]);

  // Category data
  const categories = [
    "Sweatshirts",
    "Dresses",
    "Jackets",
    "Jeans",
    "Men",
    "Shorts",
    "Swimwear",
    "Trousers",
    "T-Shirts & Tops",
    "Jumpers & Cardigans",
  ];

  // Brand data
  const brands = [
    { name: "Adidas", count: 2 },
    { name: "Nike", count: 2 },
    { name: "Puma", count: 2 },
    { name: "Zara", count: 2 },
    { name: "Chanel", count: 2 },
  ];

  // Color data
  const colors = [
    { name: "navy", bgColor: "bg-blue-900", value: "#1e3a8a" },
    { name: "yellow", bgColor: "bg-yellow-500", value: "#eab308" },
    { name: "black", bgColor: "bg-black", value: "#000000" },
    { name: "lightblue", bgColor: "bg-blue-200", value: "#bfdbfe" },
    { name: "brown", bgColor: "bg-amber-700", value: "#b45309" },
    { name: "orange", bgColor: "bg-orange-500", value: "#f97316" },
    { name: "pink", bgColor: "bg-pink-300", value: "#f9a8d4" },
    { name: "coral", bgColor: "bg-red-400", value: "#f87171" },
    { name: "gray", bgColor: "bg-gray-400", value: "#9ca3af" },
    { name: "mint", bgColor: "bg-green-200", value: "#bbf7d0" },
  ];

  // Size options
  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

  // Product data with filter properties
  const products = [
    {
      id: 1,
      imgSrcFirst: ProductOne,
      imgAlt: "Arive One",
      badgeText: "New",
      title: "Cropped Faux Leather Jacket",
      price: 29.0,
      productColor: "Gray",
      badgeClassName: "bg-white",
      category: "Jackets",
      brand: "Zara",
      size: "M",
      color: "black",
    },
    {
      id: 2,
      imgSrcFirst: ProductTwo,
      imgAlt: "Arive Two",
      badgeText: "10%",
      title: "Calvin Shorts",
      price: 62.0,
      productColor: "White",
      badgeClassName: "bg-green-300",
      category: "Shorts",
      brand: "Nike",
      size: "S",
      color: "white",
    },
    {
      id: 3,
      imgSrcFirst: ProductThree,
      imgAlt: "Arive Three",
      badgeText: "New",
      title: "Kirby T-Shirt",
      price: 17.0,
      productColor: "Black",
      badgeClassName: "bg-white",
      category: "T-Shirts & Tops",
      brand: "Adidas",
      size: "L",
      color: "black",
    },
    {
      id: 4,
      imgSrcFirst: ProductFour,
      imgAlt: "Arive Four",
      badgeText: "10%",
      title: "Cableknit Shawl",
      price: 99.0,
      productColor: "White",
      badgeClassName: "bg-green-300",
      category: "Jumpers & Cardigans",
      brand: "Chanel",
      size: "XL",
      color: "white",
    },
    {
      id: 5,
      imgSrcFirst: ProductFive,
      imgAlt: "Arive Five",
      badgeText: "New",
      title: "Colorful Jacket",
      price: 29.0,
      productColor: "Black",
      badgeClassName: "bg-white",
      category: "Jackets",
      brand: "Puma",
      size: "M",
      color: "black",
    },
    {
      id: 6,
      imgSrcFirst: ProductSix,
      imgAlt: "Arive Six",
      badgeText: "10%",
      title: "Shirt In Botanical Cheetah Print",
      price: 52.0,
      productColor: "White",
      badgeClassName: "bg-green-300",
      category: "T-Shirts & Tops",
      brand: "Zara",
      size: "S",
      color: "white",
    },
    {
      id: 7,
      imgSrcFirst: ProductSeven,
      imgAlt: "Arive Seven",
      badgeText: "New",
      title: "Cotton Jersey T-Shirt",
      price: 17.0,
      productColor: "White",
      badgeClassName: "bg-white",
      category: "T-Shirts & Tops",
      brand: "Nike",
      size: "M",
      color: "white",
    },
    {
      id: 8,
      imgSrcFirst: ProductEight,
      imgAlt: "Arive Eight",
      badgeText: "10%",
      title: "Zessi Dresses",
      price: 49.0,
      productColor: "Black",
      badgeClassName: "bg-green-300",
      category: "Dresses",
      brand: "Chanel",
      size: "L",
      color: "black",
    },
    {
      id: 9,
      imgSrcFirst: ProductFifteen,
      imgAlt: "Arive Fifteen",
      badgeText: "10%",
      title: "Basic Crew Neck Tee",
      price: 44.0,
      productColor: "Black",
      badgeClassName: "bg-green-300",
      category: "T-Shirts & Tops",
      brand: "Adidas",
      size: "XL",
      color: "black",
    },
  ];

  // Toggle handlers
  const toggleCategory = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const toggleBrand = (brand) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  const toggleSize = (size) => {
    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    );
  };

  const clearAllFilters = () => {
    setSelectedCategories([]);
    setSelectedColor(null);
    setSelectedBrands([]);
    setSelectedSizes([]);
  };

  // Filter products based on selected filters
  const filteredProducts = products.filter((product) => {
    // Category filter
    if (
      selectedCategories.length > 0 &&
      !selectedCategories.includes(product.category)
    ) {
      return false;
    }

    // Color filter
    if (selectedColor && product.color !== selectedColor) {
      return false;
    }

    // Brand filter
    if (selectedBrands.length > 0 && !selectedBrands.includes(product.brand)) {
      return false;
    }

    // Size filter
    if (selectedSizes.length > 0 && !selectedSizes.includes(product.size)) {
      return false;
    }

    return true;
  });

  const activeFiltersCount =
    selectedCategories.length +
    (selectedColor ? 1 : 0) +
    selectedBrands.length +
    selectedSizes.length;

  return (
    <>
      {/* Shop Banner Part Start */}
      <div
        className="relative py-[30px] lg:py-[100px] w-full m-auto lg:m-0 px-3 bg-no-repeat bg-center bg-cover"
        style={{ backgroundImage: `url(${BannerBg})` }}
      >
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <Container>
          <h3 className="text-2xl lg:text-7xl font-bold text-center text-mainColor">
            THE SHOP
          </h3>
          {/* <ul className="flex justify-center gap-x-5 lg:gap-x-15 text-center py-3 space-y-2 flex-wrap ">
            {["MAN", "WOMEN", "JACKETS", "HOODIES", "TROUSERS", "SHOES"].map(
              (item, idx) => (
                <Link to={item === "SHOP" ? "/shop" : "/"} key={idx}>
                  <li className="relative list-none w-[15%] px-2 py-2 text-sm font-medium text-black group cursor-pointer">
                    {item}
                  </li>
                </Link>
              )
            )}
          </ul> */}
        </Container>
      </div>
      {/* Shop Banner Part End */}

      {/* Shop Products Part Start */}
      <div className="relative py-[30px]">
        <Container>
          <Flex className="justify-between gap-x-5">
            {/* Sidebar (Categories + Filters) */}
            <div
              className={`w-[85%] fixed top-0 left-0 h-screen p-5 bg-white shadow-2xl rounded transform transition-transform duration-300 ease-in-out z-50 overflow-y-auto
  ${isFilters ? "translate-x-0" : "-translate-x-full"}
  lg:static lg:w-[28%] lg:translate-x-0 lg:h-full lg:overflow-visible`}
            >
              {/* Close Button for Mobile */}
              <div className="flex justify-between items-center lg:hidden mb-6 pb-4 border-b-2 border-gray-100">
                <div>
                  <h5 className="text-xl font-bold text-gray-900">FILTERS</h5>
                  {activeFiltersCount > 0 && (
                    <span className="text-xs text-gray-500 mt-1 inline-block">
                      {activeFiltersCount} active filter
                      {activeFiltersCount > 1 ? "s" : ""}
                    </span>
                  )}
                </div>
                <button
                  onClick={() => setIsFilters(false)}
                  className="text-xl font-bold text-gray-700 hover:text-black transition-colors  hover:bg-gray-100 rounded-lg"
                >
                  <GrClose />
                </button>
              </div>

              {/* Clear All Button */}
              {activeFiltersCount > 0 && (
                <button
                  onClick={clearAllFilters}
                  className="w-full mb-5 py-3 px-4 bg-gradient-to-r from-red-50 to-pink-50 text-red-600 rounded-xl hover:from-red-100 hover:to-pink-100 transition-all font-semibold shadow-sm border border-red-200"
                >
                  Clear All Filters ({activeFiltersCount})
                </button>
              )}

              {/* Active Filters Info */}
              {activeFiltersCount > 0 && (
                <div className="mb-3 p-3 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-800 font-medium">
                    Showing {filteredProducts.length} of {products.length}{" "}
                    products
                  </p>
                </div>
              )}

              {/* Short List part start  */}
              <div className="w-full">
                {/* ------------------------- CATEGORY Start ------------------------- */}
                <div className="mb-5">
                  <button
                    onClick={() => setCategoryExpand(!isCategoryExpand)}
                    className="w-full flex justify-between items-center mb-4 py-3 px-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl hover:from-gray-100 hover:to-gray-200 transition-all"
                  >
                    <h4 className="text-md font-bold text-gray-900 uppercase tracking-wide">
                      Product Categories
                    </h4>
                    <IoIosArrowUp
                      className={`text-xl text-gray-700 transition-transform duration-300 ${
                        isCategoryExpand ? "" : "rotate-180"
                      }`}
                    />
                  </button>

                  {isCategoryExpand && (
                    <ul className="space-y-1 mb-3">
                      {categories.map((item) => (
                        <li
                          key={item}
                          onClick={() => toggleCategory(item)}
                          className={`text-sm py-3 px-4 rounded-xl cursor-pointer transition-all duration-200 ${
                            selectedCategories.includes(item)
                              ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold shadow-md transform scale-[1.02]"
                              : "text-gray-700 hover:bg-gray-100 hover:text-gray-900 font-medium"
                          }`}
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                {/* ------------------------- CATEGORY End ------------------------- */}

                {/* ------------------------- BRAND Start ------------------------- */}
                <div className="mb-6">
                  <button
                    onClick={() => setBrandExpand(!isBrandExpand)}
                    className="w-full flex justify-between items-center py-3 px-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl hover:from-gray-100 hover:to-gray-200 transition-all"
                  >
                    <Heading
                      className="text-md font-bold text-gray-900 tracking-wide uppercase"
                      txt="Brand"
                      as="h3"
                    />
                    <IoIosArrowUp
                      className={`text-xl text-gray-700 transition-transform duration-300 ${
                        isBrandExpand ? "" : "rotate-180"
                      }`}
                    />
                  </button>

                  {isBrandExpand && (
                    <div className="mt-4 space-y-2">
                      {brands.map((brand) => (
                        <label
                          key={brand.name}
                          className={`flex items-center justify-between py-3 px-4 rounded-xl cursor-pointer transition-all duration-200 ${
                            selectedBrands.includes(brand.name)
                              ? "bg-gradient-to-r from-blue-50 to-purple-50 shadow-sm"
                              : "hover:bg-gray-50"
                          }`}
                        >
                          <div className="flex items-center space-x-3">
                            <input
                              type="checkbox"
                              checked={selectedBrands.includes(brand.name)}
                              onChange={() => toggleBrand(brand.name)}
                              className="form-checkbox h-5 w-5 text-blue-600 rounded focus:ring-2 focus:ring-blue-500 cursor-pointer"
                            />
                            <span
                              className={`${
                                selectedBrands.includes(brand.name)
                                  ? "text-gray-900 font-semibold"
                                  : "text-gray-700 font-medium"
                              }`}
                            >
                              {brand.name}
                            </span>
                          </div>
                          <span className="text-xs font-semibold text-gray-500 bg-gray-100 px-2.5 py-1 rounded-full">
                            {brand.count}
                          </span>
                        </label>
                      ))}
                    </div>
                  )}
                </div>
                {/* ------------------------- BRAND End ------------------------- */}

                {/* ------------------------- COLOR Start ------------------------- */}
                <div className="mb-6 bg-white rounded-xl">
                  <button
                    onClick={() => setColorExpand(!isColorExpand)}
                    className="w-full flex items-center justify-between py-3 px-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl hover:from-gray-100 hover:to-gray-200 transition-all"
                  >
                    <h3 className="text-md font-bold text-gray-900 uppercase tracking-wide">
                      Color
                    </h3>
                    <IoIosArrowUp
                      className={`text-xl text-gray-700 transition-transform duration-300 ${
                        isColorExpand ? "" : "rotate-180"
                      }`}
                    />
                  </button>

                  {isColorExpand && (
                    <div className="pb-6 mt-4 px-2">
                      <div className="grid grid-cols-5 gap-3">
                        {colors.map((color) => (
                          <button
                            key={color.name}
                            className={`w-11 h-11 rounded-full transition-all duration-200 transform ${
                              selectedColor === color.name
                                ? "ring-4 ring-offset-2 ring-blue-500 scale-110 shadow-lg"
                                : "ring-2 ring-gray-300 hover:ring-gray-400 hover:scale-105 shadow-sm"
                            } ${color.bgColor}`}
                            onClick={() =>
                              setSelectedColor(
                                selectedColor === color.name ? null : color.name
                              )
                            }
                            aria-label={`Select ${color.name} color`}
                            title={
                              color.name.charAt(0).toUpperCase() +
                              color.name.slice(1)
                            }
                          />
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                {/* ------------------------- COLOR End ------------------------- */}

                {/* ------------------------- SIZE Start ------------------------- */}
                <div className="mb-6">
                  <button
                    onClick={() => setSizeExpand(!isSizeExpand)}
                    className="w-full flex justify-between items-center mb-4 py-3 px-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl hover:from-gray-100 hover:to-gray-200 transition-all"
                  >
                    <h4 className="text-md font-bold text-gray-900 uppercase tracking-wide">
                      Size
                    </h4>
                    <IoIosArrowUp
                      className={`text-xl text-gray-700 transition-transform duration-300 ${
                        isSizeExpand ? "" : "rotate-180"
                      }`}
                    />
                  </button>

                  {isSizeExpand && (
                    <ul className="grid grid-cols-3 gap-3">
                      {sizes.map((size) => (
                        <li
                          key={size}
                          onClick={() => toggleSize(size)}
                          className={`py-3 text-center font-bold rounded-xl cursor-pointer transition-all duration-200 transform ${
                            selectedSizes.includes(size)
                              ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg scale-105"
                              : "bg-white border-2 border-gray-300 text-gray-700 hover:border-blue-400 hover:shadow-md hover:scale-[1.02]"
                          }`}
                        >
                          {size}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                {/* ------------------------- SIZE End ------------------------- */}
              </div>
              {/* Short List part End  */}
            </div>
            {/* Sidebar End */}

            {/* Overlay (Mobile Only) */}
            {isFilters && (
              <div
                className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden backdrop-blur-sm"
                onClick={() => setIsFilters(false)}
              ></div>
            )}

            {/*------------------ Products Section start -------------------- */}
            <div className="w-full lg:w-[70%] m-auto lg:m-0 pt-5 ">
              <Flex className="justify-between items-center">
                {/* Filter Button (Mobile Only) */}
                <div
                  className="relative flex justify-between items-center gap-x-2 lg:hidden ml-2 bg-transparent px-6 py-3 border-2 border-black text-center text-black rounded cursor-pointer transition-all"
                  onClick={() => setIsFilters(true)}
                >
                  <IoFilter className="text-black text-2xl" />
                  <h6 className="text-lg font-semibold text-black text-center">
                    FILTERS
                  </h6>
                  {activeFiltersCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-md">
                      {activeFiltersCount}
                    </span>
                  )}
                </div>

                {/* Breadcrumb start */}
                <h6 className="hidden lg:block text-sm font-medium text-mainColor ml-2">
                  HOME / SHOP
                </h6>
                {/* Breadcrumb End */}

                {/* Sorting + View (Desktop Only) */}
                <div className="flex justify-between items-center items gap-x-5">
                  <DefaultSorting />
                  {/* Product Views Sixe start  */}
                  <div className="hidden lg:flex ">
                    <h5 className="text-sm mr-5 text-menuColor">View</h5>
                    <ul className="flex gap-x-3">
                      <li className="text-sm font-semibold uppercase text-mainColor relative list-none cursor-pointer px-1 group hover:text-black transition-all ease-in-out">
                        2
                        <span className="absolute left-0 bottom-0 h-0.5 bg-black transform w-0 group-hover:w-full transition-all duration-300"></span>
                      </li>
                      <li className="text-sm font-semibold uppercase text-mainColor relative list-none cursor-pointer px-1 group hover:text-black transition-all ease-in-out">
                        3
                        <span className="absolute left-0 bottom-0 h-0.5 bg-black transform w-0 group-hover:w-full transition-all duration-300"></span>
                      </li>
                      <li className="text-sm font-semibold uppercase text-mainColor relative list-none cursor-pointer px-1 group hover:text-black transition-all ease-in-out">
                        4
                        <span className="absolute left-0 bottom-0 h-0.5 bg-black transform w-0 group-hover:w-full transition-all duration-300"></span>
                      </li>
                    </ul>
                  </div>
                  {/* Product Views Sixe End  */}
                </div>
              </Flex>

              {/* Products Count */}
              <div className="mt-4 mb-2 ml-3">
                <p className="text-gray-600 font-medium">
                  {filteredProducts.length} products found
                  {activeFiltersCount > 0 &&
                    ` (${activeFiltersCount} filter${
                      activeFiltersCount > 1 ? "s" : ""
                    } applied)`}
                </p>
              </div>

              {/* Products Grid */}
              <div className="mt-5">
                <Flex className="justify-between flex-wrap gap-y-10">
                  {filteredProducts.map((product) => (
                    <ShopProducts
                      key={product.id}
                      imgSrcFirst={product.imgSrcFirst}
                      imgAlt={product.imgAlt}
                      badgeText={product.badgeText}
                      title={product.title}
                      price={product.price}
                      productColor={product.productColor}
                      badgeClassName={product.badgeClassName}
                      size={product.size}
                    />
                  ))}

                  {filteredProducts.length === 0 && (
                    <div className="w-full text-center py-20">
                      <p className="text-xl text-gray-500 font-medium">
                        No products found matching your filters
                      </p>
                      <button
                        onClick={clearAllFilters}
                        className="mt-4 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                      >
                        Clear All Filters
                      </button>
                    </div>
                  )}
                </Flex>
              </div>

              {/* Pagination */}
              <div className="flex justify-center mt-5">
                <ul className="flex gap-x-5">
                  {[1, 2, 3, 4, 5].map((num) => (
                    <li
                      key={num}
                      className="relative list-none px-2 py-2 text-lg text-black font-medium cursor-pointer group hover:text-black transition-all ease-in-out"
                    >
                      {num}
                      <span className="absolute left-0 bottom-0 h-0.5 bg-black transform w-0 group-hover:w-full transition-all duration-300"></span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/*------------------ Products Section End -------------------- */}
          </Flex>
        </Container>
      </div>
      {/* Shop Products Part End */}
    </>
  );
};

export default Shop;
