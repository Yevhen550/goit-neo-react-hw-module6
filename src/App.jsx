import { useEffect, useState } from "react";
import s from "./App.module.css";
import Container from "./components/Container/Container";
import ContactList from "./components/ContactList/ContactList";
import ContactForm from "./components/ContactForm/ContactForm";
import Searchbox from "./components/SearchBox/SearchBox";
import dataContacts from "./data/contacts.json";

const initialData = () => {
  const savedLS = localStorage.getItem("contacts");
  return savedLS ? JSON.parse(savedLS) : dataContacts;
};

function App() {
  const [contacts, setContacts] = useState(initialData);
  const [filter, setFilter] = useState("");

  const addContact = (newContact) => {
    setContacts((prev) => [...prev, newContact]);
  };

  const deleteContact = (contactId) => {
    setContacts((prev) => prev.filter((contact) => contact.id !== contactId));
  };

  const filterContact = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <Container>
      <h1 className={s.title}>Phonebook</h1>  
      <ContactForm onAdd={addContact} />
      <Searchbox value={filter} onFilter={setFilter} />
      <ContactList contacts={filterContact} onDelete={deleteContact} />
    </Container>
  );
}

export default App;
