import React from "react";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className=" md:mt-0 md:flex items-center  ">
      <div className="mb-12 md:mb-0 md:w-3/5 space-y-10 bg-gradient-to-l from-transparent via-blue-100 to-transparent mr-8 p-8 -ml-6 md:-ml-0">
        <h1 className=" text-3xl font-bold mb-2">Sign Up To</h1>
        <h2 className=" text-xl mt-4 mb-2 ">
          <span className=" text-white text-xl shadow font-bold bg-gradient-to-r from-orange-400 to-blue-400  px-1 py-1 rounded">
            {" "}
            Jugajug{" "}
          </span>{" "}
          &nbsp; - The easiest way to communicate
        </h2>
        <div>
          {" "}
          <small>
            If you already have an account, you can{" "}
            <Link
              className=" text-blue-400 font-semibold cursor-pointer"
              to="/login"
            >
              Login Here!{" "}
            </Link>{" "}
          </small>
        </div>
      </div>
      <div className="md:w-2/5">
        <form>
          <h1 className="text-3xl font-bold mb-8 hidden md:flex">Sign Up</h1>
          <input
            className=" drop-shadow rounded w-full p-4 mb-8 bg-gradient-to-r from-orange-200 to-blue-200 placeholder-blue-500  placeholder-opacity-50  text-blue-600"
            type="text"
            name="fullName"
            placeholder="Your Full Name"
          />{" "}
          <input
            className=" drop-shadow rounded w-full p-4 mb-8 bg-gradient-to-r from-orange-200 to-blue-200 placeholder-blue-500  placeholder-opacity-50  text-blue-600"
            type="email"
            name="email"
            placeholder="Enter your email"
          />{" "}
          <input
            className=" drop-shadow rounded w-full p-4 mb-8 bg-gradient-to-r from-orange-200 to-blue-200 placeholder-blue-500  placeholder-opacity-50  text-blue-600"
            type="number"
            name="contact"
            placeholder="Your contact number"
          />{" "}
          <br />
          <input
            className="drop-shadow rounded w-full p-4 bg-gradient-to-r from-orange-200 to-blue-200 placeholder-blue-500 placeholder-opacity-50 text-blue-600"
            type="password"
            name="password"
            placeholder="Enter password"
          />
          {/* <div className="flex justify-end mt-2 opacity-50">
            <small>
              <Link to="/resetPassword"> Forgot Password?</Link>{" "}
            </small>
          </div> */}
          <button
            className="p-4 bg-blue-400 w-full mt-12 rounded-lg drop-shadow-lg text-white font-bold"
            type="submit"
          >
            Register
          </button>
        </form>
        <div className=" flex justify-center mt-4">
          <small>or continue with</small>
        </div>
        <div className=" flex justify-center mt-2">
          <img src="logo192.png" alt="" className="w-8 h-8" />
        </div>
      </div>
    </div>
  );
}
