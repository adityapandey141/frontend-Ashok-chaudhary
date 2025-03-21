import React from "react";
import section3_about from "../assets/images/section3_about.png";
import useAnimateOnScroll from "./Animate";

export default function Section3() {
  useAnimateOnScroll();
  return (
    <div
      id="about"
      className="section3  w-100 grid grid-cols-dense md:grid-cols-2 col-end  gap-4 content-center  px-5 md:px-30 py-15 md:py-25"
    >
      <div className="d-flex flex-col content-center order-2 md:order-1">
        <h3 className="font-600 text-xl md:text-2xl my-3">About Us</h3>
        <h1 className="font-600 text-3xl md:text-5xl my-5 animate-on-scroll animate__fadeInUp">
          Excellence in Water Pump Solutions
        </h1>
        <p className="font-normal text-md my-5">
          At Ashok Chaudhary, we believe in providing highly advanced water pump
          technologies. We aim to improve people’s lives by offering innovative
          and efficient water solutions. Our objective is to provide
          high-quality, durable, and environmentally friendly water pumps that
          fulfil the needs of all households and industries. With the
          development of strong community relationships, with the knowledge that
          by working together, we can create a future in which access to water
          is a right instead of a privilege.
        </p>
        <div className="mt-10">
          <a
            href="tel:+917096428481"
            className=" border-2 border-white hover:border-white bg-blue-000 hover:bg-white text-white hover:text-gray-900 text-center font-medium px-5 py-2 rounded"
          >
            View More
          </a>
        </div>
      </div>

      <div className="order-1 md:order-2">
        <img src={section3_about} className="w-60 md:w-100  md:mx-auto" />
      </div>
    </div>
  );
}
