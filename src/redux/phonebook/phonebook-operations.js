import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  getContactRequest,
  getContactSuccess,
  getContactError,
} from './phonebook-actions';

import { addItem, deleteItem, getData } from '../../../src/services/api';
const API_ENDPOINT = 'contacts';

const getContacts = () => dispatch => {
  dispatch(getContactRequest());

  // try {
  //   const { data } = await getData(API_ENDPOINT);
  //   dispatch(getContactSuccess(data));
  // } catch (error) {
  //   dispatch(getContactError(error));
  // }
  getData(API_ENDPOINT)
    .then(data => dispatch(getContactSuccess(data)))
    .catch(err => dispatch(getContactError(err)));
};

const addContact =
  ({ name, number }) =>
  dispatch => {
    const contact = {
      name,
      number,
    };

    dispatch(addContactRequest());

    addItem(API_ENDPOINT, contact)
      .then(data => dispatch(addContactSuccess(data)))
      .catch(err => dispatch(addContactError(err)));
  };

const deleteContact = id => dispatch => {
  dispatch(deleteContactRequest());

  deleteItem(API_ENDPOINT, id)
    .then(() => dispatch(deleteContactSuccess(id)))
    .catch(err => dispatch(deleteContactError(err)));
};

// eslint-disable-next-line import/no-anonymous-default-export
export { addContact, deleteContact, getContacts };
