import React from "react";
import LightGallery from "lightgallery/react";

// import styles

// import plugins if you need
// import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

export default function Gallery() {
  const images = [
    "src/assets/images/gallery/1.jpg",
    "src/assets/images/gallery/2.jpg",
    "src/assets/images/gallery/3.jpg",
    "src/assets/images/gallery/4.jpg",
    "src/assets/images/gallery/5.jpg",
    "src/assets/images/gallery/6.jpg",
    "src/assets/images/gallery/7.jpg",
    "src/assets/images/gallery/8.jpg",
    "src/assets/images/gallery/9.jpg",
  ];
  const baseUrl = "http://localhost:5173/";
  const onInit = () => {
    console.log("lightGallery has been initialized");
  };

  return (
    <div className="w-[100%] flex flex-col md:flex-row content-center px-5 md:px-30 py-15 md:py-10">
      <LightGallery
        onInit={onInit}
        speed={500}
        plugins={[lgZoom]}
        elementClassNames="grid grid-cols-3 gap-4"
      >
        <a href={baseUrl + images[0]}>
          <img
            alt="Ashok Chaudhary Images"
            src={baseUrl + images[0]}
            className="w-100 h-50"
          />
        </a>

        <a href={baseUrl + images[1]}>
          <img
            alt="Ashok Chaudhary Images"
            src={baseUrl + images[1]}
            className="w-100 h-50"
          />
        </a>
        <a href={baseUrl + images[2]}>
          <img
            alt="Ashok Chaudhary Images"
            src={baseUrl + images[2]}
            className="w-100 h-50"
          />
        </a>
        <a href={baseUrl + images[3]}>
          <img
            alt="Ashok Chaudhary Images"
            src={baseUrl + images[3]}
            className="w-100 h-50"
          />
        </a>
        <a href={baseUrl + images[4]}>
          <img
            alt="Ashok Chaudhary Images"
            src={baseUrl + images[4]}
            className="w-100 h-50"
          />
        </a>
        <a href={baseUrl + images[5]}>
          <img
            alt="Ashok Chaudhary Images"
            src={baseUrl + images[5]}
            className="w-100 h-50"
          />
        </a>
        <a href={baseUrl + images[6]}>
          <img
            alt="Ashok Chaudhary Images"
            src={baseUrl + images[6]}
            className="w-100 h-50"
          />
        </a>
        <a href={baseUrl + images[7]}>
          <img
            alt="Ashok Chaudhary Images"
            src={baseUrl + images[7]}
            className="w-100 h-50"
          />
        </a>
        <a href={baseUrl + images[8]}>
          <img
            alt="Ashok Chaudhary Images"
            src={baseUrl + images[8]}
            className="w-100 h-50"
          />
        </a>
      </LightGallery>
    </div>
  );
}
