import React from "react";
import arrow_right from "../../assets/arrow-right.png";
import mywork_data from "../../assets/mywork_data.js";
import "./Mywork.scss";
const Mywork = () => {
  return (
    <div id="work" className="mywork">
      <div className="mywork-title">
        <h1>My latest work</h1>
      </div>
      <div className="mywork-container">
        {mywork_data.map((work, index) => {
          return <img key={index} src={work.w_img} alt="" />;
        })}
      </div>
      <div className="myworkshow-more">
        <p>Show more</p>
        <img src={arrow_right} alt="" />
      </div>
    </div>
  );
};

export default Mywork;
