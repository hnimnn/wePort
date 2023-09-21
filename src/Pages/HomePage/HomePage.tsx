import React from "react";
import "./HomePage.scss";
import Header from "../../Components/Header/Header";
import Banner from '../../Components/HomePage/Banner/Banner';
const HomePage = () => {
  return (
    <>
      <Header />
      <div className="wrapper-homepage">
        <Banner />
      </div>
      {/* <img src={banner} alt="Banner" className="banner-scroll" />
      <span className="title-scroll-line1">Let’s Take A Look</span>
      <span className="title-scroll-line2">SHALL WE!</span> */}
    </>
  );
};

export default HomePage;
