import { useEffect, useState } from 'react';
import shortid from 'shortid';
import { ContactList } from './ContactList';
import { ContactForm } from './ContactForm';
import { Filter } from './Filter';
import s from '../components/App.module.css';

export const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('');

  const addContact = ({ name, number }) => {
    const contact = {
      id: shortid.generate(),
      name,
      number,
    };
    setContacts(prevContacts => {
      if (prevContacts.find(item => item.name === contact.name)) {
        alert(`${contact.name} is already in contacts.`);
        return prevContacts;
      }
      return [contact, ...prevContacts];
    });
  };

  const deleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const filteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className={s.Container}>
      <h2 className={s.Title}>Phonebook</h2>
      <ContactForm onSubmit={addContact} />

      <h2 className={s.Title}>Contacts</h2>
      <Filter value={filter} changeFilter={changeFilter} />
      <ContactList
        contacts={filteredContacts()}
        onDeleteContact={deleteContact}
      />
    </div>
  );
};
