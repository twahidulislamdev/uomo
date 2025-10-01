import React from 'react'

const BlogCard = ({ imgSrc, imgAlt, adminTxt, dateTxt, pTxt, BlogTitle }) => {
    return (
        <>
            <div className="w-full lg:w-[32%] h-auto p-5 lg:p-0 bg-white">
                <img className="w-full" src={imgSrc} alt={imgAlt} />
                <div className="w-full py-5 px-2">
                    <ul className="flex justify-start gap-x-5">
                        <li className="text-base text-secondaryColor text-gray-600">{adminTxt}</li>
                        <li className="text-base text-secondaryColor text-gray-600">{dateTxt}</li>
                    </ul>
                    <h4 className='text-xl pt-3 text-mainColor' > {BlogTitle}</h4>
                    <p className="text-sm text-start text-neutral-700  pt-3">
                        {pTxt}
                    </p>
                    <button className="relative list-none pt-3 text-lg text-black font-normal group cursor-pointer transition-all ease-in-out">
                        Continue Reading
                        <span className="absolute left-0 bottom-0 h-0.5 bg-black w-1/3 group-hover:w-full transition-all duration-300"></span>
                    </button>
                </div>
            </div>
        </>
    )
}

export default BlogCard