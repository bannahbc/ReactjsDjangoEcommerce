import React from "react";
import "./banner.css";
import cloth from "../../Assets/Images/pew-nguyen-Ib0H1MGt5yw-unsplash.jpg";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner__content text-center">
        <h1>Welcome to Our Website</h1>
        <p className="font-light text-shadow-lg">Your one-stop solution for all your needs.</p>
        <button className="banner__button">Get Started &rarr; </button>
      </div>
    </div>
  );
}
export default Banner;