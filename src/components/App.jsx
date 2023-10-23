import React, { useState, useEffect } from 'react';

import ContactForm from './ContactForm/ContactForm';

import ContactList from './ContactList/ContactList';

import Filter from './Filter/Filter';

const App = () => {
  const [contacts, setContacts] = useState(() => {
    const stringifiedContacts = localStorage.getItem('contacts');
    const parsetContacts = JSON.parse(stringifiedContacts);
    if (parsetContacts) {
      return parsetContacts;
    }
    return [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ];
  });

  const [filter, setFilter] = useState('');

  const addContact = contactData => {
    const isDublicate = contacts.some(el => el.name === contactData.name);

    if (isDublicate) {
      window.alert(`${contactData.name} is already in contacts.`);
      return;
    }

    setContacts([...contacts, contactData]);
  };

  const deleteContact = id => {
    setContacts(contacts.filter(el => el.id !== id));
  };

  const handleChangeFilter = value => {
    setFilter(value);
  };

  useEffect(() => {
    const stringifiedContacts = JSON.stringify(contacts);
    localStorage.setItem('contacts', stringifiedContacts);
  }, [contacts]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />

      <h2>Contacts</h2>
      <Filter filter={filter} handleChangeFilter={handleChangeFilter} />
      <ContactList
        contacts={contacts.filter(el =>
          el.name.toLowerCase().includes(filter.toLowerCase())
        )}
        deleteContact={deleteContact}
      />
    </div>
  );
};

export default App;


