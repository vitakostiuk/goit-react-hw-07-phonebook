import { combineReducers } from 'redux';
import {
  addContactSuccess,
  addContactRequest,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  changeFilter,
  getContactRequest,
  getContactSuccess,
  getContactError,
} from './phonebook-actions';
import { createReducer } from '@reduxjs/toolkit';

const contacts = createReducer([], {
  [getContactSuccess]: (state, { payload }) => payload,

  [addContactSuccess]: (state, { payload }) => {
    return state.find(contact => contact.name === payload.name)
      ? alert(`${payload.name} is already in contacts.`)
      : [payload, ...state];
  },

  [deleteContactSuccess]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});

const loading = createReducer(false, {
  [getContactRequest]: () => true,
  [getContactSuccess]: () => false,
  [getContactError]: () => false,
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
});

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({ contacts, filter, loading });
