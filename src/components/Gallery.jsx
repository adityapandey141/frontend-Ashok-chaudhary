import React from "react";
import LightGallery from "lightgallery/react";
import images1 from "../assets/images/gallery/1.jpg";
import images2 from "../assets/images/gallery/2.jpg";
import images3 from "../assets/images/gallery/3.jpg";
import images4 from "../assets/images/gallery/4.jpg";
import images5 from "../assets/images/gallery/5.jpg";
import images6 from "../assets/images/gallery/6.jpg";
import images7 from "../assets/images/gallery/7.jpg";
import images8 from "../assets/images/gallery/8.jpg";
import images9 from "../assets/images/gallery/9.jpg";
// import styles

// import plugins if you need
// import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

export default function Gallery() {
  const onInit = () => {
    console.log("lightGallery has been initialized");
  };

  return (
    <div className="w-[100%] flex flex-col  content-center px-5 md:px-30 py-1 md:py-0 md:pb-10">
      <div className="">
        <div className=" text-center my-3 md:my-10">
          <h1 className="font-600 text-3xl md:text-5xl text-[#6383aa] ">
            Products Gallery
          </h1>
        </div>
      </div>
      <LightGallery
        onInit={onInit}
        speed={500}
        plugins={[lgZoom]}
        elementClassNames="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4"
      >
        <a href={images1}>
          <img
            alt="Ashok Chaudhary Images"
            src={images1}
            className="w-50 md:w-100 h-30 md:h-50"
          />
        </a>

        <a href={images2}>
          <img
            alt="Ashok Chaudhary Images"
            src={images2}
            className="w-50 md:w-100 h-30 md:h-50"
          />
        </a>
        <a href={images3}>
          <img
            alt="Ashok Chaudhary Images"
            src={images3}
            className="w-50 md:w-100 h-30 md:h-50"
          />
        </a>
        <a href={images4}>
          <img
            alt="Ashok Chaudhary Images"
            src={images4}
            className="w-50 md:w-100 h-30 md:h-50"
          />
        </a>
        <a href={images5}>
          <img
            alt="Ashok Chaudhary Images"
            src={images5}
            className="w-50 md:w-100 h-30 md:h-50"
          />
        </a>
        <a href={images6}>
          <img
            alt="Ashok Chaudhary Images"
            src={images6}
            className="w-100 h-30 md:h-50"
          />
        </a>
        <a href={images7}>
          <img
            alt="Ashok Chaudhary Images"
            src={images7}
            className="w-50 md:w-100 h-30 md:h-50"
          />
        </a>
        <a href={images8}>
          <img
            alt="Ashok Chaudhary Images"
            src={images8}
            className="w-50 md:w-100 h-30 md:h-50"
          />
        </a>
        <a href={images9}>
          <img
            alt="Ashok Chaudhary Images"
            src={images9}
            className="w-50 md:w-100 h-30 md:h-50"
          />
        </a>
      </LightGallery>
    </div>
  );
}
