import { useDispatch, useSelector } from 'react-redux';
import { resetContacts } from 'redux/contactsSlice';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { ButtonReset, List, ListItem } from './ContactList.styled';

export const ContactList = () => {
  const dispatch = useDispatch();
  const startContacts = useSelector(state => state.contacts.startContacts);
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  const getVisibleContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const visibleContacts = getVisibleContacts();

  return (
    <>
      <ButtonReset
        type="button"
        onClick={() => {
          if (
            window.confirm(
              'Are you sure you want to return Contacts to their starting positions?'
            )
          ) {
            dispatch(resetContacts(startContacts));
          }
        }}
      >
        Reset
      </ButtonReset>
      <List>
        {visibleContacts.map(item => (
          <ListItem key={item.id}>
            <ContactItem {...item} />
          </ListItem>
        ))}
      </List>
    </>
  );
};
