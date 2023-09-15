export const getVisibleContacts = value => {
  return {
    type: 'filters/getVisibleContacts',
    payload: value,
  };
};

export const filtersReducer = (state = '', action) => {
  switch (action.type) {
    case 'filters/getVisibleContacts':
      return action.payload;
    default:
      return state;
  }
};

// return state.contacts.filter(contact =>
//   contact.name.toLowerCase().includes(action.payload.toLowerCase())
// );
