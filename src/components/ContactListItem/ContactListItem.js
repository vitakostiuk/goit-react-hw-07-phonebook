import React from 'react';
import { connect } from 'react-redux';
import phonebookActions from '../../redux/phonebook/phonebook-actions';
import PropTypes from 'prop-types';
import s from '../ContactList/ContactList.module.css';

const ContactListItem = ({ contacts, onDeleteContact }) => (
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

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(phonebookActions.deleteContact(id)),
});

export default connect(null, mapDispatchToProps)(ContactListItem);
