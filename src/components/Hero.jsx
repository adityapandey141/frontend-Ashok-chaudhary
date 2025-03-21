import React from "react";
import { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
export default function Hero() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="slider-container overflow-hidden ">
      <Slider {...settings}>
        <div className="slide1 h-[70vh] md:h-[100vh] w-100  flex flex-col content-center px-5 md:px-30">
          <div className="overlay"></div>
          <div className="slider-content">
            <h3
              className="font-600 text-xl my-3 "
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="800"
            >
              Redefining Water Accessibility
            </h3>
            <h1
              className="font-700 md:font-bold text-5xl md:text-7xl my-5 animate__animated animate__fadeInUp"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              Exceptional, Advanced, <br></br>
              Premium
            </h1>
            <div className="mt-10">
              <a
                href="tel:+917096428481"
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1500"
                className=" animate__animated animate__fadeInUp border-2 border-white hover:border-white bg-blue-000 hover:bg-white text-white hover:text-gray-900 text-center font-medium px-5 py-2 rounded"
              >
                View More
              </a>
            </div>
          </div>
        </div>

        <div className="slide2 h-[70vh] md:h-[100vh] w-100  flex flex-col content-center px-5 md:px-30">
          <div className="overlay"></div>
          <div className="slider-content">
            <h3
              className="font-600 text-xl my-3 "
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="800"
            >
              Redefining Water Accessibility
            </h3>
            <h1
              className="font-700 md:font-bold text-5xl md:text-7xl my-5 "
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              Exceptional, Advanced, <br></br>
              Premium
            </h1>
            <div className="mt-10">
              <a
                href="tel:+917096428481"
                className=" border-2 border-white hover:border-white bg-blue-000 hover:bg-white text-white hover:text-gray-900 text-center font-medium px-5 py-2 rounded"
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                View More
              </a>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}
