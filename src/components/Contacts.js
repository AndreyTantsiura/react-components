import React, { useState } from "react";
import "./contacts.css";
import Contact from "./Contact";

function Contacts() {
  const contacts = [
    {
      firstName: "Барней",
      lastName: "Стинсовський",
      phone: "+380956319521",
      gender: "male",
    },
    {
      firstName: "Робін",
      lastName: "Щербатська",
      phone: "+380931460123",
      gender: "female",
    },
    {
      firstName: "Анонімний",
      lastName: "Анонімус",
      phone: "+380666666666",
    },
    {
      firstName: "Лілія",
      lastName: "Олдровна",
      phone: "+380504691254",
      gender: "female",
    },
    {
      firstName: "Маршен",
      lastName: "Еріксонян",
      phone: "+380739432123",
      gender: "male",
    },
    {
      firstName: "Теодор",
      lastName: "Мотсбес",
      phone: "+380956319521",
      gender: "male",
    },
  ];

  const [contactsArr, setContacts] = useState(contacts);

  return (
    <div className="wrapper">
      <div className="iphone_menu">
        <p>Contacts</p>
        <input type="text" name="search" placeholder="&#x2315; Search.." />
        <div className="inner">
          {contactsArr.map((contact) => {
            return (
              <Contact
                firstName={contact.firstName}
                lastName={contact.lastName}
                phone={contact.phone}
                gender={contact.gender}
                key={contact.lastName}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Contacts;
