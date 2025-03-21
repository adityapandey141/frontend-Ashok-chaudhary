import React from "react";
import Installation from "../assets/images/easy-installation.png";
import Maximum from "../assets/images/Maximum-Effectiveness.png";
import Steel from "../assets/images/steel.png";
import AOS from "aos";
import { useEffect } from "react";
const coreValues = [
  {
    image: Maximum,
    heading: "Maximum Effectiveness",
    description:
      "Our emphasis on pump and motor efficiency goes beyond traditional cost considerations to show our high-performance solutions' substantial financial benefits.",
  },
  {
    image: Steel,
    heading: "Sturdy Stainless Steel",
    description:
      "Even in hard water circumstances, our pumps, which are made entirely of AISI-304 stainless steel, minimise corrosion and excel in wear resistance.",
  },
  {
    image: Installation,
    heading: "Simple Installation",
    description:
      "Lightweight stainless steel pumps cut equipment and operating expenses with their easy installation and maintenance design.",
  },
];

export default function Section6() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="section6 grid grid-cols-1 md:grid-cols-3 gap-10 w-100  content-center px-5 md:px-30 py-15 md:py-20">
      <div className="md:col-span-3">
        <div className=" text-center md:my-5">
          <h1 className="font-600 text-3xl md:text-5xl ">Core Advantages</h1>
        </div>
      </div>
      {coreValues.map((value, index) => (
        <div
          className=" bg-white shadow-2xl rounded text-black p-5"
          key={index}
        >
          <div className="">
            <img
              src={value.image}
              className="w-30 mx-auto"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="800"
            />
          </div>
          <div className="d-flex basis-2/3 flex-col px-1 md:px-3 text-center my-5">
            <h1
              className="font-600 text-2xl md:text-3xl "
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="900"
            >
              {value.heading}
            </h1>
            <p
              className="font-normal text-md my-5"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              {value.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
