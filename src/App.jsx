import Container from "./components/Container/Container";
import ContactList from "./components/ContactList/ContactList";
import ContactForm from "./components/ContactForm/ContactForm";
import Searchbox from "./components/SearchBox/SearchBox";
import s from "./App.module.css";

const App = () => {
  return (
    <Container>
      <h1 className={s.title}>Phonebook</h1>
      <ContactForm />
      <Searchbox />
      <ContactList />
    </Container>
  );
};

export default App;
