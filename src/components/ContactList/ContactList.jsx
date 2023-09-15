import { useSelector } from 'react-redux';

import { List, ListItem } from './ContactList.styled';
import { ContactItem } from 'components/ContactItem/ContactItem';

export const ContactList = () => {
  const items = useSelector(state => state.contacts);
  return (
    <List>
      {items.map(item => (
        <ListItem key={item.id}>
          <ContactItem {...item} />
        </ListItem>
      ))}
    </List>
  );
};
