import React from "react";
import locationicon from "../../assets/locationicon.svg";
import mailicon from "../../assets/mailicon.svg";
import phoneicon from "../../assets/phoneicon.svg";
import "./Contact.scss";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "76496aae-1318-4224-8035-bda57cc65364");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };
  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I'm currently avaliable to take on new projects, so feel free to
            send me a message about anything that you want me to work on. You
            can contact anytime.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mailicon} alt="" />
              <p>victorloewenhaupt@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={phoneicon} alt="" />
              <p>176 6599-7353</p>
            </div>
            <div className="contact-detail">
              <img src={locationicon} alt="" />
              <p>Ulm, Germany</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="">Your name</label>
          <input type="text" name="name" placeholder="Enter your name" />
          <label htmlFor="">Email</label>
          <input type="email" name="email" placeholder="Enter your email" />
          <label htmlFor="">Enter your message here</label>
          <textarea
            name="message"
            cols="30"
            rows="8"
            placeholder="Enter your message"
          ></textarea>
          <button type="submit" className="contact-submit">
            Submit now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
