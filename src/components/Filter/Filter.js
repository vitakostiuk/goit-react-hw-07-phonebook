import React from 'react';
import { connect } from 'react-redux';
import phonebookActions from '../../redux/phonebook/phonebook-actions';
import shortid from 'shortid';
import PropTypes from 'prop-types';
import s from '../ContactForm/ContactForm.module.css';

const Filter = ({ value, changeFilter }) => {
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

const mapStateToProps = state => ({
  value: state.phonebook.filter,
});

const mapDispatchToProps = dispatch => ({
  changeFilter: e =>
    dispatch(phonebookActions.changeFilter(e.currentTarget.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
