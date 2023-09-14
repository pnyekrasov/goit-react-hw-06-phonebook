import PropTypes from 'prop-types';
import { ButtonDelete, ContactCard } from './ContactItem.styled';

export const ContactItem = ({ item: { id, name, number }, onDelete }) => {
  return (
    <ContactCard>
      {name}:&nbsp;<span>{number}</span>
      <ButtonDelete type="button" onClick={() => onDelete(id)}>
        Delete
      </ButtonDelete>
    </ContactCard>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
};
