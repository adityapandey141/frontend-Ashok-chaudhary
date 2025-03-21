import React from "react";
import AOS from "aos";
import { useEffect } from "react";
import Mission from "../assets/images/mission.png";

export default function Section8() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="section8  pb-30  grid grid-cols-1 md:grid-cols-2 gap-10 w-100  content-center px-5 md:px-30 py-15 md:py-25">
      {/* <!-- Mission Section --> */}
      <div className="relative h-70 md:h-96 overflow-hidden mt-[-20px] md:mt-[-50px] bg-black">
        <img
          src={Mission}
          alt="Water pump facility"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 flex flex-col justify-start p-3 md:p-12">
          <h1
            className="text-3xl md:text-4xl font-600 mb-2 md:mb-8"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="900"
          >
            What Our
            <br />
            Mission Suggest
          </h1>
          <p
            className="text-white text-base leading-relaxed max-w-md"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            To strengthen global communities by offering innovative and
            sustainable water pumping solutions, guaranteeing that every home,
            farm, and industry can access clean and efficient water.
          </p>
          <div className="mt-1 md:mt-6">
            <span className="text-white text-2xl arrow-icon"></span>
          </div>
        </div>
      </div>

      {/* <!-- Vision Section --> */}
      <div className="relative h-70 md:h-96 overflow-hidden mt-[-20px] md:mt-[-50px] bg-black">
        <img
          src={Mission}
          alt="Industrial water pumps - metal pipes"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 flex flex-col justify-start p-3 md:p-12">
          <h2
            className="text-3xl md:text-4xl font-600 mb-2 md:mb-8"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="900"
          >
            What We See As
            <br />
            Our Vision
          </h2>
          <p
            className="text-white text-base leading-relaxed max-w-md"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            To be a global leader in water pump technology, transforming water
            availability and conservation via cutting-edge innovation,
            customer-centric services, and environmental protection.
          </p>
          <div className="mt-1 md:mt-6">
            <span className="text-white text-2xl arrow-icon"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
