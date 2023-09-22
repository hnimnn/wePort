import React from "react";
import "./HomePage.scss";
import Header from "../../Components/Header/Header";
import MostInteracted from "../../Components/MostInteracted/MostInteracted";
import banner from "../../Assets/images/Banner.png";
import ArrowDown from '../../Components/Icons/ArrowDown';
const HomePage = () => {
  return (
    <>
      <Header />
      <div className="wrapper-homepage">
        <section className='banner'>

          <span className="title">The Perfect Place For UI/UX Talent and Enterprises! with Quality Services</span>
          <img src={banner} alt="Banner" className="banner-img" />
          <ArrowDown />
        </section>
      </div>
      {/* <img src={banner} alt="Banner" className="banner-scroll" />
      <span className="title-scroll-line1">Let’s Take A Look</span>
      <span className="title-scroll-line2">SHALL WE!</span> */}
      <MostInteracted/>
    </>
  );
};

export default HomePage;
