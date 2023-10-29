import React from 'react';

import { useSelector } from 'react-redux';

import ContactItem from './ContactItem';

export default function ContactList() {
  const contacts = useSelector(state => state.contactForm.contacts);
  const filter = useSelector(state => state.contactForm.filter);

  const filteredContacts = contacts.filter(el =>
      el.name.toLowerCase().includes(filter.toLowerCase())
    )

  return (
    <div>
      <ul>
        {filteredContacts.map(el => (
          <ContactItem key={el.id} contact={el} />
        ))}
      </ul>
    </div>
  );
}
