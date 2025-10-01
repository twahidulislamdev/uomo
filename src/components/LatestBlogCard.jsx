const LatestBlogCard = ({ imgSrc, imgAlt, adminTxt, dateTxt, pTxt }) => {
  return (
    <>
      <div className="p-5 bg-white ">
        <img className="w-full" src={imgSrc} alt={imgAlt} />

        <div className="w-full py-5">
          <ul className="flex justify-center gap-x-5">
            <li className="text-sm text-secondaryColor">{adminTxt}</li>
            <li className="text-sm text-secondaryColor">{dateTxt}</li>
          </ul>
          <p className="text-base text-center m-auto text-mainColor w-2/3 pt-3">
            {pTxt}
          </p>
        </div>
      </div>
    </>
  );
};

export default LatestBlogCard;
