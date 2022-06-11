import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ContactListItem from '../ContactListItem';
import s from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul className={s.List}>
    <ContactListItem contacts={contacts} onDeleteContact={onDeleteContact} />
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

const filteredContacts = (allContacts, filter) => {
  const normalizedFilter = filter.toLowerCase();

  return allContacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};

const mapStateToProps = ({ phonebook: { contacts, filter } }) => ({
  contacts: filteredContacts(contacts, filter),
});

const mapDispatchToProps = dispatch => ({
  onDeleteContact: () => null,
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
