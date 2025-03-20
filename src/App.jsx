import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";
import Section6 from "./components/Section6";
import Section7 from "./components/Section7";
import Section8 from "./components/Section8";
import Section9 from "./components/Section9";
import Section10 from "./components/Section10";
import Gallery from "./components/Gallery";
import Cta from "./components/Cta";
import Footer from "./components/Footer";
import "animate.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <Section9 />
      <Section10 />
      <Gallery />
      <Cta />
      <Footer />
    </>
  );
}

export default App;
