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
import { decrementQuickViewItem, incrementQuickViewItem } from '../../features/quickViewSlice';
import { addToCart } from '../../features/addToCartSlice';

const QuickView = () => {
    // State to manage the selected size
    const [selectedSize, setSelectedSize] = useState(null);

    const dispatch = useDispatch();
    const quickViewData = useSelector((state) => state.quickView.item);

    // State to manage the currently displayed main image
    const [mainImage, setMainImage] = useState(quickViewData?.img || QuickOneFirst);
    // Function to handle thumbnail click
    const handleThumbnailClick = (image) => {
        setMainImage(image);
    };

    // Functions to handle increment and decrement of quantity
    const handleIncrement = () => {
        dispatch(incrementQuickViewItem());
    };
    const handleDecrement = () => {
        if (quickViewData?.quantity > 1) {
            dispatch(decrementQuickViewItem());
        }
    };

    // HandleAddToCart function (unchanged, as it correctly sends quantity)
    const handleAddToCart = () => {
        dispatch(
            addToCart({
                title: quickViewData?.title || 'Lightweight Puffer Jacket With a Hood',
                price: quickViewData?.price || 70.00,
                img: mainImage || quickViewData?.img ,
                color: quickViewData?.color || 'default',
                size: selectedSize || 'M',
                quantity: quickViewData?.quantity || 1,
            })
        );
    };

    return (
        <>
            <div className="my-5 p-3">
                <Container>
                    <Flex className="justify-between flex-wrap">
                        {/* Left Part Start */}
                        <div className="w-full m-auto lg:w-[55%] h-auto flex flex-col-reverse lg:flex-row justify-between gap-4">
                            {/* Click Image (Bottom on mobile, Left on desktop) */}
                            <div className="w-full lg:w-[18%] h-full gap-y-5 flex flex-row lg:flex-col justify-between  mt-5  lg:mt-0">
                                <img
                                    src={quickViewData?.img || QuickOneFirst}
                                    alt="thumb-1"
                                    className={`w-[23%] lg:w-full h-[110px] lg:h-[120px] cursor-pointer ${mainImage === quickViewData?.img ? 'border-2 border-mainColor' : ''
                                        }`}
                                    onClick={() => handleThumbnailClick(quickViewData?.img || QuickOneFirst)}
                                />
                                <img
                                    src={QuickOneSecond}
                                    alt="thumb-2"
                                    className={`w-[23%] lg:w-full h-[110px] lg:h-[120px] cursor-pointer ${mainImage === QuickOneSecond ? 'border-2 border-mainColor' : ''
                                        }`}
                                    onClick={() => handleThumbnailClick(QuickOneSecond)}
                                />
                                <img
                                    src={QuickOneThird}
                                    alt="thumb-3"
                                    className={`w-[23%]  lg:w-full  h-[110px] lg:h-[120px]cursor-pointer ${mainImage === QuickOneThird ? 'border-2 border-mainColor' : ''
                                        }`}
                                    onClick={() => handleThumbnailClick(QuickOneThird)}
                                />
                                <img
                                    src={QuickOneFourth}
                                    alt="thumb-4"
                                    className={`w-[23%] lg:w-full h-[110px] lg:h-[120px]cursor-pointer ${mainImage === QuickOneFourth ? 'border-2 border-mainColor' : ''
                                        }`}
                                    onClick={() => handleThumbnailClick(QuickOneFourth)}
                                />
                            </div>

                            {/* Display Image (Top on mobile, Right on desktop) */}
                            <div className="w-full h-[500px] lg:h-[600px] border border-gray-400">
                                <img
                                    src={mainImage || quickViewData?.img}
                                    alt={quickViewData?.title || 'Product Image'}
                                    className="w-full h-full  object-cover"
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
                                    <button
                                        className={`px-5 py-2 border ${selectedSize === 'XS' ? 'border-black' : 'border-gray-300'} hover:border-black text-base font-medium hover:cursor-pointer`}
                                        onClick={() => setSelectedSize('XS')}
                                    >
                                        XS
                                    </button>
                                    <button
                                        className={`px-5 py-2 border ${selectedSize === 'S' ? 'border-black' : 'border-gray-300'} hover:border-black text-base font-medium hover:cursor-pointer`}
                                        onClick={() => setSelectedSize('S')}
                                    >
                                        S
                                    </button>
                                    <button
                                        className={`px-5 py-2 border ${selectedSize === 'M' ? 'border-black' : 'border-gray-300'} hover:border-black text-base font-medium hover:cursor-pointer`}
                                        onClick={() => setSelectedSize('M')}
                                    >
                                        M
                                    </button>
                                    <button
                                        className={`px-5 py-2 border ${selectedSize === 'L' ? 'border-black' : 'border-gray-300'} hover:border-black text-base font-medium hover:cursor-pointer`}
                                        onClick={() => setSelectedSize('L')}
                                    >
                                        L
                                    </button>
                                    <button
                                        className={`px-5 py-2 border ${selectedSize === 'XL' ? 'border-black' : 'border-gray-300'} hover:border-black text-base font-medium hover:cursor-pointer`}
                                        onClick={() => setSelectedSize('XL')}
                                    >
                                        XL
                                    </button>
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
                                        onClick={() => handleDecrement()}
                                    >
                                        <HiMinusSmall />
                                    </button>
                                    <span className="px-5 py-4">{quickViewData?.quantity || 1}</span>
                                    <button
                                        className="text-2xl px-2 py-1 text-gray-600 hover:bg-gray-100"
                                        onClick={() => handleIncrement()}
                                    >
                                        <HiPlusSmall />
                                    </button>
                                </div>
                                <button onClick={handleAddToCart} className="px-10 lg:px-15 py-4 bg-mainColor text-white font-semibold rounded hover:bg-gray-800 hover:cursor-pointer">
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