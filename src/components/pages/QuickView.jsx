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
                    <Flex className={"flex-wrap"}>
                        {/* Left Part Start */}
                        <div className="w-full m-auto lg:w-[50%] flex flex-col lg:flex-row justify-between">
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
                        <div className="w-[50%]">
                            
                        </div>
                        {/* Right Part End */}
                    </Flex>
                </Container>
            </div>
        </>
    )
}

export default QuickView
