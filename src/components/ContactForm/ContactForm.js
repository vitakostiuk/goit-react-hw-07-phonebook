import { useState } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import s from './ContactForm.module.css';

export const ContactForm = ({ onSubmit }) => {
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

// export class OldContactForm extends Component {
//   state = {
//     name: '',
//     number: '',
//   };

//   static propTypes = {
//     onSubmit: PropTypes.func.isRequired,
//   };

//   handleChange = e => {
//     this.setState({
//       [e.currentTarget.name]: e.currentTarget.value,
//     });
//   };

//   handleSubmit = e => {
//     const { name, number } = this.state;
//     e.preventDefault();

//     this.props.onSubmit({ name, number });
//     this.reset();
//   };

//   reset = () => {
//     this.setState({ name: '', number: '' });
//   };

//   render() {
//     const nameId = shortid.generate();
//     const numberId = shortid.generate();
//     const { name, number } = this.state;

//     return (
//       <form className={s.ContactForm} onSubmit={this.handleSubmit}>
//         <div className={s.InputWrapper}>
//           <label className={s.Label} htmlFor={nameId}>
//             Name
//           </label>
//           <input
//             id={nameId}
//             className={s.Input}
//             type="text"
//             name="name"
//             value={name}
//             onChange={this.handleChange}
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//           />
//         </div>

//         <div className={s.InputWrapper}>
//           <label className={s.Label} htmlFor={numberId}>
//             Number
//           </label>
//           <input
//             id={numberId}
//             className={s.Input}
//             type="tel"
//             name="number"
//             value={number}
//             onChange={this.handleChange}
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             required
//           />
//         </div>
//         <button type="submit" className={s.FormBtn}>
//           Add contact
//         </button>
//       </form>
//     );
//   }
// }
