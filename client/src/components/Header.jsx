import React from "react";
import { cartImg, mainlogo } from "../assets/index";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const productData = useSelector((state) => state.shop.productData);
  const userInfo = useSelector((state) => state.shop.userInfo);
  console.log(userInfo);

  return (
    <div
      className=" w-full h-20 bg-white border-b-[1px]  shadow-custom  border-b-gray-800 
    font-titleFont sticky top-0 z-50"
    >
      <div className="max-w-screen-xl h-full mx-5 flex items-center justify-between">
        <Link>
          <div>
            <img className="w-28" src={mainlogo} alt="logoDark" />
          </div>
        </Link>

        <div className="flex items-center gap-8">
          <ul className="flex items-center gap-8">
            <Link to="/">
              <li
                className="text-base text-black font-bold hover:text-orange-900
        hover:underline underline-offset-2 decoration-[1px] cursor-pointer
        duration-300 "
              >
                Home
              </li>
            </Link>
            <li
              className="text-base text-black font-bold hover:text-orange-900
        hover:underline underline-offset-2 decoration-[1px] cursor-pointer
        duration-300 "
            >
              Pages
            </li>
            <li
              className="text-base text-black font-bold hover:text-orange-900
        hover:underline underline-offset-2 decoration-[1px] cursor-pointer
        duration-300"
            >
              Shop
            </li>

            <Link to="/about">
              <li
                className="text-base text-black font-bold hover:text-orange-900
        hover:underline underline-offset-2 decoration-[1px] cursor-pointer
        duration-300"
              >
                About
              </li>
            </Link>
            <Link to="/contact">
              <li
                className="text-base text-black font-bold hover:text-orange-900
        hover:underline underline-offset-2 decoration-[1px] cursor-pointer
        duration-300"
              >
                Contact
              </li>
            </Link>
          </ul>
          <Link to={"/cart"}>
            <div className="relative">
              <img className="w-6" src={cartImg} alt="cartImg" />
              <span
                className="absolute w-6 top-2 left-0 text-sm flex items-center
                 justify-center font-semibold"
              >
                {productData.length}
              </span>
            </div>
          </Link>
          <Link to="/login">
            <img
              className="w-8 h-8 rounded-full"
              src={
                userInfo
                  ? userInfo.image
                  : "https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?size=626&ext=jpg&ga=GA1.2.1227521343.1691448174&semt=sph"
              }
              alt="userLogo"
            />
          </Link>
          {userInfo && (
            <p className="text-base font-titleFont font-semibold underline">
              {userInfo.name}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
