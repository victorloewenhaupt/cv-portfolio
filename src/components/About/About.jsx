import React from "react";
import profile_img from "../../assets/profile_img.jpg";
import "./About.scss";
const About = () => {
  return (
    <div id="about" className="about">
      <div className="title-box">
        <h1>About me</h1>
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I am an experienced Frontend Developer with over 3 years of
              professional expertise in the field. Throughout my career, I have
              had the privilege of collaborating with some prestigious
              organizations, contributing to the company growth.
            </p>
            <p>
              My passion for frontend development is not only reflected in my
              experience but also in the enthusiasm and dedication I bring to
              each project, I'm always eager to learn.
            </p>
          </div>
          <div className="skill-container">
            <div className="about-skills">
              <div className="skill">
                <p>HTML & CSS:</p>
                <span>Advanced</span>
              </div>
              <div className="skill">
                <p>React JS:</p>
                <span>Intermediate</span>
              </div>
              <div className="skill">
                <p>Javascript:</p>
                <span>Advanced</span>
              </div>
              <div className="skill">
                <p>Next JS:</p>
                <span>Beginner</span>
              </div>
            </div>
            <div className="about-skills">
              <div className="skill">
                <p>Wordpress</p>
                <span>Intermediate</span>
              </div>
              <div className="skill">
                <p>PHP</p>
                <span>Beginner</span>
              </div>
              <div className="skill">
                <p>NodeJs</p>
                <span>Beginner</span>
              </div>
              <div className="skill">
                <p>Shopware</p>
                <span>Intermediate</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievments">
        <div className="achievments">
          <h1>3</h1>
          <p>Years of experience</p>
        </div>
        <hr />
        <div className="achievments">
          <h1>+90</h1>
          <p>Projects completed</p>
        </div>
        <hr />
        <div className="achievments">
          <h1>15+</h1>
          <p>Happy Clients</p>
        </div>
      </div>
    </div>
  );
};

export default About;
