import React from 'react';
import Contact from './components/Contact';

import './style.css';

// 1. populate the following array with the correct data
const contactInfo = [
  {
    name: 'Emmanuel',
    email: 'emmanuel@email.com',
    phone: '23423434',
    isDeletable: true,
  },
  {
    name: 'Johana',
    email: 'johana@email.com',
    phone: '92034902',
    isDeletable: true,
  },
  {
    name: 'Lucas',
    email: 'lucas@email.com',
    phone: '234983499',
    isDeletable: true,
  },
  {
    name: 'Marie',
    email: 'marie@email.com',
    phone: '238942384',
    isDeletable: true,
  },
  {
    name: 'Pedro',
    email: 'pedro@email.com',
    phone: '934584875',
    isDeletable: true,
  },
];

export default function App() {
  return (
    <div>
      <h1>My contacts list 📱</h1>

      {/* 2. map contactInfo array here and display <Contact /> for each entry in the array*/}
      <div>
        {contactInfo.map((contact) => (
          <Contact
            name={contact.name}
            email={contact.email}
            phone={contact.phone}
            isDeletable={contact.isDeletable}
          />
        ))}
      </div>
    </div>
  );
}
