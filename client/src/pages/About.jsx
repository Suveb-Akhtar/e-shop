import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <img
        className="w-full h-60  object-fit"
        src="https://img.freepik.com/free-photo/diverse-businesspeople-having-meeting_53876-103954.jpg?w=1380&t=st=1692972644~exp=1692973244~hmac=f4115f0cf461aac5a33b0a2ed634550e8d94b23f0c1895ed296bd50ecd76be6c"
        alt="aboutUs"
      />
      <div className="mx-auto px-4">
        <div className="pb-6 flex flex-col items-center justify-center">
        <h1 className=" font-bodyFont font-semibold text-3xl p-3">About Us</h1>
          <h1 className="max-w-[800px] text-center text-base text-lightText mb-2">
            <span className=" font-medium text-xl">
              E- Shop
            </span>{" "}
            is one of the world's leading ecommerce brands and is
            internationally recognized for celebrating the essence of classic
            Worldwide cool looking style.
          </h1>
        </div>
        <div className="flex justify-center mb-4">
          <Link to="/">
            <button className="w-52 h-10 bg-primeColor  text-white bg-black hover:bg-gray-800 duration-300">
              Continue Shopping
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
