import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  Label,
  StyledForm,
  StyledField,
  Button,
  StyledError,
} from './ContactForm.staled';
import { nanoid } from 'nanoid';
import { addContact } from 'redux/contactsSlice';

const schema = Yup.object().shape({
  name: Yup.string()
    .required('Name is required')
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    ),
  number: Yup.string()
    .required('Phone number is required')
    .matches(
      /\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    ),
});

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);
  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={schema}
      onSubmit={(values, actions) => {
        contacts.find(
          contact => contact.name.toLowerCase() === values.name.toLowerCase()
        )
          ? alert(`${values.name} is already in contacts`)
          : dispatch(addContact({ ...values, id: nanoid() }));
        actions.resetForm();
      }}
    >
      <StyledForm>
        <Label>
          Name
          <StyledField name="name" />
          <StyledError name="name" component="div" />
        </Label>

        <Label>
          Phone Number
          <StyledField name="number" placeholder="XXX-XX-XX" />
          <StyledError name="number" component="div" />
        </Label>

        <Button type="submit">Add contact</Button>
      </StyledForm>
    </Formik>
  );
};
