import React, { useState } from 'react';
import Container from '../Container';
import Flex from '../Flex';
import QuickOneFirst from '../../assets/quickOneFirst.jpg';
import QuickOneSecond from '../../assets/quickOneSecond.jpg';
import QuickOneThird from '../../assets/quickOneThird.jpg';
import QuickOneFourth from '../../assets/quickOneFourth.jpg';
import {
    HiPlusSmall,
    HiMinusSmall,
    HiOutlineHeart,
    HiOutlineShare,
} from 'react-icons/hi2';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../../features/quickViewSlice'; // Fixed import

const QuickView = () => {
    let quickViewData = useSelector((state) => state.quickView.item);
    let dispatch = useDispatch();

    // State to manage the currently displayed main image
    const [mainImage, setMainImage] = useState(quickViewData?.img || QuickOneFirst);

    let handleIncrement = () => {
        dispatch(increment());
    };

    let handleDecrement = () => {
        dispatch(decrement());
    };

    // Function to handle thumbnail click
    const handleThumbnailClick = (image) => {
        setMainImage(image);
    };

    return (
        <>
            <div className="my-5 p-3">
                <Container>
                    <Flex className="justify-between flex-wrap">
                        {/* Left Part Start */}
                        <div className="w-full m-auto lg:w-[55%] flex flex-col-reverse lg:flex-row justify-between gap-4">
                            {/* Click Image (Bottom on mobile, Left on desktop) */}
                            <div className="w-full lg:w-[18%] flex flex-row lg:flex-col justify-between  mt-4 lg:mt-0">
                                <img
                                    src={quickViewData?.img || QuickOneFirst}
                                    alt="thumb-1"
                                    className={`w-[23%] lg:w-full h-[110px] lg:h-auto cursor-pointer ${mainImage === QuickOneFirst ? 'border-2 border-mainColor' : ''
                                        }`}
                                    onClick={() => handleThumbnailClick(quickViewData?.img || QuickOneFirst)}
                                />
                                <img
                                    src={QuickOneSecond}
                                    alt="thumb-2"
                                    className={`w-[23%] lg:w-full h-[110px] lg:h-auto cursor-pointer ${mainImage === QuickOneSecond ? 'border-2 border-mainColor' : ''
                                        }`}
                                    onClick={() => handleThumbnailClick(QuickOneSecond)}
                                />
                                <img
                                    src={QuickOneThird}
                                    alt="thumb-3"
                                    className={`w-[23%]  lg:w-full  h-[110px] lg:h-auto cursor-pointer ${mainImage === QuickOneThird ? 'border-2 border-mainColor' : ''
                                        }`}
                                    onClick={() => handleThumbnailClick(QuickOneThird)}
                                />
                                <img
                                    src={QuickOneFourth}
                                    alt="thumb-4"
                                    className={`w-[23%] lg:w-full h-[110px] lg:h-auto  cursor-pointer ${mainImage === QuickOneFourth ? 'border-2 border-mainColor' : ''
                                        }`}
                                    onClick={() => handleThumbnailClick(QuickOneFourth)}
                                />
                            </div>

                            {/* Display Image (Top on mobile, Right on desktop) */}
                            <div className="w-full lg:w-[80%]">
                                <img
                                    src={mainImage || quickViewData?.img}
                                    alt={quickViewData?.title || 'Product Image'}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                        {/* Left Part End */}

                        {/* Right Part Start */}
                        <div className="w-full lg:w-[45%] p-3 lg:pl-15 mt-5 lg:mt-0">
                            <p className="text-base font-medium uppercase text-mainColor hidden lg:block">Home / Shop</p>
                            <h3 className="pt-3 text-3xl lg:text-4xl font-semibold leading-13 text-mainColor">
                                {quickViewData?.title || 'Lightweight Puffer Jacket With a Hood'}
                            </h3>
                            <h4 className="text-xl font-semibold text-mainColor pt-3 lg:pt-5">
                                PRICE: ${quickViewData?.price?.toFixed(2) || (70.00).toFixed(2)}
                            </h4>

                            {/* Rating part Start */}
                            <div className="flex justify-start gap-x-5 mt-5">
                                <div className="rating">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="1 star" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="3 star" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="4 star" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="5 star" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="2 star" defaultChecked />
                                </div>
                                <h5 className="text-lg font-medium">8K+ Reviews</h5>
                            </div>
                            {/* Rating part End */}

                            {/* Description part Start */}
                            <p className="text-base text-seconderyColor pt-3">
                                Phasellus sed volutpat orci. Fusce eget lore mauris vehicula elementum gravida nec dui.
                                Aenean aliquam varius ipsum, non ultricies tellus sodales eu.
                                Donec dignissim viverra nunc, ut aliquet magna posuere eget.
                            </p>
                            {/* Description part End */}

                            {/* Select Size part Start */}
                            <div className="mt-5">
                                <h4 className="text-xl font-semibold text-mainColor">SELECT SIZE:</h4>
                                <div className="flex justify-start gap-3 lg:gap-5 pt-3 flex-wrap">
                                    <button className="px-5 py-2 border border-gray-300 hover:border-black text-base font-medium hover:cursor-pointer">XS</button>
                                    <button className="px-5 py-2 border border-gray-300 hover:border-black text-base font-medium hover:cursor-pointer">S</button>
                                    <button className="px-5 py-2 border border-gray-300 hover:border-black text-base font-medium hover:cursor-pointer">M</button>
                                    <button className="px-5 py-2 border border-gray-300 hover:border-black text-base font-medium hover:cursor-pointer">L</button>
                                    <button className="px-5 py-2 border border-gray-300 hover:border-black text-base font-medium hover:cursor-pointer">XL</button>
                                </div>
                            </div>
                            {/* Select Size part End */}

                            {/* AddToWish list and Share part Start */}
                            <div className="space-x-3 mt-5">
                                <button className="text-base font-medium hover:cursor-pointer">
                                    <HiOutlineHeart className="inline-block ml-1 text-2xl" /> ADD TO WISH LIST
                                </button>
                                <button className="text-base font-medium hover:cursor-pointer ml-5">
                                    <HiOutlineShare className="inline-block ml-1 text-xl" /> SHARE
                                </button>
                            </div>
                            {/* AddToWish list and Share part End */}

                            {/* AddTOCart and Quantity part Start */}
                            <div className="mt-5 flex justify-between lg:justify-start items-center space-x-5">
                                <div className="flex items-center border border-gray-300 rounded">
                                    <button
                                        className="text-2xl px-2 py-1 text-gray-600 hover:bg-gray-100"
                                        onClick={() => handleDecrement(quickViewData)} // Fixed to pass quickViewData
                                    >
                                        <HiMinusSmall />
                                    </button>
                                    <span className="px-5 py-4">{quickViewData?.quantity || 1}</span>
                                    <button
                                        className="text-2xl px-2 py-1 text-gray-600 hover:bg-gray-100"
                                        onClick={() => handleIncrement(quickViewData)} // Fixed to pass quickViewData
                                    >
                                        <HiPlusSmall />
                                    </button>
                                </div>
                                <button className="px-10 lg:px-15 py-4 bg-mainColor text-white font-semibold rounded-none hover:bg-gray-800 hover:cursor-pointer">
                                    ADD TO CART
                                </button>
                            </div>
                            {/* AddTOCart and Quantity part End */}
                        </div>
                        {/* Right Part End */}
                    </Flex>
                </Container>
            </div>
        </>
    );
};

export default QuickView;