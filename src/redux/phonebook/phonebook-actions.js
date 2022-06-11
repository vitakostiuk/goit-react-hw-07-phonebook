import { createAction } from '@reduxjs/toolkit';
import shortid from 'shortid';

const addContact = createAction('phonebook/add', ({ name, number }) => ({
  payload: {
    id: shortid.generate(),
    name,
    number,
  },
}));

const deleteContact = createAction('phonebook/delete');

const changeFilter = createAction('phonebook/changeFilter');

// eslint-disable-next-line import/no-anonymous-default-export
export default { addContact, deleteContact, changeFilter };
