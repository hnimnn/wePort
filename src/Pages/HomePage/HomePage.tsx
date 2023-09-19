import React from "react";
import "./HomePage.scss";
import Header from "../../Components/Header/Header";
import Banner from "../../Assets/IMG/Banner.png";
import ArrowDown from "../../Assets/SVG/ArrowDown.svg"
const HomePage = () => {
  return (
    <>
    <Header/>
    <div className="wrapper-homepage">
      <span className="title">The Perfect Place For UI/UX Talent and Enterprises! with Quality Services</span>
      <img src={Banner} alt="Banner" className="banner"/> 
    </div>
    {/* <img src={Banner} alt="Banner" className="banner-scroll"/>
    <span className="title-scroll-line1">Let’s Take A Look</span>
    <span className="title-scroll-line2">SHALL WE!</span>
    <img src={ArrowDown} alt="arrow" className="arrow" /> */}
    </>
  );
};

export default HomePage;
