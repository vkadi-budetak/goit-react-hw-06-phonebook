import React from 'react';

import ContactForm from './ContactForm/ContactForm';

import ContactList from './ContactList/ContactList';

import Filter from './Filter/Filter';

const App = () => {
  // const [contacts, setContacts] = useState(() => {
  // const stringifiedContacts = localStorage.getItem('contacts');
  //   const parsetContacts = JSON.parse(stringifiedContacts);
  //   if (parsetContacts) {
  //     return parsetContacts;
  //   }
  //   return [
  //     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  //   ];
  // });

  // useEffect(() => {
  //   const stringifiedContacts = JSON.stringify(contacts);
  //   localStorage.setItem('contacts', stringifiedContacts);
  // }, [contacts]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};

export default App;
