export const getVisibleContacts = value => {
  return {
    type: 'filter/getVisibleContacts',
    payload: value,
  };
};

export const filterReducer = (state = '', action) => {
  switch (action.type) {
    case 'filter/getVisibleContacts':
      return action.payload;
    default:
      return state;
  }
};
