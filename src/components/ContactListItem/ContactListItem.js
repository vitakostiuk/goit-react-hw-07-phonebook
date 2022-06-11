import React from 'react';
import PropTypes from 'prop-types';
import s from '../ContactList/ContactList.module.css';

export const ContactListItem = ({ contacts, onDeleteContact }) => (
  <>
    {contacts.map(({ id, name, number }) => (
      <li key={id} className={s.Item}>
        {name}
        <span className={s.Number}>{number}</span>
        <button
          type="button"
          className={s.Btn}
          onClick={() => onDeleteContact(id)}
        >
          Delete
        </button>
      </li>
    ))}
  </>
);

ContactListItem.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
