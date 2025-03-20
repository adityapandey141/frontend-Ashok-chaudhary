import React from "react";
import section10 from "../assets/images/section10.jpg";
export default function Section10() {
  return (
    <div className="section4  w-100 flex flex-col md:flex-row content-center px-5 md:px-30 py-15 md:py-25">
      <div className="basis-1 md:basis-[40vw] ">
        <img src={section10} className="w-60 md:w-100 " />
      </div>

      <div className="basis-1 md:basis-[60vw] d-flex flex-col content-center mt-5 md:mt-5">
        <h1 className="font-600 text-3xl md:text-5xl  md:my-5">
          Smart Pumping Solutions
        </h1>
        <p className="font-normal text-md md:my-5">
          Our pumps are equipped with cutting-edge technology, offering
          unmatched reliability, precision, and efficiency to tackle today’s
          water management challenges. Designed with advanced motor control
          systems and intelligent performance monitoring, they optimize water
          flow while minimizing energy consumption.
        </p>
        <p className="font-normal text-md md:my-5">
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
