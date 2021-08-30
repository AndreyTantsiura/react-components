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
  const [isChecked, setIsChecked] = useState(true);
  const [checked, setChecked] = useState("");

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    setContacts(contacts);
  };

  const handleCheckBoxes = (e) => {
    setIsChecked(!isChecked);
    setChecked(e.target.id);
  };

  useEffect(() => {
    let filteredContacts = contactsArr;
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

    if (!isChecked && checked.includes("male")) {
      const filteredGenderContacts = Object.values(filteredContacts).filter(
        (contact) => {
          return contact.gender !== "male";
        }
      );
      setFilteredContacts(filteredGenderContacts);
    }
    if (!isChecked && checked.includes("female")) {
      const filteredGenderContacts = Object.values(filteredContacts).filter(
        (contact) => {
          return contact.gender !== "female";
        }
      );
      setFilteredContacts(filteredGenderContacts);
    }
    if (!isChecked && checked.includes("undetermined")) {
      const filteredGenderContacts = Object.values(filteredContacts).filter(
        (contact) => {
          return contact.gender !== undefined;
        }
      );
      setFilteredContacts(filteredGenderContacts);
    }
  }, [isChecked, checked, search, contactsArr]);

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
            id="male"
            name="male"
            defaultChecked={isChecked}
            onChange={handleCheckBoxes}
          />
          <label htmlFor="male">Male</label>
          <input
            className="checkBox"
            type="checkbox"
            id="female"
            name="female"
            defaultChecked={isChecked}
            onChange={handleCheckBoxes}
          />
          <label htmlFor="female">Female</label>
          <input
            className="checkBox"
            type="checkbox"
            id="undetermined"
            name="undetermined"
            defaultChecked={isChecked}
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
