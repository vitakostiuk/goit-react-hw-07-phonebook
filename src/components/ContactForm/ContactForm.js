import { useState } from 'react';
import { connect } from 'react-redux';
import phonebookActions from '../../redux/phonebook/phonebook-actions';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import s from './ContactForm.module.css';

const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameId = shortid.generate();
  const numberId = shortid.generate();

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    onSubmit({ name, number });
    setName('');
    setNumber('');
  };

  return (
    <form className={s.ContactForm} onSubmit={handleSubmit}>
      <div className={s.InputWrapper}>
        <label className={s.Label} htmlFor={nameId}>
          Name
        </label>
        <input
          id={nameId}
          className={s.Input}
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </div>

      <div className={s.InputWrapper}>
        <label className={s.Label} htmlFor={numberId}>
          Number
        </label>
        <input
          id={numberId}
          className={s.Input}
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </div>
      <button type="submit" className={s.FormBtn}>
        Add contact
      </button>
    </form>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  onSubmit: ({ name, number }) => {
    return dispatch(phonebookActions.addContact({ name, number }));
  },
});

export default connect(null, mapDispatchToProps)(ContactForm);
