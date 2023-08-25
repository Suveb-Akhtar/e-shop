import React from "react";
import { mainlogo, paymentLogo } from "../assets";
import { ImGithub } from "react-icons/im";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaHome,
} from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { BsPersonFill, BsPaypal } from "react-icons/bs";
import { Link } from "react-router-dom";
// import { logoLight, paymentLogo } from "../assets";

const Footer = () => {
  return (
    <div className="bg-black text-[#949494] py-20 font-titleFont">
      <div className="max-w-screen-xl mx-5 grid grid-cols-4">
        {/* ============ LogoIcon Start here =============== */}
        <div className="flex flex-col gap-7 ">
          <img className="w-32" src={mainlogo} alt="logoLight" />
          <p className="text-gray-400 cursor-pointer text-sm tracking-wide">© suvebAkhtar.com</p>
          <img className="w-56" src={paymentLogo} alt="paymentLogo" />
          <div className="flex gap-5 text-lg text-gray-400">
            <a href="https://github.com/Suveb-Akhtar" target="_blank">
              {" "}
              <ImGithub className="hover:text-white duration-300 cursor-pointer" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100010627063293"
              target="_blank"
            >
              {" "}
              <FaFacebookF className="hover:text-white duration-300 cursor-pointer" />
            </a>
            <a href="https://twitter.com" target="_blank">
              {" "}
              <FaTwitter className="hover:text-white duration-300 cursor-pointer" />
            </a>
            <a href="https://www.youtube.com/" target="_blank">
              {" "}
              <FaYoutube className="hover:text-white duration-300 cursor-pointer" />
            </a>
            <a
              href="https://instagram.com/shoaib__khan787?igshid=YmMyMTA2M2Y="
              target="_blank"
            >
              {" "}
              <FaInstagram className="hover:text-white duration-300 cursor-pointer" />
            </a>
            <a href="/">
              {" "}
              <FaHome className="hover:text-white duration-300 cursor-pointer" />
            </a>
          </div>
        </div>
        {/* ============ LogoIcon Endst here =============== */}

        {/* ============ LocateUs start here =============== */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4 ">locate Us</h2>
          <div className="text-base flex flex-col gap-2">
            <p> Suveb Akhtar, Ranchi-India</p>
            <p> Mobile: 9570513938</p>
            <p> Phone: 0098 9949494</p>
            <p> Email: suvebakhtar07@gmail.com</p>
          </div>
        </div>
        {/* ============ LocateUs Ends here =============== */}

        {/* ============ Profile start here =============== */}
        <div className="mx-5">
          <h2 className="text-2xl font-semibold text-white mb-4">profile</h2>
          <div className="felx flex-col gap-2 text-base">
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span>
                <BsPersonFill />
              </span>
              My Account
            </p>
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span>
                <BsPaypal />
              </span>
              checkout
            </p>
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span>
                <FaHome />
              </span>
              order tracking
            </p>
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span>
                <MdLocationOn />
              </span>
              help & support
            </p>
          </div>
        </div>
        {/* ============ Profile Ends here =============== */}

        {/* ============ Subscribe Start here =============== */}
        <div className="flex flex-col justify-center mr-4">
          <input
            className="bg-transparent border px-4 text-sm"
            type="text"
            placeholder="e-mail"
          />
          <button
            className="text-sm border text-white border-t-0 hover:bg-gray-900
           active:bg-white active:text-black"
          >
            Subscribe
          </button>
        </div>
        {/* ============ Subscribe Ends here =============== */}
      </div>
    </div>
  );
};

export default Footer;
