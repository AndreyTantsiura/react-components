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

function Contacts() {
  const [contactsArr, setContacts] = useState(contacts);
  const [search, setSearch] = useState("");
  const [filteredContacts, setFilteredContacts] = useState([]);
  const [checked, setChecked] = useState(["male", "female", "undetermined"]);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    const filteredContacts = contactsArr.filter((contact) => {
      const searchedContacts = Object.values(contact).some((item) =>
        item.toLocaleLowerCase().includes(search.toLocaleLowerCase())
      );
      return searchedContacts;
    });

    setFilteredContacts(filteredContacts);
  }, [search, contactsArr]);

  const handleCheckBoxes = (e) => {
    setChecked(e.target.id);
  };

  useEffect(() => {
    if (checked === "male") {
      const filteredGenderContacts = Object.values(contacts).filter((contact) => {
        return contact.gender !== "male";
      });
      setFilteredContacts(filteredGenderContacts);
    }
    if (checked === "female") {
      const filteredGenderContacts = Object.values(contacts).filter((contact) => {
        return contact.gender !== "female";
      });
      setFilteredContacts(filteredGenderContacts);
    }
    if (checked === "undetermined") {
      const filteredGenderContacts = Object.values(contacts).filter((contact) => {
        return contact.gender !== undefined;
      });
      setFilteredContacts(filteredGenderContacts);
    }
  }, [checked]);

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
            defaultChecked={checked}
            onChange={handleCheckBoxes}
          />
          <label htmlFor="male">Male</label>
          <input
            type="checkbox"
            id="female"
            name="female"
            defaultChecked={checked}
            onChange={handleCheckBoxes}
          />
          <label htmlFor="female">Female</label>
          <input
            type="checkbox"
            id="undetermined"
            name="undetermined"
            defaultChecked={checked}
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
}

export default Contacts;
