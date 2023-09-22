import React from "react";
import "./HomePage.scss";
import Header from "../../Components/Header/Header";
import MostInteracted from "../../Components/MostInteracted/MostInteracted";
import banner from "../../Assets/images/Banner.png";
import ArrowDown from '../../Components/Icons/ArrowDown';
import Banner from '../../Components/HomePage/Banner/Banner';
const HomePage = () => {
  return (
    <>
      <Header />
      <div className="wrapper-homepage">
        <Banner />
        <MostInteracted/>
      </div>
    </>
  );
};

export default HomePage;
