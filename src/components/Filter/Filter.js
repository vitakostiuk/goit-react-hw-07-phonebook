import React from 'react';
import shortid from 'shortid';
import PropTypes from 'prop-types';
import s from '../ContactForm/ContactForm.module.css';

export const Filter = ({ value, changeFilter }) => {
  return (
    <div className={s.InputWrapper}>
      <label className={s.Label} htmlFor={shortid.generate()}>
        Find contacts by name
      </label>
      <input
        type="text"
        value={value}
        id={shortid.generate()}
        className={s.Input}
        onChange={changeFilter}
      />
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};
