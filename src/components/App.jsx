import { ContactForm } from './ContactForm/ContactForm';
import { ContactsBook, ButtonReset } from './App.staled';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { useSelector } from 'react-redux';
// import { useLocalStorage } from './hooks/useLocalStorage';
import {} from './ContactList/ContactList.styled';
import { useDispatch } from 'react-redux';
import { resetContacts } from 'redux/contactsSlice';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.startContacts);
  // const [contacts, setContacts] = useLocalStorage(
  //   'current-contacts',
  //   startContacts
  // );

  // const addContact = newContact => {
  //   contacts.find(
  //     contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
  //   )
  //     ? alert(`${newContact.name} is already in contacts`)
  //     : setContacts(ps => [...contacts, newContact]);
  // };

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
      <ButtonReset
        type="button"
        onClick={() => dispatch(resetContacts(contacts))}
      >
        Reset
      </ButtonReset>
      <ContactList />
    </ContactsBook>
  );
};
