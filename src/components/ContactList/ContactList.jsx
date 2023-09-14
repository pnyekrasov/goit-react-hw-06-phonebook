// import { useSelector } from 'react-redux';
import { List, ListItem } from './ContactList.styled';
import { ContactItem } from 'components/ContactItem/ContactItem';

export const ContactList = ({ items, onDelete }) => {
  // const value = useSelector(state => state.some.value);
  return (
    <List>
      {items.map(item => (
        <ListItem key={item.id}>
          <ContactItem item={item} onDelete={onDelete} />
        </ListItem>
      ))}
    </List>
  );
};
