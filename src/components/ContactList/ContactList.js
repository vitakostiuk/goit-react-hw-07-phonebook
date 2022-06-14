import { React, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  deleteContact,
  getContacts,
} from '../../redux/phonebook/phonebook-operations';
import ContactListItem from '../ContactListItem';
import s from './ContactList.module.css';

const ContactList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  const contacts = useSelector(state =>
    filteredContacts(state.phonebook.contacts, state.phonebook.filter)
  );

  const onDeleteContact = id => dispatch(deleteContact(id));

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
