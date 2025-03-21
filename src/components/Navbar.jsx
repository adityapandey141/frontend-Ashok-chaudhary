import React from "react";
import { useState } from "react";
import logo from "../assets/images/Logo.png";
export default function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const toggleSidebar = () => {
    console.log(sidebar);
    if (sidebar) {
      return setSidebar(false);
    }
    return setSidebar(true);
  };
  return (
    <>
      <nav className=" bg-gray-800 text-white shadow-lg sticky top-0 z-5 md:px-15">
        <div className=" mx-auto px-5 py-2">
          <div className="flex justify-between items-center h-16">
            <div className=" flex items-center">
              <a href="#" className="text-xl font-bold">
                <img
                  src={logo}
                  alt="Logo"
                  className="w-[70%] lg:w-[70%] mr-2 inline"
                />
                {/* Ashok Chaudhary */}
              </a>
            </div>

            <div className="hidden md:flex md:space-x-3 lg:space-x-5">
              <a
                href="/"
                className="md:px-2 lg:px-3 py-2 hover:text-gray-300 md:text-sm lg:text-base"
              >
                HOME
              </a>
              <a
                href="#about"
                className="md:px-2 lg:px-3  py-2 hover:text-gray-300 md:text-sm lg:text-base"
              >
                ABOUT US
              </a>
              <a
                href="#products"
                className="md:px-2 lg:px-3  py-2 hover:text-gray-300 md:text-sm lg:text-base"
              >
                PRODUCT
              </a>
              <a
                href="#whyus"
                className="md:px-2 lg:px-3  py-2 hover:text-gray-300 md:text-sm lg:text-base"
              >
                WHY US
              </a>
              <a
                href="#cta"
                className="md:px-2 lg:px-3  py-2 hover:text-gray-300"
              >
                CONTACT
              </a>
            </div>

            <div className="hidden lg:block">
              <a
                href="tel:+917096428481"
                className="bg-[#6383aa] hover:bg-blue-600 text-white font-medium px-4 py-2 rounded"
              >
                +91 7096428481
              </a>
            </div>

            <div className="md:hidden flex items-center">
              <button
                id="mobile-menu-button"
                className="outline-none"
                onClick={toggleSidebar}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={`${
          sidebar ? "translate-x-0" : "translate-x-full"
        } fixed top-0 right-0 w-64 h-full bg-gray-800 text-white z-40 transform  transition duration-300 ease-in-out md:hidden`}
      >
        <div className="p-4">
          <div className="flex justify-end">
            <button onClick={toggleSidebar} className="text-white">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>

          <div className="mt-4 mb-8 text-center">
            <img src={logo} alt="Logo" className=" w-50 mb-2" />
          </div>

          <div className="flex flex-col space-y-4">
            <a href="/" className="px-4 py-2 hover:bg-gray-700 rounded">
              HOME
            </a>
            <a href="#about" className="px-4 py-2 hover:bg-gray-700 rounded">
              ABOUT US
            </a>
            <a href="#products" className="px-4 py-2 hover:bg-gray-700 rounded">
              PRODUCT
            </a>
            <a href="#whyus" className="px-4 py-2 hover:bg-gray-700 rounded">
              WHY US
            </a>
            <a href="#cta" className="px-4 py-2 hover:bg-gray-700 rounded">
              CONTACT
            </a>
          </div>

          <div className="mt-8">
            <a
              href="tel:+917096428481"
              className="block bg-[#6383aa] hover:bg-blue-600 text-white text-center font-medium px-4 py-2 rounded"
            >
              +91 7096428481
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
