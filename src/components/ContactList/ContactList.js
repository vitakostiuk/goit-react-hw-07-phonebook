import React from 'react';
import PropTypes from 'prop-types';
import { ContactListItem } from '../ContactListItem';

import s from './ContactList.module.css';

export const ContactList = ({ contacts, onDeleteContact }) => (
  <ul className={s.List}>
    <ContactListItem contacts={contacts} onDeleteContact={onDeleteContact} />
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
