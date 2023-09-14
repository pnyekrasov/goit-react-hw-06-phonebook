export const getVisibleContacts = value => {
  return {
    type: 'filters/getVisibleContacts',
    payload: value,
  };
};

export const filtersReducer = (state = {}, action) => {
  switch (action.type) {
    case 'filters/getVisibleContacts':
      return {
        ...state,
        contacts: state.contacts.filter(contact =>
          contact.name.toLowerCase().includes(action.payload.toLowerCase())
        ),
      };

    default:
      return state;
  }
};
