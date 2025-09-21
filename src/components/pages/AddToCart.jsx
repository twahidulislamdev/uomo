import React from "react";
import Container from "../Container";
import Image from "../Image";
import { HiPlusSmall, HiMinusSmall } from "react-icons/hi2";
import { GrClose } from "react-icons/gr";
import ProductOne from "../../assets/productOne.jpg";

const AddToCart = () => {
    return (
        <div className="overflow-y-auto ">
            <Container>
                <div className="w-full lg:w-[60%] bg-neutral-100 mb-3  rounded-md">
                    <div className="flex justify-between">
                        <div className="flex justify-center gap-x-5 lg:gap-x-10">
                            <Image
                                className={"w-[155px] h-auto"}
                                imgSrc={ProductOne}
                                imgAlt={"Hi"}
                            />
                            <div className="
                            py-1">
                                <h4 className="w-full pr-2 text-lg font-normal text-mainColor pt-2 text-wrap">
                                    Blue color shirt
                                </h4>
                                <h5 className="text-base text-[#767676] pt-2">
                                    Color:
                                </h5>
                                <h6 className="text-base text-[#767676] pt-2">
                                    Size:
                                </h6>
                                <h6 className="text-base text-[#767676] pt-2">
                                    Unit Price:
                                </h6>

                                {/* Increment Decrement start */}
                                <div className="flex justify-start items-center gap-x-5 mt-2">
                                    <span className="text-xl text-[#767676]">
                                        <HiMinusSmall />
                                    </span>
                                    <p className="text-xl text-[#767676]">
                                        {1}
                                    </p>
                                    <span className="text-xl text-[#767676]">
                                        <HiPlusSmall />
                                    </span>
                                </div>
                                {/* Increment Decrement End */}
                            </div>
                        </div>
                        {/* Price And Cross part start */}
                        <div className="relative ">
                            <p className="absolute top-3 right-3 text-sm pt-3 px-2 cursor-pointer">
                                <GrClose />
                            </p>
                            <h6 className="absolute bottom-3 right-3 text-sm pt-3 px-2 cursor-pointer">
                                999
                            </h6>
                        </div>
                        {/* Price And Cross part End */}
                    </div>
                </div>
            </Container>

        </div>
    );
};

export default AddToCart;
