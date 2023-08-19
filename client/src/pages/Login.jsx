import React from "react";
import { githubLogo, googleLogo } from "../assets";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";

import { ToastContainer, toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../redux/shopSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const naviagte = useNavigate()
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
 // ============== Google Login Start here =====================
  const handleGoogleLogin = (e) => {
    e.preventDefault();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        dispatch(
          addUser({
            _id: user.uid,
            name: user.displayName,
            email: user.email,
            image: user.photoURL,
          })
        );
        setTimeout(()=>{
          naviagte("/")
        },1500);
      })
      .catch((error) => {
        console.log(error);
      });
  };
   // ============== Google Login End here =====================

   // ============== Logout Start here ===========================
   const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        toast.success("Log Out Successfully!");
        dispatch(removeUser());
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // ============== Logout End here =============================
  return (
    <div className="w-full flex flex-col items-center justify-center gap-10 py-20">
      <div className="w-full flex items-center justify-center gap-10">
        <div
          onClick={handleGoogleLogin}
          className="text-base w-60 h-12 tracking-wide border-[1px] border-gray-400
        rounded-md flex items-center justify-center gap-2 hover:border-blue-600
        cursor-pointer duration-300 "
        >
          <img className="w-8" src={googleLogo} alt="gogleLogo" />
          <span className="text-sm text-gray-900">Sign in with Google</span>
        </div>
        <button
          onClick={handleSignOut}
          className="bg-black text-white text-base py-3 px-8 tracking-wide
        rounded-md hover:bg-gray-800 duration-300"
        >
          Sign Out
        </button>
      </div>
      <div className="w-full flex items-center justify-center gap-10">
        <div
          className="text-base w-60 h-12 tracking-wide border-[1px] border-gray-400
        rounded-md flex items-center justify-center gap-2 hover:border-blue-600
        cursor-pointer duration-300 "
        >
          <img className="w-8" src={githubLogo} alt="gogleLogo" />
          <span className="text-sm text-gray-900">Sign in with GitHub</span>
        </div>
        <button
          className="bg-black text-white text-base py-3 px-8 tracking-wide
        rounded-md hover:bg-gray-800 duration-300"
        >
          Sign Out
        </button>
      </div>
      <ToastContainer
        position="top-left"
        autoClose={2000}
        hideProgressBar={false}
        newsOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default Login;
