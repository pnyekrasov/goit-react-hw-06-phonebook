import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';
// import { resetContacts } from 'redux/contactsSlice';
// import { ButtonReset, List, ListItem } from './ContactList.styled';
import { List, ListItem } from './ContactList.styled';
import { ContactItem } from 'components/ContactItem/ContactItem';

export const ContactList = () => {
  // const dispatch = useDispatch();
  // const contacts = useSelector(state => state.startContacts);
  const items = useSelector(state => state.contacts);
  console.log(items);
  // console.log(contacts);
  return (
    <>
      {/* <ButtonReset
        type="button"
        onClick={() => dispatch(resetContacts(contacts))}
      >
        Reset
      </ButtonReset> */}
      <List>
        {items.map(item => (
          <ListItem key={item.id}>
            <ContactItem {...item} />
          </ListItem>
        ))}
      </List>
    </>
  );
};
