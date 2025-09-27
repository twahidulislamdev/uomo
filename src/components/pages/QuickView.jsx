import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import QuickOneFirst from '../../assets/quickOneFirst.jpg'
import QuickOneSecond from '../../assets/quickOneSecond.jpg'
import QuickOneThird from '../../assets/quickOneThird.jpg'
import QuickOneFourth from '../../assets/quickOneFourth.jpg'

const QuickView = () => {
    return (
        <>
            <div className="my-5 p-3">
                <Container>
                    <Flex className={"justify-between flex-wrap"}>
                        {/* Left Part Start */}
                        <div className="w-full m-auto lg:w-[55%] flex flex-col lg:flex-row justify-between">
                            {/* Display Image Start */}
                            <div className="w-full lg:w-[80%] order-1 lg:order-2">
                                <img src={QuickOneFirst} alt="" className="w-full" />
                            </div>
                            {/* Display Image End */}

                            {/* Click Image Start */}
                            <div className="w-full lg:w-[18%]  flex lg:flex-col justify-between gap-2 mt-4 lg:mt-0 order-2 lg:order-1">
                                <img src={QuickOneFirst} alt="" className="w-[23%] lg:w-full" />
                                <img src={QuickOneSecond} alt="" className="w-[23%] lg:w-full" />
                                <img src={QuickOneThird} alt="" className="w-[23%] lg:w-full" />
                                <img src={QuickOneFourth} alt="" className="w-[23%] lg:w-full" />
                            </div>
                            {/* Click Image End */}
                        </div>
                        {/* Left Part End */}

                        {/* Right Part Start */}
                        <div className="w-full lg:w-[45%] p-3 lg:pl-15 mt-5 lg:mt-0">
                            <p className='text-base font-medium uppercase text-mainColor hidden lg:block'>Home / Shop</p>
                            <h3 className='pt-5 text-3xl lg:text-4xl font-semibold leading-13 text-mainColor'>Lightweight Puffer Jacket With a Hood</h3>
                            <h4 className='text-xl font-semibold text-mainColor pt-3 lg:pt-5 '>PRICE: ${70.00.toFixed(2)}</h4>
                            <div className="flex justify-start gap-x-5 pt-5">
                                <div className="rating">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="1 star" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="3 star" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="4 star" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="5 star" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="2 star" defaultChecked />
                                </div>
                                <h5 className='text-lg font-medium'>8K+ Reviews</h5>
                            </div>
                            <p className='text-base text-seconderyColor pt-5'>
                                Phasellus sed volutpat orci. Fusce eget lore mauris vehicula elementum gravida nec dui. Aenean aliquam varius ipsum, non ultricies tellus sodales eu. Donec dignissim viverra nunc, ut aliquet magna posuere eget.
                            </p>
                            <div className="mt-10">
                                <div class="flex items-center space-x-5">
                                    <div class="flex items-center border border-gray-300 rounded">
                                        <button class="px-2 py-1 text-gray-600 hover:bg-gray-100">-</button>
                                        <span class="px-7 py-4">1</span>
                                        <button class="px-2 py-1 text-gray-600 hover:bg-gray-100">+</button>
                                    </div>
                                    <button class="px-15 py-4 bg-mainColor text-white font-semibold rounded-none hover:bg-gray-800 hover:cursor-pointer">
                                        ADD TO CART
                                    </button>
                                </div>
                            </div>


                        </div>
                        {/* Right Part End */}
                    </Flex>
                </Container>
            </div>
        </>
    )
}

export default QuickView
