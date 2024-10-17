import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import profile_img from "../../assets/profile_img.jpg";
import "./Hero.scss";
const Hero = () => {
  return (
    <div id="home" className="hero">
      <img className="profile-image" src={profile_img} alt="" />
      <h1>
        <span>I'm Victor Loewenhaupt</span>, front-end developer in Germany
      </h1>
      <p>
        I'm a front-end developer from Germany, have some experience due
        training and a company I worked on
      </p>
      <div className="hero-action">
        <AnchorLink className="anchor-link" href="#contact">
          <div className="hero-connect">Connect with me</div>
        </AnchorLink>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  );
};

export default Hero;
