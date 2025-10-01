import React from "react";
import Image from "../Image";
import Flex from "../Flex";
import Container from "../Container";
import { GrClose } from "react-icons/gr";
import { HiPlusSmall, HiMinusSmall } from "react-icons/hi2";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, remove } from "../../features/addToCartSlice";
import { Link } from "react-router-dom";

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
    const calculateSubtotal = () => {
        return data.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
    };
    return (
        <div className="p-3 overflow-hidden">
            <Container>
                <div className="text-4xl font-semibold">CART</div>
                <Flex className={"justify-between mt-10 flex-wrap"}>
                    <div className="w-full lg:w-[55%] rounded-md overflow-hidden">
                        {
                            data.map((item) => (
                                <div className="flex justify-between  bg-neutral-100 mb-5 ">
                                    <div className="flex justify-center gap-x-5 lg:gap-x-10">
                                        <Image
                                            className={"w-[150px] h-auto"}
                                            imgSrc={item.img}
                                            imgAlt={"Hi"}
                                        />
                                        <div className="py-1">
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
                                                    <HiMinusSmall className="hover:cursor-pointer" onClick={() => handleDecerment(item)} />
                                                </span>
                                                <p className="text-xl text-[#767676]">
                                                    {item.quantity}
                                                </p>
                                                <span className="text-xl text-[#767676]">
                                                    <HiPlusSmall className="hover:cursor-pointer" onClick={() => handleIncerment(item)} />
                                                </span>
                                            </div>
                                            {/* Increment Decrement End */}
                                        </div>
                                    </div>
                                    {/* Price And Cross part start */}
                                    <div className="relative ">
                                        <p className="absolute top-2 right-3 text-sm pt-3 px-2 cursor-pointer">
                                            <GrClose onClick={() => handleRemove(item)} />
                                        </p>
                                        {/* Product quantaty Total Start  */}
                                        <h6 className="absolute bottom-2 right-0 lg:right-3  text-lg text-center pt-3 px-1 lg:px-2 cursor-pointer">
                                            Total ${(item.price * item.quantity).toFixed(2)}
                                        </h6>
                                        {/* Product quantaty Total End  */}
                                    </div>
                                    {/* Price And Cross part End */}
                                </div>
                            ))
                        }
                    </div>
                    <div className="w-full lg:w-[43%] ">
                        <div className="w-full h-[515px] border-1 border-black p-10 ">
                            <h4 className="text-2xl font-medium uppercase">Cart Totals</h4>
                            {/* Cart SubTotal part Start  */}
                            <h5 className="text-lg font-medium pt-10 uppercase border-b-1 border-gray-300 pb-5"><span className="pr-5">Subtotal:</span>$     {calculateSubtotal()} </h5>
                            {/* Cart SubTotal part End  */}

                            {/* Shipping procedure part start   */}
                            <div className="flex mt-5 gap-x-5 lg:gap-x-20 border-b-1 border-gray-300 pb-5 overflow-hidden">
                                <h6 className="text-lg font-medium uppercase">Shipping</h6>
                                <div className="space-y-5">
                                    <label className="flex space-x-2">
                                        <input
                                            type="radio"
                                            name="shipping"
                                            value="free"
                                            defaultChecked
                                            className="form-radio h-5 w-5 text-blue-600"
                                        />
                                        <span className="text-gray-700 text-base">Free shipping</span>
                                    </label>
                                    <label className="flex space-x-2">
                                        <input
                                            type="radio"
                                            name="shipping"
                                            value="local"
                                            className="form-radio h-5 w-5 text-blue-600"
                                        />
                                        <span className="text-gray-700 text-base">Local pickup: ${10}</span>
                                    </label>
                                    <label className="flex space-x-2">
                                        <input
                                            type="radio"
                                            name="shipping"
                                            value="home"
                                            className="form-radio h-5 w-5 text-blue-600"
                                        />
                                        <span className="text-gray-700 text-base">Home Delivery: ${50}</span>
                                    </label>
                                    <h6 className="text-gray-700 text-base">
                                        Shipping To All :{" "}
                                        <span className="text-sm hover:text-black hover:font-medium transition-all duration-300 pt-2 hover:cursor-pointer block">
                                            CHANGE ADDRESS
                                        </span>
                                    </h6>
                                </div>
                            </div>
                            {/* Shipping procedure part End   */}
                            {/* Vat and Total calculation part start  */}
                            <div className="flex mt-5 gap-x-10 lg:gap-x-35 border-b-1 border-gray-300 pb-3 overflow-hidden">
                                <h6 className="text-lg">VAT:</h6>
                                <p className="text-lg">${5}</p>
                            </div>
                            <div className="flex mt-5  gap-x-10 lg:gap-x-30 overflow-hidden ">
                                <h6 className="text-xl">TOTAL:</h6>
                                <p className="text-xl">${100}</p>
                            </div>
                            {/* Vat and Total calculation part End  */}
                        </div>
                        <div className="mt-5 flex justify-between items-center mb-5">
                            {/* Coupon Part Start  */}
                            <div className="w-full flex justify-between items-center ">
                                <input className=" px-5 py-2 w-[60%] lg:w-[50%] h-[55px] border-2 border-mainColor text-sm " type="text" placeholder="Coupon Code" />
                                <div className="lg:w-[140px] h-[55px] bg-mainColor hover:cursor-pointer ">
                                    <p className="py-4 px-3 text-md text-center text-white ">APPLY COUPON</p>
                                </div>
                            </div>
                            {/* Coupon Part End  */}

                        </div>

                        {/* Cart Upadate part start  */}
                        <div className="w-full h-[55px]  bg-mainColor hover:cursor-pointer mb-5 ">
                            <p className="py-4 px-3 text-md text-center text-white ">UPDATE CART</p>
                        </div>
                        {/* Cart Upadate part End  */}

                        <Link to={"/checkout"}>
                            <div className="w-full m-auto lg:m-0 bg-mainColor mt-5 hover:cursor-pointer ">
                                <p className="py-3 px-3 text-lg text-center text-white ">PROCEED TO CHECKOUT</p>
                            </div>
                        </Link>
                    </div>
                </Flex>


            </Container>

        </div>
    );
};

export default AddToCart;
