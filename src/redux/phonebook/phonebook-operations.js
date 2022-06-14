import { createAsyncThunk } from '@reduxjs/toolkit';
import { addItem, deleteItem, getData } from '../../../src/services/api';
const API_ENDPOINT = 'contacts';

const getContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await getData(API_ENDPOINT);
      return contacts;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, number }, { rejectWithValue }) => {
    const contact = {
      name,
      number,
    };
    try {
      const contacts = await getData(API_ENDPOINT);
      if (contacts.find(item => item.name === contact.name)) {
        alert(`${contact.name} is already in contacts.`);
        return Promise.reject(
          new Error(`${contact.name} is already in contacts.`)
        );
      }
      const data = await addItem(API_ENDPOINT, contact);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      const result = await deleteItem(API_ENDPOINT, id);
      // console.log('result', result);
      return result.id;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// eslint-disable-next-line import/no-anonymous-default-export
export { addContact, deleteContact, getContacts };
//
//
//------With vanila async request redux-thunk-------------
// import {
//   addContactRequest,
//   addContactSuccess,
//   addContactError,
//   deleteContactRequest,
//   deleteContactSuccess,
//   deleteContactError,
//   getContactRequest,
//   getContactSuccess,
//   getContactError,
// } from './phonebook-actions';

// import { addItem, deleteItem, getData } from '../../../src/services/api';
// const API_ENDPOINT = 'contacts';

// const getContacts = () => async dispatch => {
//   dispatch(getContactRequest());

//   try {
//     const contacts = await getData(API_ENDPOINT);
//     console.log('contacts', contacts);
//     dispatch(getContactSuccess(contacts));
//   } catch (error) {
//     dispatch(getContactError(error));
//   }
//   // getData(API_ENDPOINT)
//   //   .then(data => dispatch(getContactSuccess(data)))
//   //   .catch(err => dispatch(getContactError(err)));
// };

// const addContact =
//   ({ name, number }) =>
//   dispatch => {
//     const contact = {
//       name,
//       number,
//     };

//     dispatch(addContactRequest());

//     addItem(API_ENDPOINT, contact)
//       .then(data => dispatch(addContactSuccess(data)))
//       .catch(err => dispatch(addContactError(err)));
//   };

// const deleteContact = id => dispatch => {
//   dispatch(deleteContactRequest());

//   deleteItem(API_ENDPOINT, id)
//     .then(() => dispatch(deleteContactSuccess(id)))
//     .catch(err => dispatch(deleteContactError(err)));
// };

// // eslint-disable-next-line import/no-anonymous-default-export
// export { addContact, deleteContact, getContacts };
