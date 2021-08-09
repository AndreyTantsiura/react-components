import React from "react";
import User from "../img/user.png";

const Contact = ({firstName, lastName, gender, phone}) => (
  <div className="contact_card">
    <div className="contact_heder">
      <img src={User} alt="" />
      <div className="contact_name">
        <span>{firstName}</span>
        <span> {lastName}</span>
      </div>
      <div className="gender">
        {gender === "male" ? (
          <div>&#9794;</div>
        ) : gender === "female" ? (
          <div>&#9792;</div>
        ) : null}
      </div>
    </div>
    <div className="number_phone">{phone}</div>
  </div>
);

export default Contact;
