// import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { ButtonDelete, ContactCard } from './ContactItem.styled';
import { deleteContact } from 'redux/contactsSlice';

export const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  return (
    <ContactCard>
      {name}:&nbsp;<span>{number}</span>
      <ButtonDelete type="button" onClick={() => dispatch(deleteContact(id))}>
        Delete
      </ButtonDelete>
    </ContactCard>
  );
};

// ContactItem.propTypes = {
//   id: PropTypes.string,
//   name: PropTypes.string.isRequired,
//   number: PropTypes.string.isRequired,
// };
