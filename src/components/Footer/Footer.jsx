import React from "react";
import userIcon from "../../assets/usericon.svg";
import "./Footer.scss";

const Footer = () => {
  return (
    <div id="footer" className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <h1>Victor</h1>
          <p>
            I am a frontend developer from, Germany with 3 years of experience
            in companies like Microsoft, Tesla and Apple.
          </p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={userIcon} alt="" />
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          © 2024 Victor Loewenhaupt. All rights reserved.
        </p>
        <div className="footer-bottom-right">
          <p>Term of services</p>
          <p> Privacy policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
