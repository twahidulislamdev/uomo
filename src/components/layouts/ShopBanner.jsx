import Container from "../Container";
import BannerBg from "../../assets/bannerBg.png"
const ShopBanner = () => {
  return (
    <>
    <div className="py-[100px] w-full bg-[url(/src/assets/bannerBg.png)] bg-no-repeat bg-center bg-cover">
      <Container>
        <h3 className={"text-7xl font-bold text-center text-mainColor"}>
          THE SHOP
        </h3>
        <ul className="flex justify-center text-center gap-x-10 m-auto mt-10">
          <li className="text-base font-semibold uppercase text-mainColor relative list-none px-2 py-2 cursor-pointer group hover:text-black hover:cursor-pointer hover:translate-x-0 transition-all ease-in-out ">
            Stay Home
            <span className="absolute left-0 bottom-0  h-0.5 bg-black transform w-0 group-hover:w-full group-hover:left-0 group-hover:translate-x-0 transition-all duration-300 ease-in-out"></span>
          </li>

          <li className="text-base font-semibold uppercase text-mainColor relative list-none px-2 py-2 cursor-pointer group hover:text-black hover:cursor-pointer hover:translate-x-0 transition-all ease-in-out">
            New In
            <span className="absolute left-0 bottom-0  h-0.5 bg-black transform w-0 group-hover:w-full group-hover:left-0 group-hover:translate-x-0 transition-all duration-300 ease-in-out"></span>
          </li>

          <li className="text-base font-semibold uppercase text-mainColor relative list-none px-2 py-2 cursor-pointer group hover:text-black hover:cursor-pointer hover:translate-x-0 transition-all ease-in-out">
            Man
            <span className="absolute left-0 bottom-0  h-0.5 bg-black transform w-0 group-hover:w-full group-hover:left-0 group-hover:translate-x-0 transition-all duration-300 ease-in-out"></span>
          </li>

          <li className="text-base font-semibold uppercase text-mainColor relative list-none px-2 py-2 cursor-pointer group hover:text-black hover:cursor-pointer hover:translate-x-0 transition-all ease-in-out ">
            Women
            <span className="absolute left-0 bottom-0  h-0.5 bg-black transform w-0 group-hover:w-full group-hover:left-0 group-hover:translate-x-0 transition-all duration-300 ease-in-out"></span>
          </li>

          <li className="text-base font-semibold uppercase text-mainColor relative list-none px-2 py-2 cursor-pointer group hover:text-black hover:cursor-pointer hover:translate-x-0 transition-all ease-in-out">
            SHOES
            <span className="absolute left-0 bottom-0  h-0.5 bg-black transform w-0 group-hover:w-full group-hover:left-0 group-hover:translate-x-0 transition-all duration-300 ease-in-out"></span>
          </li>

          <li className="text-base font-semibold uppercase text-mainColor relative list-none px-2 py-2 cursor-pointer group hover:text-black hover:cursor-pointer hover:translate-x-0 transition-all ease-in-out">
            Jackets
            <span className="absolute left-0 bottom-0  h-0.5 bg-black transform w-0 group-hover:w-full group-hover:left-0 group-hover:translate-x-0 transition-all duration-300 ease-in-out"></span>
          </li>

          <li className="text-base font-semibold uppercase text-mainColor relative list-none px-2 py-2 cursor-pointer group hover:text-black hover:cursor-pointer hover:translate-x-0 transition-all ease-in-out">
            Hoodies
            <span className="absolute left-0 bottom-0  h-0.5 bg-black transform w-0 group-hover:w-full group-hover:left-0 group-hover:translate-x-0 transition-all duration-300 ease-in-out"></span>
          </li>

          <li className="text-base font-semibold uppercase text-mainColor relative list-none px-2 py-2 cursor-pointer group hover:text-black hover:cursor-pointer hover:translate-x-0 transition-all ease-in-out">
            TROUSERS
            <span className="absolute left-0 bottom-0  h-0.5 bg-black transform w-0 group-hover:w-full group-hover:left-0 group-hover:translate-x-0 transition-all duration-300 ease-in-out"></span>
          </li>

          <li className="text-base font-semibold uppercase text-mainColor relative list-none px-2 py-2 cursor-pointer group hover:text-black hover:cursor-pointer hover:translate-x-0 transition-all ease-in-out">
            ACCESSORIES
            <span className="absolute left-0 bottom-0  h-0.5 bg-black transform w-0 group-hover:w-full group-hover:left-0 group-hover:translate-x-0 transition-all duration-300 ease-in-out"></span>
          </li>
        </ul>
      </Container>
    </div>
    </>
  );
};

export default ShopBanner;
