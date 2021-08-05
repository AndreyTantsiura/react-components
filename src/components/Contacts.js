import React, { useState, useEffect } from "react";
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
  const [search, setSearch] = useState("");
  const [filteredContacts, setFilteredContacts] = useState("");

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    const filteredContacts = contacts.filter((contact) => {
      const searchedContacts = Object.values(contact).some((item) =>
        item.toLocaleLowerCase().includes(search.toLocaleLowerCase())
      );
      return searchedContacts;
    });

    setContacts(filteredContacts);
  }, [search, contacts]);

  return (
    <div className="wrapper">
      <div className="iphone_menu">
        <p>Contacts</p>
        <input
          type="text"
          className="search"
          placeholder="&#x2315; search.."
          onChange={handleSearchChange}
        />
        <div className="checkboxes">
          <input
            type="checkbox"
            id="male"
            name="male"
            defaultChecked="checked"
          />
          <label htmlFor="male">Male</label>
          <input
            type="checkbox"
            id="female"
            name="female"
            defaultChecked="checked"
          />
          <label htmlFor="female">Female</label>
          <input
            type="checkbox"
            id="undetermined"
            name="undetermined"
            defaultChecked="checked"
          />
          <label htmlFor="undetermined">Undetermined</label>
        </div>
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
