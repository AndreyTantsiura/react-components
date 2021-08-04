import React from "react";

function Contact(props) {
  return (
    <div className="card_contact">
      <div className="first_name">{props.firstName}</div>
      <div className="last_name">{props.lastName}</div>
      <div className="number_phone">{props.phone}</div>
      <div className="gender">{props.gender}</div>
    </div>
  );
}

export default Contact;
