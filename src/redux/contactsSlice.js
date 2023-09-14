const startContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];
export const addContact = (contactId, values) => {
  return {
    type: 'contacts/addContact',
    payload: {
      contactId,
      values,
    },
  };
};
export const deleteContact = contactId => {
  return {
    type: 'contacts/deleteContact',
    payload: contactId,
  };
};
export const resetContacts = startContacts => {
  return {
    type: 'contacts/resetContacts',
    payload: startContacts,
  };
};

export const contactsReducer = (state = { startContacts }, action) => {
  switch (action.type) {
    case 'contacts/addContact':
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };

    case 'contacts/deleteContact':
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        ),
      };

    case 'contacts/resetContacts':
      return {
        ...state,
        contacts: startContacts,
      };

    default:
      return state;
  }
};
