import React, { useState } from 'react';
import './App.css';
import Loginform from './assets/components/Loginform';
import Contactlist from './assets/components/Contactlist';
import Addcontact from './assets/components/Addcontact';
import Contact from './assets/components/Contact';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [contacts, setContacts] = useState([]);

  const addContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  const removeContact = (id) => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const updateContact = (id, updatedInfo) => {
    setContacts(contacts.map(contact => {
      if (contact.id === id) {
        return { ...contact, ...updatedInfo };
      }
      return contact;
    }));
  };

  return (
    <div className="App">
       <Loginform setLoggedIn={setLoggedIn} />
      {loggedIn && (
        <div>
          <Contact />
          <Contactlist contacts={contacts} removeContact={removeContact} updateContact={updateContact} />
          <Addcontact addContact={addContact} />
        </div>
      )}
    </div>
  );
}

export default App;
