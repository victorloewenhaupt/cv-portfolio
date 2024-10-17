import React from "react";
import arrow_right from "../../assets/arrow-right.png";
import Services_Data from "../../assets/services_data";
import "./Services.scss";
const Services = () => {
  return (
    <div id="services" className="services">
      <div className="services-title">
        <h1>My services</h1>
      </div>
      <div className="services-container">
        {Services_Data.map((data, index) => {
          return (
            <div key={index} className="services-format">
              <h3>{data.s_no}</h3>
              <h2>{data.s_name}</h2>
              <p>{data.s_desc}</p>
              <div className="services-readmore">
                <p>Read more</p>
                <img src={arrow_right} alt="" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
