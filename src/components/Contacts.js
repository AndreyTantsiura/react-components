import React, { useState, useEffect } from "react";
import "./contacts.css";
import Contact from "./Contact";

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

const Contacts = () => {
  const [contactsArr, setContacts] = useState(contacts);
  const [search, setSearch] = useState("");
  const [filteredContacts, setFilteredContacts] = useState([]);
  const [isChecked, setIsChecked] = useState([true, true, true]);

 const handleCheckBoxes = (e) => {
    const newCheckboxStatus = isChecked.map((checkbox, index) => {
      return index === +e.target.id ? !checkbox : checkbox;
    });
    setIsChecked(newCheckboxStatus);
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    setContacts(contacts);
  };

  useEffect(() => {
    let filteredContacts = contactsArr;
    filteredContacts = filteredContacts.filter((contact) => {
      return (
        (contact.gender === "male" && isChecked[0] === true) ||
        (contact.gender === "female" && isChecked[1] === true) ||
        (contact.gender === undefined && isChecked[2] === true)
      );
    });

    if (search) {
      filteredContacts = filteredContacts.filter((contact) => {
        const { firstName, lastName, phone } = contact;
        return (
          firstName.toLowerCase().includes(search.toLowerCase()) ||
          lastName.toLowerCase().includes(search.toLowerCase()) ||
          phone.includes(search)
        );
      });
    }
    
    setFilteredContacts(filteredContacts);
  }, [isChecked, search, contactsArr]);

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
            className="checkBox"
            type="checkbox"
            id="0"
            checked={isChecked[0]}
            onChange={handleCheckBoxes}
          />
          <label htmlFor="male">Male</label>
          <input
            className="checkBox"
            type="checkbox"
            id="1"
            checked={isChecked[1]}
            onChange={handleCheckBoxes}
          />
          <label htmlFor="female">Female</label>
          <input
            className="checkBox"
            type="checkbox"
            id="2"
            checked={isChecked[2]}
            onChange={handleCheckBoxes}
          />
          <label htmlFor="undetermined">Undetermined</label>
        </div>

        <div className="inner">
          {filteredContacts.map((contact) => {
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
};

export default Contacts;
