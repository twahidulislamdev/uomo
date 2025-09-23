import React from 'react';

// Basic Container component (replace with your actual implementation)
const Container = ({ children }) => {
  return <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>;
};

const CheckOut = () => {
  return (
    <>
      <div className="py-10">
        <Container>
          <h6 className="text-4xl font-semibold text-center">CHECKOUT</h6>
          <div className="flex justify-center i flex-wrap gap-6 mt-6">
            {/* Billing Details part start */}
            <div className="w-[50%] bg-white rounded-lg shadow-lg p-5 border-1 border-gray-300">
              <div className="">
                <label
                  htmlFor="firstName"
                  className="block text-gray-700 text-sm font-medium mb-1"
                >
                  First Name<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder=""
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="companyName"
                  className="block text-gray-500 text-sm font-medium mb-1"
                >
                  Company Name (optional)
                </label>
                <input
                  type="text"
                  id="companyName"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder=""
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="streetAddress"
                  className="block text-gray-700 text-sm font-medium mb-1"
                >
                  Street Address<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="streetAddress"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder=""
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="apartment"
                  className="block text-gray-500 text-sm font-medium mb-1"
                >
                  Apartment, floor, etc. (optional)
                </label>
                <input
                  type="text"
                  id="apartment"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder=""
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="townCity"
                  className="block text-gray-700 text-sm font-medium mb-1"
                >
                  Town/City<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="townCity"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder=""
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="phoneNumber"
                  className="block text-gray-700 text-sm font-medium mb-1"
                >
                  Phone Number<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="phoneNumber"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder=""
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="emailAddress"
                  className="block text-gray-700 text-sm font-medium mb-1"
                >
                  Email Address<span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="emailAddress"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder=""
                />
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="saveInfo"
                  className="h-4 w-4 text-red-500 border-gray-300 rounded focus:ring-2 focus:ring-red-500"
                />
                <label htmlFor="saveInfo" className="ml-2 text-sm text-red-500">
                  Save this information for faster check-out next time
                </label>
              </div>
            </div>
            <div className="w-[40%] h-[450px] border-1 border-gray-300 rounded-lg ">
              <div className="p-5 bg-white ">
                <h2 className="text-2xl font-medium mb-5">YOUR ORDER</h2>
                <div className="space-y-3 mt-5 ">
                  <div className="flex justify-between items-center">
                    <span className="text-lg text-mainColor font-medium ">PRODUCT</span>
                    <span className="text-lg text-mainColor font-medium">SUBTOTAL</span>
                  </div>
                  <div className="flex justify-between">
                    <span className='text-base text-seconderyColor'>Calvin Shorts x 1</span>
                    <span className='text-base text-seconderyColor'>$62</span>
                  </div>
                  <div className="flex justify-between">
                    <span className='text-base text-seconderyColor'>Cableknit Shawl x 1</span>
                    <span className='text-base text-seconderyColor'>$99</span>
                  </div>
                  <div className="flex justify-between">
                    <span className='text-base text-seconderyColor'>Kirby T-Shirt x 1</span>
                    <span className='text-base text-seconderyColor'>$17</span>
                  </div>
                  <div className="flex justify-between font-medium border-t pt-2 mt-5">
                    <span className='text-lg text-mainColor'>SUBTOTAL</span>
                    <span className='text-lg text-mainColor'>$178</span>
                  </div>
                  <div className="flex justify-between">
                    <span className='text-base text-mainColor'>SHIPPING</span>
                    <span className='text-base text-mainColor'>Free shipping</span>
                  </div>
                  <div className="flex justify-between">
                    <span  className='text-base text-mainColor'>VAT</span>
                    <span  className='text-base text-mainColor'>$19</span>
                  </div>
                  <div className="flex justify-between font-semibold border-t pt-2 mt-2">
                    <span>TOTAL</span>
                    <span>$197</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default CheckOut;