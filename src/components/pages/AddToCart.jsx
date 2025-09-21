import React from "react";
import Container from "../Container";
import Image from "../Image";
import { HiPlusSmall, HiMinusSmall } from "react-icons/hi2";
import { GrClose } from "react-icons/gr";

const AddToCart = () => {
    return (
        <div className="w-full py-10">
            <Container>
                {/* Cart Header */}
                <h4 className="text-4xl font-bold mb-6">CART</h4>

                {/* Cart Section */}
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Left Side (Cart Items) */}
                    <div className="w-full lg:w-3/5">
                        {/* Single Cart Item */}
                        <div className="flex items-center justify-between gap-x-5 border-b pb-6">
                            {/* Product Image */}
                            <Image
                                className="w-[180px] h-auto object-cover"
                                imgSrc={""}
                                imgAlt={"Zessi Dresses"}
                            />

                            {/* Product Details */}
                            <div className="flex-1 pl-5">
                                <h4 className="text-lg font-medium text-mainColor">
                                    Zessi Dresses
                                </h4>
                                <p className="text-sm text-[#767676]">Color: Yellow</p>
                                <p className="text-sm text-[#767676]">Size: L</p>
                            </div>


                            {/* Quantity Control */}
                            <div className="flex justify-center items-center gap-x-10 ">
                                <div className="">
                                    <p className="text-base font-medium mt-2">$99</p>
                                </div>
                                <div className="flex border px-4 py-2 gap-4">
                                    <button className="text-xl text-[#767676]">
                                        <HiMinusSmall />
                                    </button>
                                    <p className="text-lg font-medium">3</p>
                                    <button className="text-xl text-[#767676]">
                                        <HiPlusSmall />
                                    </button>
                                </div>
                            </div>

                            {/* Subtotal */}
                            <div className="w-[80px] text-center">
                                <p className="text-lg font-semibold">$297</p>
                            </div>

                            {/* Remove Icon */}
                            <button className="ml-4 text-lg cursor-pointer text-[#767676] hover:text-red-500">
                                <GrClose />
                            </button>
                        </div>
                    </div>

                    {/* Right Side (Summary / Checkout) */}
                    <div className="w-full lg:w-2/5">
                        {/* You can add order summary or checkout section here */}
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default AddToCart;
