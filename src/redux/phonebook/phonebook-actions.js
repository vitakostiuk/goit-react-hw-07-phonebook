import { createAction } from '@reduxjs/toolkit';

const changeFilter = createAction('phonebook/changeFilter');

// eslint-disable-next-line import/no-anonymous-default-export
export { changeFilter };
//
//
//------With vanila async request redux-thunk-------------
//
// import { createAction } from '@reduxjs/toolkit';

// const getContactRequest = createAction('contacts/getContactRequest');
// const getContactSuccess = createAction('contacts/getContactSuccess');
// const getContactError = createAction('contacts/getContactError');

// const addContactRequest = createAction('contacts/addContactRequest');
// const addContactSuccess = createAction('contacts/addContactSuccess');
// const addContactError = createAction('contacts/addContactError');

// const deleteContactRequest = createAction('contacts/deleteContactRequest');
// const deleteContactSuccess = createAction('contacts/deleteContactSuccess');
// const deleteContactError = createAction('contacts/deleteContactError');

// const changeFilter = createAction('phonebook/changeFilter');

// // eslint-disable-next-line import/no-anonymous-default-export
// export {
//   changeFilter,
//   addContactRequest,
//   addContactSuccess,
//   addContactError,
//   deleteContactRequest,
//   deleteContactSuccess,
//   deleteContactError,
//   getContactRequest,
//   getContactSuccess,
//   getContactError,
// };
