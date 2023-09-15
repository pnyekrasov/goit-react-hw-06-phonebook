import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { InputFilter, Label } from './Filter.styled';
import { getVisibleContacts } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const nameFilter = useSelector(state => state.filters);
  return (
    <Label>
      Find contact by name
      <InputFilter
        type="text"
        value={nameFilter}
        onChange={evt => dispatch(getVisibleContacts(evt.target.value))}
      />
    </Label>
  );
};

// const visibleContact = getVisibleContacts();
