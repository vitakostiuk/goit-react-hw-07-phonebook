import { combineReducers } from 'redux';
import phonebookActions from './phonebook-actions';
import { createReducer } from '@reduxjs/toolkit';

const contacts = createReducer([], {
  [phonebookActions.addContact]: (state, { payload }) => {
    return state.find(contact => contact.name === payload.name)
      ? alert(`${payload.name} is already in contacts.`)
      : [payload, ...state];
  },

  [phonebookActions.deleteContact]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});

const filter = createReducer('', {
  [phonebookActions.changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({ contacts, filter });
