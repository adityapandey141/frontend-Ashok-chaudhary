import React from "react";
import Agricultural from "../assets/images/Agricultural.png";
import Domestic from "../assets/images/domestic.png";
import Industrial from "../assets/images/Industrial.png";
import Commercial from "../assets/images/Commercial.png";

export default function Section9() {
  return (
    <div className="section9 mt-[-50px] ">
      <div className="grid grid-cols-12 md:grid-cols-12 gap-0 ">
        <div className="col-span-12 md:col-span-5 order-2 md:order-1 md:col-start-2 relative bg-amber-800 h-60 md:h-70 overflow-hidden">
          <div className="absolute inset-0 flex flex-col justify-start p-5 md:p-8">
            <h2 className="text-white text-2xl md:text-3xl font-medium mb-2 md:mb-6">
              Greater Longevity
              <br />
              and Quality
            </h2>
            <p className="text-white text-sm leading-relaxed">
              Our submersible pumps are designed to be robust and dependable.
              They are made of the highest quality materials and provide
              outstanding corrosion resistance and performance even under
              extreme conditions.
            </p>
            <div className="mt-2 md:mt-10">
              <div className="w-8 h-0.5 bg-white"></div>
            </div>
          </div>
        </div>

        <div className="col-span-12 md:col-span-5 order-1 md:order-2  bg-white overflow-hidden h-55 md:h-70">
          <img
            src="https://www.ashokchaudhary.co.in/wp-content/uploads/2024/04/MIsiion.png"
            alt="Water pump product"
            className="w-full object-contain"
          />
        </div>
      </div>

      <div className="grid grid-cols-12 gap-0 ">
        <div className="col-span-12 md:col-span-5 md:col-start-2   bg-white overflow-hidden h-50 md:h-70">
          <img
            src="https://www.ashokchaudhary.co.in/wp-content/uploads/2024/04/MIsiion.png"
            alt="Water pump product"
            className="w-full object-contain"
          />
        </div>

        <div className="col-span-12 md:col-span-5 relative bg-amber-800 h-50 md:h-70 overflow-hidden">
          <div className="absolute inset-0 flex flex-col justify-start p-5 md:p-8">
            <h2 className="text-white text-2xl md:text-3xl font-medium mb-2 md:mb-6">
              Saving Energy
            </h2>
            <p className="text-white text-sm leading-relaxed">
              Adopt sustainability with our energy-efficient pumps. They are
              designed to consume as minimal power as possible, resulting in
              lower operating expenses and a smaller carbon footprint.
            </p>
            <div className="mt-2 md:mt-10 ">
              <div className="w-8 h-0.5 bg-white"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-0 ">
        <div className="col-span-12 md:col-span-5 order-2 md:order-1 md:col-start-2 relative bg-amber-800 h-50 md:h-70 overflow-hidden">
          <div className="absolute inset-0 flex flex-col justify-start p-5 md:p-8">
            <h2 className="text-white text-2xl md:text-3xl font-medium mb-2 md:mb-6">
              Customer-Driven Service
            </h2>
            <p className="text-white text-sm leading-relaxed">
              Your satisfaction is our top priority. We provide full guidance to
              ensure that your water solutions are uninterrupted, beginning with
              the selection process and continuing through installation and
              maintenance.
            </p>
            <div className="mt-2 md:mt-10">
              <div className="w-8 h-0.5 bg-white"></div>
            </div>
          </div>
        </div>

        <div className="col-span-12 md:col-span-5 order-1 md:order-2  bg-white overflow-hidden h-50 md:h-70">
          <img
            src="https://www.ashokchaudhary.co.in/wp-content/uploads/2024/04/MIsiion.png"
            alt="Water pump product"
            className="w-full object-contain"
          />
        </div>
      </div>
    </div>
  );
}
