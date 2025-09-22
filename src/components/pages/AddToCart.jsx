import React from "react";
import Image from "../Image";
import Container from "../Container";
import { GrClose } from "react-icons/gr";
import { HiPlusSmall, HiMinusSmall } from "react-icons/hi2";
import ProductOne from "../../assets/productOne.jpg";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, remove } from "../../features/addToCartSlice";

const AddToCart = () => {
    let data = useSelector((state) => state.addtocart.value);
    let dispatch = useDispatch();

    let handleIncerment = (item) => {
        dispatch(increment(item));
    };
    let handleDecerment = (item) => {
        dispatch(decrement(item));
    };
    let handleRemove = (item) => {
        dispatch(remove(item));
    };
    // const calculateSubtotal = () => {
    //     return data.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
    // };
    return (
        <div className="py-10">
            <Container>
                <div className="w-full lg:w-[60%]   rounded-md">
                    <div className="text-4xl font-bold">CART</div>
                    {
                        data.map((item) => (
                            <div className="flex justify-between  bg-neutral-100 mt-5">
                                <div className="flex justify-center gap-x-5 lg:gap-x-10">
                                    <Image
                                        className={"w-[150px] h-auto"}
                                        imgSrc={item.img}
                                        imgAlt={"Hi"}
                                    />
                                    <div className="
                            py-1">
                                        <h4 className="w-full pr-2 text-lg font-normal text-mainColor pt-2 text-wrap">
                                            Blue color shirt
                                        </h4>
                                        <h5 className="text-base text-[#767676] pt-2">
                                            Color: {item.color}
                                        </h5>
                                        <h6 className="text-base text-[#767676] pt-2">
                                            Size: {item.size}
                                        </h6>
                                        <h6 className="text-base text-[#767676] pt-2">
                                            Unit Price: ${item.price.toFixed(2)}
                                        </h6>

                                        {/* Increment Decrement start */}
                                        <div className="flex justify-start items-center gap-x-5 mt-2">
                                            <span className="text-xl text-[#767676]">
                                                <HiMinusSmall onClick={() => handleDecerment(item)} />
                                            </span>
                                            <p className="text-xl text-[#767676]">
                                                {item.quantity}
                                            </p>
                                            <span className="text-xl text-[#767676]">
                                                <HiPlusSmall onClick={() => handleIncerment(item)} />
                                            </span>
                                        </div>
                                        {/* Increment Decrement End */}
                                    </div>
                                </div>
                                {/* Price And Cross part start */}
                                <div className="relative ">
                                    <p className="absolute top-3 right-3 text-sm pt-3 px-2 cursor-pointer">
                                        <GrClose onClick={() => handleRemove(item)} />
                                    </p>
                                    {/* Product quantaty Total Start  */}
                                    <h6 className="absolute bottom-3 right-3 text-sm pt-3 px-2 cursor-pointer">
                                        Total: ${(item.price * item.quantity).toFixed(2)}
                                    </h6>
                                    {/* Product quantaty Total End  */}
                                </div>
                                {/* Price And Cross part End */}
                            </div>
                        ))
                    }
                </div>

            </Container>

        </div>
    );
};

export default AddToCart;
