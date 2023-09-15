import { ContactForm } from './ContactForm/ContactForm';
import { ContactsBook } from './App.staled';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

// import { useLocalStorage } from './hooks/useLocalStorage';
import {} from './ContactList/ContactList.styled';

export const App = () => {
  // const [contacts, setContacts] = useLocalStorage(
  //   'current-contacts',
  //   startContacts
  // );

  // const resetContacts = () => {
  //   window.confirm(
  //     'Are you sure you want to return Contacts to their starting positions?'
  //   ) && setContacts(startContacts);
  // };

  return (
    <ContactsBook>
      <h1>Phonebook</h1>
      <ContactForm />
      {/* <ContactForm onAdd={addContact} /> */}
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </ContactsBook>
  );
};
