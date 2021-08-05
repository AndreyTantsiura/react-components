import React from "react";
import User from "../img/user.png";

function Contact(props) {
  return (
    <div className="contact_card">
      <div className="contact_heder">
        <img src={User} alt="" />
        <div className="contact_name">
          <span>{props.firstName}</span>
          <span> {props.lastName}</span>
        </div>
        <div className="gender">
          {props.gender === "male" ? (
            <div>&#9794;</div>
          ) : props.gender === "female" ? (
            <div>&#9792;</div>
          ) : null}
        </div>
      </div>
      <div className="number_phone">{props.phone}</div>
    </div>
  );
}

export default Contact;
