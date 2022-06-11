import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import phonebookActions from '../../redux/phonebook/phonebook-actions';
import ContactListItem from '../ContactListItem';
import s from './ContactList.module.css';

const ContactList = () => {
  const dispatch = useDispatch();
  const onDeleteContact = id => dispatch(phonebookActions.deleteContact(id));

  const contacts = useSelector(state =>
    filteredContacts(state.phonebook.contacts, state.phonebook.filter)
  );

  return (
    <ul className={s.List}>
      <ContactListItem contacts={contacts} onDeleteContact={onDeleteContact} />
    </ul>
  );
};

function filteredContacts(allContacts, filter) {
  const normalizedFilter = filter.toLowerCase();

  return allContacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
}

export default ContactList;
