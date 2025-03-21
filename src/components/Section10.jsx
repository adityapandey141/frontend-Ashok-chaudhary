import React from "react";
import section10 from "../assets/images/section10.jpg";

import AOS from "aos";
import { useEffect } from "react";
export default function Section10() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="section4  w-100 flex flex-col md:flex-row content-center px-5 md:px-30 py-10 md:py-20">
      <div className="basis-1 md:basis-[40vw] ">
        <img src={section10} className="w-60 md:w-100 " />
      </div>

      <div className="basis-1 md:basis-[60vw] d-flex flex-col content-center mt-5 md:mt-5">
        <h1
          className="font-600 text-3xl md:text-5xl  md:my-5"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="800"
        >
          Smart Pumping Solutions
        </h1>
        <p
          className="font-normal text-md md:my-5"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="900"
        >
          Our pumps are equipped with cutting-edge technology, offering
          unmatched reliability, precision, and efficiency to tackle today’s
          water management challenges. Designed with advanced motor control
          systems and intelligent performance monitoring, they optimize water
          flow while minimizing energy consumption.
        </p>
        <p
          className="font-normal text-md md:my-5"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1000"
        >
          With smart automation features, our pumps can adjust to varying water
          demands in real time, ensuring consistent pressure and performance.
          This technology also enhances operational safety by preventing dry
          runs, overheating, and overload conditions, extending the pump's
          lifespan.
        </p>
      </div>
    </div>
  );
}
