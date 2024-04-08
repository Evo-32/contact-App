import React from 'react'
import Contact from './Contact'; 

const Contactlist = ({ updateContact, removeContact, contacts }) => {
  return (
    <div>
        {contacts.map(contact =>(
            <Contact key={contact.id} contact={contact} removeContact={removeContact} updateContact={updateContact} />
        ))}
        <table>
        <thead>
          <tr>
            <th>profile</th>
            <th>Name</th>
            <th>address</th>
            <th>Phone</th>
            <th>email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><h6>{}</h6></td>
            <td><h6>{}</h6></td>
            <td><h6>{}</h6></td>
            
            <td>
                <div>
                    <i onClick={() => updateContact(Contact.id)} className='fa-solid fa-pen'></i>
                    <i onClick={() => removeContact(Contact.id)} className='fa-solid fa-trash'></i>
                </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Contactlist

