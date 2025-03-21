import React from "react";
import section7 from "../assets/images/section7.jpg";
import AOS from "aos";
import { useEffect } from "react";
export default function Section7() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="section4  w-100 flex flex-col md:flex-row content-center px-5 md:px-30 py-15 md:py-25">
      <div className="basis-1 md:basis-[40vw] ">
        <img src={section7} className="w-60 md:w-100 " />
      </div>

      <div className="basis-1 md:basis-[60vw] d-flex flex-col content-center mt-5 md:mt-5">
        <h1
          className="font-600 text-3xl md:text-5xl  md:my-5"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="800"
        >
          Eco-Driven Innovation
        </h1>
        <p
          className="font-normal text-md md:my-5"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="900"
        >
          Our pumps are seamlessly compatible with solar energy systems,
          offering a cost-effective and environmentally friendly solution for
          water management. By harnessing clean and renewable solar power, they
          significantly reduce reliance on conventional electricity, leading to
          lower running costs and minimized energy expenses.
        </p>
        <p
          className="font-normal text-md md:my-5"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1000"
        >
          Designed for maximum efficiency, our solar-compatible pumps help
          decrease carbon emissions, promoting a greener and more sustainable
          environment. This innovative integration not only supports energy
          independence but also ensures a consistent water supply, even in
          remote or off-grid areas.
        </p>
      </div>
    </div>
  );
}
