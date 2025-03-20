import React from "react";
import Agricultural from "../assets/images/Agricultural.png";
import Domestic from "../assets/images/domestic.png";
import Industrial from "../assets/images/Industrial.png";
import Commercial from "../assets/images/Commercial.png";

const data = [
  {
    image: Domestic,
    heading: "Domestic",
    description:
      "Our pumps combine efficiency and ease, making them perfect for residential applications. They guarantee steady water pressure for gardens, fountains, and taps in homes.",
  },
  {
    image: Agricultural,
    heading: "Agricultural",
    description:
      "Our pumps meet a variety of agricultural needs, such as field watering, sprinkler systems and drip irrigation, guaranteeing the best possible water use for growth.",
  },
  {
    image: Industrial,
    heading: "Industrial",
    description:
      "Our pumps, which serve a variety of industrial applications, are essential for operations including system heating and cooling, firefighting, sewage management, and cutting and grinding.",
  },
  {
    image: Commercial,
    heading: "Commercial usage",
    description:
      "In commercial environments like hotels, corporate offices, and shopping centres, our pumps are essential because they support advanced digital technologies for wastewater management, heating, cooling, and pressure boosting.",
  },
];

export default function Section5() {
  return (
    <div className="section5   grid grid-cols-1 md:grid-cols-2 gap-10 w-100  md:content-center px-5 md:px-30 py-15 md:py-25">
      {data.map((value, index) => (
        <div className="flex flex-col md:flex-row " key={index}>
          <div className="basis-1 md:basis-1/3 md:px-5">
            <img src={value.image} className="w-30 md:mx-auto" />
          </div>
          <div className="basis-1 d-flex md:basis-2/3 flex-col md:px-5 mt-5 ">
            <h1 className="font-600 text-3xl ">{value.heading}</h1>
            <p className="font-normal text-md my-3 md:my-5">
              {value.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
