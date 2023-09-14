import { combineReducers, createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';
import { contactsReducer } from './contactsSlice';
import { filtersReducer } from './filterSlice';

// const initialState = {
//   contacts: startContacts,
//   filter: '',
// };

const rootReducer = combineReducers({
  contacts: contactsReducer,
  locale: filtersReducer,
});

const enhancer = devToolsEnhancer();

export const store = createStore(rootReducer, enhancer);
