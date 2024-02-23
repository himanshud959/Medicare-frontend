import React from "react";
import { Link } from "react-router-dom";

const CheckoutSuccess = () => {
  return (
    <div className="bg-gray-100 h-screen ">
      <div className="bg-white p-6 md-:mx-auto">
        <svg
          viewBox="0 0 24 24"
          className="text-green-600 w-16 h-16 mx-auto my-6"
        >
          <path
            fill="currentColor"
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm5 7l-7 7l-5-5l1.41-1.41L10 13.17l6.59-6.59L17 9z"
          ></path>
        </svg>
        <div className="text-center">
          <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">
            Payment Done!
          </h3>
          <p className="text-gray-600 my-2">
            Your payment has been successfully processed.
          </p>
          <p>Have a great day!</p>
          <div className="py-10 text-center">
            <Link
              to="/home"
              className="px-12 bg-buttonBgColor text-white font-semibold py-3"
            >
              Go Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutSuccess;
