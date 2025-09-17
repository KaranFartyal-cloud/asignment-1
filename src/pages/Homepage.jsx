import React from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="aspect-[9/16] h-full flex flex-col gap-2 justify-end bg-[#f7f8f9] p-6">
      <p className="text-2xl font-bold">Welcome to PopX</p>
      <div className="max-w-[60%] mb-4">
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      <div className="flex flex-col ">
        <Link
          to="/signup"
          className="text-white font-semibold w-full text-center bg-[#6c25ff] hover:bg-[#5d0ec0] p-2 transition-all duration-300 rounded-md mb-2"
        >
          Create Account
        </Link>

        <Link
          to="/login"
          className="w-full font-semibold text-center bg-[#cebafb] hover:bg-[#b59de6] p-2 transition-all duration-300 rounded-md"
        >
          Already Registered? Login
        </Link>
      </div>
    </div>
  );
};

export default Homepage;
