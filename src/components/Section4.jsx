import React from "react";
import section3_about from "../assets/images/section4.png";
export default function Section4() {
  return (
    <div
      id="products"
      className="section4  w-100 flex flex-col md:flex-row content-center px-5 md:px-30 py-15 md:py-25"
    >
      <div className="basis-1 md:basis-1/2">
        <img src={section3_about} className="w-60 md:w-100 " />
      </div>

      <div className="basis-1 md:basis-[60vw] d-flex flex-col content-center mt-5 md:mt-0">
        <h3 className="font-600 text-xl md:text-2xl my-3">
          Superior Pumping Solution
        </h3>
        <h1 className="font-600 text-3xl md:text-5xl my-5">
          Efficient 4-inch<br></br> Submersible Pump
        </h1>
        <p className="font-normal text-md my-5">
          Our 4-inch Submersible Pumps are made of high-quality stainless steel
          for durability and corrosion resistance. Our pumps are energy
          efficient and cover a broad range of duty points, making them ideal
          for various applications. These pumps are designed to maximise flow,
          minimise energy usage, and extend service life, ensuring your water
          needs are addressed with exceptional perfection.
        </p>
      </div>
    </div>
  );
}
